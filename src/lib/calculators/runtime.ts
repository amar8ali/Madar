import type { CalculatorDefinition } from './types';

/**
 * Mounts a calculator's live behavior onto server-rendered markup.
 *
 * Contract the markup must follow (see CalculatorForm.astro):
 *  - root element wraps the whole calculator
 *  - one <input data-field="FIELD_ID"> per field
 *  - one <select data-solve-select> if the calculator has more than
 *    one solveOption (omitted entirely otherwise)
 *  - one element with [data-result] for the computed value
 *  - one element with [data-error] for validation messages
 *
 * This function is deliberately framework-free: it's the same handful
 * of DOM APIs regardless of which calculator is mounted, so adding a
 * new calculator never means writing new UI wiring.
 */
export function mountCalculator(root: HTMLElement, definition: CalculatorDefinition): void {
  const lang = document.documentElement.lang.startsWith('ar') ? 'ar' : 'en';

  const fieldEls: Record<string, HTMLInputElement> = {};
  definition.fields.forEach((field) => {
    const el = root.querySelector<HTMLInputElement>(`[data-field="${field.id}"]`);
    if (el) fieldEls[field.id] = el;
  });

  const solveSelect = root.querySelector<HTMLSelectElement>('[data-solve-select]');
  const resultEl = root.querySelector<HTMLElement>('[data-result]');
  const errorEl = root.querySelector<HTMLElement>('[data-error]');

  function currentSolveFor(): string {
    return solveSelect?.value ?? definition.defaultSolveFor;
  }

  function formatNumber(value: number): string {
    if (!Number.isFinite(value)) return '';
    // Round to 4 significant decimal places without trailing zeros.
    return (Math.round(value * 10000) / 10000).toString();
  }

  function updateFieldStates(): void {
    const solveFor = currentSolveFor();
    definition.fields.forEach((field) => {
      const el = fieldEls[field.id];
      if (!el) return;
      const isTarget = field.id === solveFor;
      el.disabled = isTarget;
      el.required = !isTarget;
      if (isTarget) {
        el.value = '';
      }
    });
  }

  function recalculate(): void {
    const solveFor = currentSolveFor();
    const inputs: Record<string, number> = {};
    let hasEmptyField = false;

    for (const field of definition.fields) {
      if (field.id === solveFor) continue;
      const el = fieldEls[field.id];
      const raw = el?.value.trim() ?? '';
      if (raw === '') {
        hasEmptyField = true;
        continue;
      }
      inputs[field.id] = Number(raw);
    }

    if (hasEmptyField) {
      if (resultEl) resultEl.textContent = '';
      if (errorEl) errorEl.textContent = '';
      return;
    }

    const outcome = definition.calculate(inputs, solveFor);

    if (outcome.ok) {
      if (errorEl) errorEl.textContent = '';
      if (resultEl) resultEl.textContent = `${formatNumber(outcome.value)} ${outcome.unit}`;
    } else {
      if (resultEl) resultEl.textContent = '';
      if (errorEl) errorEl.textContent = outcome.message[lang];
    }
  }

  updateFieldStates();
  recalculate();

  Object.values(fieldEls).forEach((el) => {
    el.addEventListener('input', recalculate);
  });

  solveSelect?.addEventListener('change', () => {
    updateFieldStates();
    recalculate();
  });

  const resetBtn = root.querySelector<HTMLButtonElement>('[data-reset]');
  resetBtn?.addEventListener('click', () => {
    Object.values(fieldEls).forEach((el) => {
      el.value = '';
    });
    if (resultEl) resultEl.textContent = '';
    if (errorEl) errorEl.textContent = '';
  });
}

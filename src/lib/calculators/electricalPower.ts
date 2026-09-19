import type { CalculatorDefinition, CalculatorOutcome } from './types';

const messages = {
  nonNegative: { ar: 'يجب أن تكون القيم غير سالبة.', en: 'Values must not be negative.' },
} as const;

function isValid(...values: number[]): boolean {
  return values.every((v) => Number.isFinite(v) && v >= 0);
}

/**
 * Simpler than Ohm's Law: Phase 2 only supports the V,I → P direction
 * (spec explicitly scopes it this way). It still fits the same
 * CalculatorDefinition contract — `solveOptions` just has one entry,
 * so the UI won't render a solve-for selector for this one.
 */
export const electricalPowerCalculator: CalculatorDefinition = {
  id: 'electrical-power',
  fields: [
    { id: 'voltage', label: { ar: 'الجهد', en: 'Voltage' }, unit: 'V', min: 0, step: 0.01 },
    { id: 'current', label: { ar: 'التيار', en: 'Current' }, unit: 'A', min: 0, step: 0.001 },
    { id: 'power', label: { ar: 'القدرة', en: 'Power' }, unit: 'W', min: 0, step: 0.01 },
  ],
  solveOptions: ['power'],
  defaultSolveFor: 'power',
  calculate(inputs): CalculatorOutcome {
    const { voltage, current } = inputs;
    if (!isValid(voltage, current)) return { ok: false, message: messages.nonNegative };
    return { ok: true, value: voltage * current, unit: 'W' };
  },
};

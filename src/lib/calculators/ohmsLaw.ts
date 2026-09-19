import type { CalculatorDefinition, CalculatorOutcome } from './types';

const messages = {
  required: { ar: 'يرجى إدخال جميع القيم المطلوبة.', en: 'Please enter all required values.' },
  nonNegative: { ar: 'يجب أن تكون القيم غير سالبة.', en: 'Values must not be negative.' },
  divideByZero: {
    ar: 'لا يمكن القسمة على صفر — تحقق من القيم المدخلة.',
    en: 'Cannot divide by zero — check the values entered.',
  },
} as const;

function isValid(...values: number[]): boolean {
  return values.every((v) => Number.isFinite(v) && v >= 0);
}

export const ohmsLawCalculator: CalculatorDefinition = {
  id: 'ohms-law',
  fields: [
    { id: 'voltage', label: { ar: 'الجهد', en: 'Voltage' }, unit: 'V', min: 0, step: 0.01 },
    { id: 'current', label: { ar: 'التيار', en: 'Current' }, unit: 'A', min: 0, step: 0.001 },
    { id: 'resistance', label: { ar: 'المقاومة', en: 'Resistance' }, unit: 'Ω', min: 0, step: 0.01 },
  ],
  solveOptions: ['voltage', 'current', 'resistance'],
  defaultSolveFor: 'current',
  calculate(inputs, solveFor): CalculatorOutcome {
    if (solveFor === 'voltage') {
      const { current, resistance } = inputs;
      if (!isValid(current, resistance)) return { ok: false, message: messages.nonNegative };
      return { ok: true, value: current * resistance, unit: 'V' };
    }

    if (solveFor === 'current') {
      const { voltage, resistance } = inputs;
      if (!isValid(voltage, resistance)) return { ok: false, message: messages.nonNegative };
      if (resistance === 0) return { ok: false, message: messages.divideByZero };
      return { ok: true, value: voltage / resistance, unit: 'A' };
    }

    if (solveFor === 'resistance') {
      const { voltage, current } = inputs;
      if (!isValid(voltage, current)) return { ok: false, message: messages.nonNegative };
      if (current === 0) return { ok: false, message: messages.divideByZero };
      return { ok: true, value: voltage / current, unit: 'Ω' };
    }

    return { ok: false, message: messages.required };
  },
};

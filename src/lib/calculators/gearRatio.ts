import type { CalculatorDefinition, CalculatorOutcome } from './types';

const messages = {
  nonNegative: { ar: 'يجب أن تكون القيم غير سالبة.', en: 'Values must not be negative.' },
  divideByZero: {
    ar: 'لا يمكن القسمة على صفر — تحقق من القيم المدخلة.',
    en: 'Cannot divide by zero — check the values entered.',
  },
} as const;

function isValid(...values: number[]): boolean {
  return values.every((v) => Number.isFinite(v) && v >= 0);
}

/**
 * Convention used here: ratio = inputSpeed / outputSpeed. A ratio
 * greater than 1 is a speed reduction (and a torque increase).
 */
export const gearRatioCalculator: CalculatorDefinition = {
  id: 'gear-ratio',
  fields: [
    { id: 'ratio', label: { ar: 'نسبة التروس', en: 'Gear Ratio' }, unit: ':1', min: 0, step: 0.01 },
    { id: 'inputRpm', label: { ar: 'سرعة الدخل', en: 'Input Speed' }, unit: 'RPM', min: 0, step: 1 },
    { id: 'outputRpm', label: { ar: 'سرعة الخرج', en: 'Output Speed' }, unit: 'RPM', min: 0, step: 1 },
  ],
  solveOptions: ['ratio', 'inputRpm', 'outputRpm'],
  defaultSolveFor: 'outputRpm',
  calculate(inputs, solveFor): CalculatorOutcome {
    if (solveFor === 'outputRpm') {
      const { ratio, inputRpm } = inputs;
      if (!isValid(ratio, inputRpm)) return { ok: false, message: messages.nonNegative };
      if (ratio === 0) return { ok: false, message: messages.divideByZero };
      return { ok: true, value: inputRpm / ratio, unit: 'RPM' };
    }

    if (solveFor === 'inputRpm') {
      const { ratio, outputRpm } = inputs;
      if (!isValid(ratio, outputRpm)) return { ok: false, message: messages.nonNegative };
      return { ok: true, value: outputRpm * ratio, unit: 'RPM' };
    }

    if (solveFor === 'ratio') {
      const { inputRpm, outputRpm } = inputs;
      if (!isValid(inputRpm, outputRpm)) return { ok: false, message: messages.nonNegative };
      if (outputRpm === 0) return { ok: false, message: messages.divideByZero };
      return { ok: true, value: inputRpm / outputRpm, unit: ':1' };
    }

    return { ok: false, message: messages.nonNegative };
  },
};

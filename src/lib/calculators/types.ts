import type { LocalizedString } from '../../data/types';

/**
 * MADAR — Calculator Engine
 *
 * Shared contract every calculator (Ohm's Law, Electrical Power, Gear
 * Ratio, and future ones) implements. The goal: adding a calculator
 * means writing one small pure-function module like ohmsLaw.ts —
 * never touching the UI component or the client-side runtime.
 *
 * Design: every calculator exposes the same small set of "fields"
 * (e.g. voltage/current/resistance). At any moment, exactly one field
 * is the one being *solved for* — the visitor picks it when a
 * calculator supports more than one (Ohm's Law, Gear Ratio), or it's
 * fixed when it doesn't (Electrical Power always solves for power).
 * `calculate()` receives the *other* fields' numeric values and
 * either returns a computed value or a validation error — it never
 * touches the DOM, so it's trivially unit-testable and reusable
 * between the SSR-rendered page and the client runtime.
 */

export type CalculatorFieldId = string;

export type CalculatorField = {
  id: CalculatorFieldId;
  label: LocalizedString;
  /** Unit shown next to the field, e.g. "V", "A", "RPM". Empty string for unitless. */
  unit: string;
  /** HTML input step attribute. Defaults to "any" in the UI when omitted. */
  step?: number;
  /** HTML input min attribute. Most physical quantities here are non-negative. */
  min?: number;
};

export type CalculatorOutcome =
  | { ok: true; value: number; unit: string }
  | { ok: false; message: LocalizedString };

export type CalculatorDefinition = {
  id: string;
  fields: CalculatorField[];
  /**
   * Field ids the visitor may choose to solve for. Length 1 means the
   * UI won't show a selector — that single field is always the output
   * (e.g. Electrical Power always solves for power). Length > 1 means
   * the UI renders a selector and any of those fields can be computed
   * from the other two (e.g. Ohm's Law, Gear Ratio).
   */
  solveOptions: CalculatorFieldId[];
  defaultSolveFor: CalculatorFieldId;
  /**
   * Pure calculation function. `inputs` contains a numeric value for
   * every field EXCEPT `solveFor` (that's the one being computed).
   * Must not read or write the DOM, localStorage, etc.
   */
  calculate: (
    inputs: Record<CalculatorFieldId, number>,
    solveFor: CalculatorFieldId
  ) => CalculatorOutcome;
};

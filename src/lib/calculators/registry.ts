import type { CalculatorDefinition } from './types';
import { ohmsLawCalculator } from './ohmsLaw';
import { electricalPowerCalculator } from './electricalPower';
import { gearRatioCalculator } from './gearRatio';

/**
 * Registered by tool id (matches ToolDefinition.id). Adding a new
 * calculator tool = write its module (see ohmsLaw.ts for the
 * pattern) + one line here. Nothing else needs to change — the
 * CalculatorForm component and the client runtime are both generic
 * over CalculatorDefinition.
 */
const registry: Record<string, CalculatorDefinition> = {
  'ohms-law': ohmsLawCalculator,
  'electrical-power': electricalPowerCalculator,
  'gear-ratio': gearRatioCalculator,
};

export function getCalculatorById(id: string): CalculatorDefinition | undefined {
  return registry[id];
}

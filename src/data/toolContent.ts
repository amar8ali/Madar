import type { ToolContent } from './types';

/**
 * Long-form content for tool pages, keyed by tool id.
 *
 * Only tools with `implemented: true` need an entry here — the tool
 * route (src/pages/[lang]/tools/[category]/[slug].astro) only
 * generates a page for implemented tools, so it's the only place this
 * dataset is read from. See data/types.ts for why this is split out
 * of ToolDefinition.
 */
export const toolContent: Record<string, ToolContent> = {
  'ohms-law': {
    formula: { ar: 'V = I × R', en: 'V = I × R' },
    explanation: {
      ar: 'يصف قانون أوم العلاقة بين الجهد الكهربائي (V) والتيار (I) والمقاومة (R) في دارة كهربائية. كلما زادت المقاومة عند جهد ثابت، قلّ التيار المار في الدارة.',
      en: "Ohm's law describes the relationship between voltage (V), current (I), and resistance (R) in a circuit. At a fixed voltage, higher resistance means less current flows.",
    },
    variables: [
      { symbol: 'V', label: { ar: 'الجهد الكهربائي', en: 'Voltage' }, unit: 'V' },
      { symbol: 'I', label: { ar: 'التيار الكهربائي', en: 'Current' }, unit: 'A' },
      { symbol: 'R', label: { ar: 'المقاومة', en: 'Resistance' }, unit: 'Ω' },
    ],
    assumptions: [
      {
        ar: 'الدارة أومية (خطية) — أي أن المقاومة لا تتغير مع الجهد أو التيار.',
        en: 'The circuit is ohmic (linear) — resistance does not change with voltage or current.',
      },
      {
        ar: 'درجة الحرارة ثابتة أثناء القياس.',
        en: 'Temperature is constant during the measurement.',
      },
    ],
    workedExample: {
      ar: 'إذا كان الجهد 12 فولت والمقاومة 4 أوم، فإن التيار = 12 ÷ 4 = 3 أمبير.',
      en: 'If voltage is 12 V and resistance is 4 Ω, current = 12 ÷ 4 = 3 A.',
    },
    commonMistakes: [
      {
        ar: 'الخلط بين الوحدات (مثل استخدام مللي أمبير بدل أمبير) دون تحويلها.',
        en: 'Mixing units (e.g. milliamps instead of amps) without converting.',
      },
      {
        ar: 'افتراض أن قانون أوم ينطبق على كل العناصر، بينما بعض العناصر (مثل الدايود) غير أومية.',
        en: "Assuming Ohm's law applies to every component — some, like diodes, are non-ohmic.",
      },
    ],
    faq: [
      {
        question: {
          ar: 'هل ينطبق قانون أوم على التيار المتردد (AC)؟',
          en: 'Does Ohm\u2019s law apply to alternating current (AC)?',
        },
        answer: {
          ar: 'نعم، لكن يجب استخدام الممانعة (Impedance) بدل المقاومة عند وجود مكثفات أو ملفات في الدارة.',
          en: 'Yes, but impedance replaces simple resistance once capacitors or inductors are in the circuit.',
        },
      },
    ],
  },

  'electrical-power': {
    formula: { ar: 'P = V × I', en: 'P = V × I' },
    explanation: {
      ar: 'القدرة الكهربائية هي معدل استهلاك أو توليد الطاقة الكهربائية، وتُحسب بضرب الجهد في التيار.',
      en: 'Electrical power is the rate of energy consumption or generation, calculated by multiplying voltage by current.',
    },
    variables: [
      { symbol: 'V', label: { ar: 'الجهد الكهربائي', en: 'Voltage' }, unit: 'V' },
      { symbol: 'I', label: { ar: 'التيار الكهربائي', en: 'Current' }, unit: 'A' },
      { symbol: 'P', label: { ar: 'القدرة الكهربائية', en: 'Power' }, unit: 'W' },
    ],
    assumptions: [
      {
        ar: 'الحساب لدارة تيار مستمر (DC) أو حمل تيار متردد ذي معامل قدرة يساوي 1.',
        en: 'The calculation assumes DC, or an AC load with a power factor of 1.',
      },
    ],
    workedExample: {
      ar: 'إذا كان الجهد 220 فولت والتيار 2 أمبير، فإن القدرة = 220 × 2 = 440 واط.',
      en: 'If voltage is 220 V and current is 2 A, power = 220 × 2 = 440 W.',
    },
    commonMistakes: [
      {
        ar: 'تجاهل معامل القدرة عند التعامل مع أحمال التيار المتردد الاستقرائية.',
        en: 'Ignoring power factor for inductive AC loads.',
      },
    ],
  },

  'gear-ratio': {
    formula: { ar: 'نسبة التروس = سرعة الدخل ÷ سرعة الخرج', en: 'Gear Ratio = Input Speed ÷ Output Speed' },
    explanation: {
      ar: 'تصف نسبة التروس العلاقة بين سرعة دوران ترس الدخل وترس الخرج. النسبة الأكبر من 1 تعني تخفيض السرعة وزيادة العزم.',
      en: 'Gear ratio describes the relationship between input and output rotational speed. A ratio greater than 1 means reduced speed and increased torque.',
    },
    variables: [
      { symbol: 'GR', label: { ar: 'نسبة التروس', en: 'Gear Ratio' }, unit: ':1' },
      { symbol: 'Nᵢ', label: { ar: 'سرعة الدخل', en: 'Input Speed' }, unit: 'RPM' },
      { symbol: 'Nₒ', label: { ar: 'سرعة الخرج', en: 'Output Speed' }, unit: 'RPM' },
    ],
    assumptions: [
      {
        ar: 'لا يوجد انزلاق بين التروس (اقتران ميكانيكي مثالي).',
        en: 'No slippage between gears (ideal mechanical coupling).',
      },
    ],
    workedExample: {
      ar: 'إذا كانت سرعة الدخل 1200 دورة/دقيقة ونسبة التروس 4، فإن سرعة الخرج = 1200 ÷ 4 = 300 دورة/دقيقة.',
      en: 'If input speed is 1200 RPM and the gear ratio is 4, output speed = 1200 ÷ 4 = 300 RPM.',
    },
    commonMistakes: [
      {
        ar: 'الخلط بين اتجاه النسبة (دخل/خرج مقابل خرج/دخل) عند المقارنة بين مصادر مختلفة.',
        en: 'Mixing up ratio direction (input/output vs. output/input) when comparing sources.',
      },
    ],
  },
};

export function getToolContentById(id: string): ToolContent | undefined {
  return toolContent[id];
}

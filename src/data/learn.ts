import type { LearnDefinition } from './types';

/**
 * Learn Engine dataset.
 *
 * Every entry here gets a real page — unlike Tools/Roadmaps, Phase 3
 * doesn't introduce a partial/preview state for Learn content (there's
 * no "implemented" flag), because we only ever add an entry once its
 * content is actually written. See getStaticPaths in the Learn route.
 *
 * `category` + `slug` together form the URL path segment
 * (/ar/learn/{category}/{slug}), matching the Master Spec's example
 * (/ar/learn/electrical/ohms-law) and the path format already used in
 * ToolDefinition.relatedLearn since Phase 2.
 */
export const learnPages: LearnDefinition[] = [
  {
    id: 'ohms-law',
    category: 'electrical',
    slug: 'ohms-law',
    title: { ar: 'قانون أوم', en: "Ohm's Law" },
    description: {
      ar: 'شرح كامل لقانون أوم: العلاقة بين الجهد والتيار والمقاومة، مع مثال محلول وأخطاء شائعة.',
      en: "A complete explanation of Ohm's law: the relationship between voltage, current, and resistance, with a worked example and common mistakes.",
    },
    keywords: {
      ar: ['قانون أوم', 'جهد', 'تيار', 'مقاومة', 'كهرباء', 'V=IR'],
      en: ["ohm's law", 'voltage', 'current', 'resistance', 'electrical', 'V=IR'],
    },
    introduction: {
      ar: 'قانون أوم هو أحد أهم القوانين في الهندسة الكهربائية. ينص على أن التيار المار عبر موصل بين نقطتين يتناسب طرديًا مع الجهد المطبق بينهما، بافتراض أن المقاومة ثابتة. فهم هذا القانون هو أول خطوة لفهم أي دارة كهربائية.',
      en: "Ohm's law is one of the most important relationships in electrical engineering. It states that the current through a conductor between two points is directly proportional to the voltage applied across those points, assuming constant resistance. Understanding it is the first step to understanding any electrical circuit.",
    },
    sections: [
      {
        heading: { ar: 'ماذا يصف القانون؟', en: 'What does the law describe?' },
        body: {
          ar: 'يربط قانون أوم بين ثلاث كميات: الجهد (V) الذي يدفع الشحنات الكهربائية، والتيار (I) وهو معدل تدفق هذه الشحنات، والمقاومة (R) التي تعيق هذا التدفق. زيادة الجهد عند مقاومة ثابتة تزيد التيار، وزيادة المقاومة عند جهد ثابت تقلل التيار.',
          en: "Ohm's law connects three quantities: voltage (V), which drives electric charge; current (I), the rate at which that charge flows; and resistance (R), which opposes the flow. Raising voltage at constant resistance increases current, and raising resistance at constant voltage decreases current.",
        },
      },
      {
        heading: { ar: 'لماذا يهم في الممارسة العملية؟', en: 'Why it matters in practice' },
        body: {
          ar: 'يُستخدم قانون أوم لاختيار قيمة المقاومة المناسبة لحماية مكوّن إلكتروني (مثل LED)، ولحساب التيار المتوقع في دارة قبل تركيبها، ولتشخيص الأعطال عن طريق قياس الجهد والتيار ومقارنتهما بالقيمة المتوقعة.',
          en: "Ohm's law is used to choose the right resistor value to protect a component (like an LED), to calculate the expected current in a circuit before building it, and to diagnose faults by measuring voltage and current and comparing them to the expected value.",
        },
      },
    ],
    formula: { ar: 'V = I × R', en: 'V = I × R' },
    variables: [
      { symbol: 'V', label: { ar: 'الجهد الكهربائي', en: 'Voltage' }, unit: 'V' },
      { symbol: 'I', label: { ar: 'التيار الكهربائي', en: 'Current' }, unit: 'A' },
      { symbol: 'R', label: { ar: 'المقاومة', en: 'Resistance' }, unit: 'Ω' },
    ],
    workedExample: {
      ar: 'مصباح LED يحتاج تيارًا مقداره 20 مللي أمبير (0.02 أمبير) ويعمل بجهد 2 فولت، ومصدر التغذية 5 فولت. المقاومة المطلوبة = (5 - 2) ÷ 0.02 = 150 أوم تقريبًا.',
      en: 'An LED needs 20 mA (0.02 A) of current and drops 2 V, powered from a 5 V supply. Required resistance = (5 − 2) ÷ 0.02 ≈ 150 Ω.',
    },
    commonMistakes: [
      {
        ar: 'نسيان طرح جهد المكوّن (مثل LED) قبل حساب المقاومة، مما يؤدي إلى قيمة مقاومة أصغر من اللازم.',
        en: "Forgetting to subtract the component's own voltage drop (like an LED's) before calculating resistance, resulting in too small a resistance value.",
      },
      {
        ar: 'الخلط بين مللي أمبير وأمبير دون تحويل الوحدات.',
        en: 'Mixing up milliamps and amps without converting units.',
      },
    ],
    faq: [
      {
        question: { ar: 'هل قانون أوم ينطبق على كل المكونات الإلكترونية؟', en: 'Does Ohm\u2019s law apply to every electronic component?' },
        answer: {
          ar: 'لا. ينطبق على العناصر الأومية (الخطية) مثل المقاومات العادية. عناصر مثل الدايودات والترانزستورات غير خطية ولا تتبع هذه العلاقة البسيطة.',
          en: 'No. It applies to ohmic (linear) elements like plain resistors. Components like diodes and transistors are non-linear and don\u2019t follow this simple relationship.',
        },
      },
    ],
    relatedTools: ['ohms-law'],
    relatedRoadmaps: ['electrical-engineering', 'mechatronics-engineering'],
    relatedLearn: ['electrical/electrical-power'],
  },
  {
    id: 'electrical-power',
    category: 'electrical',
    slug: 'electrical-power',
    title: { ar: 'القدرة الكهربائية', en: 'Electrical Power' },
    description: {
      ar: 'كيف تُحسب القدرة الكهربائية من الجهد والتيار، ولماذا تهم عند اختيار المكونات.',
      en: 'How electrical power is calculated from voltage and current, and why it matters when choosing components.',
    },
    keywords: {
      ar: ['قدرة كهربائية', 'واط', 'جهد', 'تيار', 'P=VI'],
      en: ['electrical power', 'watts', 'voltage', 'current', 'P=VI'],
    },
    introduction: {
      ar: 'القدرة الكهربائية تصف معدل استهلاك أو توليد الطاقة الكهربائية. معرفتها ضرورية لاختيار مصدر تغذية مناسب، وتقدير الحرارة المتولدة في مكوّن، وحساب استهلاك الطاقة لجهاز معين.',
      en: 'Electrical power describes the rate at which electrical energy is consumed or generated. Knowing it is essential for sizing a power supply, estimating heat generated in a component, and calculating a device\u2019s energy consumption.',
    },
    sections: [
      {
        heading: { ar: 'من أين تأتي المعادلة؟', en: 'Where the formula comes from' },
        body: {
          ar: 'القدرة هي معدل بذل الطاقة. بما أن الجهد يمثل الطاقة لكل وحدة شحنة، والتيار يمثل الشحنة المتدفقة لكل وحدة زمن، فإن ضربهما يعطي الطاقة لكل وحدة زمن — أي القدرة، بوحدة الواط.',
          en: 'Power is the rate of doing work. Since voltage represents energy per unit charge, and current represents charge flowing per unit time, multiplying them gives energy per unit time — power, measured in watts.',
        },
      },
      {
        heading: { ar: 'العلاقة بقانون أوم', en: 'Relationship to Ohm\u2019s Law' },
        body: {
          ar: 'بدمج P = V × I مع قانون أوم (V = I × R)، يمكن أيضًا كتابة القدرة كـ P = I² × R أو P = V² ÷ R، وهو مفيد عند معرفة المقاومة بدل الجهد أو التيار مباشرة.',
          en: 'Combining P = V × I with Ohm\u2019s law (V = I × R), power can also be written as P = I²R or P = V²/R — useful when resistance is known instead of voltage or current directly.',
        },
      },
    ],
    formula: { ar: 'P = V × I', en: 'P = V × I' },
    variables: [
      { symbol: 'V', label: { ar: 'الجهد الكهربائي', en: 'Voltage' }, unit: 'V' },
      { symbol: 'I', label: { ar: 'التيار الكهربائي', en: 'Current' }, unit: 'A' },
      { symbol: 'P', label: { ar: 'القدرة الكهربائية', en: 'Power' }, unit: 'W' },
    ],
    workedExample: {
      ar: 'غلاية كهربائية تعمل بجهد 220 فولت وتسحب تيارًا مقداره 4 أمبير. القدرة = 220 × 4 = 880 واط.',
      en: 'An electric kettle runs at 220 V and draws 4 A. Power = 220 × 4 = 880 W.',
    },
    commonMistakes: [
      {
        ar: 'استخدام قيمة الجهد اللحظية بدل الفعّالة (RMS) في دارات التيار المتردد.',
        en: 'Using an instantaneous voltage value instead of the RMS value in AC circuits.',
      },
      {
        ar: 'تجاهل معامل القدرة عند التعامل مع أحمال استقرائية (مثل المحركات).',
        en: 'Ignoring power factor for inductive loads (like motors).',
      },
    ],
    relatedTools: ['electrical-power', 'ohms-law'],
    relatedRoadmaps: ['electrical-engineering', 'mechatronics-engineering'],
    relatedLearn: ['electrical/ohms-law'],
  },
  {
    id: 'gear-ratio',
    category: 'mechanical',
    slug: 'gear-ratio',
    title: { ar: 'نسبة التروس', en: 'Gear Ratio' },
    description: {
      ar: 'كيف تحدد نسبة التروس سرعة وعزم النظام الميكانيكي، ولماذا هي أساس أي علبة تروس.',
      en: 'How gear ratio determines the speed and torque of a mechanical system, and why it\u2019s the basis of any gearbox.',
    },
    keywords: {
      ar: ['نسبة التروس', 'تروس', 'سرعة', 'عزم', 'rpm'],
      en: ['gear ratio', 'gears', 'speed', 'torque', 'rpm'],
    },
    introduction: {
      ar: 'نسبة التروس تصف كيف يغيّر ترسان متشابكان سرعة الدوران والعزم بين الدخل والخرج. هذا المفهوم هو أساس تصميم أي علبة تروس، من الدراجات إلى الروبوتات الصناعية.',
      en: 'Gear ratio describes how two meshed gears change rotational speed and torque between input and output. This concept underlies any gearbox design, from bicycles to industrial robots.',
    },
    sections: [
      {
        heading: { ar: 'السرعة مقابل العزم', en: 'Speed vs. torque' },
        body: {
          ar: 'عندما يقلل ترس الخرج السرعة مقارنة بترس الدخل، فإنه يزيد العزم بنفس النسبة تقريبًا (مع إهمال الاحتكاك). هذه المقايضة بين السرعة والعزم هي جوهر سبب استخدام التروس أصلًا.',
          en: 'When the output gear reduces speed relative to the input gear, it increases torque by roughly the same ratio (ignoring friction). This speed-torque trade-off is the core reason gears are used at all.',
        },
      },
      {
        heading: { ar: 'أنواع أنظمة نقل الحركة', en: 'Types of motion-transmission systems' },
        body: {
          ar: 'التروس ليست الطريقة الوحيدة لنقل الحركة — الأحزمة والبكرات تؤدي وظيفة مشابهة لكنها أكثر مرونة وأقل ضوضاء، بينما توفر التروس دقة أعلى ونقل عزم أكبر.',
          en: 'Gears aren\u2019t the only way to transmit motion — belts and pulleys serve a similar role but are more flexible and quieter, while gears offer higher precision and greater torque transfer.',
        },
      },
    ],
    formula: { ar: 'نسبة التروس = سرعة الدخل ÷ سرعة الخرج', en: 'Gear Ratio = Input Speed ÷ Output Speed' },
    variables: [
      { symbol: 'GR', label: { ar: 'نسبة التروس', en: 'Gear Ratio' }, unit: ':1' },
      { symbol: 'Nᵢ', label: { ar: 'سرعة الدخل', en: 'Input Speed' }, unit: 'RPM' },
      { symbol: 'Nₒ', label: { ar: 'سرعة الخرج', en: 'Output Speed' }, unit: 'RPM' },
    ],
    workedExample: {
      ar: 'محرك يدور بسرعة 3000 دورة/دقيقة، وعلبة تروس نسبتها 10:1. سرعة الخرج = 3000 ÷ 10 = 300 دورة/دقيقة، مع زيادة العزم تقريبًا 10 أضعاف.',
      en: 'A motor spins at 3000 RPM through a 10:1 gearbox. Output speed = 3000 ÷ 10 = 300 RPM, with torque increased roughly tenfold.',
    },
    commonMistakes: [
      {
        ar: 'افتراض أن العزم يزيد بنفس نسبة تخفيض السرعة تمامًا دون احتساب فقد الاحتكاك.',
        en: 'Assuming torque increases by exactly the same ratio as the speed reduction, without accounting for friction losses.',
      },
      {
        ar: 'الخلط بين اتجاه النسبة عند وصف علبة تروس بأنها "زيادة" مقابل "تخفيض".',
        en: 'Mixing up ratio direction when describing a gearbox as a "step-up" vs. a "step-down".',
      },
    ],
    relatedTools: ['gear-ratio'],
    relatedRoadmaps: ['mechanical-engineering', 'mechatronics-engineering'],
  },
];

export function getAllLearnPages(): LearnDefinition[] {
  return learnPages;
}

export function getLearnById(id: string): LearnDefinition | undefined {
  return learnPages.find((page) => page.id === id);
}

export function getLearnByPath(category: string, slug: string): LearnDefinition | undefined {
  return learnPages.find((page) => page.category === category && page.slug === slug);
}

/** Resolves a "category/slug" path string (the format used throughout
 *  relatedLearn fields) to its LearnDefinition. */
export function resolveLearnPath(path: string): LearnDefinition | undefined {
  const [category, slug] = path.split('/');
  if (!category || !slug) return undefined;
  return getLearnByPath(category, slug);
}

export function getLearnByCategory(category: string): LearnDefinition[] {
  return learnPages.filter((page) => page.category === category);
}

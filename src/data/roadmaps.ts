import type { RoadmapDefinition } from './types';

/**
 * Roadmap Engine dataset.
 *
 * `electrical-engineering`, `mechanical-engineering`, and
 * `mechatronics-engineering` have real detail pages — they're the
 * roadmaps naturally connected to Phase 2's three real calculators.
 * The other four (`ai-engineering`, `machine-learning`,
 * `software-engineering`, `robotics-engineering`) intentionally stay
 * preview-only for now: giving them shallow, thin `sections` just to
 * unlock a page would be exactly the "shallow placeholder content"
 * Phase 3 was told not to create. A roadmap gets a real page if and
 * only if it has `sections` — same gating pattern as
 * ToolDefinition.implemented. See getStaticPaths in the roadmap route.
 */
export const roadmaps: RoadmapDefinition[] = [
  {
    id: 'ai-engineering',
    slug: 'ai-engineering',
    title: { ar: 'هندسة الذكاء الاصطناعي', en: 'AI Engineering' },
    description: {
      ar: 'من بايثون إلى بناء أنظمة الذكاء الاصطناعي والوكلاء.',
      en: 'From Python to building AI systems and agents.',
    },
    nodes: [
      { ar: 'Python', en: 'Python' },
      { ar: 'التعلم الآلي', en: 'Machine Learning' },
      { ar: 'LLMs وRAG', en: 'LLMs & RAG' },
      { ar: 'وكلاء الذكاء الاصطناعي', en: 'AI Agents' },
    ],
  },
  {
    id: 'machine-learning',
    slug: 'machine-learning',
    title: { ar: 'تعلّم الآلة', en: 'Machine Learning' },
    description: {
      ar: 'أساسيات الرياضيات والإحصاء وصولًا إلى نماذج التعلم العميق.',
      en: 'Math and statistics foundations through deep learning models.',
    },
    nodes: [
      { ar: 'الرياضيات والإحصاء', en: 'Math & Statistics' },
      { ar: 'خوارزميات ML', en: 'ML Algorithms' },
      { ar: 'التعلم العميق', en: 'Deep Learning' },
    ],
  },
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    title: { ar: 'هندسة البرمجيات', en: 'Software Engineering' },
    description: {
      ar: 'من أساسيات البرمجة إلى تصميم الأنظمة القابلة للتوسع.',
      en: 'From programming fundamentals to scalable system design.',
    },
    nodes: [
      { ar: 'أساسيات البرمجة', en: 'Programming Fundamentals' },
      { ar: 'هياكل البيانات', en: 'Data Structures' },
      { ar: 'تصميم الأنظمة', en: 'System Design' },
    ],
  },
  {
    id: 'robotics-engineering',
    slug: 'robotics-engineering',
    title: { ar: 'هندسة الروبوتات', en: 'Robotics Engineering' },
    description: {
      ar: 'من المستشعرات والمشغلات إلى الرؤية الحاسوبية.',
      en: 'From sensors and actuators to computer vision.',
    },
    nodes: [
      { ar: 'المستشعرات والمشغلات', en: 'Sensors & Actuators' },
      { ar: 'PLC والأتمتة', en: 'PLC & Automation' },
      { ar: 'الرؤية الحاسوبية', en: 'Computer Vision' },
    ],
  },

  /* ----------------------- Real, full roadmaps ----------------------- */

  {
    id: 'electrical-engineering',
    slug: 'electrical-engineering',
    title: { ar: 'الهندسة الكهربائية', en: 'Electrical Engineering' },
    description: {
      ar: 'من قانون أوم إلى أنظمة القدرة والمحولات.',
      en: "From Ohm's law to power systems and transformers.",
    },
    keywords: {
      ar: ['هندسة كهربائية', 'قانون أوم', 'دارات', 'قدرة كهربائية'],
      en: ['electrical engineering', "ohm's law", 'circuits', 'electrical power'],
    },
    nodes: [
      { ar: 'قانون أوم', en: "Ohm's Law" },
      { ar: 'الدارات الكهربائية', en: 'Circuits' },
      { ar: 'أنظمة القدرة', en: 'Power Systems' },
    ],
    introduction: {
      ar: 'تبدأ الهندسة الكهربائية بفهم العلاقة بين الجهد والتيار والمقاومة، ثم تتوسع إلى تحليل الدارات وأنظمة القدرة الكبيرة. هذا المسار يرتب المفاهيم الأساسية بالترتيب الذي يبني كل مفهوم على ما قبله.',
      en: 'Electrical engineering starts with the relationship between voltage, current, and resistance, then expands into circuit analysis and large-scale power systems. This roadmap orders the fundamentals so each concept builds on the last.',
    },
    prerequisites: [
      { ar: 'أساسيات الجبر (حل معادلة بمتغير واحد).', en: 'Basic algebra (solving a one-variable equation).' },
    ],
    sections: [
      {
        title: { ar: 'الأساسيات', en: 'Foundations' },
        topics: [
          {
            id: 'ohms-law',
            title: { ar: 'قانون أوم', en: "Ohm's Law" },
            relatedLearn: ['electrical/ohms-law'],
            relatedTools: ['ohms-law'],
          },
          {
            id: 'electrical-power',
            title: { ar: 'القدرة الكهربائية', en: 'Electrical Power' },
            relatedLearn: ['electrical/electrical-power'],
            relatedTools: ['electrical-power'],
          },
        ],
      },
      {
        title: { ar: 'الدارات', en: 'Circuits' },
        topics: [
          { id: 'series-parallel', title: { ar: 'الدارات المتسلسلة والمتوازية', en: 'Series & Parallel Circuits' } },
          { id: 'kirchhoffs-laws', title: { ar: 'قوانين كيرشوف', en: "Kirchhoff's Laws" } },
        ],
      },
      {
        title: { ar: 'أنظمة القدرة', en: 'Power Systems' },
        topics: [
          { id: 'ac-dc', title: { ar: 'التيار المتردد والمستمر', en: 'AC vs DC' } },
          { id: 'transformers', title: { ar: 'المحولات الكهربائية', en: 'Transformers' } },
        ],
      },
    ],
    relatedLearn: ['electrical/ohms-law', 'electrical/electrical-power'],
    relatedTools: ['ohms-law', 'electrical-power'],
    relatedRoadmaps: ['mechatronics-engineering'],
  },
  {
    id: 'mechanical-engineering',
    slug: 'mechanical-engineering',
    title: { ar: 'الهندسة الميكانيكية', en: 'Mechanical Engineering' },
    description: {
      ar: 'من الستاتيكا إلى أنظمة التروس والمحركات.',
      en: 'From statics to gear systems and motors.',
    },
    keywords: {
      ar: ['هندسة ميكانيكية', 'نسبة التروس', 'محركات'],
      en: ['mechanical engineering', 'gear ratio', 'motors'],
    },
    nodes: [
      { ar: 'الستاتيكا والديناميكا', en: 'Statics & Dynamics' },
      { ar: 'أنظمة التروس', en: 'Gear Systems' },
      { ar: 'المحركات والقدرة الميكانيكية', en: 'Motors & Mechanical Power' },
    ],
    introduction: {
      ar: 'تغطي الهندسة الميكانيكية القوى والحركة والطاقة الميكانيكية. يركز هذا المسار على أنظمة نقل الحركة — وهي أساس أي آلة تحتوي على تروس أو محركات.',
      en: 'Mechanical engineering covers forces, motion, and mechanical energy. This roadmap focuses on motion-transmission systems — the foundation of any machine that involves gears or motors.',
    },
    prerequisites: [
      { ar: 'أساسيات الفيزياء (القوة والسرعة).', en: 'Basic physics (force and velocity).' },
    ],
    sections: [
      {
        title: { ar: 'الأساسيات', en: 'Foundations' },
        topics: [
          { id: 'statics', title: { ar: 'الستاتيكا', en: 'Statics' } },
          { id: 'dynamics', title: { ar: 'الديناميكا', en: 'Dynamics' } },
        ],
      },
      {
        title: { ar: 'أنظمة نقل الحركة', en: 'Motion Transmission' },
        topics: [
          {
            id: 'gear-ratio',
            title: { ar: 'نسبة التروس', en: 'Gear Ratio' },
            relatedLearn: ['mechanical/gear-ratio'],
            relatedTools: ['gear-ratio'],
          },
          { id: 'belts-pulleys', title: { ar: 'الأحزمة والبكرات', en: 'Belts & Pulleys' } },
        ],
      },
      {
        title: { ar: 'المحركات والقدرة', en: 'Motors & Power' },
        topics: [
          { id: 'motor-power', title: { ar: 'قدرة المحرك', en: 'Motor Power' } },
          { id: 'torque', title: { ar: 'العزم', en: 'Torque' } },
        ],
      },
    ],
    relatedLearn: ['mechanical/gear-ratio'],
    relatedTools: ['gear-ratio'],
    relatedRoadmaps: ['mechatronics-engineering'],
  },
  {
    id: 'mechatronics-engineering',
    slug: 'mechatronics-engineering',
    title: { ar: 'هندسة الميكاترونكس', en: 'Mechatronics Engineering' },
    description: {
      ar: 'دمج الكهرباء والميكانيكا والتحكم في الروبوتات.',
      en: 'Combining electrical, mechanical, and control systems in robotics.',
    },
    keywords: {
      ar: ['ميكاترونكس', 'روبوتات', 'أتمتة', 'تحكم'],
      en: ['mechatronics', 'robotics', 'automation', 'control systems'],
    },
    nodes: [
      { ar: 'الأساسيات الكهربائية', en: 'Electrical Fundamentals' },
      { ar: 'المتحكمات الدقيقة', en: 'Microcontrollers' },
      { ar: 'أنظمة التحكم', en: 'Control Systems' },
    ],
    introduction: {
      ar: 'الميكاترونكس تجمع بين الكهرباء والميكانيكا والبرمجة لبناء أنظمة ذكية مثل الروبوتات. هذا المسار يفترض إلمامًا أساسيًا بكل من الأساسيات الكهربائية والميكانيكية قبل الانتقال إلى التحكم والأتمتة.',
      en: 'Mechatronics combines electrical, mechanical, and software engineering to build intelligent systems like robots. This roadmap assumes basic familiarity with both electrical and mechanical fundamentals before moving into control and automation.',
    },
    prerequisites: [
      {
        ar: 'إلمام أساسي بقانون أوم والقدرة الكهربائية (انظر مسار الهندسة الكهربائية).',
        en: "Basic familiarity with Ohm's law and electrical power (see the Electrical Engineering roadmap).",
      },
      {
        ar: 'إلمام أساسي بأنظمة التروس (انظر مسار الهندسة الميكانيكية).',
        en: 'Basic familiarity with gear systems (see the Mechanical Engineering roadmap).',
      },
    ],
    sections: [
      {
        title: { ar: 'الأساسيات الكهربائية والميكانيكية', en: 'Electrical & Mechanical Foundations' },
        topics: [
          {
            id: 'ohms-law',
            title: { ar: 'قانون أوم', en: "Ohm's Law" },
            relatedLearn: ['electrical/ohms-law'],
            relatedTools: ['ohms-law'],
          },
          {
            id: 'electrical-power',
            title: { ar: 'القدرة الكهربائية', en: 'Electrical Power' },
            relatedLearn: ['electrical/electrical-power'],
            relatedTools: ['electrical-power'],
          },
          {
            id: 'gear-ratio',
            title: { ar: 'نسبة التروس', en: 'Gear Ratio' },
            relatedLearn: ['mechanical/gear-ratio'],
            relatedTools: ['gear-ratio'],
          },
        ],
      },
      {
        title: { ar: 'المتحكمات الدقيقة', en: 'Microcontrollers' },
        topics: [
          { id: 'embedded-basics', title: { ar: 'أساسيات الأنظمة المدمجة', en: 'Embedded Systems Basics' } },
          { id: 'sensors-actuators', title: { ar: 'المستشعرات والمشغلات', en: 'Sensors & Actuators' } },
        ],
      },
      {
        title: { ar: 'أنظمة التحكم والأتمتة', en: 'Control Systems & Automation' },
        topics: [
          { id: 'feedback-control', title: { ar: 'التحكم بالتغذية الراجعة', en: 'Feedback Control' } },
          { id: 'plc-automation', title: { ar: 'PLC والأتمتة', en: 'PLC & Automation' } },
        ],
      },
    ],
    relatedLearn: ['electrical/ohms-law', 'electrical/electrical-power', 'mechanical/gear-ratio'],
    relatedTools: ['ohms-law', 'electrical-power', 'gear-ratio'],
    relatedRoadmaps: ['electrical-engineering', 'mechanical-engineering'],
  },
];

/** IDs of roadmaps featured on the homepage. */
export const featuredRoadmapIds = [
  'ai-engineering',
  'electrical-engineering',
  'mechatronics-engineering',
  'software-engineering',
];

export function getRoadmapById(id: string): RoadmapDefinition | undefined {
  return roadmaps.find((roadmap) => roadmap.id === id);
}

export function getRoadmapBySlug(slug: string): RoadmapDefinition | undefined {
  return roadmaps.find((roadmap) => roadmap.slug === slug);
}

/** Roadmaps with a real detail page — see the module doc above for the gating rule. */
export function getRoadmapsWithDetailPage(): RoadmapDefinition[] {
  return roadmaps.filter((roadmap) => (roadmap.sections?.length ?? 0) > 0);
}

import type { ToolDefinition } from './types';

/**
 * Tool Engine dataset.
 *
 * `ohms-law`, `electrical-power`, and `gear-ratio` are Phase 2's three
 * real, working tools (`implemented: true`) — everything else stays
 * `implemented: false` until its actual functionality ships. This flag
 * is the single source of truth the whole site keys off: ToolCard only
 * links to a tool when it's true, and the tool route's getStaticPaths
 * only generates a page for tools where it's true. Nothing renders a
 * "working" tool that isn't.
 */
export const tools: ToolDefinition[] = [
  {
    id: 'merge-pdf',
    category: 'pdf',
    slug: 'merge-pdf',
    title: { ar: 'دمج ملفات PDF', en: 'Merge PDF' },
    description: {
      ar: 'اجمع عدة ملفات PDF في ملف واحد.',
      en: 'Merge multiple PDF files into one.',
    },
    type: 'file-processing',
    icon: 'file-text',
    keywords: {
      ar: ['دمج', 'pdf', 'ملفات'],
      en: ['merge', 'pdf', 'combine', 'files'],
    },
    implemented: false,
    relatedTools: ['compress-pdf', 'split-pdf'],
  },
  {
    id: 'compress-pdf',
    category: 'pdf',
    slug: 'compress-pdf',
    title: { ar: 'ضغط PDF', en: 'Compress PDF' },
    description: {
      ar: 'قلّل حجم ملف PDF دون فقدان جودة ملحوظة.',
      en: 'Reduce PDF file size without noticeable quality loss.',
    },
    type: 'file-processing',
    icon: 'file-text',
    keywords: {
      ar: ['ضغط', 'pdf', 'تقليل الحجم'],
      en: ['compress', 'pdf', 'reduce size'],
    },
    implemented: false,
    relatedTools: ['merge-pdf', 'split-pdf'],
  },
  {
    id: 'split-pdf',
    category: 'pdf',
    slug: 'split-pdf',
    title: { ar: 'تقسيم PDF', en: 'Split PDF' },
    description: {
      ar: 'قسّم ملف PDF إلى عدة ملفات منفصلة.',
      en: 'Split a PDF file into multiple separate files.',
    },
    type: 'file-processing',
    icon: 'file-text',
    keywords: {
      ar: ['تقسيم', 'pdf', 'فصل الصفحات'],
      en: ['split', 'pdf', 'separate pages'],
    },
    implemented: false,
    relatedTools: ['merge-pdf', 'compress-pdf'],
  },
  {
    id: 'ohms-law',
    category: 'engineering',
    subcategory: 'electrical',
    slug: 'ohms-law',
    title: { ar: 'قانون أوم', en: "Ohm's Law" },
    description: {
      ar: 'احسب الجهد أو التيار أو المقاومة عند معرفة القيمتين الأخريين.',
      en: 'Calculate voltage, current, or resistance from the other two.',
    },
    type: 'calculator',
    icon: 'circuit',
    keywords: {
      ar: ['قانون أوم', 'جهد', 'تيار', 'مقاومة', 'كهرباء'],
      en: ['ohms law', 'voltage', 'current', 'resistance', 'electrical'],
    },
    implemented: true,
    relatedTools: ['electrical-power'],
    relatedLearn: ['electrical/ohms-law'],
    relatedRoadmaps: ['electrical-engineering'],
  },
  {
    id: 'electrical-power',
    category: 'engineering',
    subcategory: 'electrical',
    slug: 'electrical-power',
    title: { ar: 'القدرة الكهربائية', en: 'Electrical Power' },
    description: {
      ar: 'احسب القدرة الكهربائية من الجهد والتيار.',
      en: 'Calculate electrical power from voltage and current.',
    },
    type: 'calculator',
    icon: 'circuit',
    keywords: {
      ar: ['قدرة كهربائية', 'واط', 'جهد', 'تيار'],
      en: ['electrical power', 'watts', 'voltage', 'current'],
    },
    implemented: true,
    relatedTools: ['ohms-law'],
    relatedLearn: ['electrical/electrical-power'],
    relatedRoadmaps: ['electrical-engineering'],
  },
  {
    id: 'gear-ratio',
    category: 'engineering',
    subcategory: 'mechanical',
    slug: 'gear-ratio',
    title: { ar: 'نسبة التروس', en: 'Gear Ratio' },
    description: {
      ar: 'احسب نسبة التروس أو سرعة الدخل/الخرج عند معرفة القيمتين الأخريين.',
      en: 'Calculate gear ratio or input/output speed from the other two.',
    },
    type: 'calculator',
    icon: 'gear',
    keywords: {
      ar: ['نسبة التروس', 'تروس', 'سرعة', 'rpm'],
      en: ['gear ratio', 'gears', 'rpm', 'speed'],
    },
    implemented: true,
    relatedRoadmaps: ['mechanical-engineering', 'mechatronics-engineering'],
    relatedLearn: ['mechanical/gear-ratio'],
  },
  {
    id: 'image-compressor',
    category: 'image',
    slug: 'image-compressor',
    title: { ar: 'ضغط الصور', en: 'Image Compressor' },
    description: {
      ar: 'قلّل حجم الصور دون التأثير على الجودة بشكل ملحوظ.',
      en: 'Reduce image file size without a noticeable quality drop.',
    },
    type: 'file-processing',
    icon: 'image',
    keywords: {
      ar: ['ضغط الصور', 'تقليل حجم الصورة'],
      en: ['image compressor', 'reduce image size'],
    },
    implemented: false,
  },
  {
    id: 'json-formatter',
    category: 'developer',
    slug: 'json-formatter',
    title: { ar: 'منسّق JSON', en: 'JSON Formatter' },
    description: {
      ar: 'نسّق وتحقق من صحة بيانات JSON.',
      en: 'Format and validate JSON data.',
    },
    type: 'text-processing',
    icon: 'code',
    keywords: {
      ar: ['json', 'تنسيق', 'تحقق'],
      en: ['json', 'formatter', 'validator'],
    },
    implemented: false,
  },
];

/** IDs of tools featured in the homepage "Popular Tools" section. */
export const popularToolIds = [
  'merge-pdf',
  'compress-pdf',
  'ohms-law',
  'image-compressor',
  'json-formatter',
];

export function getToolById(id: string): ToolDefinition | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getToolsByCategory(categoryId: string): ToolDefinition[] {
  return tools.filter((tool) => tool.category === categoryId);
}

export function getRelatedTools(tool: ToolDefinition): ToolDefinition[] {
  if (!tool.relatedTools?.length) return [];
  return tool.relatedTools
    .map((id) => getToolById(id))
    .filter((t): t is ToolDefinition => Boolean(t));
}

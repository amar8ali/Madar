import type { ToolCategoryDefinition, EngineeringSubcategoryDefinition, ToolCategoryId } from './types';

export const categories: ToolCategoryDefinition[] = [
  {
    id: 'pdf',
    slug: 'pdf',
    icon: 'file-text',
    title: { ar: 'PDF', en: 'PDF' },
    description: {
      ar: 'دمج، ضغط، تحويل، وتنظيم ملفات PDF',
      en: 'Merge, compress, convert, and organize PDF files',
    },
  },
  {
    id: 'engineering',
    slug: 'engineering',
    icon: 'circuit',
    title: { ar: 'هندسي', en: 'Engineering' },
    description: {
      ar: 'حاسبات كهربائية وميكانيكية وطاقة شمسية تفاعلية',
      en: 'Interactive electrical, mechanical, and solar calculators',
    },
  },
  {
    id: 'image',
    slug: 'image',
    icon: 'image',
    title: { ar: 'صور', en: 'Image' },
    description: {
      ar: 'ضغط وتحويل وتعديل الصور',
      en: 'Compress, convert, and edit images',
    },
  },
  {
    id: 'developer',
    slug: 'developer',
    icon: 'code',
    title: { ar: 'مطوّرين', en: 'Developer' },
    description: {
      ar: 'أدوات JSON وBase64 وRegex وغيرها',
      en: 'JSON, Base64, Regex, and other dev utilities',
    },
  },
  {
    id: 'text',
    slug: 'text',
    icon: 'text',
    title: { ar: 'نصوص', en: 'Text' },
    description: {
      ar: 'عد الكلمات، تنظيف النصوص، ومقارنة الفروقات',
      en: 'Word counting, text cleanup, and diff comparison',
    },
  },
  {
    id: 'student',
    slug: 'student',
    icon: 'graduation-cap',
    title: { ar: 'طلاب', en: 'Student' },
    description: {
      ar: 'حاسبات المعدل والدرجات وإدارة الوقت',
      en: 'GPA, grade calculators, and study time tools',
    },
  },
  {
    id: 'finance',
    slug: 'finance',
    icon: 'coins',
    title: { ar: 'مالية', en: 'Finance' },
    description: {
      ar: 'الفوائد، القروض، والهامش الربحي',
      en: 'Interest, loans, and profit margin calculators',
    },
  },
  {
    id: 'seo',
    slug: 'seo',
    icon: 'search',
    title: { ar: 'SEO', en: 'SEO' },
    description: {
      ar: 'أدوات الميتا، السايت ماب، والمخططات',
      en: 'Meta tags, sitemaps, and schema tools',
    },
  },
  {
    id: 'ai',
    slug: 'ai',
    icon: 'sparkles',
    title: { ar: 'AI', en: 'AI' },
    description: {
      ar: 'حاسبات التوكن والتكلفة وأدوات البرومبت',
      en: 'Token/cost calculators and prompt tools',
    },
  },
];

export function getCategoryById(id: ToolCategoryId): ToolCategoryDefinition | undefined {
  return categories.find((category) => category.id === id);
}

/**
 * Engineering is the one category the Master Spec splits into
 * subcategories (section 9). This list drives the Engineering category
 * page's grouping — other categories don't have subcategories yet.
 */
export const engineeringSubcategories: EngineeringSubcategoryDefinition[] = [
  { id: 'electrical', title: { ar: 'كهربائي', en: 'Electrical' } },
  { id: 'mechanical', title: { ar: 'ميكانيكي', en: 'Mechanical' } },
  { id: 'pneumatics-hydraulics', title: { ar: 'هوائي وهيدروليكي', en: 'Pneumatics & Hydraulics' } },
  { id: 'solar', title: { ar: 'طاقة شمسية', en: 'Solar' } },
  { id: 'automation-robotics', title: { ar: 'أتمتة وروبوتات', en: 'Automation & Robotics' } },
];

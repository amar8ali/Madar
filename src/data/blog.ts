import type { LocalizedString } from './types';

/**
 * Placeholder content for the homepage "Latest Articles" preview.
 *
 * IMPORTANT: there is no blog/content system yet (Phase 1 explicitly
 * excludes it — see spec section 19). These entries exist only to
 * validate the visual design of the Blog section and are marked
 * `placeholder: true` throughout the UI so nothing implies a real,
 * published article exists behind them.
 */
export type BlogPreviewItem = {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  placeholder: true;
};

export const blogPreview: BlogPreviewItem[] = [
  {
    id: 'what-is-voltage',
    title: { ar: 'ما هو الجهد الكهربائي؟', en: 'What is Voltage?' },
    excerpt: {
      ar: 'شرح مبسّط لمفهوم الجهد الكهربائي وعلاقته بالتيار والمقاومة.',
      en: 'A clear explanation of voltage and how it relates to current and resistance.',
    },
    placeholder: true,
  },
  {
    id: 'how-transformer-works',
    title: { ar: 'كيف يعمل المحوّل الكهربائي؟', en: 'How Does a Transformer Work?' },
    excerpt: {
      ar: 'من الملف الأساسي إلى الملف الثانوي — رحلة المجال المغناطيسي.',
      en: 'From primary to secondary winding — the journey of the magnetic field.',
    },
    placeholder: true,
  },
  {
    id: 'best-pdf-compression-methods',
    title: { ar: 'أفضل طرق ضغط ملفات PDF', en: 'Best PDF Compression Methods' },
    excerpt: {
      ar: 'مقارنة بين طرق ضغط PDF المختلفة وتأثيرها على الجودة.',
      en: 'Comparing different PDF compression approaches and their quality trade-offs.',
    },
    placeholder: true,
  },
];

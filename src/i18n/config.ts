/**
 * MADAR — Language configuration
 *
 * Single source of truth for which languages MADAR supports,
 * which one is the default, and per-language display/meta info.
 *
 * Adding a new language later means editing this file only —
 * routing, the layout, and the language switcher all read from here.
 */

export const languages = ['ar', 'en'] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'ar';

export const langConfig: Record<Lang, {
  /** Native label shown in the language switcher */
  label: string;
  /** BCP-47 locale tag, used for <html lang> and Open Graph */
  locale: string;
  dir: 'rtl' | 'ltr';
}> = {
  ar: {
    label: 'العربية',
    locale: 'ar-SA',
    dir: 'rtl',
  },
  en: {
    label: 'English',
    locale: 'en-US',
    dir: 'ltr',
  },
};

/** localStorage key used to remember the visitor's language preference */
export const LANG_STORAGE_KEY = 'madar:lang';

/** localStorage key used to remember the visitor's theme preference */
export const THEME_STORAGE_KEY = 'madar:theme';

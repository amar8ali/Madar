import { defaultLang, languages, type Lang } from './config';
import { translations } from './translations';

/**
 * Reads the language from an Astro URL, e.g. /ar/tools/... -> 'ar'.
 * Falls back to the default language if the URL doesn't start with
 * a known language prefix (this should only happen for the root
 * redirect page).
 */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (languages.includes(maybeLang as Lang)) {
    return maybeLang as Lang;
  }
  return defaultLang;
}

/** Returns the translation dictionary for a given language. */
export function useTranslations(lang: Lang) {
  return translations[lang];
}

/**
 * Given the current language and a path *without* the language prefix
 * (e.g. "/tools"), returns the fully-prefixed path (e.g. "/ar/tools").
 * Use this instead of hardcoding "/ar/..." or "/en/..." anywhere.
 */
export function localizePath(lang: Lang, path: string): string {
  const cleanPath = path === '/' ? '' : path.replace(/^\/+/, '');
  return `/${lang}/${cleanPath}`.replace(/\/+$/, '') || `/${lang}/`;
}

/**
 * Given the current pathname and a target language, produces the
 * equivalent path in the target language by swapping the language
 * prefix and keeping the rest of the path intact. This is what powers
 * "switching language preserves the current page" (spec section 3 / 9).
 *
 * If the current path has no segments beyond the language prefix,
 * this simply returns the target language's homepage.
 */
export function getLocalizedAlternate(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/').filter(Boolean);
  const [, ...rest] = segments; // drop the current language segment
  const restPath = rest.join('/');
  return restPath ? `/${targetLang}/${restPath}` : `/${targetLang}/`;
}

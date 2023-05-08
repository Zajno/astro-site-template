
export const languages = Object.freeze({
    en: 'English',
    ja: 'Japan',
});

export const defaultLang: Locales = 'en';

export type Locales = keyof typeof languages;

export type PageCopyright<T extends object> = Record<Locales, T>;

export function getLangFromUrl<TCopy extends object = any>(url: URL, copy: PageCopyright<TCopy>) {
    const [, lang] = url.pathname.split('/');
    if (lang in copy) return lang as keyof typeof copy;
    return defaultLang;
}


export const AllLocales = ['en', 'ja'] as const;

export type Locales = typeof AllLocales[number];

export type PageCopyright<T extends object> = Partial<Record<Locales, T>> & { default: Locales };

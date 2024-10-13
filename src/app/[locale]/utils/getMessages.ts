import 'server-only';

const locales = ['en', 'ru', 'uk'] as const;
export type Locale = typeof locales[number];

const dictionaries: { [key in Locale]: () => Promise<Record<string, string>> } = {
    en: () => import('@locales/en.json').then((module) => module.default),
    ru: () => import('@locales/ru.json').then((module) => module.default),
    uk: () => import('@locales/uk.json').then((module) => module.default),
};

export async function getMessages(locale: string) {
    if (!locales.includes(locale as Locale)) {
        // Если локаль не поддерживается, возвращаем переводы по умолчанию
        locale = 'uk';
    }
    return dictionaries[locale as Locale]();
}

// src/app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { getMessages } from './utils/getMessages';
import LanguageSwitcher from './components/LanguageSwitcher';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    if (!['en', 'ru', 'uk'].includes(locale)) {
        // Обработка неподдерживаемой локали
        notFound();
    }

    // Загрузка переводов (если необходимо)
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
        <body>
        <LanguageSwitcher currentLocale={locale} />
        {children}
        </body>
        </html>
    );
}

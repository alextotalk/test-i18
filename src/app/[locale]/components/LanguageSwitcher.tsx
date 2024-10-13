'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const supportedLocales = ['uk', 'ru', 'en'];

export default function LanguageSwitcher({
                                             currentLocale,
                                         }: {
    currentLocale: string;
}) {
    const pathname = usePathname();

    const getPathWithLocale = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale; // Заменяем текущий язык на новый
        return segments.join('/');
    };

    return (
        <div>
            {supportedLocales.map((locale) => (
                <Link key={locale} href={getPathWithLocale(locale)}>
                    <button disabled={locale === currentLocale}>{locale}</button>
                </Link>
            ))}
        </div>
    );
}

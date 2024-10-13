// src/middleware.ts


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLocales = ['uk', 'ru', 'en'];
const defaultLocale = 'uk';

function getLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get('Accept-Language');
    if (!acceptLanguage) return defaultLocale;

    const languages = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim());

    for (const lang of languages) {
        const baseLang = lang.split('-')[0];
        if (supportedLocales.includes(baseLang)) {
            return baseLang;
        }
    }

    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Exclude static files and API routes
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon.ico') ||
        /\.(.*)$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    console.log(`Middleware invoked for path: ${pathname}`);

    const hasLocale = supportedLocales.some((locale) =>
        pathname.startsWith(`/${locale}`)
    );

    if (hasLocale) {
        return NextResponse.next();
    }

    const locale = getLocale(request);
    console.log(`Redirecting to: /${locale}${pathname}`);

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(redirectUrl);
}

// src/middleware.ts

export const config = {
    matcher: [
        '/((?!en|ru|uk|api|_next/static|_next/image|favicon.ico).*)',
    ],
};


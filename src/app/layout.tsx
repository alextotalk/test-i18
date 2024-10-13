// src/app/layout.tsx
import { ReactNode } from 'react';

export const metadata = {
    title: 'Мой сайт',
    description: 'Описание моего сайта',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="uk">
        <body>{children}</body>
        </html>
    );
}

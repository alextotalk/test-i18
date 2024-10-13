// app/[locale]/page.tsx
import { getMessages } from './utils/getMessages';
import { notFound } from 'next/navigation';

export default async function Page({
                                       params,
                                   }: {
    params: { locale: string };
}) {
    const { locale } = params;

    if (!['en', 'ru', 'uk'].includes(locale)) {
        notFound();
    }

    const messages = await getMessages(locale);

    return (
        <div>
             <p>{messages.description}</p>
        </div>
    );
}

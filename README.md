<a href="https://test-i18-3d2lo0hat-alextotalks-projects.vercel.app/uk" target="_blank"> test-i18t-alextotalks-projects.vercel.app/uk</a>



У цьому проєкті була додана підтримка зміни мови для роботи з міжнародною аудиторією. Основні кроки для реалізації включали наступне:

Middleware для перенаправлення на відповідну локаль. Було створено проміжне ПЗ (middleware), яке перевіряє заголовки Accept-Language користувача і визначає, на яку мову його потрібно перенаправити. Якщо в URL відсутня мова, middleware автоматично додає відповідну локаль (наприклад, /uk, /ru або /en), ґрунтуючись на вподобаннях користувача або застосовує мову за замовчуванням — українську.

Динамічні маршрути для кожної локалі. Було створено папки для різних мов (наприклад, [locale]), що дозволило рендерити різні версії сторінок для кожної мови. Це також дало можливість виводити різні переклади залежно від обраної мови.

Файли перекладу. У директорії src/locales були додані JSON-файли для кожної підтримуваної мови (наприклад, en.json, ru.json, uk.json), які містять ключі та відповідні переклади текстів для кожної сторінки.

Компонент перемикання мов. Для зручності користувача був розроблений компонент LanguageSwitcher, який дозволяє перемикатися між мовами. Він перевіряє поточний шлях, замінює мову в URL і оновлює інтерфейс відповідно до обраної локалі.

Асинхронне завантаження перекладів. Функція getMessages завантажує відповідні переклади на основі поточної мови. Це робить систему гнучкою і дозволяє динамічно підвантажувати контент для будь-якої підтримуваної мови.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

 
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

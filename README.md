# ИП Обухов А. В. — сайт-одностраничник

Адаптивный одностраничный сайт (landing page) для индивидуального предпринимателя,
оказывающего услуги по комплексному сопровождению промышленных и инженерных
проектов.

Строгий корпоративный дизайн (premium-light industrial): тёмно-синяя/графитовая
палитра, аккуратная типографика, плавные анимации появления блоков, полная
адаптивность под mobile / tablet / desktop.

## Стек

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Шрифт **Inter** (next/font, латиница + кириллица)
- Анимации появления — на `IntersectionObserver` (без сторонних библиотек)

## Структура проекта

```
.
├── app/
│   ├── globals.css        # Tailwind + базовые стили, утилита .reveal
│   ├── layout.tsx         # <html>, SEO/meta, Open Graph, JSON-LD, шрифт
│   ├── page.tsx           # сборка секций
│   ├── robots.ts          # robots.txt (App Router)
│   └── sitemap.ts         # sitemap.xml (App Router)
├── components/
│   ├── Header.tsx         # фикс-шапка, мобильное меню
│   ├── Hero.tsx           # первый экран + CTA
│   ├── About.tsx          # «О деятельности»
│   ├── Services.tsx       # карточки услуг
│   ├── Approach.tsx       # «Подход к работе» (преимущества)
│   ├── Cooperation.tsx    # «О сотрудничестве» + этапы
│   ├── Contacts.tsx       # реквизиты + форма (mailto, без backend)
│   ├── Footer.tsx         # деловой футер
│   ├── Reveal.tsx         # обёртка анимации появления
│   └── icons.tsx          # линейные SVG-иконки
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── scripts/
│   └── gen-icons.mjs      # генерация растровых иконок (без зависимостей)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

## Запуск

Требуется Node.js 18.17+ (рекомендуется 20+).

```bash
# 1. установить зависимости
npm install

# 2. режим разработки — http://localhost:3000
npm run dev

# 3. продакшн-сборка и запуск
npm run build
npm run start
```

## Особенности

- **SEO**: семантическая разметка, `title`/`description`, Open Graph, Twitter
  Card, JSON-LD (`ProfessionalService`), `robots.txt`, `sitemap.xml`,
  canonical, `lang="ru"`, осмысленные `id` секций для якорной навигации.
- **Доступность**: skip-link, `aria`-атрибуты, видимый фокус, поддержка
  `prefers-reduced-motion`.
- **Форма обратной связи** работает без бэкенда — формирует письмо и открывает
  почтовый клиент пользователя (`mailto:`).
- **Иконки** генерируются скриптом и не требуют внешних бинарников. Чтобы
  пересоздать их: `node scripts/gen-icons.mjs`.

## Настройка под себя

- Контакты и реквизиты: `components/Contacts.tsx`, `components/Footer.tsx`,
  JSON-LD в `app/layout.tsx`.
- Домен для SEO (`siteUrl`): `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`.
- Палитра и тени: `tailwind.config.ts`.
- Тексты секций — в соответствующих компонентах в `components/`.
```

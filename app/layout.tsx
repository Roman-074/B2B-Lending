import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://www.proao.net";
const siteName =
  "ИП Обухов А. В. — клиенты, проекты и контроль подрядчиков для промышленных компаний";
const siteDescription =
  "Помогаю промышленным компаниям находить клиентов, запускать проекты и контролировать подрядчиков: маркетинговые исследования, продвижение услуг, сопровождение инженерных проектов, контроль строительных работ, логистика оборудования и подготовка документации. Тел. +7 961 807 90 90.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s · ИП Обухов А. В.",
  },
  description: siteDescription,
  keywords: [
    "привлечение клиентов для промышленных компаний",
    "маркетинг для завода",
    "поиск клиентов производству",
    "сопровождение промышленных проектов",
    "контроль подрядчиков и сроков",
    "контроль строительных работ",
    "логистика поставок оборудования",
    "нестандартное оборудование",
    "техническая документация",
    "ИП Обухов",
  ],
  authors: [{ name: "ИП Обухов Андрей Вячеславович" }],
  creator: "ИП Обухов Андрей Вячеславович",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1b2840",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ИП Обухов Андрей Вячеславович",
  description: siteDescription,
  url: siteUrl,
  email: "andrey.neu@mail.ru",
  telephone: "+79618079090",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+79618079090",
    email: "andrey.neu@mail.ru",
    contactType: "customer service",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  areaServed: "RU",
  founder: {
    "@type": "Person",
    name: "Обухов Андрей Вячеславович",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "ИНН",
    value: "602718266247",
  },
  knowsAbout: [
    "Сопровождение промышленных проектов",
    "Инженерное курирование",
    "Контроль строительных работ",
    "Логистика поставок",
    "Техническая документация",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Перейти к содержимому
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}

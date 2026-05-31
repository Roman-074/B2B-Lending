import { IconMail, IconPhone } from "./icons";

const EMAIL = "andrey.neu@mail.ru";
const PHONE = "+7 961 807 90 90";
const PHONE_HREF = "tel:+79618079090";

const navLinks = [
  { href: "#tasks", label: "Какие задачи закрываю" },
  { href: "#services", label: "Услуги" },
  { href: "#benefits", label: "Польза для собственника" },
  { href: "#cooperation", label: "Как строится работа" },
  { href: "#contacts", label: "Контакты" },
];

const serviceLinks = [
  "Маркетинговые исследования",
  "Привлечение клиентов",
  "Курирование инженерных проектов",
  "Контроль строительных работ",
  "Нестандартное оборудование",
  "Документация и поставки",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-3" aria-label="На главную">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-bold tracking-tight text-navy-950">
                ОА
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  Обухов А. В.
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-300">
                  Инженерные проекты
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
              Помогаю промышленным компаниям находить клиентов, запускать
              проекты и контролировать подрядчиков — поставки, сроки и документы
              под контролем одного координатора.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-navy-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <IconPhone className="h-4 w-4" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-navy-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <IconMail className="h-4 w-4" />
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
              Навигация
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-100 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
              Направления
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#services"
                    className="text-sm text-navy-100 transition-colors hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} ИП Обухов Андрей Вячеславович. ИНН 602718266247. Все
              права защищены.
            </p>
            <p>Индивидуальный предприниматель · Российская Федерация</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

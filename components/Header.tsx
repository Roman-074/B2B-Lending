"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#tasks", label: "Задачи" },
  { href: "#services", label: "Услуги" },
  { href: "#benefits", label: "Польза" },
  { href: "#cooperation", label: "Как работаю" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокируем прокрутку фона при открытом мобильном меню
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Светлая тема шапки — пока мы наверху поверх тёмного hero и меню закрыто
  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-graphite-100 bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content flex h-[72px] items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3" aria-label="На главную">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold tracking-tight transition-all duration-300 group-hover:scale-105 ${
              light ? "bg-white text-navy-950" : "bg-navy-900 text-white"
            }`}
          >
            ОА
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`text-sm font-semibold transition-colors duration-300 ${
                light ? "text-white" : "text-navy-900"
              }`}
            >
              Обухов А. В.
            </span>
            <span
              className={`text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                light ? "text-navy-200" : "text-graphite-400"
              }`}
            >
              Инженерные проекты
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                light
                  ? "text-navy-100 hover:text-white after:bg-steel-300"
                  : "text-graphite-600 hover:text-navy-900 after:bg-steel-500"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className={`hidden lg:inline-flex ${
            light
              ? "btn bg-white text-navy-900 shadow-soft hover:-translate-y-0.5 hover:bg-navy-50"
              : "btn-primary"
          }`}
        >
          Связаться
        </a>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${
            light
              ? "text-white hover:bg-white/10"
              : "text-navy-900 hover:bg-navy-50"
          }`}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`overflow-hidden border-t border-graphite-100 bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-content flex flex-col gap-1 py-4" aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-graphite-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Связаться
          </a>
        </nav>
      </div>
    </header>
  );
}

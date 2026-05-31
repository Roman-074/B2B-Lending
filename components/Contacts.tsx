"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { IconMail, IconPhone, IconDocument, IconArrowRight } from "./icons";

const EMAIL = "andrey.neu@mail.ru";
const PHONE = "+7 961 807 90 90";
const PHONE_HREF = "tel:+79618079090";

const requisites = [
  { label: "ИНН", value: "602718266247" },
  {
    label: "Телефон",
    value: PHONE,
    href: PHONE_HREF,
    icon: IconPhone,
  },
  { label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}`, icon: IconMail },
];

export default function Contacts() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Форма без бэкенда: формируем письмо и открываем почтовый клиент
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Обращение с сайта${name ? ` — ${name}` : ""}`
    );
    const body = encodeURIComponent(
      [
        name && `Имя: ${name}`,
        contact && `Контакт для связи: ${contact}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-gradient-to-b from-white via-graphite-50/70 to-graphite-50/70 py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-[360px] w-[360px] rounded-full bg-steel-300/20 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Реквизиты */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 accent-line" />
                Контакты
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
                Опишите задачу — отвечу и предложу формат работы
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-graphite-600">
                Позвоните, напишите на почту или оставьте сообщение в форме.
                Отвечаю по существу и предлагаю понятный следующий шаг.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <dl className="mt-8 rounded-2xl border border-graphite-100 bg-white/80 shadow-card backdrop-blur-sm">
                {/* Шапка карточки — реквизит ИП без лишних подписей */}
                <div className="flex items-center gap-4 border-b border-graphite-100 px-6 py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-sm font-bold text-white">
                    ОА
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-600">
                      Индивидуальный предприниматель
                    </dt>
                    <dd className="mt-0.5 text-base font-semibold text-navy-950">
                      Обухов Андрей Вячеславович
                    </dd>
                  </div>
                </div>

                <div className="divide-y divide-graphite-100">
                  {requisites.map((r) => {
                    const Icon = r.icon;
                    return (
                      <div
                        key={r.label}
                        className="flex flex-col gap-1 px-6 py-5 transition-colors duration-200 last:rounded-b-2xl hover:bg-steel-50/50 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <dt className="text-sm font-medium text-graphite-400">
                          {r.label}
                        </dt>
                        <dd className="text-sm font-semibold text-navy-950">
                          {r.href ? (
                            <a
                              href={r.href}
                              className="inline-flex items-center gap-2 rounded-sm text-navy-700 transition-colors hover:text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2"
                            >
                              {Icon ? <Icon className="h-4 w-4" /> : null}
                              {r.value}
                            </a>
                          ) : (
                            r.value
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </div>
              </dl>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_HREF} className="btn-primary w-full sm:w-auto">
                  <IconPhone className="h-4 w-4" />
                  Позвонить
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <IconMail className="h-4 w-4" />
                  Написать на почту
                </a>
              </div>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-graphite-400">
                <IconDocument className="mt-0.5 h-4 w-4 shrink-0" />
                Деятельность ведётся в статусе индивидуального предпринимателя.
                Реквизиты предоставляются для заключения договора.
              </p>
            </Reveal>
          </div>

          {/* Форма обратной связи */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-gradient-to-br from-steel-200/50 via-graphite-100 to-transparent p-px shadow-card"
              >
                <div className="rounded-2xl bg-white/90 p-7 backdrop-blur-sm sm:p-9">
                <h3 className="text-lg font-semibold text-navy-950">
                  Форма обращения
                </h3>
                <p className="mt-1 text-sm text-graphite-500">
                  Заполните поля — письмо откроется в вашем почтовом приложении.
                  Также можно связаться по телефону{" "}
                  <a
                    href={PHONE_HREF}
                    className="font-medium text-navy-700 transition-colors hover:text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2"
                  >
                    {PHONE}
                  </a>{" "}
                  или по e-mail.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-graphite-700"
                    >
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Как к вам обращаться"
                      className="rounded-md border border-graphite-200 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-graphite-300 focus:border-steel-400 focus:ring-2 focus:ring-steel-100"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact"
                      className="text-sm font-medium text-graphite-700"
                    >
                      Телефон или e-mail
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Контакт для связи"
                      className="rounded-md border border-graphite-200 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-graphite-300 focus:border-steel-400 focus:ring-2 focus:ring-steel-100"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-graphite-700"
                  >
                    Описание задачи
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Кратко опишите проект, сроки и пожелания"
                    className="resize-y rounded-md border border-graphite-200 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors placeholder:text-graphite-300 focus:border-steel-400 focus:ring-2 focus:ring-steel-100"
                  />
                </div>

                <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Отправить обращение
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs leading-relaxed text-graphite-400">
                    Нажимая кнопку, вы соглашаетесь на обработку указанных данных
                    для ответа на обращение.
                  </p>
                </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { IconMail, IconPhone, IconDocument } from "./icons";

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

const contactHints = [
  "Кратко опишите задачу или проект",
  "Укажите сроки, город и текущий этап",
  "Добавьте контакт для обратной связи",
];

export default function Contacts() {
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
                Позвоните или напишите на почту. Отвечаю по существу и
                предлагаю понятный следующий шаг.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-graphite-100 bg-white/70 p-6 shadow-card backdrop-blur-sm">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 accent-line"
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-steel-50 text-navy-700 ring-1 ring-inset ring-navy-100">
                    <IconDocument className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-950">
                      Чтобы быстрее оценить задачу
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-600">
                      Достаточно нескольких вводных — дальше уточню детали и
                      предложу подходящий формат работы.
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {contactHints.map((hint) => (
                    <li key={hint} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel-500" />
                      <span className="text-sm leading-snug text-graphite-700">
                        {hint}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-14">
            <Reveal delay={80}>
              <dl className="rounded-2xl border border-graphite-100 bg-white/80 shadow-card backdrop-blur-sm">
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

            <Reveal delay={160}>
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
        </div>
      </div>
    </section>
  );
}

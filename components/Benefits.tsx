import Reveal from "./Reveal";
import {
  IconSystem,
  IconTarget,
  IconClock,
  IconNetwork,
  IconDocument,
  IconShield,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Benefit = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: IconSystem,
    title: "Меньше ручного контроля",
    description:
      "Беру операционную координацию на себя — не нужно держать в голове все этапы и контролировать каждого подрядчика лично.",
  },
  {
    icon: IconTarget,
    title: "Понятно, где искать клиентов",
    description:
      "Появляется ясность по рынку и каналам: кому продавать услугу и откуда брать целевые обращения.",
  },
  {
    icon: IconClock,
    title: "Меньше срывов по срокам",
    description:
      "Сроки и поставки под постоянным контролем — отклонения видны заранее, а не по факту срыва.",
  },
  {
    icon: IconNetwork,
    title: "Проще с подрядчиками",
    description:
      "Взаимодействие с исполнителями выстроено так, чтобы этапы стыковались между собой, а не простаивали.",
  },
  {
    icon: IconDocument,
    title: "Документы и коммуникации в порядке",
    description:
      "Техническая, коммерческая и организационная документация ведётся аккуратно и остаётся актуальной.",
  },
  {
    icon: IconShield,
    title: "Один ответственный координатор",
    description:
      "По задаче — один человек, с которым можно решить любой вопрос и получить понятный статус в любой момент.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="border-y border-graphite-100 bg-gradient-to-b from-graphite-50/40 via-white to-graphite-50/40 py-24 sm:py-28"
    >
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 accent-line" />
            Почему это полезно собственнику
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
            Что это даёт руководителю на практике
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite-600">
            Не отчёты ради отчётов, а понятный результат и меньше хаоса в
            процессах — с одним ответственным по задаче.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <div className="group h-full rounded-2xl border border-graphite-100 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-steel-200 hover:bg-white hover:shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-steel-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:from-navy-800 group-hover:to-navy-950 group-hover:text-white group-hover:ring-navy-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

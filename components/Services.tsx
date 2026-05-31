import Reveal from "./Reveal";
import {
  IconResearch,
  IconPromotion,
  IconEngineering,
  IconConstruction,
  IconEquipment,
  IconDocument,
  IconArrowRight,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: IconResearch,
    title: "Маркетинговые исследования для промышленности",
    description:
      "Помогаю понять рынок, конкурентов, клиентов и реальный спрос — и найти точки входа в продажи для вашей продукции или услуги.",
  },
  {
    icon: IconPromotion,
    title: "Продвижение услуг и привлечение клиентов",
    description:
      "Готовлю понятное предложение, подбираю каналы привлечения и помогаю увеличить количество целевых обращений от профильных заказчиков.",
  },
  {
    icon: IconEngineering,
    title: "Курирование инженерных проектов",
    description:
      "Держу проект под контролем: согласовываю участников, отслеживаю этапы и снижаю риск срывов и недопонимания между сторонами.",
  },
  {
    icon: IconConstruction,
    title: "Контроль строительных работ",
    description:
      "Слежу за сроками, подрядчиками и этапами, проверяю соответствие работ договорённостям и проектной документации.",
  },
  {
    icon: IconEquipment,
    title: "Нестандартное оборудование",
    description:
      "Помогаю с изготовлением под задачу: подбор исполнителей, согласование характеристик, логистика и сопровождение поставки до объекта.",
  },
  {
    icon: IconDocument,
    title: "Документация и сопроводительные материалы",
    description:
      "Готовлю и сопровождаю технические, коммерческие и организационные документы — для приёмки работ и взаимодействия между сторонами.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-graphite-50/80 to-white py-24 sm:py-28"
    >
      {/* мягкая фоновая подсветка для глубины секции */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="container-content relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 accent-line" />
            Услуги
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
            Услуги — и какую пользу они дают бизнесу
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite-600">
            Направления можно комбинировать под задачу — от отдельной
            консультации до сопровождения проекта полного цикла.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-graphite-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-steel-200 hover:shadow-card-hover">
                  {/* верхняя accent-полоса появляется при наведении */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 accent-line transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-steel-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:from-navy-800 group-hover:to-navy-950 group-hover:text-white group-hover:ring-navy-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}

          {/* Заключительная CTA-карточка в сетке услуг */}
          <Reveal delay={90}>
            <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-navy">
              {/* декоративная подсветка внутри тёмной карточки */}
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-steel-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="text-lg font-semibold leading-snug">
                  Не нашли нужное направление?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-100">
                  Опишите задачу — подберём формат работы и предложим подходящее
                  решение.
                </p>
              </div>
              <a
                href="#contacts"
                className="btn relative mt-6 self-start bg-white text-navy-900 hover:-translate-y-0.5 hover:shadow-glow"
              >
                Обсудить проект
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

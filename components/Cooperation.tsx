import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Обсуждение задачи",
    text: "Знакомлюсь с задачей, уточняю цели, ограничения и ожидаемый результат.",
  },
  {
    num: "02",
    title: "Проработка решения",
    text: "Определяю этапы, состав работ, поставки и формат взаимодействия.",
  },
  {
    num: "03",
    title: "Реализация и контроль",
    text: "Сопровождаю выполнение, контролирую сроки и держу вас в курсе по статусу.",
  },
  {
    num: "04",
    title: "Передача результата",
    text: "Оформляю документацию и передаю результат в согласованном виде.",
  },
];

export default function Cooperation() {
  return (
    <section
      id="cooperation"
      className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28"
    >
      {/* слоистый фон тёмной секции */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#0c1422]" />
        <div className="absolute inset-0 bg-grid-light [background-size:60px_60px] [mask-image:radial-gradient(ellipse_60%_70%_at_80%_20%,#000,transparent_75%)]" />
        <div className="absolute -right-20 top-10 h-[360px] w-[360px] animate-float-slow rounded-full bg-steel-500/15 blur-[120px]" />
      </div>
      <div className="container-content relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-steel-200">
                <span className="h-px w-8 accent-line" />Как строится работа
              </p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Понятные условия и прозрачное взаимодействие
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-100">
                Начинаем с задачи и ожидаемого результата. Формат подбираю под
                проект — это может быть отдельная консультация, сопровождение
                одного этапа или ведение проекта полного цикла.
              </p>
              <p className="mt-4 leading-relaxed text-navy-200">
                Условия, объём работ и порядок взаимодействия фиксируем заранее.
                Такой формат удобен и для разовых задач, и для продолжительной
                работы с предприятием.
              </p>
              <a
                href="#contacts"
                className="btn group relative mt-8 overflow-hidden bg-white text-navy-900 shadow-soft hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-steel-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Обсудить проект</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={(i % 2) * 100}>
                  <div className="group relative h-full overflow-hidden rounded-2xl glass-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-300/40 hover:bg-white/[0.1]">
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 accent-line transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="inline-flex items-baseline gap-1 text-sm font-semibold tracking-widest text-steel-300">
                      {step.num}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-100">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

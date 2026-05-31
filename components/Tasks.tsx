import Reveal from "./Reveal";
import { IconCheck } from "./icons";

const tasks = [
  "Понять, кому и как продавать промышленную услугу",
  "Найти клиентов для производства или подрядной организации",
  "Проконтролировать выполнение инженерного или строительного проекта",
  "Организовать поставку или изготовление нестандартного оборудования",
  "Подготовить документы и сопроводительные материалы",
  "Связать между собой заказчика, подрядчика, производство и логистику",
];

export default function Tasks() {
  return (
    <section id="tasks" className="bg-white py-24 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 accent-line" />
            Какие задачи закрываю
          </p>
          <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
            Если перед вами стоит одна из этих задач — помогу довести её до
            результата
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite-600">
            Работаю с производствами, подрядными и инженерными организациями.
            Беру задачу целиком и веду её до понятного результата.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, i) => (
            <Reveal key={task} delay={(i % 3) * 80}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-graphite-100 bg-graphite-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-200 hover:bg-white hover:shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-steel-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-all duration-300 group-hover:from-navy-800 group-hover:to-navy-950 group-hover:text-white group-hover:ring-navy-900">
                  <IconCheck className="h-5 w-5" />
                </span>
                <p className="text-base font-medium leading-snug text-navy-900">
                  {task}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

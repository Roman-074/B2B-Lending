import Reveal from "./Reveal";

const facets = [
  "Работа с промышленными предприятиями",
  "Сопровождение подрядных работ",
  "Поиск клиентов и анализ рынка",
  "Координация поставок и логистики",
  "Контроль сроков и этапов",
  "Подготовка и ведение документации",
  "Связка заказчика и подрядчиков",
  "Сопровождение инженерных задач",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 accent-line" />О деятельности
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
              Один человек на стыке продаж, инженерии и управления проектами
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facets.map((f) => (
                <div
                  key={f}
                  className="group flex items-start gap-3 rounded-xl border border-graphite-100 bg-graphite-50/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel-200 hover:bg-white hover:shadow-card"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-steel-500 transition-transform duration-300 group-hover:scale-150" />
                  <span className="text-sm leading-snug text-graphite-700">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal
            delay={80}
            className="space-y-5 text-[17px] leading-relaxed text-graphite-700"
          >
            <p>
              Помогаю промышленным компаниям с задачами, которые обычно
              распределены между несколькими людьми и подрядчиками: понять
              рынок и найти клиентов, запустить и проконтролировать проект,
              организовать поставки и привести в порядок документы. По задаче вы
              работаете с одним ответственным координатором.
            </p>
            <p>
              Беру на себя взаимодействие между предприятием, подрядными
              организациями и поставщиками: согласование объёмов и условий
              работ, контроль графиков и промежуточных результатов, оперативное
              решение вопросов, которые возникают по ходу. Отдельно занимаюсь
              поставками — подбором оборудования и материалов, согласованием
              характеристик и сопровождением до объекта.
            </p>
            <p>
              Значительная часть работы — техническая, коммерческая и
              сопроводительная документация. Корректно оформленные материалы
              упрощают приёмку, снижают количество разногласий и сохраняют
              прозрачность на каждом этапе. Перед продажами помогаю разобраться,
              кому и как продавать промышленную услугу и где брать целевые
              обращения.
            </p>
            <p>
              Работаю не на разовые услуги, а на понятный и управляемый процесс:
              вы видите статус задачи в любой момент и можете рассчитывать на
              предсказуемый результат — без лишнего ручного контроля с вашей
              стороны.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

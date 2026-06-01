import { IconCheck } from "./icons";

const benefits = [
  "Поиск клиентов для промышленного B2B",
  "Исследование рынка",
  "Контроль подрядчиков и сроков",
  "Сопровождение инженерных проектов",
  "Документы, поставки и логистика",
];

function HeroBlueprintBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#08111f]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(70% 62% at 74% 15%, rgba(74,163,182,0.23), transparent 62%), radial-gradient(48% 58% at 96% 88%, rgba(217,154,95,0.14), transparent 66%), radial-gradient(54% 58% at 0% 100%, rgba(63,100,152,0.36), transparent 70%), linear-gradient(135deg, #14233a 0%, #0d1829 46%, #08111f 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(174,213,222,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(174,213,222,0.24) 1px, transparent 1px), linear-gradient(rgba(174,213,222,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(174,213,222,0.10) 1px, transparent 1px)",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
          backgroundSize: "96px 96px, 96px 96px, 24px 24px, 24px 24px",
        }}
      />

      <div
        className="absolute inset-y-0 left-0 w-[64%] bg-gradient-to-r from-[#08111f] via-[#08111f]/90 to-transparent"
        style={{
          maskImage:
            "linear-gradient(90deg, #000 0%, #000 66%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, #000 0%, #000 66%, transparent 100%)",
        }}
      />

      <StructuralBlueprint className="absolute bottom-[-160px] left-[-260px] h-[420px] w-[760px] rotate-[4deg] text-white/[0.075] sm:left-[-180px] lg:bottom-[-190px] lg:left-[-110px] lg:h-[500px] lg:w-[900px]" />

      <div className="absolute left-0 top-[72px] h-24 w-full bg-gradient-to-r from-[#08111f] via-[#08111f]/95 to-transparent sm:w-[72%] lg:w-[48%]" />

      <div className="absolute -right-32 top-4 h-[520px] w-[520px] animate-float-slow rounded-full bg-steel-400/20 blur-[140px]" />
      <div className="absolute bottom-[-220px] right-[12%] h-[420px] w-[420px] animate-float rounded-full bg-[#d99a5f]/10 blur-[130px]" />
      <div className="absolute -bottom-48 -left-20 h-[440px] w-[440px] rounded-full bg-navy-500/25 blur-[140px]" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.045] mix-blend-overlay">
        <filter id="heroNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroNoise)" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </div>
  );
}

function StructuralBlueprint({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 900 500"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g strokeWidth="1.2">
        <path d="M74 306H820" />
        <path d="M118 306 214 186 312 306 410 186 508 306 606 186 704 306 796 206" />
        <path d="M214 186H606" />
        <path d="M118 306 214 306M312 306H410M508 306H606M704 306H820" />
        <path d="M214 186 312 306M312 306 410 186M410 186 508 306M508 306 606 186M606 186 704 306" opacity="0.7" />
      </g>

      <g strokeWidth="1" strokeDasharray="12 8" opacity="0.62">
        <path d="M74 350H820" />
        <path d="M118 112V388M312 112V388M508 112V388M704 112V388" />
      </g>

      <g strokeWidth="1" opacity="0.72">
        <path d="M118 392V438M820 392V438M118 420H820" />
        <path d="M110 412 126 428M812 412 828 428" />
        <circle cx="214" cy="186" r="14" />
        <circle cx="410" cy="186" r="14" />
        <circle cx="606" cy="186" r="14" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy-950 pt-[72px] text-white"
    >
      <HeroBlueprintBackground />

      <div className="container-content relative grid items-center gap-14 pb-20 pt-4 sm:pb-24 sm:pt-6 lg:grid-cols-12 lg:gap-12 lg:pb-28 lg:pt-8">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up text-steel-200">
            <span className="h-px w-8 accent-line" />
            ИП Обухов А. В. · промышленный B2B
          </p>

          <h1
            className="mt-6 animate-fade-up text-balance text-[2.125rem] font-semibold leading-[1.08] sm:text-[2.875rem] lg:text-[3.275rem]"
            style={{ animationDelay: "80ms" }}
          >
            Помогаю промышленным компаниям находить клиентов, запускать проекты
            и{" "}
            <span className="bg-gradient-to-r from-white via-steel-100 to-steel-300 bg-clip-text text-transparent">
              контролировать подрядчиков
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-navy-100"
            style={{ animationDelay: "160ms" }}
          >
            Маркетинговые исследования, продвижение услуг, сопровождение
            инженерных проектов, контроль строительных работ, логистика
            оборудования и подготовка документации для промышленного бизнеса.
          </p>

          {/* Ключевые выгоды прямо на первом экране */}
          <ul
            className="mt-8 grid animate-fade-up grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
            style={{ animationDelay: "220ms" }}
          >
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-steel-400/20 text-steel-200">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-navy-50">{b}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#contacts"
              className="btn group relative overflow-hidden bg-white text-navy-900 shadow-soft hover:-translate-y-0.5 hover:shadow-glow"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-steel-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Обсудить задачу</span>
            </a>
          </div>
        </div>

        {/* Абстрактная инженерная иллюстрация вместо фото */}
        <div className="lg:col-span-5">
          <div className="group animate-fade-up rounded-2xl bg-gradient-to-br from-steel-400/40 via-white/10 to-transparent p-px shadow-glow-navy">
            <div className="glass-dark relative overflow-hidden rounded-2xl p-8">
              {/* внутренняя чертёжная сетка */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              <svg
                viewBox="0 0 340 300"
                className="relative h-auto w-full"
                role="img"
                aria-label="Аналитическая панель: график роста показателей проекта по этапам, план и факт"
              >
                <defs>
                  <linearGradient id="hl" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#cfe6ec" />
                    <stop offset="1" stopColor="#3f6498" />
                  </linearGradient>
                  <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4aa3b6" stopOpacity="0.32" />
                    <stop offset="1" stopColor="#4aa3b6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* угловые метки чертежа */}
                <g
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.25"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path d="M22 40V22H40" />
                  <path d="M318 40V22H300" />
                  <path d="M22 260V278H40" />
                  <path d="M318 260V278H300" />
                </g>

                {/* горизонтальные линии сетки */}
                <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                  <line x1="44" y1="86" x2="300" y2="86" />
                  <line x1="44" y1="128" x2="300" y2="128" />
                  <line x1="44" y1="170" x2="300" y2="170" />
                </g>

                {/* столбцы (диаграмма по этапам) */}
                <g fill="url(#hl)" opacity="0.16">
                  <rect x="49" y="186" width="14" height="26" rx="1.5" />
                  <rect x="75" y="172" width="14" height="40" rx="1.5" />
                  <rect x="101" y="178" width="14" height="34" rx="1.5" />
                  <rect x="127" y="160" width="14" height="52" rx="1.5" />
                  <rect x="153" y="166" width="14" height="46" rx="1.5" />
                  <rect x="179" y="148" width="14" height="64" rx="1.5" />
                  <rect x="205" y="154" width="14" height="58" rx="1.5" />
                  <rect x="231" y="132" width="14" height="80" rx="1.5" />
                  <rect x="257" y="116" width="14" height="96" rx="1.5" />
                </g>

                {/* оси */}
                <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.25" strokeLinecap="round">
                  <line x1="44" y1="70" x2="44" y2="212" />
                  <line x1="44" y1="212" x2="300" y2="212" />
                </g>

                {/* план (пунктир) */}
                <path
                  d="M52 188 L292 96"
                  fill="none"
                  stroke="#aed8e2"
                  strokeWidth="1.3"
                  strokeDasharray="5 6"
                  opacity="0.5"
                />

                {/* область под фактическим графиком */}
                <path
                  d="M52 178 L100 160 L148 166 L196 130 L244 118 L292 82 L292 212 L52 212 Z"
                  fill="url(#heroArea)"
                />

                {/* факт — линия роста */}
                <path
                  d="M52 178 L100 160 L148 166 L196 130 L244 118 L292 82"
                  fill="none"
                  stroke="url(#hl)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* точки данных */}
                <g fill="#0c1626" stroke="url(#hl)" strokeWidth="1.5">
                  <circle cx="52" cy="178" r="3.4" />
                  <circle cx="100" cy="160" r="3.4" />
                  <circle cx="148" cy="166" r="3.4" />
                  <circle cx="196" cy="130" r="3.4" />
                  <circle cx="244" cy="118" r="3.4" />
                </g>

                {/* итоговая точка — industrial-акцент */}
                <circle
                  cx="292"
                  cy="82"
                  r="9"
                  fill="none"
                  stroke="#e0904c"
                  strokeWidth="2"
                  opacity="0.85"
                />
                <circle cx="292" cy="82" r="4.5" fill="#e0904c" />
              </svg>

              <div className="relative mt-6 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  Один координатор по задаче
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                  Беру на себя связку «заказчик — подрядчик — производство —
                  логистика» и довожу проект до результата.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { routes, images } from "../data";
import { DetailShell } from "../components/DetailShell";
import { Icon } from "../components/Icon";

const fields = ["Вес (кг)", "Талия (см)", "Живот (см)", "Бедра (см)", "Грудь (см)"];

const scaleDefaults = [
  ["Уровень энергии", 5, "Слабость", "Пик бодрости"],
  ["Качество сна", 7],
  ["Комфорт ЖКТ", 8],
  ["Устойчивость к стрессу", 6],
  ["Тяга к сладкому", 4, "Нет тяги", "Сильная тяга"],
];

export function MeasurementsScreen({ onNavigate }) {
  const [scales, setScales] = useState(Object.fromEntries(scaleDefaults.map(([label, value]) => [label, value])));

  return (
    <DetailShell
      active={routes.program}
      avatar={images.avatarMeasurements}
      onBack={() => onNavigate(routes.dashboard)}
      onNavigate={onNavigate}
      title="Динамика и замеры"
    >
      <div className="space-y-section-gap">
        <section className="space-y-2">
          <p className="font-body-md text-muted-text">
            Отслеживаем не только вес, но и самочувствие, энергию, сон, ЖКТ и устойчивость привычек.
          </p>
        </section>

        <section className="bg-white-card rounded-xl border border-border-light p-container-padding-mobile shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-headline-md text-graphite">Текущая неделя</h2>
              <p className="font-body-sm text-muted-text mt-1">Пора внести замеры</p>
            </div>
            <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-sm text-label-sm">
              Не внесены
            </span>
          </div>
          <button className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex justify-center items-center gap-2" type="button">
            <Icon name="edit_note" />
            Внести данные
          </button>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline-md text-graphite">Основные показатели</h3>
          <div className="grid grid-cols-2 gap-card-gap">
            {fields.map((field) => (
              <div className={`space-y-2 ${field === "Грудь (см)" ? "col-span-2" : ""}`} key={field}>
                <label className="font-label-sm text-muted-text px-1">{field}</label>
                <input
                  className="w-full bg-white-card border border-border-light rounded-lg p-3 text-body-md focus:ring-primary focus:border-primary transition-all"
                  placeholder={field === "Вес (кг)" ? "00.0" : "00"}
                  type="number"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline-md text-graphite">Самочувствие (1-10)</h3>
          <div className="space-y-8 bg-white-card p-container-padding-mobile rounded-xl border border-border-light">
            {scaleDefaults.map(([label, , left, right]) => (
              <div className="space-y-4" key={label}>
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-graphite">{label}</span>
                  <span className="text-primary font-bold">{scales[label]}</span>
                </div>
                <input
                  className="w-full h-2 bg-secondary-container rounded-full appearance-none cursor-pointer accent-primary"
                  max="10"
                  min="1"
                  onChange={(event) => setScales((values) => ({ ...values, [label]: event.target.value }))}
                  type="range"
                  value={scales[label]}
                />
                {(left || right) && (
                  <div className="flex justify-between text-[10px] text-muted-text">
                    <span>{left}</span>
                    <span>{right}</span>
                  </div>
                )}
              </div>
            ))}
            <div className="space-y-2">
              <label className="font-label-sm text-muted-text px-1">Комментарий к состоянию</label>
              <textarea
                className="w-full bg-background border border-border-light rounded-lg p-3 text-body-md focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder="Как вы себя чувствуете сегодня?"
                rows="3"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4 pb-12">
          <h3 className="font-headline-md text-graphite">История динамики</h3>
          <div className="space-y-card-gap">
            <HistoryCard icon="trending_down" meta="14 Октября, 2023" title="Неделя 1" value="-1.2 кг" />
            <HistoryCard dim icon="flag" meta="07 Октября, 2023" title="Старт" value="База" />
          </div>
        </section>
      </div>
    </DetailShell>
  );
}

function HistoryCard({ icon, title, meta, value, dim = false }) {
  return (
    <div className={`bg-white-card p-4 rounded-xl border border-border-light flex justify-between items-center ${dim ? "opacity-80" : ""}`}>
      <div className="flex gap-4 items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${dim ? "bg-secondary-container text-secondary" : "bg-olive-soft text-primary"}`}>
          <Icon name={icon} />
        </div>
        <div>
          <p className="font-label-md text-graphite">{title}</p>
          <p className="text-[12px] text-muted-text">{meta}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-label-md ${dim ? "text-graphite" : "text-primary"}`}>{value}</p>
        <p className="text-[10px] text-muted-text">Вес: {dim ? "69.7" : "68.5"} кг</p>
      </div>
    </div>
  );
}

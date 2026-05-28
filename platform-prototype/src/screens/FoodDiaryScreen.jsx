import { useState } from "react";
import { routes, images } from "../data";
import { DetailShell } from "../components/DetailShell";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";

const days = ["День 1", "День 2", "День 3", "День 4", "День 5"];

export function FoodDiaryScreen({ onNavigate }) {
  const [activeDay, setActiveDay] = useState("День 1");
  const [water, setWater] = useState(6);

  return (
    <DetailShell
      active={routes.course}
      avatar={images.avatarDiary}
      onBack={() => onNavigate(routes.dashboard)}
      onNavigate={onNavigate}
      title="Дневник питания"
    >
      <section className="mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-graphite mb-2">Дневник питания</h2>
        <p className="font-body-md text-body-md text-muted-text leading-relaxed">
          Заполняйте спокойно и честно. Здесь не оценивается «правильно/неправильно» — нам важно увидеть вашу
          реальную картину.
        </p>
      </section>

      <div className="bg-white-card border border-border-light rounded-xl p-5 mb-section-gap">
        <div className="flex justify-between items-center mb-4">
          <span className="font-label-sm text-label-sm text-muted-text uppercase tracking-wider">
            Дневник за 3 дня
          </span>
          <span className="bg-grey-green-status px-2 py-1 rounded text-label-sm font-semibold text-graphite">
            В процессе
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-body-sm text-body-sm font-medium text-graphite">1 из 3 дней заполнен</span>
          <span className="font-body-sm text-body-sm text-primary">33%</span>
        </div>
        <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary-container w-1/3 transition-all duration-500" />
        </div>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar gap-card-gap mb-6 -mx-container-padding-mobile px-container-padding-mobile">
        {days.map((day) => {
          const active = activeDay === day;
          return (
            <button
              className={`flex-shrink-0 px-6 py-3 rounded-full font-label-md transition-all ${
                active ? "bg-primary-container text-white" : "bg-surface-container text-muted-text hover:bg-surface-container-high"
              }`}
              key={day}
              onClick={() => setActiveDay(day)}
              type="button"
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="space-y-card-gap mb-section-gap">
        <div className="bg-white-card border border-border-light rounded-xl p-5 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="font-label-sm text-label-sm text-primary mb-1">08:30 • Завтрак</p>
              <h3 className="font-headline-md text-headline-md text-graphite">Овсяная каша, ягоды, орехи</h3>
            </div>
            <button className="text-outline hover:text-primary transition-colors" type="button">
              <Icon name="edit" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <MealMetric label="Голод" value="6" />
            <MealMetric label="Сытость" value="8" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden border border-border-light bg-surface-container-low">
              <FallbackImage
                alt="Breakfast"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full"
                src={images.breakfast}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-1">
                <Icon className="text-[18px] text-primary" name="sentiment_satisfied" />
                <span className="text-body-sm font-medium">Самочувствие: Отличное</span>
              </div>
              <div className="text-body-sm text-muted-text">Реакция ЖКТ: Без особенностей</div>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-dashed border-border-light text-primary font-label-md hover:bg-white-card hover:border-primary transition-all active:scale-95" type="button">
          <Icon name="add_circle" />
          Добавить приём пищи
        </button>
      </div>

      <section className="bg-white-card border border-border-light rounded-xl p-6 mb-12">
        <h3 className="font-headline-md text-headline-md text-graphite mb-6">Итоги дня</h3>
        <div className="space-y-6">
          <div>
            <label className="flex justify-between mb-2">
              <span className="font-label-md text-graphite">Вода (стаканы)</span>
              <span className="text-primary font-bold">{water}/8</span>
            </label>
            <div className="flex gap-2">
              {Array.from({ length: 8 }, (_, index) => {
                const filled = index < water;
                return (
                  <button
                    className={filled ? "text-primary" : "text-outline-variant"}
                    key={index}
                    onClick={() => setWater(index + 1)}
                    type="button"
                  >
                    <Icon filled={filled} name="water_drop" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-card-gap">
            <SummaryMetric label="Энергия (1-10)" value="7" />
            <SummaryMetric label="Тяга к сладкому" value="3" />
          </div>

          <div>
            <label className="block font-label-md text-graphite mb-2">Сон (часы)</label>
            <div className="flex items-center gap-3">
              <Icon className="text-primary" name="bedtime" />
              <input
                className="w-20 bg-surface border border-border-light rounded-lg text-graphite focus:ring-primary focus:border-primary"
                defaultValue="7.5"
                type="number"
              />
              <span className="text-body-sm text-muted-text">часов</span>
            </div>
          </div>

          <div>
            <label className="block font-label-md text-graphite mb-2">Комментарий</label>
            <textarea
              className="w-full bg-surface border border-border-light rounded-xl p-4 text-body-md placeholder:text-outline-variant focus:ring-primary focus:border-primary"
              placeholder="Как прошел ваш день? Любые наблюдения..."
              rows="3"
            />
          </div>
        </div>
      </section>

      <div className="space-y-4 mb-10">
        <button className="w-full bg-primary-container text-white py-4 rounded-xl font-headline-md active:scale-95 transition-transform shadow-md" type="button">
          Сохранить день
        </button>
        <button className="w-full bg-secondary-container text-primary py-4 rounded-xl font-headline-md active:scale-95 transition-transform" type="button">
          Отправить дневник куратору
        </button>
      </div>
    </DetailShell>
  );
}

function MealMetric({ label, value }) {
  return (
    <div className="bg-olive-soft/30 p-3 rounded-lg border border-olive-soft">
      <p className="text-[10px] uppercase font-bold text-primary mb-1">{label}</p>
      <p className="font-headline-md text-primary">
        {value}
        <span className="text-label-sm text-outline-variant font-normal">/10</span>
      </p>
    </div>
  );
}

function SummaryMetric({ label, value }) {
  return (
    <div className="p-4 bg-surface-container-low rounded-lg">
      <p className="font-label-sm text-muted-text mb-1 uppercase tracking-tighter">{label}</p>
      <p className="font-headline-md text-primary">{value}</p>
    </div>
  );
}

import { routes, images } from "../data";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";

export function CourseScreen({ onNavigate }) {
  return (
    <PageShell active={routes.course} avatar={images.avatarCourse} onNavigate={onNavigate}>
      <section className="mb-8">
        <h2 className="font-headline-xl text-headline-xl text-graphite mb-1">Мой курс</h2>
        <p className="font-body-md text-muted-text">
          Материалы открываются постепенно, чтобы вы могли комфортно внедрять изменения в свою жизнь.
        </p>
      </section>

      <section className="mb-section-gap">
        <div className="bg-white-card border border-border-light rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-sm text-label-sm px-3 py-1 bg-olive-soft text-primary rounded-full uppercase tracking-wider">
              Текущий статус
            </span>
            <Icon className="text-primary material-filled" name="stars" />
          </div>
          <h3 className="font-headline-md text-headline-md text-graphite mb-2">
            Сейчас: подготовительный этап
          </h3>
          <p className="font-body-sm text-muted-text mb-4">Открыта 0 неделя — фундамент вашего здоровья.</p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-muted-text uppercase">Прогресс недели</span>
              <span className="font-label-md text-primary">40%</span>
            </div>
            <ProgressBar track="bg-secondary-container" value={40} />
          </div>
          <div className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg border border-border-light/50">
            <Icon className="text-primary text-[20px]" name="info" />
            <p className="font-body-sm text-on-surface-variant">
              До открытия следующей недели: <span className="font-semibold">после проверки диагностики</span>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-card-gap">
        <h3 className="font-headline-md text-headline-md text-graphite flex items-center gap-2">
          Весь маршрут
          <span className="font-body-sm text-muted-text font-normal">(13 недель)</span>
        </h3>

        <div className="week-card bg-white-card border-2 border-primary rounded-xl p-5 flex items-center justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-olive-soft flex items-center justify-center text-primary font-bold text-lg">
              0
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-graphite">Диагностика и подготовка</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-label-sm text-primary flex items-center gap-1">
                  <Icon className="text-[14px]" name="check_circle" />
                  В процессе
                </span>
              </div>
            </div>
          </div>
          <button
            className="bg-primary text-white font-label-md py-2 px-5 rounded-lg active:scale-95 transition-all shadow-sm"
            onClick={() => onNavigate(routes.week)}
            type="button"
          >
            Открыть
          </button>
        </div>

        <div className="week-card bg-surface-container border border-border-light rounded-xl p-5 flex items-center justify-between opacity-80">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-muted-text font-bold text-lg">
              1
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-muted-text">Старт питания</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-label-sm text-muted-text flex items-center gap-1 uppercase tracking-tight">
                  Скоро откроется
                </span>
              </div>
            </div>
          </div>
          <Icon className="text-outline" name="lock_open" />
        </div>

        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-border-light flex-grow" />
          <span className="font-label-sm text-outline-variant uppercase tracking-widest">Программа трансформации</span>
          <div className="h-px bg-border-light flex-grow" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <LockedWeek number="2" title="Работа с дефицитами" subtitle="Заблокировано" />
          <LockedWeek number="3" title="Очищение и детокс" subtitle="Заблокировано" />
          <div className="py-6 flex flex-col items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
              <div className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
            </div>
            <p className="font-label-sm text-outline-variant text-center uppercase">Еще 9 тематических недель</p>
          </div>
          <LockedWeek number="12" title="Подведение итогов" subtitle="Финальная точка" faded />
        </div>
      </section>
    </PageShell>
  );
}

function LockedWeek({ number, title, subtitle, faded = false }) {
  return (
    <div
      className={`week-card ${
        faded ? "bg-surface-container/20" : "bg-surface-container/40"
      } border border-border-light border-dashed rounded-xl p-5 flex items-center justify-between grayscale`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center text-outline-variant font-bold text-lg">
          {number}
        </div>
        <div>
          <h4 className="font-body-lg text-body-lg text-outline-variant">{title}</h4>
          <p className="text-label-sm text-outline-variant/60">{subtitle}</p>
        </div>
      </div>
      <Icon className="text-outline-variant material-filled" name="lock" />
    </div>
  );
}

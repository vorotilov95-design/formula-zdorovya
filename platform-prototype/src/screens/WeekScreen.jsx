import { routes, images } from "../data";
import { DetailShell } from "../components/DetailShell";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";
import { ProgressBar } from "../components/ProgressBar";

export function WeekScreen({ onNavigate, onCurator }) {
  return (
    <DetailShell
      active={routes.course}
      avatar={images.avatarWeek}
      centered
      onBack={() => onNavigate(routes.course)}
      onNavigate={onNavigate}
      subtitle="Диагностика и подготовка"
      title="0 неделя"
    >
      <div className="space-y-section-gap">
        <section>
          <div className="bg-white-card border border-border-light rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-label-sm text-label-sm text-primary-container bg-olive-soft px-3 py-1 rounded-full uppercase tracking-wider">
                  Фокус недели
                </span>
                <h1 className="font-headline-lg text-headline-lg text-graphite mt-3">
                  Собрать данные для программы
                </h1>
              </div>
              <div className="bg-grey-green-status text-graphite font-label-sm text-label-sm px-3 py-1 rounded-lg">
                В процессе
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="font-body-sm text-body-sm text-muted-text">Прогресс выполнения</span>
                <span className="font-label-md text-label-md text-primary">2 из 5 задач</span>
              </div>
              <ProgressBar track="bg-surface-container-low" value={40} />
            </div>
          </div>
        </section>

        <section className="space-y-card-gap">
          <h2 className="font-headline-md text-headline-md text-graphite">Материалы недели</h2>
          <div className="flex overflow-x-auto gap-card-gap hide-scrollbar pb-2 -mx-2 px-2">
            <div className="min-w-[280px] bg-white-card border border-border-light rounded-xl overflow-hidden flex flex-col">
              <div className="relative h-32 bg-surface-container">
                <FallbackImage
                  alt="Video cover"
                  className="w-full h-full object-cover"
                  fallbackClassName="w-full h-full"
                  src={images.weekVideo}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <Icon className="text-white text-4xl material-filled" name="play_circle" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-md">
                  12 мин
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-label-md text-label-md text-graphite mb-4">Как будет проходить курс</h3>
                <button
                  className="mt-auto w-full py-2 bg-olive-soft text-primary font-label-md text-label-md rounded-lg transition-transform active:scale-95"
                  onClick={() => onNavigate(routes.lesson)}
                  type="button"
                >
                  Смотреть
                </button>
              </div>
            </div>

            <MaterialCard button="Открыть PDF" icon="description" title="Welcome-гайд" />
            <MaterialCard
              button="Инструкция"
              icon="menu_book"
              onClick={() => onNavigate(routes.foodDiary)}
              title="Дневник питания"
            />
          </div>
        </section>

        <section className="space-y-card-gap">
          <h2 className="font-headline-md text-headline-md text-graphite">Задания недели</h2>
          <div className="space-y-3">
            <TaskCard done label="Заполнить анкету" status="Выполнено" />
            <TaskCard
              inProgress
              label="Заполнить дневник питания 3 дня"
              onClick={() => onNavigate(routes.foodDiary)}
              status="В процессе"
            />
            <TaskCard
              alert
              label="Загрузить анализы"
              onClick={() => onNavigate(routes.assignment)}
              status="Не загружено"
            />
            <TaskCard
              label="Внести стартовые замеры"
              onClick={() => onNavigate(routes.measurements)}
              status="Не начато"
            />
          </div>
        </section>

        <section className="pb-8">
          <div className="bg-surface-container-low rounded-2xl p-6 border border-border-light flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-graphite mb-1">Нужна помощь?</h3>
              <p className="font-body-sm text-body-sm text-muted-text">Куратор ответит на ваши вопросы</p>
            </div>
            <button
              className="bg-primary-container text-white px-5 py-3 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
              onClick={onCurator}
              type="button"
            >
              <Icon className="text-[20px]" name="chat" />
              Написать
            </button>
          </div>
        </section>
      </div>
    </DetailShell>
  );
}

function MaterialCard({ icon, title, button, onClick }) {
  return (
    <div className="min-w-[200px] bg-white-card border border-border-light rounded-xl p-4 flex flex-col">
      <div className="w-10 h-10 bg-tertiary-fixed-dim/30 text-tertiary rounded-lg flex items-center justify-center mb-3">
        <Icon name={icon} />
      </div>
      <h3 className="font-label-md text-label-md text-graphite mb-4">{title}</h3>
      <button
        className="mt-auto w-full py-2 border border-border-light text-primary font-label-md text-label-md rounded-lg transition-transform active:scale-95"
        onClick={onClick}
        type="button"
      >
        {button}
      </button>
    </div>
  );
}

function TaskCard({ label, status, done = false, inProgress = false, alert = false, onClick }) {
  return (
    <button
      className={`w-full flex items-center gap-4 bg-white-card p-4 rounded-xl text-left ${
        done
          ? "border border-border-light opacity-75"
          : inProgress
            ? "border-2 border-primary-container shadow-md"
            : "border border-border-light"
      }`}
      onClick={onClick}
      type="button"
    >
      {done && (
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
          <Icon className="text-[16px]" name="check" />
        </div>
      )}
      {inProgress && (
        <div className="w-6 h-6 rounded-full border-2 border-primary-container flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-primary-container rounded-full" />
        </div>
      )}
      {alert && (
        <div className="w-6 h-6 rounded-full border border-error flex items-center justify-center text-error">
          <Icon className="text-[16px]" name="priority_high" />
        </div>
      )}
      {!done && !inProgress && !alert && <div className="w-6 h-6 rounded-full border border-outline-variant" />}
      <div className="flex-grow">
        <p className={`font-label-md text-label-md text-graphite ${done ? "line-through" : ""}`}>{label}</p>
        <p
          className={`text-[11px] font-semibold uppercase ${
            done ? "text-primary" : alert ? "text-error" : inProgress ? "text-primary-container" : "text-muted-text"
          }`}
        >
          {status}
        </p>
      </div>
      <Icon
        className={alert ? "text-outline" : inProgress ? "text-outline" : "text-outline-variant"}
        name={alert ? "upload_file" : inProgress ? "chevron_right" : "add_circle"}
      />
    </button>
  );
}

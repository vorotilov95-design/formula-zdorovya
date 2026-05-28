import { images } from "../data";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";

const stats = [
  ["На проверке", "6", "assignment", "text-primary"],
  ["Ждут открытия", "3", "lock_open", "text-primary"],
  ["Нет анализов", "4", "lab_research", "text-error"],
  ["Неактивны 3+", "2", "person_off", "text-secondary"],
];

const tasks = [
  {
    name: "Мария Иванова",
    tag: "Дневник питания",
    time: "10:45",
    image: images.curatorMaria,
  },
  {
    name: "Елена Петрова",
    tag: "Результаты чекапа",
    time: "12:20",
    image: images.curatorElena,
  },
  {
    name: "Анна Смирнова",
    tag: "Отчет по активности",
    time: "14:15",
    image: images.curatorAnna,
  },
];

const students = [
  ["ОВ", "Ольга Васильева", "3 неделя • Базовый курс", "45%", "Активна", "text-primary"],
  ["КМ", "Ксения Маркова", "1 неделя • Детокс-интенсив", "12%", "Нужен отчет", "text-error"],
  ["ТК", "Татьяна Кузнецова", "6 неделя • Гормоны и сон", "88%", "Финиш скоро", "text-primary"],
];

export function CuratorDashboardScreen() {
  return (
    <div className="min-h-screen bg-surface-container-low font-body-md text-on-surface pb-12">
      <header className="bg-surface sticky top-0 z-40 border-b border-border-light">
        <div className="flex justify-between items-center w-full px-container-padding-mobile h-16 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary-container">
              <FallbackImage
                alt="Curator"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full"
                src={images.avatarCurator}
              />
            </div>
            <div className="hidden md:block">
              <p className="font-label-sm text-label-sm text-muted-text">Куратор</p>
              <p className="font-headline-md text-headline-md text-graphite tracking-tight">Анна Волкова</p>
            </div>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-graphite tracking-tight font-extrabold md:text-headline-lg">
            Формула здоровья
          </h1>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-100" type="button">
              <Icon className="text-primary" name="notifications" />
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-100 md:hidden" type="button">
              <Icon className="text-primary" name="menu" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-container-padding-mobile pt-8 space-y-section-gap">
        <section>
          <h2 className="font-headline-xl text-headline-xl text-graphite">Кабинет куратора</h2>
          <p className="font-body-md text-body-md text-muted-text mt-1">
            Ученики, задания на проверку и открытие недель
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-card-gap">
          {stats.map(([label, value, icon, color]) => (
            <div
              className="bg-white-card p-5 rounded-xl border border-border-light shadow-sm hover:border-primary transition-colors cursor-pointer group"
              key={label}
            >
              <p className="font-label-sm text-label-sm text-muted-text uppercase tracking-wider">{label}</p>
              <div className="flex items-end justify-between mt-2">
                <span className={`font-headline-xl text-headline-xl ${color}`}>{value}</span>
                <Icon className="text-outline-variant group-hover:text-primary transition-colors" name={icon} />
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-card-gap">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-graphite">Сегодня нужно проверить</h3>
            <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:underline" type="button">
              Все задачи
              <Icon className="text-[16px]" name="chevron_right" />
            </button>
          </div>
          <div className="flex flex-col gap-card-gap">
            {tasks.map((task) => (
              <TaskCard task={task} key={task.name} />
            ))}
          </div>
        </section>

        <section className="space-y-card-gap">
          <h3 className="font-headline-md text-headline-md text-graphite">Мои ученицы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap">
            {students.map(([initials, name, meta, progress, status, statusColor]) => (
              <StudentCard
                initials={initials}
                key={name}
                meta={meta}
                name={name}
                progress={progress}
                status={status}
                statusColor={statusColor}
              />
            ))}
          </div>
          <button className="w-full py-4 border-2 border-dashed border-border-light rounded-xl text-muted-text font-label-sm text-label-sm hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2" type="button">
            <Icon name="add" />
            Добавить ученицу
          </button>
        </section>
      </main>

      <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-50 hover:bg-olive-dark" type="button">
        <Icon className="text-[28px]" name="add" />
      </button>
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <div className="bg-white-card p-4 rounded-xl border border-border-light flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-fixed">
          <FallbackImage alt={task.name} className="w-full h-full object-cover" fallbackClassName="w-full h-full" src={task.image} />
        </div>
        <div>
          <p className="font-headline-md text-headline-md text-graphite">{task.name}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="bg-grey-green-status px-2 py-0.5 rounded-full text-label-sm font-label-sm text-graphite">
              {task.tag}
            </span>
            <span className="text-muted-text text-label-sm font-label-sm flex items-center gap-1">
              <Icon className="text-[14px]" name="schedule" />
              {task.time}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0">
        <span className="bg-olive-soft text-primary px-3 py-1 rounded-full text-label-sm font-label-sm">На проверке</span>
        <button className="bg-primary text-white px-5 py-2 rounded-lg font-label-sm text-label-sm hover:bg-olive-dark transition-colors active:scale-95 duration-150" type="button">
          Открыть
        </button>
      </div>
    </div>
  );
}

function StudentCard({ initials, name, meta, progress, status, statusColor }) {
  return (
    <div className="bg-white-card rounded-xl border border-border-light overflow-hidden flex flex-col">
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">
              {initials}
            </div>
            <div>
              <p className="font-body-md text-body-md font-semibold text-graphite">{name}</p>
              <p className="font-label-sm text-label-sm text-muted-text">{meta}</p>
            </div>
          </div>
          <button className="text-muted-text hover:text-primary" type="button">
            <Icon name="more_vert" />
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-label-sm font-label-sm">
            <span className="text-muted-text">Прогресс обучения</span>
            <span className="text-primary">{progress}</span>
          </div>
          <div className="w-full h-2 bg-secondary-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: progress }} />
          </div>
        </div>
      </div>
      <div className="mt-auto border-t border-border-light bg-surface-container-low p-3 flex justify-between items-center">
        <span className={`text-label-sm font-label-sm ${statusColor} flex items-center gap-1`}>
          <Icon className="text-[16px] material-filled" name="circle" />
          {status}
        </span>
        <button className="text-primary font-label-sm text-label-sm font-bold" type="button">
          Профиль
        </button>
      </div>
    </div>
  );
}

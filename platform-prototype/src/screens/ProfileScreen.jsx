import { routes, images } from "../data";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";

const profileRows = [
  ["Имя", "Мария"],
  ["Фамилия", "Иванова"],
  ["Telegram", "@maria_wellness", "text-primary"],
  ["Город", "Москва"],
  ["Часовой пояс", "GMT+3"],
];

const settings = [
  { label: "Изменить пароль", icon: "lock" },
  { label: "Центр помощи", icon: "help_outline" },
  { label: "Кабинет куратора", icon: "admin_panel_settings", route: routes.curator },
];

export function ProfileScreen({ onNavigate, onCurator }) {
  return (
    <PageShell active={routes.profile} avatar={images.avatarProfile} headerTitle="Профиль" onNavigate={onNavigate}>
      <section className="bg-white-card border border-border-light rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-section-gap">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-olive-soft">
            <FallbackImage
              alt="Мария"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full"
              src={images.profilePhoto}
            />
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-graphite">Мария</h2>
            <p className="font-body-sm text-body-sm text-muted-text">maria@example.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-grey-green-status px-3 py-1 rounded-full font-label-sm text-label-sm text-graphite">
            Ученица курса
          </span>
          <span className="bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant">
            Подготовительный этап
          </span>
        </div>
      </section>

      <section className="space-y-card-gap mb-section-gap">
        <h3 className="font-label-md text-label-md text-muted-text uppercase tracking-wider px-1">Личные данные</h3>
        <div className="bg-white-card border border-border-light rounded-xl overflow-hidden">
          <div className="divide-y divide-border-light">
            {profileRows.map(([label, value, valueClass]) => (
              <div className="p-4 flex justify-between items-center gap-4" key={label}>
                <span className="font-body-md text-body-md text-on-surface-variant">{label}</span>
                <span className={`font-body-md text-body-md text-right ${valueClass || "text-graphite"}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-card-gap mb-section-gap">
        <h3 className="font-label-md text-label-md text-muted-text uppercase tracking-wider px-1">Текущий курс</h3>
        <div className="bg-white-card border border-border-light rounded-xl p-5 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-headline-md text-headline-md text-graphite">Формула здоровья</h4>
              <p className="font-body-sm text-body-sm text-muted-text mt-1">Индивидуальное прохождение</p>
            </div>
            <div className="bg-olive-soft p-2 rounded-lg">
              <Icon className="text-primary" name="auto_stories" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="space-y-1">
              <p className="font-label-sm text-label-sm text-on-surface-variant">Старт курса</p>
              <p className="font-body-md text-body-md text-graphite">12 мая</p>
            </div>
            <div className="space-y-1">
              <p className="font-label-sm text-label-sm text-on-surface-variant">Куратор</p>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center text-[10px] font-bold text-on-tertiary-fixed">
                  А
                </div>
                <p className="font-body-md text-body-md text-graphite">Анна</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <button
              className="w-full bg-primary-container text-white h-12 rounded-xl font-label-md hover:bg-olive-dark transition-colors duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              onClick={() => onNavigate(routes.course)}
              type="button"
            >
              <Icon className="text-[20px]" name="play_circle" />
              Открыть мой курс
            </button>
            <button
              className="w-full bg-olive-soft text-primary h-12 rounded-xl font-label-md hover:bg-border-light transition-colors duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              onClick={onCurator}
              type="button"
            >
              <Icon className="text-[20px]" name="chat_bubble" />
              Написать куратору
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-card-gap">
        <h3 className="font-label-md text-label-md text-muted-text uppercase tracking-wider px-1">
          Настройки и поддержка
        </h3>
        <div className="bg-white-card border border-border-light rounded-xl overflow-hidden divide-y divide-border-light">
          {settings.map((item) => (
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-surface-container transition-colors active:bg-surface-variant"
              key={item.label}
              onClick={() => item.route && onNavigate(item.route)}
              type="button"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-outline" name={item.icon} />
                <span className="font-body-md text-body-md text-graphite">{item.label}</span>
              </div>
              <Icon className="text-outline-variant" name="chevron_right" />
            </button>
          ))}
          <button
            className="w-full p-4 flex items-center justify-between hover:bg-error-container/30 transition-colors active:bg-error-container/50"
            onClick={() => onNavigate(routes.login)}
            type="button"
          >
            <div className="flex items-center gap-3">
              <Icon className="text-error" name="logout" />
              <span className="font-body-md text-body-md text-error">Выйти из аккаунта</span>
            </div>
          </button>
        </div>
      </section>
    </PageShell>
  );
}

import { routes, images } from "../data";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";
import { StatusBadge } from "../components/StatusBadge";

const items = [
  {
    status: "Не начато",
    title: "Заполнить анкету",
    text: "Данные о вашем образе жизни и целях",
    button: "Приступить",
    icon: "arrow_forward",
    primary: true,
  },
  {
    status: "Не загружено",
    title: "Загрузить анализы",
    text: "Результаты последних медицинских обследований",
    button: "Загрузить файлы",
    icon: "upload_file",
    route: routes.upload,
  },
  {
    status: "Не начато",
    title: "Начать дневник питания",
    text: "Фиксация рациона в течение 3 дней",
    button: "Открыть дневник",
    route: routes.foodDiary,
  },
  {
    status: "Не начато",
    title: "Внести стартовые замеры",
    text: "Вес, объемы и фото (по желанию)",
    button: "Внести данные",
    icon: "straighten",
    route: routes.measurements,
  },
  {
    status: "Не начато",
    title: "Посмотреть вводный урок",
    text: "Основы работы по программе «Формула здоровья»",
    button: "Смотреть (12 мин)",
    icon: "play_circle",
    route: routes.lesson,
  },
];

export function DiagnosticsScreen({ onNavigate, onCurator }) {
  return (
    <PageShell active={routes.dashboard} avatar={images.avatarDiagnostics} onNavigate={onNavigate}>
      <section className="mb-section-gap">
        <h2 className="font-headline-xl text-headline-xl text-graphite mb-base">Стартовая диагностика</h2>
        <p className="font-body-md text-muted-text mb-6">
          Диагностика нужна не для оценки, а чтобы увидеть вашу реальную точку старта.
        </p>

        <Card className="p-container-padding-mobile shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-olive-soft flex items-center justify-center text-primary">
              <Icon className="text-[28px]" name="analytics" />
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-graphite">
                Персональная программа готовится
              </p>
              <p className="font-body-sm text-muted-text">0 из 5 шагов выполнено</p>
            </div>
          </div>
          <ProgressBar value={8} />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-olive-soft rounded-full opacity-30 blur-2xl" />
        </Card>
      </section>

      <section className="space-y-card-gap">
        {items.map((item) => (
          <Card className="p-5 flex flex-col gap-4 transition-all hover:border-primary/30" key={item.title}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <StatusBadge className="mb-2">{item.status}</StatusBadge>
                <h3 className="font-headline-md text-headline-md text-graphite">{item.title}</h3>
                <p className="font-body-sm text-muted-text mt-1">{item.text}</p>
              </div>
            </div>
            <Button
              className="flex items-center justify-center gap-2"
              onClick={() => item.route && onNavigate(item.route)}
              size="compact"
              variant={item.primary ? "primarySquare" : "soft"}
            >
              {item.icon && <Icon className="text-[18px]" name={item.icon} />}
              {item.button}
            </Button>
          </Card>
        ))}
      </section>

      <section className="mt-section-gap mb-8">
        <div className="bg-surface-container-low p-6 rounded-xl border border-border-light text-center">
          <p className="font-body-md text-graphite mb-4">Возникли вопросы по диагностике?</p>
          <button
            className="inline-flex items-center gap-2 text-primary font-label-md text-label-md border-b border-primary pb-0.5 hover:opacity-80 transition-opacity"
            onClick={onCurator}
            type="button"
          >
            <Icon className="text-[18px]" name="chat_bubble_outline" />
            Написать куратору
          </button>
        </div>
      </section>

      <button
        className="fixed fab-right bottom-24 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform duration-150 z-40"
        onClick={() => onNavigate(routes.upload)}
        type="button"
      >
        <Icon className="text-[28px]" name="add" />
      </button>
    </PageShell>
  );
}

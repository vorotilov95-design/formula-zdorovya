import { useState } from "react";
import { routes, images } from "../data";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";
import { StatusBadge } from "../components/StatusBadge";

const quickActions = [
  { label: "Загрузить файл", icon: "upload_file", route: routes.upload },
  { label: "Открыть дневник", icon: "menu_book", route: routes.foodDiary },
  { label: "Внести замеры", icon: "straighten", route: routes.measurements },
  { label: "Написать куратору", icon: "chat_bubble", curator: true },
];

const fabActions = [
  { label: "Загрузить анализы", icon: "upload_file", route: routes.upload },
  { label: "Добавить фото тарелки", icon: "add_a_photo", route: routes.upload },
  { label: "Заполнить дневник", icon: "menu_book", route: routes.foodDiary },
  { label: "Внести замеры", icon: "straighten", route: routes.measurements },
];

export function DashboardScreen({ onNavigate, onCurator }) {
  const [fabOpen, setFabOpen] = useState(false);

  return (
    <PageShell
      active={routes.dashboard}
      avatar={images.avatarDashboard}
      fixedHeader
      onNavigate={onNavigate}
    >
      <section className="mb-section-gap">
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-1">
          Статус: Подготовительный этап
        </p>
        <h2 className="font-headline-xl text-headline-xl text-on-surface">
          Мария, добро пожаловать в курс
        </h2>
      </section>

      <section className="mb-section-gap">
        <Card className="p-6 dashboard-soft-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="max-w-[70%]">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                Сейчас собираем данные для вашей программы
              </h3>
              <div className="flex items-center gap-2 text-primary">
                <Icon className="text-[18px]" name="timer" />
                <span className="font-label-md text-label-md">2 из 5 шагов выполнено</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-olive-soft flex items-center justify-center text-primary">
              <Icon name="clinical_notes" />
            </div>
          </div>

          <ProgressBar className="mb-6" track="bg-surface-container" value={40} />

          <div className="bg-surface-container-low rounded-lg p-4 border border-border-light flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div>
                <p className="font-label-sm text-label-sm text-muted-text">Следующий шаг</p>
                <p className="font-body-md text-body-md font-semibold text-on-surface">Загрузить анализы</p>
              </div>
            </div>
            <Icon className="text-muted-text" name="chevron_right" />
          </div>

          <button
            className="w-full py-4 bg-primary-container text-on-primary rounded-xl font-headline-md text-headline-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            onClick={() => onNavigate(routes.diagnostics)}
            type="button"
          >
            Продолжить диагностику
            <Icon name="arrow_forward" />
          </button>
        </Card>
      </section>

      <section className="mb-section-gap">
        <h4 className="font-headline-md text-headline-md text-on-surface mb-card-gap">Быстрые действия</h4>
        <div className="grid grid-cols-2 gap-card-gap">
          {quickActions.map((action) => (
            <button
              className="flex flex-col items-start p-4 bg-white-card border border-border-light rounded-xl hover:bg-surface-container transition-all active:scale-95 text-left group"
              key={action.label}
              onClick={() => {
                if (action.curator) onCurator();
                if (action.route) onNavigate(action.route);
              }}
              type="button"
            >
              <Icon
                className="text-primary mb-3 bg-olive-soft p-2 rounded-lg group-hover:bg-primary-container group-hover:text-white transition-colors"
                name={action.icon}
              />
              <span className="font-label-md text-label-md text-on-surface">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-section-gap">
        <h4 className="font-headline-md text-headline-md text-on-surface mb-card-gap">Моя программа</h4>
        <div className="relative overflow-hidden bg-surface-container-high border border-border-light rounded-xl p-6">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-olive-soft rounded-full blur-3xl opacity-50" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <StatusBadge>Готовится</StatusBadge>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Персональная программа появится здесь после проверки данных командой. Нам важно учесть
              все ваши показатели.
            </p>
          </div>
        </div>
      </section>

      {fabOpen && (
        <div className="fixed fab-right bottom-[154px] z-40 w-[220px] space-y-2">
          {fabActions.map((action) => (
            <button
              className="w-full bg-white-card border border-border-light rounded-xl p-3 flex items-center gap-3 text-left soft-shadow active:scale-[0.98] transition-all"
              key={action.label}
              onClick={() => {
                setFabOpen(false);
                if (action.route) onNavigate(action.route);
              }}
              type="button"
            >
              <Icon className="text-primary" name={action.icon} />
              <span className="font-label-md text-label-md text-on-surface">{action.label}</span>
            </button>
          ))}
        </div>
      )}

      <button
        className="fixed fab-right bottom-24 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform duration-150 z-40"
        onClick={() => setFabOpen((value) => !value)}
        type="button"
      >
        <Icon className="text-[28px]" name={fabOpen ? "close" : "add"} />
      </button>
    </PageShell>
  );
}

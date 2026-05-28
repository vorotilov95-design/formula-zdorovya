import { routes, images } from "../data";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";

const inside = [
  { icon: "target", title: "Главные фокусы", text: "Ключевые точки здоровья на месяц" },
  { icon: "restaurant_menu", title: "Питание и режим", text: "Индивидуальный рацион и график" },
  { icon: "visibility", title: "Самонаблюдение", text: "Трекер симптомов и прогресса" },
];

export function ProgramScreen({ onNavigate }) {
  return (
    <PageShell active={routes.program} avatar={images.avatarProgram} onNavigate={onNavigate}>
      <div className="pt-base">
        <div className="mt-base mb-section-gap">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Моя программа</h2>
          <p className="font-body-md text-muted-text">Ваш персональный маршрут</p>
        </div>

        <section className="space-y-card-gap mb-section-gap">
          <div className="bg-white-card p-6 rounded-xl border border-border-light soft-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-grey-green-status px-3 py-1 rounded-full">
              <span className="text-label-sm text-primary">Готовится</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-olive-soft rounded-lg flex items-center justify-center">
                <Icon className="text-primary text-[32px]" name="analytics" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Команда изучает данные
                </h3>
                <p className="font-body-sm text-on-surface-variant mt-1">
                  Мы анализируем результаты ваших анализов и анкет, чтобы составить эффективный план.
                </p>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between items-end">
                  <span className="text-label-sm text-on-surface-variant">Прогресс сбора данных</span>
                  <span className="text-label-md text-primary">2/5</span>
                </div>
                <ProgressBar track="bg-surface-container" value={40} />
              </div>
              <button
                className="w-full bg-primary-container text-on-primary-container h-12 rounded-lg font-label-md active:scale-[0.98] transition-all mt-2"
                onClick={() => onNavigate(routes.diagnostics)}
                type="button"
              >
                Продолжить диагностику
              </button>
            </div>
          </div>
        </section>

        <section className="mb-section-gap">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-card-gap">Что будет внутри</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-container-padding-mobile px-container-padding-mobile no-scrollbar">
            {inside.map((item) => (
              <div
                className="min-w-[200px] bg-white-card p-5 rounded-xl border border-border-light soft-shadow flex flex-col gap-3"
                key={item.title}
              >
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded-lg">
                  <Icon className="text-primary" name={item.icon} />
                </div>
                <div>
                  <p className="font-label-md text-on-surface">{item.title}</p>
                  <p className="font-body-sm text-muted-text mt-1 leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-border-light w-full mb-section-gap" />

        <section className="mb-section-gap">
          <div className="flex items-center justify-between mb-card-gap">
            <h3 className="font-headline-md text-headline-md text-on-surface">Текущая программа</h3>
            <div className="bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm">Готова</div>
          </div>

          <div className="bg-white-card rounded-xl border border-border-light soft-shadow p-6 mb-card-gap">
            <div className="flex items-center gap-2 mb-4">
              <Icon className="text-primary-container material-filled" name="stars" />
              <h4 className="font-label-md text-on-surface">Фокусы на октябрь</h4>
            </div>
            <ul className="space-y-3">
              {[
                "Восстановление уровня ферритина",
                "Поддержка фаз детоксикации печени",
                "Нормализация циркадных ритмов",
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="font-body-md text-on-surface-variant">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container-low border border-border-light rounded-xl p-4 flex items-center justify-between group hover:bg-surface-container-high transition-colors cursor-pointer mb-card-gap">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-error-container/20 flex items-center justify-center rounded-lg">
                <Icon className="text-error" name="picture_as_pdf" />
              </div>
              <div>
                <p className="font-label-md text-on-surface">Полная программа PDF</p>
                <p className="font-body-sm text-muted-text">Версия 2.4 от 12.10.2023</p>
              </div>
            </div>
            <Icon className="text-outline" name="download" />
          </div>

          <div className="pt-2">
            <button className="flex items-center gap-2 text-primary font-label-md active:opacity-70 transition-opacity" type="button">
              <Icon className="text-[20px]" name="history" />
              История обновлений
            </button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

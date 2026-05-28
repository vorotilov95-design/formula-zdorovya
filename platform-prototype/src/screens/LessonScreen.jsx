import { useState } from "react";
import { routes, images } from "../data";
import { DetailShell } from "../components/DetailShell";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";

export function LessonScreen({ onNavigate }) {
  const [complete, setComplete] = useState(false);

  return (
    <DetailShell
      active={routes.course}
      onBack={() => onNavigate(routes.week)}
      onNavigate={onNavigate}
      title="Как будет проходить курс"
    >
      <div className="mt-6 mb-4">
        <span className="inline-flex items-center text-muted-text font-label-sm text-label-sm">
          <Icon className="text-[14px] mr-1" name="folder_open" />
          0 НЕДЕЛЯ
        </span>
      </div>

      <section className="mb-section-gap">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container shadow-sm group cursor-pointer border border-border-light">
          <FallbackImage
            alt="Обложка урока"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            fallbackClassName="w-full h-full"
            src={images.lessonCover}
          />
          <div className="absolute inset-0 bg-graphite/20 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg transition-transform group-hover:scale-110">
              <Icon className="text-4xl material-filled" name="play_arrow" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-graphite/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1">
            <Icon className="text-[14px]" name="schedule" />
            Видео 12 мин
          </div>
        </div>
      </section>

      <section className="mb-section-gap">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-graphite mb-4">О чём урок</h2>
        <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
          <p>
            На этом вводном занятии мы разберем структуру нашей образовательной траектории. Вы
            узнаете, как выстроена программа «Формула здоровья», какие этапы диагностики вам
            предстоит пройти и как эффективно распределять время на обучение.
          </p>
          <p>
            Мы создали систему, которая адаптируется под ваш темп. Главная цель — не просто дать
            знания, а внедрить новые привычки мягко и экспертно.
          </p>
        </div>
      </section>

      <section className="mb-section-gap">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-graphite mb-4">
          После урока вы поймёте
        </h2>
        <div className="space-y-card-gap">
          {[
            "Логику построения 8-недельного маршрута",
            "Как пользоваться личным кабинетом и трекерами",
            "Какие анализы и замеры потребуются для старта",
          ].map((item) => (
            <div className="flex gap-4 p-4 bg-white-card border border-border-light rounded-xl items-start" key={item}>
              <div className="w-6 h-6 rounded-full bg-olive-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="text-primary text-[18px]" name="check" />
              </div>
              <p className="font-body-md text-graphite">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-section-gap">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-graphite mb-4">Материалы к уроку</h2>
        <div className="p-4 bg-surface-container-low border border-border-light rounded-xl flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-border-light">
              <Icon className="text-primary text-2xl" name="description" />
            </div>
            <div>
              <h4 className="font-label-md text-graphite">Welcome-гайд</h4>
              <p className="text-label-sm text-muted-text">PDF, 2.4 MB</p>
            </div>
          </div>
          <Icon className="text-outline-variant group-hover:text-primary transition-colors" name="download" />
        </div>
      </section>

      <div className="mt-8 flex flex-col gap-4">
        <button
          className={`w-full py-4 rounded-full font-headline-md flex items-center justify-center gap-2 shadow-sm transition-all hover:opacity-90 active:scale-95 ${
            complete ? "bg-grey-green-status text-graphite" : "bg-primary-container text-white"
          }`}
          disabled={complete}
          onClick={() => setComplete(true)}
          type="button"
        >
          {complete ? "Урок пройден" : "Отметить урок как пройденный"}
          <Icon name={complete ? "check_circle" : "done_all"} />
        </button>
        <button
          className="w-full py-3 text-primary font-label-md hover:bg-olive-soft rounded-full transition-colors"
          onClick={() => onNavigate(routes.assignment)}
          type="button"
        >
          Следующий урок: «Диагностика»
        </button>
      </div>
    </DetailShell>
  );
}

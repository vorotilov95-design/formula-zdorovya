import { useState } from "react";
import { routes, images } from "../data";
import { DetailShell } from "../components/DetailShell";
import { Icon } from "../components/Icon";

export function AssignmentScreen({ onNavigate }) {
  const [fileCount, setFileCount] = useState(0);
  const [sent, setSent] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  function handleFiles(files) {
    if (files?.length) setFileCount(files.length);
  }

  return (
    <DetailShell
      active={routes.course}
      avatar={images.avatarAssignment}
      onBack={() => onNavigate(routes.week)}
      onNavigate={onNavigate}
      title="0 неделя: Загрузить анализы"
    >
      <section className="mt-base mb-section-gap">
        <div className="bg-white-card border border-border-light rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-headline-lg text-headline-lg-mobile text-graphite">
              Общий анализ крови и витамин D
            </h2>
            <span
              className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${
                sent ? "bg-grey-green-status text-primary" : "bg-surface-container-low text-on-surface-variant"
              }`}
            >
              {sent ? "Отправлено" : "Не отправлено"}
            </span>
          </div>
          <p className="font-body-md text-body-md text-muted-text">
            Для формирования вашей индивидуальной программы оздоровления, пожалуйста, прикрепите
            результаты последних анализов (не старше 3-х месяцев). Нам важен уровень ферритина,
            витамина D и общий анализ крови.
          </p>
        </div>
      </section>

      <section className="mb-section-gap">
        <div className="flex items-center gap-2 mb-gutter">
          <Icon className="text-primary material-filled" name="folder_open" />
          <h3 className="font-headline-md text-primary">Категория: Анализы</h3>
        </div>
        <div
          className={`upload-area group relative flex flex-col items-center justify-center p-10 rounded-xl transition-all hover:bg-olive-soft/30 cursor-pointer ${
            dragOver ? "bg-olive-soft/50" : ""
          }`}
          onDragEnter={(event) => {
            event.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            setDragOver(false);
          }}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            setDragOver(false);
            handleFiles(event.dataTransfer.files);
          }}
        >
          <input
            className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
            multiple
            onChange={(event) => handleFiles(event.target.files)}
            type="file"
          />
          <div className="w-14 h-14 bg-olive-soft rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
            <Icon className="text-primary text-3xl" name="cloud_upload" />
          </div>
          <p className="font-label-md text-primary mb-1">
            {fileCount ? `Выбрано файлов: ${fileCount}` : "Нажмите для загрузки или перетащите"}
          </p>
          <p className="font-body-sm text-body-sm text-muted-text">PDF, JPG или PNG до 10 МБ</p>
        </div>

        <div className="mt-card-gap">
          <label className="block font-label-sm text-label-sm text-muted-text mb-2 px-1" htmlFor="comment">
            Комментарий для специалиста (необязательно)
          </label>
          <textarea
            className="w-full bg-white-card border border-border-light rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md placeholder:text-outline-variant"
            id="comment"
            placeholder="Например: анализы сдавались натощак..."
            rows="4"
          />
        </div>

        <button
          className={`w-full mt-gutter h-[56px] rounded-xl font-headline-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md ${
            sent ? "bg-grey-green-status text-graphite" : "bg-primary-container text-white"
          }`}
          onClick={() => setSent(true)}
          type="button"
        >
          <span>{sent ? "Задание отправлено" : "Отправить задание"}</span>
          <Icon name={sent ? "check_circle" : "send"} />
        </button>
      </section>

      <section className="mb-section-gap">
        <h3 className="font-headline-md text-graphite mb-gutter">История загрузок</h3>
        <div className="space-y-card-gap">
          <div className="bg-surface-container-low border border-border-light rounded-xl p-4 flex items-center gap-4 transition-all hover:border-primary/30">
            <div className="w-12 h-12 bg-white-card rounded-lg flex items-center justify-center border border-border-light">
              <Icon className="text-primary" name="description" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="font-label-md text-graphite truncate">Анализ_витамин_D_май.pdf</p>
              <p className="font-body-sm text-body-sm text-muted-text">12 мая 2024, 14:30</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="bg-grey-green-status text-graphite px-2 py-0.5 rounded-full font-label-sm text-[10px] whitespace-nowrap">
                на проверке
              </span>
            </div>
          </div>

          <div className="opacity-40 bg-surface-container-low border border-dashed border-border-light rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center">
              <Icon className="text-outline-variant" name="history" />
            </div>
            <div className="flex-grow">
              <div className="h-4 bg-outline-variant/20 rounded w-1/2 mb-2" />
              <div className="h-3 bg-outline-variant/10 rounded w-1/3" />
            </div>
          </div>
        </div>
      </section>
    </DetailShell>
  );
}

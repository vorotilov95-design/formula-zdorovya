import { useState } from "react";
import { routes, images } from "../data";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";
import { StatusBadge } from "../components/StatusBadge";

const categories = ["Анализы", "Дневник питания", "Фото тарелок", "Замеры", "Медицинские документы"];

export function FileUploadScreen({ onNavigate }) {
  const [category, setCategory] = useState("Анализы");
  const [fileCount, setFileCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  function handleFiles(files) {
    if (files?.length) setFileCount(files.length);
  }

  if (success) {
    return (
      <PageShell active={routes.files} avatar={images.avatarUpload} onNavigate={onNavigate}>
        <section className="space-y-8 py-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
            <Icon className="text-5xl" name="check_circle" />
          </div>
          <div className="space-y-3">
            <h2 className="font-headline-lg text-headline-lg text-graphite">Файл успешно загружен</h2>
            <p className="text-on-surface-variant font-body-md max-w-[280px] mx-auto">
              Куратор увидит его в вашей карточке.
            </p>
          </div>
          <div className="flex flex-col w-full gap-3">
            <Button onClick={() => onNavigate(routes.diagnostics)} size="square">
              Вернуться к диагностике
            </Button>
            <Button
              onClick={() => {
                setSuccess(false);
                setFileCount(0);
              }}
              size="square"
              variant="outline"
            >
              Загрузить ещё файл
            </Button>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell active={routes.files} avatar={images.avatarUpload} onNavigate={onNavigate}>
      <div className="space-y-section-gap">
        <section className="space-y-2">
          <h2 className="font-headline-xl text-headline-xl text-graphite">Загрузка файлов</h2>
          <p className="text-on-surface-variant font-body-md">
            Добавляйте результаты анализов, дневники питания или медицинские документы для проверки
            специалистом.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Категория файла
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => {
              const active = category === item;
              return (
                <button
                  className={`px-4 py-2 rounded-full border font-label-md transition-all duration-200 ${
                    active
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-border-light bg-white-card text-on-surface-variant hover:bg-surface-container-low"
                  }`}
                  key={item}
                  onClick={() => setCategory(item)}
                  type="button"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div
            className={`relative border-2 border-dashed border-border-light bg-surface-container-low rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-4 transition-all duration-300 hover:border-primary-container group ${
              dragOver ? "drag-over" : ""
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
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              multiple
              onChange={(event) => handleFiles(event.target.files)}
              type="file"
            />
            <div className="w-16 h-16 bg-olive-soft rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <Icon className="text-4xl" name="cloud_upload" />
            </div>
            <div className="space-y-1">
              <p className={`font-headline-md text-headline-md ${fileCount ? "text-primary" : "text-graphite"}`}>
                {fileCount ? `Выбрано файлов: ${fileCount}` : "Нажмите, чтобы выбрать файл"}
              </p>
              <p className="text-on-surface-variant font-body-sm">или перетащите файл сюда</p>
            </div>
            <p className="text-outline text-label-sm">PDF, JPG, PNG до 10 МБ</p>
          </div>

          <div className="space-y-2">
            <label
              className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-1"
              htmlFor="comment"
            >
              Комментарий к файлу
            </label>
            <textarea
              className="w-full bg-white-card border border-border-light rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-body-md placeholder:text-outline-variant"
              id="comment"
              placeholder="Опишите содержимое файла или добавьте примечание для куратора..."
              rows="3"
            />
          </div>

          <Button
            className="flex items-center justify-center gap-2 shadow-md"
            onClick={() => setSuccess(true)}
            size="square"
          >
            <Icon name="publish" />
            Загрузить файл
          </Button>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="font-headline-md text-headline-md text-graphite">Последние загрузки</h3>
            <button className="text-primary font-label-md hover:underline" type="button">
              См. все
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            <FileCard
              icon="description"
              meta="12 мая 2024 • 2.4 MB"
              status="На проверке"
              title="Общий_анализ_крови_0524.pdf"
            />
            <FileCard
              accent
              icon="image"
              meta="Сегодня, 09:15 • 1.1 MB"
              status="Загружено"
              title="Завтрак_20_05.jpg"
            />
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function FileCard({ title, meta, status, icon, accent = false }) {
  return (
    <Card className="p-4 flex items-center gap-4 hover:shadow-sm transition-all duration-200">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          accent ? "bg-primary-fixed text-on-primary-fixed-variant" : "bg-secondary-fixed text-on-secondary-container"
        }`}
      >
        <Icon name={icon} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-label-md text-graphite truncate">{title}</p>
        <p className="text-label-sm text-outline">{meta}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <StatusBadge className="text-[10px] uppercase tracking-tighter" variant={accent ? "done" : "default"}>
          {status}
        </StatusBadge>
        <button className="material-symbols-outlined text-outline hover:text-error p-1 transition-colors" type="button">
          delete
        </button>
      </div>
    </Card>
  );
}

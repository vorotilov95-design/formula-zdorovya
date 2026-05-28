import { useState } from "react";
import { routes, images } from "../data";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";

const categories = ["Все", "Анализы", "Дневники", "Фото тарелок", "Замеры", "Программа", "Материалы курса"];

const files = [
  {
    icon: "picture_as_pdf",
    title: "Общий_анализ_крови.pdf",
    meta: "12.05.2024 • 2.4 MB",
    status: "На проверке",
    statusClass: "bg-surface-container text-on-surface-variant",
  },
  {
    icon: "description",
    title: "Дневник_питания_3_дня.pdf",
    meta: "10.05.2024 • 1.1 MB",
    status: "Просмотрено",
    statusClass: "bg-grey-green-status text-graphite",
    comment:
      "Отличная динамика потребления клетчатки. Продолжайте в том же духе, во второй половине дня добавьте больше чистой воды.",
  },
  {
    image: images.foodPlate,
    title: "Фото_тарелки_завтрак.jpg",
    meta: "09.05.2024 • 4.8 MB",
    status: "Просмотрено",
    statusClass: "bg-grey-green-status text-graphite",
  },
  {
    icon: "auto_awesome",
    iconClass: "bg-secondary-container text-secondary",
    title: "Персональная_программа.pdf",
    meta: "Будет доступно через 2 часа",
    status: "Готовится",
    statusClass: "bg-surface-container-high text-muted-text",
  },
];

export function MyFilesScreen({ onNavigate, onCurator }) {
  const [activeCategory, setActiveCategory] = useState("Все");

  return (
    <PageShell active={routes.files} avatar={images.avatarFiles} fixedHeader onNavigate={onNavigate}>
      <section className="mb-section-gap">
        <h2 className="font-headline-xl text-headline-xl text-graphite mb-2">Мои файлы</h2>
        <p className="font-body-md text-body-md text-muted-text mb-6">
          Здесь хранятся ваши загруженные документы, дневники, анализы и материалы по курсу.
        </p>
        <button
          className="w-full bg-primary-container text-on-primary py-4 px-6 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all"
          onClick={() => onNavigate(routes.upload)}
          type="button"
        >
          <Icon name="upload" />
          Загрузить файл
        </button>
      </section>

      <section className="mb-6 -mx-container-padding-mobile">
        <div className="flex overflow-x-auto px-container-padding-mobile gap-3 no-scrollbar py-2">
          {categories.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                className={`whitespace-nowrap px-4 py-2 rounded-full font-label-sm text-label-sm transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-white-card border border-border-light text-on-surface-variant hover:bg-surface-container-high"
                }`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-card-gap">
        {files.map((file) => (
          <FileListCard file={file} key={file.title} />
        ))}
      </section>

      <section className="mt-section-gap mb-8">
        <div className="bg-olive-soft p-6 rounded-2xl border border-border-light flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="font-headline-md text-headline-md text-primary">Нужна помощь?</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Ваш куратор всегда на связи</p>
          </div>
          <button
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm hover:scale-105 transition-transform active:scale-95"
            onClick={onCurator}
            type="button"
          >
            <Icon name="support_agent" />
          </button>
        </div>
      </section>
    </PageShell>
  );
}

function FileListCard({ file }) {
  return (
    <div className="bg-white-card p-5 rounded-xl border border-border-light shadow-sm">
      <div className="flex items-start gap-4">
        {file.image ? (
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-border-light">
            <FallbackImage
              alt={file.title}
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full"
              src={file.image}
            />
          </div>
        ) : (
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
              file.iconClass || "bg-olive-soft text-primary"
            }`}
          >
            <Icon name={file.icon} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1 gap-2">
            <h3 className="font-headline-md text-headline-md text-graphite truncate pr-2">{file.title}</h3>
            <span className={`shrink-0 px-3 py-1 rounded-full text-label-sm font-label-sm ${file.statusClass}`}>
              {file.status}
            </span>
          </div>
          <p className="text-label-sm font-label-sm text-muted-text">{file.meta}</p>
        </div>
      </div>
      {file.comment && (
        <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-primary mt-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="text-primary text-[18px]" name="chat_bubble" />
            <span className="text-label-sm font-label-sm text-primary">Комментарий куратора</span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant">{file.comment}</p>
        </div>
      )}
    </div>
  );
}

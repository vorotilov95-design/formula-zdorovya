import { images } from "../data";
import { FallbackImage } from "./FallbackImage";
import { Icon } from "./Icon";

export function DetailHeader({
  title,
  subtitle,
  onBack,
  avatar = images.avatarDashboard,
  centered = false,
}) {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border-light">
      <div className="flex justify-between items-center w-full px-container-padding-mobile h-16 max-w-screen-xl mx-auto">
        <button
          aria-label="Назад"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high transition-colors active:scale-95"
          onClick={onBack}
          type="button"
        >
          <Icon className="text-primary" name="arrow_back" />
        </button>
        <div className={centered ? "flex flex-col items-center" : "flex-1 text-center min-w-0"}>
          <h1 className="font-headline-md text-headline-md-mobile text-primary truncate max-w-[220px]">
            {title}
          </h1>
          {subtitle && <span className="font-label-sm text-label-sm text-muted-text">{subtitle}</span>}
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border border-border-light">
          <FallbackImage
            alt="User"
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full"
            src={avatar}
          />
        </div>
      </div>
    </header>
  );
}

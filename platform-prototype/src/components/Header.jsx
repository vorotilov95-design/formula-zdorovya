import { images } from "../data";
import { FallbackImage } from "./FallbackImage";
import { Icon } from "./Icon";

export function Header({ avatar = images.avatarWelcome, fixed = false, title = "Формула здоровья" }) {
  return (
    <header
      className={`${fixed ? "fixed" : "sticky"} top-0 z-40 w-full bg-surface border-b border-border-light`}
    >
      <div className="flex justify-between items-center w-full px-container-padding-mobile h-16 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border border-border-light">
            <FallbackImage
              alt="User"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full"
              src={avatar}
            />
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-graphite tracking-tight">
            {title}
          </h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95">
          <Icon className="text-primary" name="notifications" />
        </button>
      </div>
    </header>
  );
}

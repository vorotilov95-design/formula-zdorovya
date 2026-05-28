import { routes } from "../data";
import { BottomNav } from "./BottomNav";
import { DetailHeader } from "./DetailHeader";

export function DetailShell({
  children,
  active = routes.course,
  title,
  subtitle,
  avatar,
  onBack,
  onNavigate,
  centered,
  className = "",
}) {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      <DetailHeader
        avatar={avatar}
        centered={centered}
        onBack={onBack}
        subtitle={subtitle}
        title={title}
      />
      <main className={`px-container-padding-mobile pt-6 pb-32 max-w-screen-md mx-auto ${className}`}>
        {children}
      </main>
      <BottomNav active={active} onNavigate={onNavigate} />
    </div>
  );
}

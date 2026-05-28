import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

export function PageShell({
  children,
  active,
  avatar,
  bottomNav = true,
  fixedHeader = false,
  headerTitle,
  onNavigate,
  className = "",
}) {
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      <Header avatar={avatar} fixed={fixedHeader} title={headerTitle} />
      <main
        className={`flex-grow w-full max-w-screen-xl mx-auto px-container-padding-mobile ${
          fixedHeader ? "pt-20" : "pt-8"
        } ${bottomNav ? "pb-28" : "pb-10"} ${className}`}
      >
        {children}
      </main>
      {bottomNav && <BottomNav active={active} onNavigate={onNavigate} />}
    </div>
  );
}

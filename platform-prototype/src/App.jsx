import { useState } from "react";
import { routes } from "./data";
import { AssignmentScreen } from "./screens/AssignmentScreen";
import { CourseScreen } from "./screens/CourseScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { DiagnosticsScreen } from "./screens/DiagnosticsScreen";
import { FileUploadScreen } from "./screens/FileUploadScreen";
import { LessonScreen } from "./screens/LessonScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { PlaceholderScreen } from "./screens/PlaceholderScreen";
import { ProgramScreen } from "./screens/ProgramScreen";
import { WeekScreen } from "./screens/WeekScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { Modal } from "./components/Modal";

export default function App() {
  const [screen, setScreen] = useState(routes.login);
  const [curatorModal, setCuratorModal] = useState(false);

  function navigate(nextScreen) {
    setScreen(nextScreen);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const sharedProps = {
    onNavigate: navigate,
    onCurator: () => setCuratorModal(true),
  };

  return (
    <div className="app-frame">
      {screen === routes.login && <LoginScreen onLogin={() => navigate(routes.welcome)} />}
      {screen === routes.welcome && <WelcomeScreen onNavigate={navigate} />}
      {screen === routes.diagnostics && <DiagnosticsScreen {...sharedProps} />}
      {screen === routes.upload && <FileUploadScreen onNavigate={navigate} />}
      {screen === routes.dashboard && <DashboardScreen {...sharedProps} />}
      {screen === routes.course && <CourseScreen onNavigate={navigate} />}
      {screen === routes.week && <WeekScreen {...sharedProps} />}
      {screen === routes.lesson && <LessonScreen onNavigate={navigate} />}
      {screen === routes.assignment && <AssignmentScreen onNavigate={navigate} />}
      {screen === routes.program && <ProgramScreen onNavigate={navigate} />}
      {screen === routes.profile && <PlaceholderScreen onNavigate={navigate} page={screen} />}

      <Modal open={curatorModal} onClose={() => setCuratorModal(false)}>
        Здесь будет переход в Telegram-чат куратора
      </Modal>
    </div>
  );
}

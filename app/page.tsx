import InstallPrompt from "./components/InstallPrompt";
import PushNotificationManager from "./components/PushnotificationManager";

export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}

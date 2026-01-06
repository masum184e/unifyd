import { Smartphone } from "lucide-react";
import AuthenticatorApp from "./AuthenticatorApp";
import EmailSMSOTP from "./EmailSMSOTP";
import PushNotification from "./PushNotification";
import YubiKey from "./YubiKey";

const MFA = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Smartphone className="h-5 w-5 text-emerald-600" />
        <h2 className="text-lg font-semibold">MFA Security</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <AuthenticatorApp />
        <EmailSMSOTP />
        <PushNotification />
        <YubiKey />
      </div>
    </div>
  );
};

export default MFA;

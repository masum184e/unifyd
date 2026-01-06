import { Mail } from "lucide-react";
import UserOTP from "./UserOTP";
import EmailPassword from "./EmailPassword";
import MagicLink from "./MagicLink";
import PasswordLess from "./PasswordLess";

const Email = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Email Access</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <EmailPassword />
        <MagicLink />
        <PasswordLess />
        <UserOTP />
      </div>
    </div>
  );
};

export default Email;

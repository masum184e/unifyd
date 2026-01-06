import { User2 } from "lucide-react";
import UserOTP from "./UserOTP";
import UserPassword from "./UserPassword";

const User = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <User2 className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">User Methods</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <UserOTP />
        <UserPassword />
      </div>
    </div>
  );
};

export default User;

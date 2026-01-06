import { Hash } from "lucide-react";
import { Button } from "../ui/button";

const UserOTP = () => {
  return (
    <Button variant="outline" className={`justify-start gap-3 `}>
      <Hash className="h-4 w-4" /> User + OTP
    </Button>
  );
};

export default UserOTP;

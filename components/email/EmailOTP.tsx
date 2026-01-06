import { Hash } from "lucide-react";
import { Button } from "../ui/button";

const EmailOTP = () => {
  return (
    <Button variant="outline" className={`justify-start gap-3 `}>
      <Hash className="h-4 w-4" /> Email + OTP
    </Button>
  );
};

export default EmailOTP;

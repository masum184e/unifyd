import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

const NumberOTP = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <MessageSquare className="h-4 w-4" /> SMS OTP
    </Button>
  );
};

export default NumberOTP;

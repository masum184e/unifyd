import { Button } from "../ui/button";
import { Mail } from "lucide-react";

const EmailSMSOTP = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Mail className="h-4 w-4" /> Email + SMS OTP
    </Button>
  );
};

export default EmailSMSOTP;

import { KeyRound } from "lucide-react";
import { Button } from "../ui/button";

const EmailPassword = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <KeyRound className="h-4 w-4" /> Email + Password
    </Button>
  );
};

export default EmailPassword;

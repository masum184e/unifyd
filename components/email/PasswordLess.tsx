import { Lock } from "lucide-react";
import { Button } from "../ui/button";

const PasswordLess = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Lock className="h-4 w-4" /> Passwordless Link
    </Button>
  );
};

export default PasswordLess;

import { KeyRound } from "lucide-react";
import { Button } from "../ui/button";

const UserPassword = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <KeyRound className="h-4 w-4" /> User + Password
    </Button>
  );
};

export default UserPassword;

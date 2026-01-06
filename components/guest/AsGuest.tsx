import { UserMinus } from "lucide-react";
import { Button } from "../ui/button";

const AsGuest = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <UserMinus className="h-4 w-4" /> Continue as Guest
    </Button>
  );
};

export default AsGuest;

import { Wind } from "lucide-react";
import { Button } from "../ui/button";

const OneLogin = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Wind className="h-4 w-4" />
      OneLogin
    </Button>
  );
};

export default OneLogin;

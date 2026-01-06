import { Button } from "../ui/button";
import { Smartphone } from "lucide-react";

const NumberPassword = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Smartphone className="h-4 w-4" /> Phone + Password
    </Button>
  );
};

export default NumberPassword;

import { Cpu } from "lucide-react";
import { Button } from "../ui/button";

const YubiKey = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Cpu className="h-4 w-4" /> Hardware Key (YubiKey)
    </Button>
  );
};

export default YubiKey;

import { Mic } from "lucide-react";
import { Button } from "../ui/button";

const Voice = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Mic className="h-4 w-4" /> Voice Recognition
    </Button>
  );
};

export default Voice;

import { Button } from "../ui/button";
import { Zap } from "lucide-react";

const MagicLink = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Zap className="h-4 w-4" /> Magic Link
    </Button>
  );
};

export default MagicLink;

import { Button } from "../ui/button";
import { AppleIcon } from "lucide-react";

const Apple = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <AppleIcon className="h-4 w-4 fill-current" /> Apple
    </Button>
  );
};

export default Apple;

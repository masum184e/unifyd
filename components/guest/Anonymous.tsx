import { ShieldQuestion } from "lucide-react";
import { Button } from "../ui/button";

const Anonymous = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <ShieldQuestion className="h-4 w-4" /> Anonymous Login
    </Button>
  );
};

export default Anonymous;

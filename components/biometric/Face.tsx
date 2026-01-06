import { Smartphone } from "lucide-react";
import { Button } from "../ui/button";

const Face = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Smartphone className="h-4 w-4" /> Face ID
    </Button>
  );
};

export default Face;

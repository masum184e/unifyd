import { Laptop } from "lucide-react";
import { Button } from "../ui/button";

const TrustedDevice = () => {
  return (
    <Button variant="outline" className=" justify-start gap-3">
      <Laptop className="h-4 w-4" /> Trusted Device
    </Button>
  );
};

export default TrustedDevice;

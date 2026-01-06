import { BellRing } from "lucide-react";
import { Button } from "../ui/button";

const PushNotification = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <BellRing className="h-4 w-4" /> Push Approval
    </Button>
  );
};

export default PushNotification;

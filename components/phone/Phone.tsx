import { PhoneCall } from "lucide-react";
import NumberOTP from "./NumberOTP";
import NumberPassword from "./NumberPassword";
import WhatsAppOTP from "./WhatsAppOTP";

const Phone = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <PhoneCall className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-semibold">Phone Access</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <NumberOTP />
        <NumberPassword />
        <WhatsAppOTP />
      </div>
    </div>
  );
};

export default Phone;

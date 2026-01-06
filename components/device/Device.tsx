import { Laptop } from "lucide-react";
import TrustedDevice from "./TrustedDevice";
import WebAuthn from "./WebAuthn";

const Device = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Laptop className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Device Access</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <TrustedDevice />
        <WebAuthn />
      </div>
    </div>
  );
};

export default Device;

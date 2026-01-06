import React from "react";
import Face from "./Face";
import Touch from "./Touch";
import Voice from "./Voice";
import { Fingerprint } from "lucide-react";

const Biometric = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Fingerprint className="h-5 w-5 text-emerald-500" />
        <h2 className="text-lg font-semibold">Biometric Access</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Face />
        <Touch />
        <Voice />
      </div>
    </div>
  );
};

export default Biometric;

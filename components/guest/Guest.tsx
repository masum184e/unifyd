import { User } from "lucide-react";
import Anonymous from "./Anonymous";
import AsGuest from "./AsGuest";

const Guest = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-slate-500" />
        <h2 className="text-lg font-semibold">Ephemeral Access</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Anonymous />
        <AsGuest />
      </div>
    </div>
  );
};

export default Guest;

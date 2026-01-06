import { Wallet2Icon } from "lucide-react";
import SIWE from "./SIWE";
import Wallet from "./Wallet";

const Crypto = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Wallet2Icon className="h-5 w-5 text-orange-500" />
        <h2 className="text-lg font-semibold">Crypto Wallets</h2>
      </div>

      <div className="grid grid-cols-1  gap-3">
        <SIWE />
        <Wallet />
      </div>
    </div>
  );
};

export default Crypto;

import Apple from "./Apple";
import Facebook from "./Facebook";
import GitHub from "./GitHub";
import { Globe } from "lucide-react";
import Google from "./Google";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import Snapchat from "./Snapchat";
import TikTok from "./TikTok";
import LinkedIn from "./LinkedIn";

const Social = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="h-5 w-5 text-purple-600" />
        <h2 className="text-lg font-semibold">Social Accounts</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Apple />
        <Facebook />
        <GitHub />
        <Google />
        <Instagram />
        <LinkedIn />
        <Snapchat />
        <TikTok />
        <Twitter />
      </div>
    </div>
  );
};

export default Social;

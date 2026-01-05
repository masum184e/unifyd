import { Button } from "../ui/button";
import Image from "next/image";

const GoogleWorkspace = () => {
  return (
    <Button variant="outline" className="justify-center gap-3">
      <Image src="./icons/chrome.svg" alt="Chrome" height={16} width={16} />
      Google Workspace
    </Button>
  );
};

export default GoogleWorkspace;

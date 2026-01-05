import { Button } from "../ui/button";
import Image from "next/image";

const Snapchat = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/snapchat.svg" alt="Snapchat" height={16} width={16} />
      Snapchat
    </Button>
  );
};

export default Snapchat;

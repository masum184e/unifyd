import { Button } from "../ui/button";
import Image from "next/image";

const TikTok = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/tiktok.svg" alt="TikTok" height={16} width={16} />
      TikTok
    </Button>
  );
};

export default TikTok;

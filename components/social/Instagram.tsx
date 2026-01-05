import { Button } from "../ui/button";
import Image from "next/image";

const Instagram = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/instagram.svg" alt="Instagram" height={16} width={16} />
      Instagram
    </Button>
  );
};

export default Instagram;

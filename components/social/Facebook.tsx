import Image from "next/image";
import { Button } from "../ui/button";

const Facebook = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/facebook.svg" alt="Facebook" height={16} width={16} />
      Facebook
    </Button>
  );
};

export default Facebook;

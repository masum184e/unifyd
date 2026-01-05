import { Button } from "../ui/button";
import Image from "next/image";

const LinkedIn = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/linkedin.svg" alt="LinkedIn" height={16} width={16} />
      LinkedIn
    </Button>
  );
};

export default LinkedIn;

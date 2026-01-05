import { Button } from "../ui/button";
import Image from "next/image";

const Twitter = () => {
  return (
    <Button variant="outline" className="justify-center gap-3 col-span-2">
      <Image src="./icons/x.svg" alt="X" height={16} width={16} />
      Twitter
    </Button>
  );
};

export default Twitter;

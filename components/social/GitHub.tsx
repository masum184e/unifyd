import Image from "next/image";
import { Button } from "../ui/button";

const GitHub = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/github.svg" alt="GitHub" height={16} width={16} />
      GitHub
    </Button>
  );
};

export default GitHub;

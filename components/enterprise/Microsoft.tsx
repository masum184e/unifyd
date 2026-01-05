import { Button } from "../ui/button";
import Image from "next/image";

const Microsoft = () => {
  return (
    <Button variant="outline" className="justify-center gap-3">
      <Image
        src="./icons/microsoft.svg"
        alt="Microsoft"
        height={16}
        width={16}
      />
      Microsoft
    </Button>
  );
};

export default Microsoft;

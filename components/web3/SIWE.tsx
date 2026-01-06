import { Button } from "../ui/button";
import Image from "next/image";

const SIWE = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image
        src="https://ethereum.org/favicon.ico"
        height={16}
        width={16}
        alt="Ethereum"
        unoptimized
      />
      Sign in with (SIWE)
    </Button>
  );
};

export default SIWE;

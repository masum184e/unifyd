import { Button } from "../ui/button";
import Image from "next/image";

const Okta = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image
        src="https://www.okta.com/sites/default/files/favicon.ico"
        alt="Okta"
        height={16}
        width={16}
        unoptimized
      />
      Okta
    </Button>
  );
};

export default Okta;

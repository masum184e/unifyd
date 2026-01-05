import { Button } from "../ui/button";
import Image from "next/image";

const Auth0 = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/auth0.svg" alt="Auth0" height={16} width={16} />
      Auth0
    </Button>
  );
};

export default Auth0;

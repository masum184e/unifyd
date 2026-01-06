import { Button } from "../ui/button";
import { Smartphone } from "lucide-react";

const AuthenticatorApp = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Smartphone className="h-4 w-4" /> Authenticator App
    </Button>
  );
};

export default AuthenticatorApp;

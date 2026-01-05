import { Button } from "../ui/button";
import { Key } from "lucide-react";

const SAML = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Key className="h-4 w-4" /> SAML 2.0
    </Button>
  );
};

export default SAML;

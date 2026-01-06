import { Button } from "../ui/button";
import { Key } from "lucide-react";

const WebAuthn = () => {
  return (
    <Button variant="secondary" className="w-full justify-start gap-3">
      <Key className="h-4 w-4" /> Passkeys (WebAuthn)
    </Button>
  );
};

export default WebAuthn;

import { Button } from "../ui/button";
import { Wallet2Icon } from "lucide-react";

const Wallet = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Wallet2Icon className="h-4 w-4" /> Connect Wallet
    </Button>
  );
};

export default Wallet;

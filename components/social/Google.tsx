import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Google = () => {
  return (
    <Button variant="outline" className="justify-start gap-3">
      <Image src="./icons/chrome.svg" alt="Chrome" height={16} width={16} />
      Google
    </Button>
  );
};

export default Google;

import React from "react";
import {
  Chrome,
  Facebook,
  Apple,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Ghost,
  Wind,
  ShieldCheck,
  Globe,
  Fingerprint,
  Smartphone,
  Key,
  Mail,
  MessageSquare,
  BellRing,
  Cpu,
  Mic,
  Laptop,
  Zap,
  KeyRound,
  Hash,
  Lock,
  ShieldQuestion,
  UserMinus,
  UserCircle,
  ExternalLink,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Social from "@/components/social/Social";
import Enterprise from "@/components/enterprise/Enterprise";
import Guest from "@/components/guest/Guest";
import Crypto from "@/components/web3/Crypto";
import Phone from "@/components/phone/Phone";
import Email from "@/components/email/Email";
import MFA from "@/components/mfa/MFA";
import Biometric from "@/components/biometric/Biometric";
import Device from "@/components/device/Device";
import User from "@/components/user/User";

const AdvancedAuthUI = () => {
  return (
    // 1. Use h-screen and overflow-hidden on the wrapper to lock the viewport
    <div className="flex items-center justify-center h-screen bg-slate-50 overflow-hidden p-4">
      
      {/* 2. Set the Card to a fixed maximum height (e.g., 95% of the screen) */}
      <Card className="w-full max-w-7xl h-fit max-h-[95vh] shadow bg-white flex flex-col justify-between">
        
        {/* 3. Reduce padding in the header to save vertical space */}
        <CardHeader className="text-center shrink-0">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Identity Provider Portal
          </CardTitle>
          <CardDescription>
            Select your organization or personal account to continue
          </CardDescription>
        </CardHeader>

        {/* 4. Use a tighter gap and smaller vertical margins for the content */}
        <CardContent className="grid md:grid-cols-4 gap-x-8 gap-y-4 px-10 ">
          <div className="space-y-4">
            <Enterprise />
            <Biometric />
          </div>
          <div className="space-y-4">
            <Social />
            <Email />
          </div>
          <div className="space-y-4">
            <Crypto />
            <Guest />
            <Phone />
          </div>
          <div className="space-y-4">
            <MFA />
            <Device />
            <User />
          </div>
        </CardContent>

        {/* <div className="p-4 text-center text-xs text-muted-foreground border-t shrink-0">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div> */}
      </Card>
    </div>
  );
};

export default AdvancedAuthUI;

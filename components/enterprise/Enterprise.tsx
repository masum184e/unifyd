import { ShieldCheck } from "lucide-react";
import Auth0 from "./Auth0";
import GoogleWorkspace from "./GoogleWorkspace";
import Microsoft from "./Microsoft";
import OIDC from "./OIDC";
import Okta from "./Okta";
import OneLogin from "./OneLogin";
import SAML from "./SAML";
import SSO from "./SSO";

const Enterprise = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Enterprise Sign-On</h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Auth0 />
          <SSO />
        </div>
        <GoogleWorkspace />
        <div className="grid grid-cols-2 gap-2">
          <OIDC />
          <SAML />
        </div>
        <Microsoft />
        <div className="grid grid-cols-2 gap-2">
          <Okta />
          <OneLogin />
        </div>
      </div>
    </div>
  );
};

export default Enterprise;

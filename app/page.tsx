import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Social from "@/components/social/Social";
import Enterprise from "@/components/enterprise/Enterprise";

const AdvancedAuthUI = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-full max-w-7xl shadow bg-white my-8">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Identity Provider Portal
          </CardTitle>
          <CardDescription>
            Select your organization or personal account to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="grid md:grid-cols-4 gap-12">
          {/* Column 1: Enterprise & SSO */}
          <Enterprise />

          {/* Column 2: Social Media */}
          <Social />
        </CardContent>
        <div className="p-6 text-center text-xs text-muted-foreground border-t">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </Card>
    </div>
  );
};

export default AdvancedAuthUI;

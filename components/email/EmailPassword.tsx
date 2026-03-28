"use client";

import { useState, useEffect } from "react";
import { KeyRound, Loader2, User as UserIcon, Mail, ShieldCheck } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const supabase = createClient();

const EmailPassword = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("signin");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      
      if (event === "SIGNED_IN") {
        setActiveTab("profile");
      }
      if (event === "SIGNED_OUT") {
        setActiveTab("signin");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="justify-start gap-3">
          <KeyRound className="h-4 w-4" /> 
          {user ? "View Profile" : "Email + Password"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Supabase Authentication</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            {!user ? (
              <>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
              </>
            ) : (
              <TabsTrigger value="profile" className="col-span-2">
                Your Account
              </TabsTrigger>
            )}
          </TabsList>

          {!user ? (
            <>
              <TabsContent value="signup" className="space-y-4 pt-4">
                <SignUp />
              </TabsContent>
              <TabsContent value="signin" className="space-y-4 pt-4">
                <SignIn />
              </TabsContent>
            </>
          ) : (
            <TabsContent value="profile" className="space-y-4 pt-4">
              <Profile user={user} />
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPassword;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password) return toast.error("Please fill in all fields");
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        // emailRedirectTo: `${window.location.origin}/auth/callback?next=/profile`, - use it if you want to redirect any specific url
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email for the confirmation link!");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="su-email">Email</Label>
        <Input id="su-email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="su-password">Password</Label>
        <Input id="su-password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Button className="col-span-2" onClick={handleSignup} disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Account
        </Button>
        <Button variant="outline" onClick={() => { setEmail(""); setPassword(""); setName(""); }}>Reset</Button>
      </div>
    </div>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) toast.error(error.message);
    else toast.success("Welcome back!");
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password"  value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Button className="col-span-2" onClick={handleSignin} disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
        <Button variant="outline" onClick={() => { setEmail(""); setPassword(""); }}>Reset</Button>
      </div>
    </div>
  );
};

const Profile = ({ user }: { user: User | null }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.user_metadata?.name || "");

  const handleUpdateProfile = async () => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      data: { name: name }
    });

    if (error) toast.error(error.message);
    else toast.success("Profile updated!");
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="py-10 text-center text-sm text-muted-foreground italic">
        Please sign in to view your profile.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card p-4 space-y-3 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" /> {user.email}
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4" /> {user.id}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="up-name">Display Name</Label>
        <Input id="up-name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={handleUpdateProfile} disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Update Profile
        </Button>
        <Button variant="destructive" onClick={handleLogout} disabled={loading}>
          Logout
        </Button>
      </div>
    </div>
  );
};
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 1. Parse the URL to get the 'code' parameter sent by Supabase
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  
  // 2. 'next' is an optional parameter if you want to redirect 
  // to a specific page after login (e.g., /dashboard)
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    
    // 3. Exchange the code for a session
    // This automatically set the cookies in the browser
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // 4. Redirect to the original 'next' destination or homepage
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // 5. If there is an error or no code, redirect to an error page
  // or back to the login page with an error message
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/auth-js";

type OAuthButtonProps = {
  provider: Provider;
  buttonText: string;
  icon: React.ReactNode;
  className?: string;
};

function OAuthButton({
  provider,
  buttonText,
  icon,
  className = "mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground",
}: OAuthButtonProps) {
  const signInWithOAuth = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <button className={className} onClick={signInWithOAuth}>
      <div className="flex items-center justify-center gap-2">
        {icon}
        <span>{buttonText}</span>
      </div>
    </button>
  );
}

export default OAuthButton;

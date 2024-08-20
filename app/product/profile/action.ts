"use server";

import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";

export async function create() {}

export async function fetchWriter() {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error, data } = await supabase
    .from("writer")
    .select()
    .eq("user_id", user?.id);
  console.log(error, data);

  return {
    name: user?.user_metadata.full_name,
    profile_url: user?.user_metadata.avatar_url,
  };
}

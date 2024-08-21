"use server";

import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProfile(formData: FormData) {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error, data }: any = await supabase.from("writer").upsert(
    {
      name: user?.user_metadata.full_name,
      introduction: formData.get("introduction"),
      profile_url: user?.user_metadata.avatar_url,
      user_id: user?.id,
    },
    { onConflict: "user_id" }
  );
  console.log(error, data);
  revalidatePath("/home");
  redirect("/home");
}

export async function fetchWriter() {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error, data }: any = await supabase
    .from("writer")
    .select()
    .eq("user_id", user?.id);
  console.log(error, data);

  return {
    name: user?.user_metadata.full_name,
    profile_url: user?.user_metadata.avatar_url,
    introduction: data[0]?.introduction ?? "",
  };
}

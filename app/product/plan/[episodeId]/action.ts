"use server";
import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchEpisode({ episodeId }: any) {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("Post")
    .select()
    .eq("cover_img_timestamp", episodeId);
  if (error) {
    console.log(error);
  }
  return data;
}
export async function makeEpisode(formData: FormData) {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  console.log(formData);
  const { data, error } = await supabase
    .from("Post")
    .update({ content: formData.get("content"), title: formData.get("title") })
    .eq("id", formData.get("episodeId"));

  console.log(data, error);
  revalidatePath("/home");
  redirect("/home");
}

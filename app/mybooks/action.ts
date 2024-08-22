import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";

export async function getAllMyPosts() {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("writer")
    .select(
      "Post(id, title, sub_title, cover_img_timestamp, category, user_id, created_at, edited_at, recommendation, views, content, introduction), id, name, introduction,user_id, profile_url"
    )
    .eq("user_id", user?.id);
  console.log(data![0].Post, error);
  return data;
}

import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";

export async function getAllPostsWithWriters() {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase
    .from("Post")
    .select(
      "id, title, sub_title, cover_img_timestamp, category, user_id, created_at, edited_at, recommendation, views, content, introduction, writer(id, name, introduction,user_id, profile_url)"
    );
  console.log(data, error);
  return [data, user?.id];
}

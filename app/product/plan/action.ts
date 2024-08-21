"use server";
import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";
import { decode } from "base64-arraybuffer";

const uploadImageToSupabase = async (base64: any) => {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase.storage
    .from("cover_images")
    .upload(
      `${user?.id!}/${Number(new Date())}`,
      decode(base64.split(",")[1]),
      {
        contentType: "image/png",
      }
    );

  if (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
  // Return the file path or public URL if needed
  return data;
};

export async function makeProductPlan(prevState: any, data: FormData) {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  console.log(await uploadImageToSupabase(data.get("image")));
  //   console.log(data.get("image"));
}

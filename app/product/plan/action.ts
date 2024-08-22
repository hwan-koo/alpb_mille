"use server";
import getUser from "@/utils/supabase/getUser";
import { createClient } from "@supabase/supabase-js";
import { decode } from "base64-arraybuffer";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import OpenAI from "openai";

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
const uploadGeneratedImageToSupabase = async (base64: any) => {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const timeStamp = Number(new Date());
  const { data, error } = await supabase.storage
    .from("cover_images")
    .upload(`${user?.id!}/${timeStamp}`, decode(base64), {
      contentType: "image/png",
    });

  if (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
  // Return the file path or public URL if needed
  return timeStamp;
};

export async function makeProductPlan(prevState: any, formData: FormData) {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  //   console.log(await uploadImageToSupabase(data.get("image")));
  const { data, error }: any = await supabase.from("Post").insert({
    title: formData.get("title"),
    sub_title: formData.get("subTitle"),
    introduction: formData.get("introduction"),
    category: formData.get("category"),
    recommendation: formData.get("recommendation"),
    user_id: (
      await supabase.from("writer").select("id").eq("user_id", user?.id)
    ).data![0].id,
    cover_img_timestamp: formData.get("imageTimeStamp"),
  });

  console.log(data, error);
  revalidatePath(`/product/plan/${formData.get("imageTimeStamp")}`);
  redirect(`/product/plan/${formData.get("imageTimeStamp")}`);
}

export async function fetchCoverImages() {
  const user = await getUser();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data, error } = await supabase.storage
    .from("cover_images")
    .list(user?.id, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "desc" },
    });
  if (error) {
    console.log(error);
  }

  return [data, user?.id];
}

export async function generateImage({
  title,
  introduction,
}: {
  title: string;
  introduction: string;
}) {
  const openai = new OpenAI();
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `너는 마케팅 담당자로서 다음의 내용을 담고 있는 그림을 세로로 그려줘. 제목 : ${title} ,소개: ${introduction}`,
    size: "1024x1792",
    response_format: "b64_json",
  });
  const imageBinaryData = response.data[0].b64_json;
  const buffer = Buffer.from(imageBinaryData as any, "base64");
  const timeStamp = await uploadGeneratedImageToSupabase(
    buffer.toString("base64")
  );
  return timeStamp;
}

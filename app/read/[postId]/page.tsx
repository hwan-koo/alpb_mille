import { getDetailPost } from "@/app/detail/[postId]/action";
import AppBar from "@/components/navbar/AppBar";
import Image from "next/image";

export default async function PostRead({ params }: any) {
  const postInfo = (await getDetailPost(params))[0]![0] as any;
  const date = new Date(postInfo.created_at);

  // 연도, 월, 일 추출
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 +1
  const day = String(date.getUTCDate()).padStart(2, "0");

  // 원하는 형식으로 변환
  const formattedDate = `${year}.${month}.${day}`;
  return (
    <>
      <AppBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">{postInfo.title}</h1>
        <div className="flex flex-row items-center mt-5">
          <Image
            src={postInfo.writer.profile_url}
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 rounded-full "
          />
          <p className="text-sm text-gray-600 ml-2"> {postInfo.writer.name} </p>
          <p className="text-sm text-gray-600 ml-2"> ・ {formattedDate}</p>
        </div>
        <div className="font-bold text-gray-600 text-center mt-16">
          {postInfo.sub_title}
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-5"></div>
        <div className="mt-5">{postInfo.content}</div>
      </div>
    </>
  );
}

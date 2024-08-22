import AppBar from "@/components/navbar/AppBar";
import { getDetailPost } from "./action";
import Image from "next/image";
import { COVERIMAGE_BASE_URL } from "@/lib/constants/strings";
import ClapIcon from "@/components/icons/ClapIcon";
import DetailClapIcon from "@/components/icons/detailClapIcon";
import Link from "next/link";

export default async function PostDetail({ params }: any) {
  const postInfo = (await getDetailPost(params))[0]![0] as any;
  const categroyMap = {
    essay: "에세이",
    novel: "소설",
    humanities: "인문",
    economics: "경제경영",
    selfDevelopment: "자기계발",
    science: "과학",
  } as any;
  const date = new Date(postInfo.created_at);

  // 연도, 월, 일 추출
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // 0부터 시작하므로 +1
  const day = String(date.getUTCDate()).padStart(2, "0");

  // 원하는 형식으로 변환
  const formattedDate = `${year}.${month}.${day}`;
  return (
    <>
      <AppBar title={postInfo.title} />
      <div>
        <div className="w-full aspect-square bg-gradient-to-r from-[#FDDCF9] to-[#C3E8FC] flex  justify-center items-center">
          <Image
            src={
              COVERIMAGE_BASE_URL +
              postInfo.writer.user_id +
              "/" +
              postInfo.cover_img_timestamp
            }
            alt=""
            width={300}
            height={300}
            className="w-6/12 aspect-coverImage rounded-md mb-5"
          />
        </div>
        <div className="rounded-[40px] w-full h-40 -translate-y-10 bg-white  justify-center p-6 flex flex-col ">
          <h1 className="font-bold text-xl mt-12">{postInfo.title}</h1>
          <h2 className="mt-2 text-sm text-gray-600">{postInfo.sub_title}</h2>
          <p className="mt-5 text-lg font-bold"> {postInfo.writer.name} </p>
          <p className="text-sm text-gray-600">
            {categroyMap[postInfo.category]} ・ {formattedDate}
          </p>
        </div>
        <div className="px-6">
          <div className="w-full bg-[#FAFAF6] rounded-2xl h-28 flex flex-row justify-between items-center">
            <div className="w-1/2 flex flex-col justify-center items-center">
              <Image
                src={postInfo.writer.profile_url}
                width={20}
                height={20}
                alt=""
                className="w-5 h-5 rounded-full "
              />
              <p className="text-xs text-gray-600 mt-2">이 작품의 조회수</p>
              <p className="text-gray-600 font-bold ">2회</p>
            </div>
            <div className="w-[1px] h-12 bg-slate-300 justify-center flex items-center"></div>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <DetailClapIcon />
              <p className="text-xs text-gray-600 mt-2">이 작품의 밀어주리</p>
              <p className="text-gray-600 font-bold ">1회</p>
            </div>
          </div>
        </div>
        <div className="px-6 mt-4 mb-24">
          <Link href={`/read/${postInfo.cover_img_timestamp}`}>
            <button className="bg-[#333333] w-full text-white py-2 rounded-lg ">
              바로 보기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

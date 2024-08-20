import Image from "next/image";

export default function WriterProfile({
  name,
  profile_url,
}: {
  name: string;
  profile_url: string;
}) {
  return (
    <form>
      <h1 className="font-bold">
        활동하실 필명과 프로필 이미지를 확인해주세요
      </h1>
      <p className="text-sm text-gray-400">
        ・ 회원정보 수정 시, 기존 활동 내역에 일괄 반영됩니다
      </p>
      <div className="flex flex-col mt-8 justify-center items-center ">
        <Image src={profile_url} width={100} height={100} alt="f" />
        <p>{name}</p>
      </div>
      <div className="mt-8">
        <span className="font-bold">작가 소개</span>
        <span>를 입력해주세요</span>
      </div>

      <textarea
        className="border-[1px] mt-2 w-full h-64 rounded-md p-2 resize-none"
        placeholder="작품을 만든 작가에 대해 멋지게 소개해 주세요. "
        title="작가 소개"
        maxLength={200}
        minLength={1}
        // onChange={(e) => setIntroduction(e.target.value)}
      ></textarea>
      {/* <p className="text-right text-xs text-gray-400">
          {introduction.length} / 200
        </p> */}
      <button className="w-full bg-[#FAE65E]  rounded-md p-2 mt-4">
        저장하기
      </button>
    </form>
  );
}

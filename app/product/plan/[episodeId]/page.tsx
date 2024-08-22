import AppBar from "@/components/navbar/AppBar";
import { fetchEpisode, makeEpisode } from "./action";
// TimeStamp값으로 조회하는거임
export default async function Episode({ params }: any) {
  const episode = await fetchEpisode({
    episodeId: params.episodeId,
  });
  const postId = episode && episode[0].id;
  console.log(episode);
  return (
    <div>
      <AppBar title="작품 만들기" />
      <form action={makeEpisode} className="p-6">
        <input
          defaultValue={episode![0].title}
          className="text-3xl border-b-2 w-full h-16 font-bold text-gray-600"
          placeholder="에피소드 제목을 입력하세요"
          min={2}
          max={20}
          name="title"
        />
        <textarea
          className="w-full h-96 mt-6 "
          placeholder="다른 사람이 작성한 글을 무단으로 옮기거나, 명예를 훼손하는 게시물은 법적 제제를 받을 수 있습니다. 또한 성인물, 폭력물 등은 통보 없이 삭제됩니다. 쾌적하고 즐거운 서비스 이용을 위해 다른 이용자를 배려해주세요."
          name="content"
        ></textarea>
        <input className="hidden" name="episodeId" value={postId} />
        <button
          type="submit"
          className="w-full h-12 bg-[#FAE65E] text-black font-bo rounded-lg mt-6"
        >
          저장하기
        </button>
      </form>
    </div>
  );
}

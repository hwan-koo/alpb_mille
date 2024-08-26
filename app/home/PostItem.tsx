import ClapIcon from "@/components/icons/ClapIcon";
import ReviewIcon from "@/components/icons/ReviewIcon";
import ViewIcon from "@/components/icons/ViewIcon";
import { COVERIMAGE_BASE_URL } from "@/lib/constants/strings";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({
  postData,
  userId,
}: {
  postData: Array<object>;
  userId: any;
}) {
  {
    return (
      <div className="mt-4">
        <div className="text-base font-bold mt-4">
          {" "}
          총 {postData?.length}개{" "}
        </div>
        {postData?.map((post: any, index: any) => (
          <Link
            className="flex flex-row mt-4"
            key={index}
            href={"/detail/" + post.cover_img_timestamp}
          >
            {post.cover_img_timestamp ? (
              <Image
                src={
                  COVERIMAGE_BASE_URL +
                  post.writer.user_id +
                  "/" +
                  post.cover_img_timestamp
                }
                alt=""
                width={100}
                height={100}
                className="w-28 h-40 border-[1px] border-gray-400 rounded-lg flex-shrink-0 "
              />
            ) : null}
            <div className="ml-4  flex flex-col justify-between">
              <div>
                <div className="bg-[#FFEB60] w-[100px]  rounded-md px-1 py-[2px] flex flex-row items-center justify-center ">
                  <ClapIcon />
                  <div className="text-xs ml-1">
                    <span className="font-bold">1명</span>
                    <span>이 밀어줌</span>
                  </div>
                </div>
                <h3 className="font-bold mt-1">{post.title}</h3>
                <h4 className="text-sm text-gray-500">{post.sub_title}</h4>
                <div className="flex flex-row items-center mt-1 ">
                  {post.writer.profile_url ? (
                    <Image
                      src={post.writer.profile_url}
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-full mr-2 w-4 h-4 "
                    />
                  ) : null}

                  <p className="text-gray-600 text-sm"> {post.writer.name}</p>
                </div>
              </div>

              <div className="mt-1 flex flex-row gap-1 items-center mb-1">
                <ViewIcon />
                <span className="text-gray-600 text-sm mr-1">2</span>
                <ReviewIcon />
                <span className="text-gray-600 text-sm">0</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

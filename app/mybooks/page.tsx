import MilleIcon from "@/components/icons/milleIcon";
import { getAllMyPosts } from "./action";
import Link from "next/link";
import PostAddIcon from "@/components/icons/PostAddIcon";
import { Suspense } from "react";

import MyPostItem from "./MyPostItem";

export default async function MyBooks() {
  const data = (await getAllMyPosts()) as any;
  const mybooks = data[0]!.Post;
  const writerData = data[0];
  return (
    <div className="p-6 mb-24">
      {data != null ? (
        <div>
          <div className=" flex flex-row items-center">
            <MilleIcon />
            <h1 className="font-bold text-xl ml-2">경환의 서재</h1>
          </div>
          <div className="mt-6 flex flex-row justify-between">
            <h2 className=" font-semibold text-lg">내가 만든 작품</h2>
            <Link href={"/product/profile"}>
              <PostAddIcon />
            </Link>
          </div>
          <Suspense>
            <MyPostItem postData={mybooks} writerData={writerData} />
          </Suspense>{" "}
        </div>
      ) : (
        <div>작품이 없습니다.</div>
      )}
    </div>
  );
}

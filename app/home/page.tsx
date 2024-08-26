import MilleIcon from "@/components/icons/milleIcon";
import PostAddIcon from "@/components/icons/PostAddIcon";
import CategoryTabs from "./CategoryTabs";
import Link from "next/link";
import { getAllPostsWithWriters } from "./action";
import { Suspense } from "react";

export default async function Home() {
  const data = await getAllPostsWithWriters();
  const postData = data[0] as any;
  const userId = data[1];
  return (
    <>
      {data != null ? (
        <div className="p-6 mb-24">
          <div className=" flex flex-row items-center">
            <MilleIcon />
            <h1 className="font-bold text-xl ml-2">경환의 서재</h1>
          </div>
          <div className="mt-6 flex flex-row justify-between">
            <h2 className=" font-semibold text-lg">최신 작품</h2>
            <Link href={"/product/profile"}>
              <PostAddIcon />
            </Link>
          </div>
          <Suspense>
            <CategoryTabs postData={postData} userId={userId} />{" "}
          </Suspense>
        </div>
      ) : (
        <div>작품이 없습니다.</div>
      )}
    </>
  );
}

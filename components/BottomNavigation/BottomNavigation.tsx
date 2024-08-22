"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FeedIcon from "./FeedIcon";
import MyBooksIcon from "./myBooksIcon";
import MyPageIcon from "./MyPageIcon";

export default function BottomNavigation() {
  const path = usePathname();
  return (
    <footer className="fixed bottom-0 flex w-full max-w-screen-sm flex-row justify-center gap-16 border-t-[1px] border-[#D9DEE9] bg-white pt-3  border-r-[1px] border-l-[1px] border-l-white">
      <Link href="/home" prefetch={true}>
        <div className="mb-[27px] flex flex-col items-center gap-1.5 w-14">
          <FeedIcon selected={path != "/home" ? false : true} />
          <span
            className={`text-xs font-semibold ${
              path != "/home" ? "text-[#D9DEE9]" : "text-[#0D0E0E]"
            }`}
          >
            피드
          </span>
        </div>
      </Link>
      <Link href="/mybooks" prefetch={true}>
        <div className="mb-[27px] flex flex-col items-center gap-1.5 w-14">
          <MyBooksIcon selected={path != "/mybooks" ? false : true} />
          <span
            className={`text-xs font-semibold ${
              path != "/mybooks" ? "text-[#D9DEE9]" : "text-[#0D0E0E]"
            }`}
          >
            내 책장
          </span>
        </div>
      </Link>
      <Link href="/mypage" prefetch={true}>
        <div className="mb-[27px] flex flex-col items-center gap-1.5 w-14">
          <MyPageIcon selected={path != "/mypage" ? false : true} />
          <span
            className={`text-xs font-semibold ${
              path != "/mypage" ? "text-[#D9DEE9]" : "text-[#0D0E0E]"
            }`}
          >
            마이 페이지
          </span>
        </div>
      </Link>
    </footer>
  );
}

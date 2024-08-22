"use client";

// import { INQUIRY_REQUEST_URL, PREMIUM_REQUEST_URL } from "@/lib/constants/urls";
import { SignOut } from "./action";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";

function MyPage() {
  return (
    <>
      <header className="flex h-14 items-center px-5">
        <h1 className="align-middle text-xl font-medium">마이 페이지</h1>
      </header>
      <main className="flex flex-col items-start px-5">
        {/* <button
          className="mt-4 font-semibold"
          onClick={() => {
            // window.open(INQUIRY_REQUEST_URL);
          }}
        >
          문의하기
        </button> */}
        <form action={SignOut} className="mt-4">
          <button className="font-semibold"> 로그아웃 </button>
        </form>
      </main>

      <BottomNavigation />
    </>
  );
}

export default MyPage;

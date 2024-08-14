import OAuthButton from "@/components/auth/OAuthButton";
import { LOGIN_TITLE } from "@/lib/constants/strings";
import KakaoIcon from "@/components/auth/KakaoIcon";
import GoogleIcon from "@/components/auth/GoogleIcon";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="col-span-4 flex flex-col justify-center gap-4">
      <h1 className="mt-20 text-2xl text-center font-bold text-black">
        {LOGIN_TITLE}
      </h1>
      <p className="text-gray-500 text-center">
        18만 권 속에서 인생책을 찾아보세요
      </p>

      <OAuthButton
        className="bg-[#FFEB60] hover:bg-kakao-background-hover mt-20 rounded-lg py-4 text-black"
        provider="kakao"
        icon={<KakaoIcon />}
        buttonText="카카오 로그인"
      />
      <OAuthButton
        className="rounded-lg bg-gray-50 py-4 text-black hover:bg-gray-100"
        icon={<GoogleIcon />}
        provider="google"
        buttonText="구글 로그인"
      />
    </div>
  );
}

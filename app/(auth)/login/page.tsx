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
      <h1 className="mb-14 self-center text-center text-xl font-semibold">
        {LOGIN_TITLE}
      </h1>

      <OAuthButton
        className="bg-kakao-background hover:bg-kakao-background-hover mt-28 rounded-lg py-4 text-black"
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 모든 도메인을 허용
        port: "",
      },
    ],
    domains: [
      "t1.kakaocdn.net",
      "https://veancltplpfxofuvdyav.supabase.co",
      "img1.kakaocdn.net",
    ],
  },
};

module.exports = nextConfig;

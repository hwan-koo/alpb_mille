/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 모든 도메인을 허용
      },
    ],
    domains: ["t1.kakaocdn.net"],
  },
};

module.exports = nextConfig;

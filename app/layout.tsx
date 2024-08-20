import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { DEV_SERVER_URL } from "@/lib/constants/urls";
import { SERVICE_DESCRIPTION, SERVICE_NAME } from "@/lib/constants/strings";
import Script from "next/script";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";

// const defaultUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//   : DEV_SERVER_URL;
const defaultUrl = DEV_SERVER_URL;

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: `%s | ${SERVICE_NAME}`,
    default: SERVICE_NAME,
  },

  description: SERVICE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="mx-auto min-h-screen min-w-screen-mobile max-w-screen-sm break-keep border-[1px] border-gray-20 antialiased ">
        {children}
        <div id="portal" />
        <BottomNavigation />
      </body>
    </html>
  );
}

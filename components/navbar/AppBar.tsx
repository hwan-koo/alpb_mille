import React from "react";
import BackIcon from "@/components/navbar/BackIcon";
import Link from "next/link";
import { Url } from "url";
import DynamicBackButton from "@/components/navbar/DynamicBackButton";

type AppBarProps = {
  link?: Url | string;
  title?: string;
  trailing?: React.ReactNode;
  showBorder?: boolean;
  className?: string;
};

function AppBar({ link, title, trailing, showBorder, className }: AppBarProps) {
  const leadingIcon = <BackIcon />;

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-10 flex h-14 items-center border-b ${
        showBorder ? "border-b-gray-20" : "border-transparent"
      } px-5 backdrop-blur-2xl ${className}`}
    >
      {link ? (
        <Link href={link}>{leadingIcon}</Link>
      ) : (
        <DynamicBackButton>{leadingIcon}</DynamicBackButton>
      )}
      <h1 className="flex-grow text-center text-base font-medium">{title}</h1>
      <div className="w-17 relative">
        <div className="absolute bottom-0 right-0 top-0 flex items-center justify-end">
          {trailing ?? <div className="w-17" />}
        </div>
      </div>
    </header>
  );
}

export default AppBar;

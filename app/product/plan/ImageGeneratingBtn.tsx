"use client";
import ImageGenerateIcon from "@/components/icons/ImageGenerateIcon";
import { useState } from "react";

export default function ImageGeneratingBtn() {
  const [isLoading, SetIsLoading] = useState(false);
  return (
    <button
      type="button"
      className={`mt-1  flex h-11  items-center justify-center rounded-2xl  ${" bg-gradient-to-r from-yellow-200 to-red-200"} ${
        isLoading ? "w-[158px] animate-autoComplete " : "w-[188px]"
      }`}
      disabled={isLoading}
      onClick={() => {
        SetIsLoading(true);
      }}
    >
      <div className="flex flex-row w-18 ">
        <ImageGenerateIcon />
        <span className="ml-2 text-[15px] font-semibold">
          {isLoading ? "이미지 생성중.." : "표지 생성하기"}
        </span>
      </div>
    </button>
  );
}

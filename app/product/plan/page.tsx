"use client";
import PictureIcon from "@/components/icons/PictureIcon";
import AppBar from "@/components/navbar/AppBar";
import { useMemo, useState } from "react";
import CoverChoiceModal from "./CoverChoiceModal";
import Image from "next/image";
import { makeProductPlan } from "./action";
import { useFormState } from "react-dom";

export default function Plan() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState<string | ArrayBuffer | null>(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [category, setCategory] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const initailState: any = useMemo(() => ({}), []);
  const [state, dispatch] = useFormState(makeProductPlan, initailState);
  const getImageData = (image: any) => {
    setImage(image);
  };
  const getBase64 = (base64: string | ArrayBuffer | null) => {
    setBase64(base64);
  };
  return (
    <div>
      <AppBar title="작품 기획안 작성" />
      <form action={dispatch} className="p-6 mb-24">
        <div>
          <span className="font-bold">1. 작품 제목</span>
          <span>을 입력해주세요*</span>
        </div>
        <input
          className="w-full border-[1px] rounded-md p-4 mt-2"
          placeholder="독자의 눈길을 끌 만한 제목을 입력해 보세요"
          name="title"
          minLength={2}
          maxLength={20}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="text-slate-400 text-xs text-right mr-1">
          {title.length}/20
        </p>
        <div className="mt-8">
          <span className="font-bold">2. 작품의 부제</span>
          <span>를 입력해주세요</span>
        </div>
        <input
          className="w-full border-[1px] rounded-md p-4 mt-2  flex "
          placeholder="독자의 눈길을 끌 만한 부제를 입력해 보세요"
          name="subTitle"
          maxLength={50}
          onChange={(e) => setSubTitle(e.target.value)}
        />
        <p className="text-slate-400 text-xs text-right mr-1">
          {subTitle.length}/50
        </p>
        <div className="mt-8">
          <span className="font-bold">3. 작품에 대한 소개</span>
          <span>를 입력해주세요*</span>
        </div>
        <textarea
          className="w-full border-[1px] rounded-md p-4 mt-2 h-32 flex resize-none"
          placeholder="줄거리, 매력포인트, 연재 계획 등 독자들에게 이 작품의 멋진 점을 소개해주세요"
          name="introduction"
          minLength={2}
          maxLength={500}
          onChange={(e) => setIntroduction(e.target.value)}
        />
        <p className="text-slate-400 text-xs text-right mr-1">
          {introduction.length}/500
        </p>
        <div className="mt-8">
          <span className="font-bold">4. 작품의 카테고리</span>
          <span>를 선택해주세요*</span>
        </div>
        <select
          className="w-full border-[1px] rounded-md p-4 mt-2"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="novel">소설</option>
          <option value="essay">에세이</option>
          <option value="humanities">인문</option>
          <option
            value="selfDevelopment
"
          >
            자기 계발
          </option>
          <option value="humanities">인문</option>
          <option value="economics">경제경영</option>
          <option value="science">과학</option>
          <option value="webtoon">웹툰</option>
        </select>
        <div className="mt-8">
          <span className="font-bold">5. 작품의 추천 포인트</span>
          <span>를 입력해주세요</span>
        </div>
        <textarea
          className="w-full border-[1px] rounded-md p-4 mt-2 h-32 flex resize-none"
          placeholder="예)
          밤이면 생각이 많아지시는 분들에게 추천드려요.
          훌쩍 여행을 떠나고 싶을 때 읽어보세요.
          문득 앞으로가 막막할 때 지침이 되어드려요!"
          name="recommendation"
          maxLength={50}
          onChange={(e) => setRecommendation(e.target.value)}
        />
        <p className="text-slate-400 text-xs text-right mr-1">
          {recommendation.length}/50
        </p>
        <div className="mt-8">
          <span className="font-bold">6. 작품의 표지</span>
          <span>를 선택해 주세요</span>
        </div>
        <div>
          <div className="w-full bg-[#F7F7F7] h-56 mt-2 p-4 flex flex-col justify-center items-center">
            {image ? (
              <div className="w-24 bg-[#DFDFDF] h-32 mt-2 rounded-lg flex flex-col items-center justify-center mb-4 relative border-[2px]">
                <Image src={image} fill alt="" />
              </div>
            ) : (
              <div className="w-24 p-2 bg-[#DFDFDF] h-32 rounded-lg mb-4 flex justify-center items-center">
                <PictureIcon color={"#8B8B8B"} width={"24"} height={"24"} />
              </div>
            )}

            <div className="w-24 flex flex-row justify-center items-center text-white bg-[#333333] text-sm p-2 rounded-md">
              <PictureIcon color={"white"} width={"15"} height={"15"} />
              <span
                className="ml-1"
                onClick={() => {
                  setShow(!show);
                }}
              >
                표지 선택
              </span>
            </div>
          </div>
        </div>
        <button className="w-full bg-[#FAE65E]  rounded-md p-2 mt-4">
          저장하기
        </button>
        <input
          className="hidden"
          defaultValue={(base64 as string) ?? ""}
          name="image"
        ></input>
      </form>
      <CoverChoiceModal
        show={show}
        setShow={setShow}
        deliverImageData={getImageData}
        deliverBase64={getBase64}
      />
    </div>
  );
}

"use client";

import PictureIcon from "@/components/icons/PictureIcon";
import Modal from "@/components/ui/Modal";
import Image from "next/image";
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { COVERIMAGE_BASE_URL } from "@/lib/constants/strings";
import ImageGenerateIcon from "@/components/icons/ImageGenerateIcon";
import { generateImage } from "./action";

type CoverChoiceModalModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  deliverImageData: (image: any) => void;
  deliverBase64: (base64: string | ArrayBuffer | null) => void;
  deliverImageTimeStamp: (timeStamp: any) => void;
  cover_images: any;
  user_id: any;
  title: string;
  introduction: string;
};

export default function CoverChoiceModal({
  show,
  setShow,
  deliverImageData,
  deliverBase64,
  cover_images,
  user_id,
  deliverImageTimeStamp,
  title,
  introduction,
}: CoverChoiceModalModalProps) {
  const deliverOptions = (formData: FormData) => {
    setShow(false);
    deliverImageData(image);
    deliverBase64(base64);
  };
  const tabs = ["표지 선택", "직접 업로드"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [image, setImage]: any = useState(null);
  const [base64, setBase64] = useState<string | ArrayBuffer | null>(null);
  const [isLoading, SetIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageTimeStamp, setImageTimeStamp] = useState<any>(null);

  const getImageData = (image: any) => {
    setImage(image);
  };
  const getBase64 = (base64: string | ArrayBuffer | null) => {
    setBase64(base64);
  };

  return (
    <Modal show={show} setShow={setShow}>
      <form
        action={deliverOptions}
        className="relative flex justify-center flex-col items-center"
      >
        <h2 className="font-bold text-lg">표지 선택</h2>
        {image ? (
          <div className="w-48 bg-[#DFDFDF] h-72 mt-2 rounded-lg flex flex-col items-center justify-center mb-4 relative border-[2px]">
            <Image src={image} fill alt="" />
          </div>
        ) : (
          <div className="w-48 bg-[#DFDFDF] h-72 mt-2 rounded-lg flex flex-col items-center justify-center mb-4">
            <PictureIcon color={"#8B8B8B"} width={"36"} height={"36"} />
            <div className="text-gray-500 text-center mt-4">
              <p>작품과 어울리는</p>
              <p>표지를 선택해주세요</p>
            </div>
          </div>
        )}
        <button
          type="button"
          className={`mt-1  flex h-11  items-center justify-center rounded-2xl  ${" bg-gradient-to-r from-yellow-200 to-red-200"} ${
            isLoading ? "w-[158px] animate-autoComplete " : "w-[188px]"
          }`}
          disabled={isLoading}
          onClick={async () => {
            SetIsLoading(true);
            const timeStamp = await generateImage({ title, introduction });
            SetIsLoading(false);
            setImage(COVERIMAGE_BASE_URL + user_id + "/" + timeStamp);
            deliverImageData(COVERIMAGE_BASE_URL + user_id + "/" + timeStamp);
            setImageTimeStamp(timeStamp);
            deliverImageTimeStamp(timeStamp);
          }}
        >
          <div className="flex flex-row w-18 ">
            <ImageGenerateIcon />
            <span className="ml-2 text-[15px] font-semibold">
              {isLoading ? "이미지 생성중.." : "표지 생성하기"}
            </span>
          </div>
        </button>
        <p className="text-xs font-semibold text-gray-500 mt-2 mb-4">
          작성해주신 기획안을 바탕으로 이미지가 만들어져요
        </p>
        <div className="flex border-b mb-4 w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`w-1/2 py-2 ${
                selectedTab === tab ? "border-b-2 border-black" : ""
              }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === "표지 선택" && (
          <>
            <div
              className={`mt-4   flex-row flex overflow-x-scroll flex-nowrap`}
            >
              {cover_images.map((cover_image: any, index: number) => (
                <div
                  key={index}
                  className={`flex-shrink-0 mr-2 border-[2px] rounded-lg ${
                    selectedIndex == index
                      ? "border-[#FAE65E]"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    setSelectedIndex(index);
                    setImage(
                      COVERIMAGE_BASE_URL + user_id + "/" + cover_image.name
                    );
                    setImageTimeStamp(cover_image.name);
                    deliverImageTimeStamp(cover_image.name);
                  }}
                >
                  <Image
                    src={COVERIMAGE_BASE_URL + user_id + "/" + cover_image.name}
                    alt=""
                    width={200}
                    height={200}
                    className="w-24 h-36"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {selectedTab === "직접 업로드" && (
          <div className="mt-4 mb-4 w-full">
            <ImageUpload getImageData={getImageData} getBase64={getBase64} />
          </div>
        )}

        <button
          className={`w-full ${
            image || !isLoading ? "bg-[#FAE65E]" : "bg-gray-400"
          }  rounded-md p-2 mt-4 h-12`}
          disabled={!image && isLoading}
        >
          {isLoading ? "이미지 생성중.." : image ? "선택하기" : "취소"}
        </button>
      </form>
    </Modal>
  );
}

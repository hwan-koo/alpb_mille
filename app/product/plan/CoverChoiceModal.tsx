"use client";

import PictureIcon from "@/components/icons/PictureIcon";
import Modal from "@/components/ui/Modal";
import Image from "next/image";
import { useState } from "react";
import ImageUpload from "./ImageUpload";

type CoverChoiceModalModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  deliverImageData: (image: any) => void;
  deliverBase64: (base64: string | ArrayBuffer | null) => void;
};

export default function CoverChoiceModal({
  show,
  setShow,
  deliverImageData,
  deliverBase64,
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
        {selectedTab === "표지 선택" && <div className="mt-4 mb-24"></div>}
        {selectedTab === "직접 업로드" && (
          <div className="mt-4 mb-4 w-full">
            <ImageUpload getImageData={getImageData} getBase64={getBase64} />
          </div>
        )}
        <button
          className={`w-full ${
            image ? "bg-[#FAE65E]" : "bg-gray-400"
          }  rounded-md p-2 mt-4 h-12`}
        >
          {image ? "선택하기" : "취소"}
        </button>
      </form>
    </Modal>
  );
}

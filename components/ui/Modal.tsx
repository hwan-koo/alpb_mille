"use client";

import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";
import CloseIcon from "./CloseIcon";

type ModalProps = {
  children: ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
  backdrop?: boolean;
};

function Modal({ children, show, setShow, backdrop = true }: ModalProps) {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, []);

  const close = () => {
    setShow(false);
  };

  if (!portalElement || !show) return null;
  return createPortal(
    <div
      className={`fixed bottom-0 top-0 flex w-screen max-w-[640px] flex-col justify-center bg-gray-40 bg-opacity-50  ${
        backdrop ? "backdrop-blur" : ""
      }`}
    >
      <div className="m-5 max-h-[640px]  overflow-y-scroll rounded-xl bg-white  p-5 border-[2px] ">
        {children}
      </div>
      {/* <button
        onClick={close}
        className="relative top-10 flex h-[50px] w-[50px] items-center justify-center self-center rounded-full bg-gray-600 text-white hover:bg-gray-500"
      >
        <CloseIcon />
      </button> */}
    </div>,
    portalElement
  );
}

export default Modal;

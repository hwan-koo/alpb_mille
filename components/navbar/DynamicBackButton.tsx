"use client";

import React from "react";
import { useRouter } from "next/navigation";

type DynamicBackButtonProps = {
  children: React.ReactNode;
};

function DynamicBackButton({ children }: DynamicBackButtonProps) {
  const router = useRouter();
  const goBack = () => router.back();

  return <button onClick={goBack}>{children}</button>;
}

export default DynamicBackButton;

"use client";

import { useState } from "react";
import PostItem from "./PostItem";

export default function CategoryTabs({
  postData,
  userId,
}: {
  postData: Array<object>;
  userId: any;
}) {
  const tabs = [
    "전체",
    "소설",
    "에세이",
    "인문",
    "자기계발",
    "경제경영",
    "과학",
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const novels =
    postData && postData.filter((item: any) => item.category == "novel");
  const essays =
    postData && postData.filter((item: any) => item.category == "essay");
  const humanities =
    postData && postData.filter((item: any) => item.category == "humanities");
  const economics =
    postData && postData.filter((item: any) => item.category == "economics");
  const selfDevelopment =
    postData &&
    postData.filter((item: any) => item.category == "selfDevelopment");
  const science =
    postData && postData.filter((item: any) => item.category == "science");

  return (
    <div>
      <div className="flex flex-row overflow-x-auto flex-nowrap gap-3 ">
        {tabs.map((tab) => (
          <div
            className={`px-3 border-[1px] rounded-[50px] mt-4 flex justify-center items-center h-8 text-sm text-gray-700  ${
              selectedTab == tab ? "font-bold border-black border-[1px]" : ""
            } `}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {selectedTab == "전체" && (
        <PostItem postData={postData} userId={userId} />
      )}
      {selectedTab == "소설" && <PostItem postData={novels} userId={userId} />}
      {selectedTab == "에세이" && (
        <PostItem postData={essays} userId={userId} />
      )}
      {selectedTab == "인문" && (
        <PostItem postData={humanities} userId={userId} />
      )}
      {selectedTab == "자기계발" && (
        <PostItem postData={selfDevelopment} userId={userId} />
      )}
      {selectedTab == "경제경영" && (
        <PostItem postData={economics} userId={userId} />
      )}
      {selectedTab == "과학" && <PostItem postData={science} userId={userId} />}
    </div>
  );
}

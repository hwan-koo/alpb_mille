import AppBar from "@/components/navbar/AppBar";
import WriterProfile from "./WriterProfile";
import { fetchWriter } from "./action";
import { Suspense } from "react";

export default async function Intro() {
  const { name, profile_url, introduction } = await fetchWriter();
  console.log(introduction);
  return (
    <Suspense>
      <AppBar title="프로필 편집" />
      <div className="p-6 mb-24">
        <WriterProfile
          name={name}
          profile_url={profile_url}
          introduction={introduction}
        />
      </div>
    </Suspense>
  );
}

import { fetchCoverImages, generateImage } from "./action";
import PlanForm from "./PlanForm";

export default async function Plan() {
  const data = await fetchCoverImages();
  //   await generateImage();
  return (
    <>
      <PlanForm cover_images={data[0]} user_id={data[1]} />
    </>
  );
}

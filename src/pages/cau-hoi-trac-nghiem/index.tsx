import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Cauhoituvan = dynamic(
  () => import("@/features/cau-hoi-tu-van").then((mod) => mod.Cauhoituvan),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tư vấn hướng nghiệp - Đại học Kinh tế Quốc dân"
        description="Đại học Kinh tế Quốc dân tuyển sinh năm 2023 - tổng hợp tư vấn hướng nghiệp của Đại học Kinh tế Quốc dân"
      />
      <Cauhoituvan />
    </>
  );
};

export default Page;

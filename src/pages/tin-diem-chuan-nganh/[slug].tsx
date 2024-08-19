"use client";

import { BenchMarkMajor } from "@/features/tin-diem-chuan-nganh";
import { NextSeo } from "next-seo";
const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin điểm chuẩn ngành - Eteaching"
        description="Tin điểm chuẩn ngành - Eteaching"
      />
      <BenchMarkMajor />
    </>
  );
};

export default Page;

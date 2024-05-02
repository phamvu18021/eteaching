"use client";

import { BenchMarkUniversity } from "@/features/tin-diem-chuan-truong";
import { NextSeo } from "next-seo";
const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin điểm chuẩn trường - Eteaching"
        description="Tin điểm chuẩn trường - Eteaching"
      />
      <BenchMarkUniversity />
    </>
  );
};

export default Page;

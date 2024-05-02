"use client";

import { NextSeo } from "next-seo";
import { BenchMark } from "@/features/tin-diem-chuan";
const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành Tài chính Ngân hàng  - Đại học Kinh tế Quốc dân"
        description="Ngành Tài chính Ngân hàng  - Đại học Kinh tế Quốc dân, thông tin ngành Tài chính Ngân hàng  Đại học Kinh tế Quốc dân"
      />
      <BenchMark />
    </>
  );
};

export default Page;

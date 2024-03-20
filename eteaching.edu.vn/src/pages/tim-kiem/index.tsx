"use client";

import { SearchResults } from "@/features/ket-qua-tim-kiem";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành Tài chính Ngân hàng  - Đại học Kinh tế Quốc dân"
        description="Ngành Tài chính Ngân hàng  - Đại học Kinh tế Quốc dân, thông tin ngành Tài chính Ngân hàng  Đại học Kinh tế Quốc dân"
      />
      <SearchResults />
    </>
  );
};

export default Page;

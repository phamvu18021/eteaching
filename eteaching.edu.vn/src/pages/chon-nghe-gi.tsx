"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const ChonNgheGi = dynamic(
  () => import("@/features/chon-nghe-gi").then((mod) => mod.ChonNgheGi),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="Chọn nghề gì ?" description="Chọn nghề gì ?" />
      <ChonNgheGi />
    </>
  );
};

export default Page;

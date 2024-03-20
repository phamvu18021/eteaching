"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const HocNganhGi = dynamic(
  () => import("@/features/hoc-nganh-gi").then((mod) => mod.HocNganhGi),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <HocNganhGi />
    </>
  );
};

export default Page;

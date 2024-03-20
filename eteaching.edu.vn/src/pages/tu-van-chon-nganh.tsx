"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const TuVanChonNganh = dynamic(
  () =>
    import("@/features/tu-van-chon-nganh").then((mod) => mod.TuVanChonNganh),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <TuVanChonNganh />
    </>
  );
};

export default Page;

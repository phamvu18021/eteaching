"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const TuVanChonNghe = dynamic(
  () => import("@/features/tu-van-chon-nghe").then((mod) => mod.TuVanChonNghe),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="Eteaching : Cổng thông tin đào tạo" description="" />
      <TuVanChonNghe />
    </>
  );
};

export default Page;

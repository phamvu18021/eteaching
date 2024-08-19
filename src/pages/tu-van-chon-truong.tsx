"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const TuVanChonTruong = dynamic(
  () =>
    import("@/features/tu-van-chon-truong").then((mod) => mod.TuVanChonTruong),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="Eteaching : Cổng thông tin đào tạo" description="" />
      <TuVanChonTruong />
    </>
  );
};

export default Page;

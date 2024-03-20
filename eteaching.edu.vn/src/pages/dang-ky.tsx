"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Lienhe = dynamic(
  () => import("@/features/Registe").then((mod) => mod.Registe),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Lienhe />
    </>
  );
};

export default Page;

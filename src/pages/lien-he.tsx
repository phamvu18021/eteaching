"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Lienhe = dynamic(
  () => import("@/features/Contact").then((mod) => mod.Contact),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="Liên hệ" description="" />
      <Lienhe />
    </>
  );
};

export default Page;

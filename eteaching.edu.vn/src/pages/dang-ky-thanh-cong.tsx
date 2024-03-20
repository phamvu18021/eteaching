"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const DangkyTc = dynamic(
  () => import("@/features/RegisSucsess").then((mod) => mod.RegisteSucsess),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <DangkyTc />
    </>
  );
};

export default Page;

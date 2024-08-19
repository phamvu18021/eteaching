"server only";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Majors = dynamic(
  () => import("@/features/nganh").then((mod) => mod.Majors),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Majors />
    </>
  );
};

export default Page;

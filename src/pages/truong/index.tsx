"server only";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Schools = dynamic(
  () => import("@/features/truong").then((mod) => mod.Schools),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Schools />
    </>
  );
};

export default Page;

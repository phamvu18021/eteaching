"server only";

import { Course } from "@/features/khoa-hoc";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo title="" description="" />
      <Course />
    </>
  );
};

export default Page;

import { Posts } from "@/features/posts";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo title="Tin tức" description="Tin tức" />
      <Posts />
    </>
  );
};

export default Page;

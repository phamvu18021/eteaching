"server only";

import { SchoolDetail } from "@/features/truong-chi-tiet";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  try {
    const slug = context.query.slug;
    const api_rm_url = process.env.API_RMS_URL || "";
    const api_url = `${api_rm_url}/${slug}`;
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    const head = await res.json();
    return {
      props: {
        head: head?.head || ""
      }
    };
  } catch (error) {
    console.log(error);
    return {
      props: { post: null }
    };
  }
};
const Page = (props: any) => {
  return (
    <>
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
      <SchoolDetail />
    </>
  );
};

export default Page;

"use client";

import { Description } from "@/features/tin-tuyen-sinh";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
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
};

const Page = (props: any) => {
  return (
    <>
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
      <Description />
    </>
  );
};

export default Page;

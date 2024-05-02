"server only";

import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL || "";
  const url = process.env.API_RMS_URL || "";

  try {
    const params = context.params;
    const slug = params?.slug || "";
    const res = await fetch(`${api_url}/posts?slug=${slug}`, {
      next: { revalidate: 3600 }
    });
    const posts = (await res.json()) || "";
    const post: [any] = posts ? posts[0] : null;
    const resSeo = await fetchSeo({
      url: `${url}/${slug}`,
      revalidate: 3600
    });
    const head = await resSeo.json();

    return {
      props: { post: post || null, head: head?.head || null }
    };
  } catch (error) {
    console.error("Error in fetching slug", error);
    return {
      props: { post: null }
    };
  }
};

interface IPostPage {
  post: any;
  head: string;
}

const Page = (props: IPostPage) => {
  const { post, head } = props;
  const getTitleFromMeta = (head: string) => {
    const match = head.match(/<meta\s+property="og:title"\s+content="([^"]*)"/);
    return match ? match[1] : null;
  };
  // Lấy nội dung từ thẻ meta
  const ogTitleContent = props.head ? getTitleFromMeta(props.head) : null;

  return (
    <>
      {head && (
        <div>
          <Head>
            {ReactHtmlParser(replaceSeoRM(head))}
            <title>{ogTitleContent}</title>
          </Head>
        </div>
      )}
      <Post post={post} />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutPost>{page}</LayoutPost>;
};

export default Page;

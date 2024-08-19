"server only";

import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import { Box, Image } from "@chakra-ui/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const api_url = process.env.API_URL || "";
  const url = process.env.API_RMS_URL || "";

  try {
    const res = await fetch(
      `${api_url}/landing/?slug=hoc-vien-cong-nghe-buu-chinh-vien-thong`,
      {
        next: { revalidate: 3600 }
      }
    );
    const posts = (await res.json()) || "";
    const post: [any] = posts ? posts[0] : null;
    const resSeo = await fetchSeo({
      url: `${url}/landing/hoc-vien-cong-nghe-buu-chinh-vien-thong`,
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
      {post?.acf?.ladipage && (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: post?.acf?.ladipage
            }}
          />
        </>
      )}
      {!post?.acf?.ladipage && (
        <>
          <Box display={"flex"} justifyContent={"center"}>
            <Image src="/dang-xay-dung.jpg" alt="Dang-xay-dung" />
          </Box>
        </>
      )}
    </>
  );
};

export default Page;

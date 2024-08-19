"use client";

import { LayoutSidebar } from "@/layouts/layout-sidebar";
import { AdmissionDetail } from "./AdmissionDetail";

import { getAdmission } from "@/ultil/fetch-auth";
import { Center, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export const Description = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [postsWp, setpostsWp] = useState<any>();
  const { data, isLoading, isError } = useQuery(
    ["getSingleAdmission", `${slug}`],
    () => slug && getAdmission({ slug: String(slug) })
  );

  useEffect(() => {
    const getpostsWp = async () => {
      try {
        const res = await fetch(`/api/post-tts/?slug=${slug}`, {
          next: { revalidate: 3 }
        });
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setpostsWp(posts[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getpostsWp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  if (isError)
    return (
      <Center>
        <Text>Something went wrong!</Text>
      </Center>
    );
  return (
    <LayoutSidebar school={data?.data?.school?.code}>
      <AdmissionDetail
        data={data}
        isLoading={isLoading}
        isError={isError}
        postsWp={postsWp}
      />
    </LayoutSidebar>
  );
};

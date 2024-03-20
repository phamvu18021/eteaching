"use client";

import { CardAdmission } from "@/components/CardAdmission";
import { SendSheets } from "@/components/FormContact";
import { getAdmissions } from "@/ultil/fetch-auth";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { SkeletonCards } from "./SkeletonCards";

export const Sidebar = () => {
  const router = useRouter();
  const majors = router.query?.majors;
  const id = router.query?.id;

  const { data, isLoading } = useQuery(
    `getSamePost", ${id}, ${majors}`,
    () =>
      id &&
      majors &&
      getAdmissions({
        major: String(majors)
      })
  );

  return (
    <Box>
      <SkeletonCards
        columns={{ base: 1, lg: 1 }}
        isLoaded={!isLoading}
        numberCard={3}
        spacing={4}
      >
        <SimpleGrid columns={{ base: 1 }} spacing={4}>
          {data?.data?.admissions
            ?.slice(0, 3)
            .map((post: any, index: number) => (
              <GridItem key={index}>
                <CardAdmission
                  type="detail"
                  title={post?.title}
                  desc={post?.school.label}
                  image={post?.img_thumb || ""}
                  path={`/tin-tuyen-sinh?id=${post?._id}&slug=${post?.slug_url}&majors=${post?.major[0]?.code}`}
                  tags={[
                    Array.isArray(post?.area) && post?.area[0]?.label,
                    Array.isArray(post?.major) && post?.major[0]?.label,
                    Array.isArray(post?.method) && post?.method[0]?.label,
                    Array.isArray(post?.channel) && post?.channel[0]?.label
                  ]}
                />
              </GridItem>
            ))}
        </SimpleGrid>
      </SkeletonCards>
      <Box borderRadius={"6px"} my={10} boxShadow={"lg"} bg={"white"}>
        <SendSheets title="Tư vấn lộ trình" />
      </Box>
    </Box>
  );
};

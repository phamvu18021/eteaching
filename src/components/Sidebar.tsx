"use client";

import { CardAdmission } from "@/components/CardAdmission";
import { FormMain } from "@/components/FormContact";
import { getAdmissions } from "@/ultil/fetch-auth";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { SkeletonCards } from "./SkeletonCards";

export const Sidebar = ({ school }: { school?: string }) => {
  const { data, isLoading } = useQuery(
    `getSamePost", ${school}`,
    () =>
      school &&
      getAdmissions({
        school: String(school)
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
                  path={`/tin-tuyen-sinh/${post?.slug_url}`}
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

        <FormMain />

      </Box>
    </Box>
  );
};

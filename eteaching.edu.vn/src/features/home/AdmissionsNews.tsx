"use client";

import { CardAdmission } from "@/components/CardAdmission";
import { Pagination } from "@/components/Pagination";
import { SkeletonCards } from "@/components/SkeletonCards";
import { useFilterHomepage } from "@/hooks/useFilterHomepage";
import { getAdmissions } from "@/ultil/fetch-auth";
import {
  Box,
  Container,
  GridItem,
  HStack,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FilterHomepage } from "./FilterHomepage";

export const AdmissionsNews = (admissonsTitle: any) => {
  const { unit, unit_value } = useFilterHomepage();

  const [currentpage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, isError } = useQuery(
    `Admissons, ${unit}, ${currentpage}, ${unit_value}`,
    () =>
      getAdmissions({
        [unit]: unit_value,
        page: String(currentpage)
      })
  );
  const next = () => {
    setCurrentPage((prev: number) => prev + 1);
  };

  const prev = () => {
    setCurrentPage((prev: number) => prev - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [unit, unit_value]);

  if (isError)
    return (
      <Box
        display={{ lg: "flex" }}
        justifyContent={"center"}
        alignContent={"center"}
        h={{ lg: "50vh", base: "30vh" }}
      >
        <Text mt={12} textAlign={"center"} fontSize={20}>
          Something went wrong!
        </Text>
      </Box>
    );
  return (
    <Box bg={"SecondWhite.150"}>
      <Container maxW={"6xl"}>
        <Text color={"#009643"} fontSize={"24px"} fontWeight={700} py={4}>
          {admissonsTitle?.admissonsTitle || "Đại học tốt nhấtz"}
        </Text>
        <FilterHomepage />

        <Box py={"24px"}>
          <SkeletonCards isLoaded={!isLoading} numberCard={9}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
              {data?.data?.admissions.map((post?: any, index?: number) => (
                <GridItem key={index}>
                  <CardAdmission
                    type="under"
                    title={post?.title}
                    desc={post?.school?.label}
                    image={post?.img_thumb}
                    path={`/tin-tuyen-sinh?id=${post?._id}&slug=${post?.slug_url}&majors=${post?.major[0]?.code}`}
                    tags={[post?.area[0]?.label, post?.major[0]?.label]}
                  />
                </GridItem>
              ))}
            </SimpleGrid>

            {data?.data?.admissions?.length === 0 && (
              <Box
                display={{ lg: "flex" }}
                justifyContent={"center"}
                alignContent={"center"}
                h={{ lg: "50vh", base: "30vh" }}
              >
                <Text mt={20} textAlign={"center"} fontSize={16}>
                  Không có tin tuyển sinh phù hợp yêu cầu của bạn.
                </Text>
              </Box>
            )}

            {data?.data?.admissions?.length > 0 && (
              <HStack
                justifyContent={"center"}
                alignContent={"center"}
                pt={"24px"}
              >
                <Pagination
                  next={next}
                  prev={prev}
                  currentPage={String(currentpage)}
                  totalItem={Number(data?.data?.total_documents || 0)}
                  perPage={9}
                  hasCurentPage={true}
                />
              </HStack>
            )}
          </SkeletonCards>
        </Box>
      </Container>
    </Box>
  );
};

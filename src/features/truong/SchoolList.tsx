/* eslint-disable no-unused-vars */
import { Box, Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import { SchoolCard } from "./SchoolCard";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getListSchool } from "@/ultil/fetch-auth";
import { useEffect, useState } from "react";

export const SchoolList = () => {
  const router = useRouter();
  const { type, area } = router.query;
  const typeQuery = (type as string) || "all";
  const schoolAreaQuery = (area as string) || "all";
  const [listSchool, setListSchool] = useState<any>([]);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(
    `getListSchool,${typeQuery},${schoolAreaQuery},${page}`,
    () =>
      getListSchool({
        type: typeQuery,
        schoolArea: schoolAreaQuery,
        page: String(page)
      })
  );
  useEffect(() => {
    if (data?.data?.school && page != 1) {
      let newdata = data?.data?.school;
      setListSchool(listSchool.concat(newdata));
    }
    if (data?.data?.school && page == 1) {
      let newdata = data?.data?.school;
      setListSchool(newdata);
    }
  }, [data, page]);
  useEffect(() => {
    setPage(1);
  }, [router]);

  // eslint-disable-next-line no-unused-vars
  const listSkeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        {listSchool?.map((item: any, index: number) => (
          <GridItem key={index} colSpan={1} display={"flex"}>
            <SchoolCard
              isLoading={false}
              name={item.name}
              url={item.url}
              desc={item.description}
              logo={item.image_logo}
              banner={item.image_banner}
            />
          </GridItem>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} pt={2} spacing={6}>
        {isLoading &&
          listSkeleton.map((index: number) => (
            <GridItem key={index} colSpan={1} display={"flex"}>
              <SchoolCard isLoading={isLoading} />
            </GridItem>
          ))}
      </SimpleGrid>
      {listSchool.length > 0 && data?.data?.is_last_page == false && (
        <Box display={"flex"} justifyContent={"center"} pt={2}>
          <Button
            mt={2}
            color={"#8c8c8c"}
            fontWeight={"600"}
            colorScheme="gray"
            variant="outline"
            onClick={() => setPage(page + 1)}
            _hover={{
              bg: "#f0f0f0"
            }}
          >
            Xem thêm
          </Button>
        </Box>
      )}
      {!isLoading && listSchool.length == 0 && (
        <Box
          bg={"white"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"10px"}
          h={200}
          fontSize={"20px"}
        >
          Chưa có dữ liệu về danh mục này
        </Box>
      )}
    </>
  );
};

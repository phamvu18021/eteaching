import { Box, Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import { MajorCard } from "./MajorCard";
import { useRouter } from "next/router";
import { getListMajor } from "@/ultil/fetch-auth";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export const MajorList = () => {
  const router = useRouter();
  const group = (router.query.group as string) || "all";
  const [listMajor, setListMajor] = useState<any>([]);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useQuery(
    `getListMajor,${group},${page}`,
    () =>
      getListMajor({
        major_combine: group,
        page: String(page)
      })
  );
  useEffect(() => {
    if (data?.data?.major && page != 1) {
      let newdata = data?.data?.major;
      setListMajor(listMajor.concat(newdata));
    }
    if (data?.data?.major && page == 1) {
      let newdata = data?.data?.major;
      setListMajor(newdata);
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
        {listMajor.length > 0 &&
          listMajor.map((item: any, index: number) => (
            <GridItem key={index} colSpan={1} display={"flex"}>
              <MajorCard
                name={item.name}
                url={item.url}
                desc={item.desc}
                image={item.image_banner_url}
                isLoading={false}
              />
            </GridItem>
          ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} pt={2} spacing={6}>
        {isLoading &&
          listSkeleton.map((index: number) => (
            <GridItem key={index} colSpan={1} display={"flex"}>
              <MajorCard isLoading={isLoading} />
            </GridItem>
          ))}
      </SimpleGrid>
      {listMajor.length > 0 && data?.data?.is_last_page == false && (
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
      {!isLoading && listMajor.length == 0 && (
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

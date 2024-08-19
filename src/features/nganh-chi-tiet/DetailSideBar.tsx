import { Box, Button, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { SchoolCard } from "../truong/SchoolCard";
import { useQuery } from "react-query";
import { getListSchool } from "@/ultil/fetch-auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const DetailSidebar = ({
  majorcode,
  majorslug
}: {
  majorcode: string;
  majorslug: string;
}) => {
  const { data, isLoading } = useQuery(`getListSchool,${majorcode},`, () =>
    getListSchool({
      major: (majorcode as string) || "all"
    })
  );
  const listSkeleton = [1, 2, 3];
  const [page, setPage] = useState(1);
  const router = useRouter();
  useEffect(() => {
    setPage(1);
  }, [router]);
  return (
    <>
      <Box bgColor={"white"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          color={"white"}
          fontSize={"16px"}
          fontWeight={"500"}
          h={"30px"}
          bg={"linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"}
          borderRadius={"10px 10px 0 0"}
        >
          <Text ml={4}>Trường có ngành</Text>
        </Box>
        <Box mt={2} p={1} bg={"white"} borderRadius={"0 0 10px 10px"}>
          <SimpleGrid columns={1} spacing={2}>
            {data?.data?.school
              ?.slice(0, page * 3)
              .map((item: any, index: number) => (
                <GridItem colSpan={1} key={index}>
                  <SchoolCard
                    isLoading={isLoading}
                    name={item.name}
                    url={item.url}
                    desc={item.description}
                    logo={item.image_logo}
                    banner={item.image_banner}
                    type="side"
                  />
                </GridItem>
              ))}
            {isLoading &&
              listSkeleton.map((index: number) => (
                <GridItem key={index} colSpan={1}>
                  <SchoolCard isLoading={isLoading} />
                </GridItem>
              ))}
          </SimpleGrid>
        </Box>
        {data?.data?.school && data?.data?.school.length > page * 3 && (
          <Box mt={2}>
            <Button
              mt={2}
              w={"full"}
              color={"#8c8c8c"}
              onClick={() => setPage(page + 1)}
              fontWeight={"600"}
              colorScheme="gray"
              variant="outline"
            >
              Xem thêm
            </Button>
          </Box>
        )}
      </Box>
      <Box
        bg={"linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"}
        h={"60px"}
        boxShadow={"lg"}
        borderRadius={"10px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        my={4}
      >
        <Text
          as={Link}
          href={`/tin-diem-chuan-nganh/${majorslug}`}
          fontWeight={"600"}
          color={"white"}
          fontSize={"14px"}
          _hover={{
            textDecoration: "underline"
          }}
        >
          Tin điểm chuẩn <br />
          ngành Quản trị kinh doanh
        </Text>
        <MdNavigateNext size={48} color="white" />
      </Box>
      <Box
        bg={"linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"}
        h={"60px"}
        boxShadow={"lg"}
        borderRadius={"10px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        my={4}
      >
        <Text
          as={Link}
          href={`https://eteaching.vn/ket-qua-tim-kiem`}
          fontWeight={"600"}
          color={"white"}
          fontSize={"14px"}
          _hover={{
            textDecoration: "underline"
          }}
        >
          Tin tuyển sinh <br />
          ngành Quản trị kinh doanh
        </Text>
        <MdNavigateNext size={48} color="white" />
      </Box>
    </>
  );
};

import {
  Box,
  Button,
  Divider,
  GridItem,
  HStack,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import { MajorCardSide } from "./MajorCardSide";
import { MdPlace } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const DetailSidebar = ({
  listMajor,
  address,
  addressEmbed,
  schoolCode,
  schoolSlug
}: {
  listMajor: any[];
  address: any;
  addressEmbed: any;
  schoolCode: string;
  schoolSlug: string;
}) => {
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
          fontSize={"18px"}
          fontWeight={"500"}
          h={"50px"}
          bg={"linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"}
          borderRadius={"10px 10px 0 0"}
        >
          <Text ml={4}>Ngành học</Text>
        </Box>
        <Box mt={2} p={2} borderRadius={"0 0 10px 10px"}>
          <SimpleGrid columns={1} spacing={2}>
            {listMajor?.slice(0, page * 3).map((item: any, index: number) => (
              <GridItem colSpan={1} key={index}>
                <MajorCardSide
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  slug={item.slug}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
        {listMajor && listMajor?.length > page * 3 && (
          <Box mt={2}>
            <Button
              w={"full"}
              color={"#8c8c8c"}
              fontWeight={"600"}
              colorScheme="gray"
              variant="outline"
              onClick={() => setPage(page + 1)}
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
          href={`/tin-diem-chuan-truong/${schoolSlug}`}
          fontWeight={"600"}
          color={"white"}
          fontSize={"14px"}
          _hover={{
            textDecoration: "underline"
          }}
        >
          Tin điểm chuẩn <br /> Trường đại học Kinh tế quốc dân
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
          href={`/ket-qua-tim-kiem?major=all&city=all&method=all&channel=all&school=${schoolCode}`}
          fontWeight={"600"}
          color={"white"}
          fontSize={"14px"}
          _hover={{
            textDecoration: "underline"
          }}
        >
          Tin tuyển sinh <br />
          Trường đại học Kinh tế quốc dân
        </Text>
        <MdNavigateNext size={48} color="white" />
      </Box>
      <Box mt={8}>
        <Box
          display={"flex"}
          alignItems={"center"}
          color={"white"}
          fontSize={"18px"}
          fontWeight={"500"}
          h={"50px"}
          bg={"linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"}
          borderRadius={"10px 10px 0 0"}
        >
          <Text ml={4}>Liên hệ</Text>
        </Box>
        <Box bg={"white"} borderRadius={"0 0 10px 10px"}>
          <HStack pt={6} pl={4}>
            <MdPlace size={"24px"} color="#00b14f" />
            <Text fontSize={"16px"}> Địa chỉ trường</Text>
          </HStack>
          <Text ml={5} mt={2} fontSize={"14px"} color={"#4d5965"}>
            {address}
          </Text>
          <Divider
            mx={1}
            my={4}
            borderBottomWidth={"1px"}
            borderBlockEndColor={"#abb8c3"}
            w={"280px"}
          />
          <HStack pl={4}>
            <FaMap size={"20px"} color="#00b14f" />
            <Text fontSize={"16px"}>Xem bản đồ</Text>
          </HStack>
          <Box p={2}>
            <iframe
              src={addressEmbed}
              width="100%"
              height="220"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </>
  );
};

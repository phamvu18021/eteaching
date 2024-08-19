import {
  Box,
  Divider,
  HStack,
  Text,
  Image,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuMenu } from "react-icons/lu";

export const Sidebar = () => {
  const listFill = [
    {
      path: "/nganh?group=kinh-te-quan-tri",
      title: "Kinh tế & Quản trị"
    },
    {
      path: "/nganh?group=ngon-ngu",
      title: "Ngôn ngữ"
    },
    {
      path: "/nganh?group=cong-nghe",
      title: "Công nghệ"
    },
    {
      path: "/nganh?group=cong-nghiep",
      title: "Công nghiệp"
    },
    {
      path: "/nganh?group=nong-nghiep",
      title: "Nông nghiệp"
    },
    {
      path: "/nganh?group=su-pham",
      title: "Sư phạm"
    },
    {
      path: "/nganh?group=luat",
      title: "Luật"
    }
  ];
  const router = useRouter();

  return (
    <Box position={"sticky"} top={"125px"}>
      <Box boxShadow={"xs"} bg={"white"} pb={4} mt={2} borderRadius={"5px"}>
        <Box backgroundColor={"#eeeef2"} px={2} py={3}>
          <HStack>
            <LuMenu size={"18px"} color={"#444444"} />
            <Text
              fontSize={"16px"}
              lineHeight={"1"}
              color={"#444444"}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Tổng hợp các ngành
            </Text>
          </HStack>
        </Box>
        {/* <Divider
          borderBottomWidth={"3px"}
          borderBlockEndColor={"#690097"}
          w={"full"}
        /> */}
        <Box>
          {listFill.map((item, index) => (
            <Box key={index}>
              <HStack py={3} px={8} justifyContent={"space-between"}>
                <Box
                  as={Link}
                  href={item.path}
                  fontSize={"16px"}
                  fontWeight={router.asPath == `${item.path}` ? "600" : "300"}
                >
                  {item.title}
                </Box>
              </HStack>

              <Divider
                ml={1}
                borderBottomWidth={"1px"}
                borderBlockEndColor={"#abb8c3"}
                w={"95%"}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box display={{ base: "none", md: "block" }} my={4}>
        <SimpleGrid columns={1}>
          <GridItem colSpan={{ base: 0, md: 1 }}>
            <Image w={"full"} h={"auto"} src={"/sidebar.png"} alt="ảnh" />
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <SimpleGrid columns={1}>
          <GridItem colSpan={{ base: 0, md: 1 }}>
            <Image w={"full"} h={"auto"} src={"/sidebar2.png"} alt="ảnh" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

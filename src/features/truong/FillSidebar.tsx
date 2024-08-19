/* eslint-disable no-unused-vars */
import { getSchoolArea } from "@/ultil/fetch-auth";
import {
  Box,
  Divider,
  HStack,
  Text,
  Stack,
  VStack,
  Image,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { useQuery } from "react-query";

export const FillSidebar = () => {
  const { data, isLoading, isError } = useQuery("schoolarea", () =>
    getSchoolArea()
  );
  const listFill = [
    {
      path: "/truong?type=dai-hoc-hoc-vien",
      title: "Trường đại học - Học viện",
      child: data?.data || []
    },
    {
      path: "/truong?type=cao-dang",
      title: "Cao đẳng"
    },
    {
      path: "/truong?type=truong-nghe",
      title: "Trường nghề"
    }
  ];
  const [openFill, setOpenFill] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.query.type == `dai-hoc-hoc-vien`) {
      setOpenFill(true);
    }
  }, [router]);
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
              TỔNG HỢP CÁC TRƯỜNG
            </Text>
          </HStack>
        </Box>
        <Box>
          {listFill.map((item, index) => (
            <Box key={index}>
              <HStack py={3} px={6} justifyContent={"space-between"}>
                <Box
                  as={Link}
                  href={item.path}
                  fontSize={"16px"}
                  fontWeight={router.asPath == `${item.path}` ? "600" : "300"}
                  onClick={() => {
                    if (item.child) setOpenFill(!openFill);
                  }}
                >
                  {item.title}
                </Box>
                {item.child && openFill == false && (
                  <AiOutlineDown
                    color="#abb8c3"
                    onClick={() => setOpenFill(!openFill)}
                  />
                )}
                {item.child && openFill == true && (
                  <AiOutlineUp
                    color="#abb8c3"
                    onClick={() => setOpenFill(!openFill)}
                  />
                )}
              </HStack>

              {item.child && openFill && (
                <Stack
                  direction={"row"}
                  h={`${35 * item.child.length}px`}
                  px={4}
                  pb={4}
                >
                  <Divider
                    orientation="vertical"
                    borderBottomWidth={"1px"}
                    borderBlockEndColor={"#abb8c3"}
                  />
                  <VStack alignItems={"baseline"}>
                    {item.child.map((itemChild: any, index: number) => (
                      <Box
                        as={Link}
                        href={`/truong?type=dai-hoc-hoc-vien&area=${itemChild.code}`}
                        fontWeight={
                          router.asPath ==
                          `/truong?type=dai-hoc-hoc-vien&area=${itemChild.code}`
                            ? "600"
                            : "300"
                        }
                        fontSize={"16px"}
                        key={index}
                      >
                        {itemChild.name}
                      </Box>
                    ))}
                  </VStack>
                </Stack>
              )}

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

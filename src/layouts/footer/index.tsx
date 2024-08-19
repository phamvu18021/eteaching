"use client";

import { Logo } from "@/components/Logo";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export const Footer = () => {
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getHomeContent();
  }, []);
  return (
    <Box
      color={"white"}
      w={"100%"}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={"gray.200"}
    >
      <Container as={Stack} maxW={"6xl"} py={10} color={"#4d5965"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={20}>
          <Stack align={"flex-start"} fontSize={"14px"}>
            <Logo />
            <Box
              mt={"30px"}
              as={Link}
              href={"#"}
              color={"#212f3f"}
              fontWeight={"600"}
              fontSize={"16px"}
            >
              {home_content?.acf?.footer?.block_1.title ||
                ".Văn phòng tuyển sinh tại AUM Việt Nam"}
            </Box>
            <Flex
              color={"#4d5965"}
              fontSize={"sm"}
              align={"center"}
              justifyContent={{ lg: "space-evenly", md: "flex-start" }}
            >
              <span
                style={{
                  fontSize: "20px",
                  paddingRight: "4px",
                  color: "#4D0070"
                }}
              >
                <FaMapMarkerAlt />
              </span>
              <Text
                dangerouslySetInnerHTML={{
                  __html:
                    home_content?.acf?.footer?.block_1.address ||
                    ".Địa chỉ: Số 116 Trần Vỹ, Phường Mai Dịch, Quận Cầu Giấy, Thành phố Hà Nội."
                }}
              />
            </Flex>
            <Flex
              as={Link}
              color={"#4d5965"}
              fontSize={"sm"}
              align={"center"}
              justifyContent={{ lg: "space-evenly", md: "flex-start" }}
              href={"tel:0915500256"}
              _hover={{ textDecoration: "underline" }}
            >
              <span
                style={{
                  fontSize: "20px",
                  paddingRight: "4px",
                  color: "#4D0070"
                }}
              >
                <MdLocalPhone />
              </span>
              <Text
                dangerouslySetInnerHTML={{
                  __html:
                    home_content?.acf?.footer?.block_1.phone || `091.550.0256`
                }}
              />
            </Flex>
            <Link href={"https://eteaching.vn/"}>
              <Flex
                color={"#4d5965"}
                fontSize={"sm"}
                align={"center"}
                justifyContent={{ lg: "space-evenly", md: "flex-start" }}
                _hover={{ textDecoration: "underline" }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    paddingRight: "4px",
                    color: "#4D0070"
                  }}
                >
                  <IoIosGlobe />
                </span>
                <Text
                  dangerouslySetInnerHTML={{
                    __html:
                      home_content?.acf?.footer?.block_1.web ||
                      `https://eteaching.vn/`
                  }}
                />
              </Flex>
            </Link>
          </Stack>
          <Stack fontSize={"14px"}>
            <Heading
              fontSize={"16px"}
              fontWeight={600}
              textAlign="left"
              mb={4}
              color={"#212f3f"}
            >
              {home_content?.acf?.footer?.block_2?.title ||
                ".Danh sách các trường đào tạo từ xa"}
            </Heading>
            {!home_content?.acf?.footer?.block_2?.list_school && (
              <>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Đại học Thái Nguyên
                </Box>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Đại học Kinh Tế Quốc Dân
                </Box>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Học viện Công Nghệ Bưu Chính Viễn Thông
                </Box>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Đại học Kỹ Thuật Công Nghiệp
                </Box>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Trường Đại học Nông Lâm Thái Nguyên
                </Box>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Trường Đại học Mở Hà Nội
                </Box>
                <Box
                  as={Link}
                  href={"#"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Học viện Tài Chính
                </Box>
              </>
            )}

            {home_content?.acf?.footer?.block_2?.list_school && (
              <Text
                gap={2}
                dangerouslySetInnerHTML={{
                  __html: home_content?.acf?.footer?.block_2?.list_school
                }}
              />
            )}
          </Stack>
          <Stack>
            <Heading
              fontSize={"16px"}
              fontWeight={600}
              textAlign="left"
              mb={2}
              color={"#212f3f"}
            >
              {home_content?.acf?.footer?.block_3?.title || ".Mạng xã hội"}
            </Heading>
            <Box rounded={"sm"} py="8px" mr={6}>
              <HStack spacing={"16px"}>
                <Button
                  colorScheme="facebook"
                  w={"full"}
                  as={Link}
                  target="_blank"
                  href={"https://www.facebook.com/eteaching.vn/"}
                >
                  <FaFacebook />
                </Button>
                <Button
                  bg="blackAlpha.800"
                  w={"full"}
                  color={"whiteAlpha.800"}
                  as={Link}
                  target="_blank"
                  href={"https://www.tiktok.com/@eteaching.vn"}
                >
                  <BiLogoTiktok />
                </Button>
                <Button
                  colorScheme="red"
                  w={"full"}
                  as={Link}
                  target="_blank"
                  href={"https://www.instagram.com/eteaching_vn/"}
                >
                  <FaInstagram />
                </Button>
              </HStack>
            </Box>
            <Stack direction={"row"} align={"flex-start"} gap={5} mb={5}>
              <Image
                src={
                  home_content?.acf?.footer?.block_3?.partner ||
                  "/timdoitac.jpg"
                }
                width={300}
                height={200}
                alt="Tìm đối tác"
                style={{ float: "left" }}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "center" }}
          align={{ md: "center" }}
        >
          <Text textAlign="center" color={"#4d5965"}>
            © 2024 Copyright by IT AUM
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

"use client";

import { Logo } from "@/components/Logo";
import {
  Box,
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
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export const Footer = () => {
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
              Văn phòng tuyển sinh tại AUM Việt Nam
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
                  color: "#009643"
                }}
              >
                {" "}
                <FaMapMarkerAlt />
              </span>
              Địa chỉ: Số 116 Trần Vỹ, Phường Mai Dịch, Quận Cầu Giấy, Thành phố
              Hà Nội.
            </Flex>
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
                  color: "#009643"
                }}
              >
                {" "}
                <MdLocalPhone />
              </span>
              0966.000.643
            </Flex>
            <Link href={"#"}>
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
                    color: "#009643"
                  }}
                >
                  {" "}
                  <IoIosGlobe />
                </span>
                Eteaching.vn
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
              Danh sách các trường đào tạo từ xa
            </Heading>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Đại học Thái Nguyên
            </Box>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Đại học Kinh Tế Quốc Dân
            </Box>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Học viện Công Nghệ Bưu Chính Viễn Thông
            </Box>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Đại học Kỹ Thuật Công Nghiệp
            </Box>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Trường Đại học Nông Lâm Thái Nguyên
            </Box>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Đại học Mở Hà Nội
            </Box>
            <Box as={Link} href={"#"} _hover={{ textDecoration: "underline" }}>
              Học viện Tài Chính
            </Box>
          </Stack>
          <Stack>
            <Heading
              fontSize={"16px"}
              fontWeight={600}
              textAlign="left"
              mb={4}
              color={"#212f3f"}
            >
              Mạng xã hội
            </Heading>
            <HStack spacing={2} display={{ base: "flex", lg: "flex" }} py={2}>
              <Link href={"#"}>
                <Image
                  src={"/facebook.webp"}
                  width={32}
                  height={32}
                  alt="Tìm đối tác"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/linkedin.webp"}
                  width={32}
                  height={32}
                  alt="Tìm đối tác"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/tiktok.webp"}
                  width={32}
                  height={32}
                  alt="Tìm đối tác"
                />
              </Link>

              <Link href={"#"}>
                <Image
                  src={"/youtube.webp"}
                  width={32}
                  height={32}
                  alt="Tìm đối tác"
                />
              </Link>
            </HStack>
            <Stack direction={"row"} align={"flex-start"} gap={5} mb={5}>
              <Image
                src={"/timdoitac.jpg"}
                width={150}
                height={100}
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
            © 2023 Copyright by IT AUM
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

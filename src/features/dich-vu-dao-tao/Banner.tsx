import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

export const Banner = () => {
  const benefit = [
    {
      title: "Bằng đại học uy tín",
      icon: PiCertificate,
      desc: "Bằng không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận"
    },
    {
      title: "Tư vấn 24/7",
      icon: RiCustomerService2Line,
      desc: "Hỗ trợ học tập và kỹ thuật nhanh chóng tận tình "
    },
    {
      title: "Kho học liệu đa dạng",
      icon: MdOutlineWorkHistory,
      desc: "Tài liệu học tập đa dạng, đa phương tiện (video, slide, script,..) "
    }
  ];
  return (
    <Box zIndex={10} position={"relative"}>
      <Container maxW={"7xl"}>
        <Text mt={10} fontSize={"36px"} fontWeight={700} textAlign={"center"}>
          Cung cấp các chương trình đào tạo dài hạn và các khóa ngắn hạn
        </Text>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <InputGroup w={"800px"} mt={8} mb={4} display={"block"}>
            <InputLeftElement height={"60px"} pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              height={"60px"}
              border={"1px solid #b3bdc0"}
              placeholder="Bạn muốn học khóa học nào ?"
              size="md"
              px={20}
            />
          </InputGroup>
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <Image
            priority
            className="Image"
            src={"/banner-image.svg"}
            alt="banner"
            width={"1100"}
            height={"220"}
            style={{
              width: "auto",
              height: "100%",
              borderRadius: "0.5rem"
            }}
          />
        </Box>
      </Container>
      <Box
        bg={"#0b2441"}
        height={"100px"}
        display={"flex"}
        alignItems={"center"}
      >
        <Container maxW={"7xl"}>
          <Stack direction={"row"} spacing={4} justifyContent={"space-around"}>
            {benefit.map((item, index) => (
              <Box
                key={index}
                display={"flex"}
                gap={2}
                color={"white"}
                fontSize={"16px"}
                w={{ base: "80%", md: "20%" }}
              >
                <Icon
                  as={item.icon}
                  width={{ base: "30px", md: "40px" }}
                  height={{ base: "30px", md: "40px" }}
                  color={"#ffffff"}
                />
                <VStack alignItems={"start"} gap={0}>
                  <Text fontSize={"14px"} fontWeight={600}>
                    {item.title}
                  </Text>
                  <Text fontSize={"12px"}>{item.desc}</Text>
                </VStack>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

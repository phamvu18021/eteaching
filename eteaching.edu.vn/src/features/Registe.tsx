"use client";

import { SendSheets } from "@/components/FormContact";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineHeadphones } from "react-icons/md";
import Image from "next/image";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactNode;
  href: string;
}

const Card: React.FC<CardProps> = ({
  heading,
  description,
  icon,
  href
}: CardProps) => {
  return (
    <Box
      w={"full"}
      borderWidth="1px soild #fff"
      borderRadius="6px"
      overflow="hidden"
      p={"40px"}
      boxShadow={"xl"}
      bg={"white"}
    >
      <Stack align={"start"} spacing={2}>
        <Box w={16} rounded={"full"} color={"#00b14f"}>
          {icon}
        </Box>
        <Box mt={2}>
          <Heading size="md" marginBottom={"20px"} color={"#192335"}>
            {heading}
          </Heading>
          <Link href={href} color="#6b7385">
            {description}
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
export const Registe = () => {
  return (
    <>
      <Box
        bg={"linear-gradient(180deg, #37c275,  rgba(255, 255, 255, 1) 100%)"}
      >
        <Container maxW={"6xl"} py="120px">
          <Box>
            <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"}>
              <Heading
                textTransform={"uppercase"}
                color={"blue.400"}
                fontWeight={600}
                fontSize={"sm"}
                p={"10px 20px"}
                w={"130px"}
                borderRadius={"100px"}
                textAlign={"center"}
                bgColor={"#00b14f"}
                textColor={"#fff"}
              >
                Liên hệ
              </Heading>
              <Heading
                as="h2"
                textAlign={"center"}
                fontSize={{ lg: "44px", base: "28px" }}
                pb="16px"
                color={"#192335"}
              >
                Liên hệ Khóa học Eteaching
                <br></br>
                có thể tham gia cùng chúng tôi.
              </Heading>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} pt={10}>
              <Card
                heading={"Liên hệ"}
                icon={<Icon as={MdOutlineHeadphones} w={10} h={10} />}
                description={"0966.000.643"}
                href={"0966.000.643 "}
              />
              <Card
                heading={"Email"}
                icon={<Icon as={MdOutlineEmail} w={10} h={10} />}
                description={"Eteaching@gmail.com"}
                href={"Eteaching@gmail.com"}
              />
              <Card
                heading={"Địa chỉ"}
                icon={<Icon as={FaMapMarkerAlt} w={10} h={10} />}
                description={
                  " Số 116 Trần Vỹ, Phường Mai Dịch, Quận Cầu Giấy, Thành phố Hà Nội."
                }
                href={"#"}
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      <Container maxW={"6xl"} pb={20}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"8"}>
          <Image
            src="/contact.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            style={{ borderRadius: "6px !important" }}
          />
          <Box p={30} boxShadow={"xl"} borderRadius={"6px"}>
            {" "}
            <SendSheets title="Tư vấn lộ trình" />
          </Box>
        </SimpleGrid>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7609480745314!2d105.77113527669943!3d21.04224898731216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1695417775713!5m2!1sen!2s"
        width="100%"
        height="600"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

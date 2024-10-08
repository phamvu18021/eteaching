"use client";

import { FormMain } from "@/components/FormContact";
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Item = ({
  path,
  image,
  title
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
      aspectRatio={7 / 4}
      objectFit="cover"
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        objectFit="cover"
        style={{ height: "150px", maxWidth: "100%", filter: "brightness(50%)" }}
      />

      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const Sidebar = ({ sticky }: { sticky?: string }) => {
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky} bg={"gray.100"}>
      <Box px={6} pt={"32px"}>
        <FormMain />
      </Box>
      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          pl={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box rounded={"sm"} p="24px">
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="facebook"
              w={"full"}
              as={Link}
              target="_blank"
              href={"https://www.facebook.com/eteaching.vn/"}
            >
              Facebook
            </Button>
            <Button
              leftIcon={<BiLogoTiktok />}
              bg="blackAlpha.800"
              w={"full"}
              color={"whiteAlpha.800"}
              as={Link}
              target="_blank"
              href={"https://www.tiktok.com/@eteaching.vn"}
            >
              Tiktok
            </Button>
            <Button
              leftIcon={<FaInstagram />}
              colorScheme="red"
              w={"full"}
              as={Link}
              target="_blank"
              href={"https://www.instagram.com/eteaching_vn/"}
            >
              Instagram
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

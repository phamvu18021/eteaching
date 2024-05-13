import { Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <Image
        priority
        width={80}
        height={80}
        style={{ borderRadius: "50%" }}
        src={`/logo-aum.webp`}
        alt="logo AUM"
      />
      <VStack color={"#007180"} align={"start"}>
        <Heading as="h1" fontSize={{ base: "16px", lg: "16px" }}>
          Tiếp lợi thế
        </Heading>
        <Heading as="h2" fontSize={{ base: ".8rem" }}>
          Kết nối thành công
        </Heading>
      </VStack>
    </Link>
  );
};

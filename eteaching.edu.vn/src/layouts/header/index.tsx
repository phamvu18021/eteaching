"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { SendSheets } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import { Box, Container, Flex } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";

export const Header = () => {
  const { onOpen, onClose, isOpen } = useModal();
  return (
    <>
      <Box
        boxShadow="md"
        pos={"sticky"}
        top={0}
        left={0}
        right={0}
        zIndex={10}
        bg={"#ffffff"}
      >
        <Container
          as={Flex}
          bg={"#ffffff"}
          color={"gray.600"}
          minH={"60px"}
          px={{ base: 4 }}
          align={"center"}
          maxW="8xl"
          justifyContent={{ base: "space-between" }}
        >
          <Box py="20px" maxW={"220px"}>
            <Logo />
          </Box>

          <Flex
            justify={{ base: "end", lg: "none" }}
            ml={{ base: -2 }}
            display={{ base: "flex", lg: "none" }}
          >
            <MobileNav />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "space-between" }}
            align={"center"}
            display={{ base: "none", lg: "flex" }}
          >
            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
            <BtnTheme onClick={onOpen}>Đăng ký tư vấn</BtnTheme>
          </Flex>
        </Container>
      </Box>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <SendSheets title="Tư vấn lộ trình" />
      </ModalBase>
    </>
  );
};

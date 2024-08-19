"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import { Box, Container, Flex } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";
import { FormMain } from "@/components/FormContact";
import { useEffect, useState } from "react";
export const Header = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const { onOpen, onClose, isOpen } = useModal();
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-main`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);
  return (
    <>
      <Box
        boxShadow="md"
        pos={"sticky"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
        bg={"#ffffff"}
      >
        <Container
          as={Flex}
          bg={"#ffffff"}
          color={"gray.600"}
          minH={"60px"}
          align={"center"}
          maxW="6xl"
          justifyContent={{ base: "space-between" }}
        >
          <Box maxW={"220px"}>
            <Logo />
          </Box>

          <Flex
            justify={{ base: "end", lg: "none" }}
            ml={{ base: -2 }}
            display={{ base: "flex", lg: "none" }}
          >
            <MobileNav />
          </Flex>

          <Flex display={{ base: "none", lg: "flex" }}>
            <DesktopNav />
          </Flex>

          <Flex display={{ base: "none", lg: "flex" }}>
            <BtnTheme onClick={onOpen}>Đăng ký tư vấn</BtnTheme>{" "}
          </Flex>
        </Container>
      </Box>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <FormMain />
      </ModalBase>
    </>
  );
};

"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import { Box, Container, Flex } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";
import { FormPoup } from "@/components/FormContact";
import { useEffect, useState } from "react";
export const Header = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const { onOpen, onClose, isOpen } = useModal();
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
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
        <FormPoup id={id} href={href} title="Tư vấn lộ trình" />
      </ModalBase>
    </>
  );
};

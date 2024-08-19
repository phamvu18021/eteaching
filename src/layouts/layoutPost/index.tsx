"use client";

import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SideBarPost } from "../components/SideBarPost";

export const LayoutPost = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW={"6xl"} py={8}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"8"}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 1, lg: 1 }}>
          <SideBarPost />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

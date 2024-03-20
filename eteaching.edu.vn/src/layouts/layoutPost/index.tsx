"use client";

import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutPost = ({ children }: { children: ReactNode }) => {
  return <Container maxW={"6xl"}>{children}</Container>;
};

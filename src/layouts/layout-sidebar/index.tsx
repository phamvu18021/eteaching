import { Sidebar } from "@/components/Sidebar";
import { Banner } from "@/features/home/Banner";
import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutSidebar = ({ children }: { children: ReactNode }) => {
  return (
    <Box bg={"gray.100"}>
      <Banner />
      <Container maxW={"6xl"} p={5}>
        <SimpleGrid columns={{ base: 1, lg: 5 }} spacing={"8"}>
          <GridItem colSpan={{ base: 1, lg: 3 }}>{children}</GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Sidebar />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { MajorList } from "./MajorList";
import { Sidebar } from "./SideBar";

export const Majors = () => {
  return (
    <>
      <Box bg={"gray.100"}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, lg: 7 }} py={8} spacing={8}>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Sidebar />
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 5 }} borderRadius={"5px"}>
              <MajorList />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

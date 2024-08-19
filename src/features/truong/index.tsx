import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { SchoolList } from "./SchoolList";
import { FillSidebar } from "./FillSidebar";

export const Schools = () => {
  return (
    <>
      <Box bg={"gray.100"}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, lg: 7 }} py={8} spacing={4}>
            <GridItem
              colSpan={{ base: 1, lg: 2 }}
              // borderRight={'2px solid #abb8c3'}
            >
              <FillSidebar />
            </GridItem>
            <GridItem
              // bg={"white"}
              colSpan={{ base: 1, lg: 5 }}
              borderRadius={"5px"}
            >
              <SchoolList />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

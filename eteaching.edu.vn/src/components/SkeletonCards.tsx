"use client";

import {
  Box,
  Card,
  CardProps,
  GridItem,
  HStack,
  SimpleGrid,
  SimpleGridProps,
  Skeleton
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISkelethonCards extends SimpleGridProps {
  numberCard: number;
  isLoaded: boolean;
  children: ReactNode;
}
export const SkeletonCards = (props: ISkelethonCards) => {
  const { isLoaded, children, numberCard, ...args } = props;

  if (isLoaded) return <>{children}</>;

  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4} {...args}>
      {Array.from({ length: numberCard }).map((num, index) => (
        <GridItem
          as={HStack}
          spacing={4}
          border={"1px solid"}
          borderColor={"gray.300"}
          p={2}
          rounded={"md"}
          maxH={"140px"}
          alignItems={"start"}
          flexWrap={"wrap"}
          {...args}
          key={index}
        >
          <Box w={"40px"}>
            <Skeleton isLoaded={false}>
              <Box height={"40px"} width={"40px"} />
            </Skeleton>
          </Box>
          <Box flex={1}>
            <Skeleton isLoaded={false}>
              <Box height={"20px"} w="full" />
            </Skeleton>
            <Skeleton isLoaded={false} mt={"12px"}>
              <Box height={"20px"} />
            </Skeleton>
            <HStack pt={"12px"}>
              <Skeleton isLoaded={false} width={"50%"}>
                <Box height={"30px"} />
              </Skeleton>
            </HStack>
          </Box>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

interface ISkelethonCard extends CardProps {
  numberCard: number;
  isLoaded: boolean;
  children: ReactNode;
}
export const SkeletonCard = (props: ISkelethonCard) => {
  const { isLoaded, children, ...args } = props;

  if (isLoaded) return <>{children}</>;

  return (
    <Card
      as={SimpleGrid}
      columns={{ base: 5, md: 7 }}
      spacing={2}
      gap={4}
      border={"1px solid"}
      borderColor={"gray.300"}
      p={2}
      rounded={"md"}
      {...args}
    >
      <GridItem
        colSpan={{ md: 1 }}
        display={"flex"}
        justifyContent={"center"}
        pos={"relative"}
        aspectRatio={1 / 1}
        objectFit={"cover"}
        overflow={"hidden"}
      >
        <Skeleton isLoaded={false}>
          <Box width={"50px"} height={"50px"} />
        </Skeleton>
      </GridItem>
      <GridItem colSpan={{ base: 4, md: 6 }}>
        <Skeleton isLoaded={false}>
          <Box height={"20px"} />
        </Skeleton>
        <Skeleton isLoaded={false} mt={"12px"}>
          <Box height={"20px"} />
        </Skeleton>
        <HStack pt={"12px"}>
          <Skeleton isLoaded={false} width={"50%"}>
            <Box height={"30px"} />
          </Skeleton>
        </HStack>
      </GridItem>
    </Card>
  );
};

interface ISkeletonHorizontal extends SimpleGridProps {
  numberCard: number;
  isLoaded: boolean;
  children: ReactNode;
}
export const SkeletonHorizontal = (props: ISkeletonHorizontal) => {
  const { isLoaded, children, numberCard, ...args } = props;

  if (isLoaded) return <>{children}</>;

  return (
    <SimpleGrid columns={{ base: 1, lg: numberCard }} spacing={2} {...args}>
      {Array.from({ length: numberCard }).map((num, index) => (
        <GridItem key={index}>
          <Skeleton isLoaded={false} key={index}>
            <Box height={"40px"} />
          </Skeleton>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

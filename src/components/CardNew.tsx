"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Skeleton,
  Text,
  Tooltip
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
export const CardNew = ({
  title,
  desc,
  tagf,
  tags,
  image,
  path,
  isLoading
}: {
  title: string;
  desc: string;
  tagf: string;
  tags: string;
  image?: string;
  path?: string;
  isLoading: boolean;
}) => {
  return (
    <Box
      as={Link}
      href={path ?? "#"}
      _hover={{
        color: "#4D0070"
      }}
    >
      <SimpleGrid columns={6} spacing={2}>
        <GridItem colSpan={1} display={"flex"} justifyContent={"center"}>
          <Box
            pos={"relative"}
            aspectRatio={80 / 80}
            objectFit={"cover"}
            overflow={"hidden"}
          >
            <Skeleton isLoaded={isLoading}>
              <Image
                width={"400"}
                height={"400"}
                src={image || `/1.png`}
                alt={title}
                style={{ width: "400px", height: "auto" }}
              />
            </Skeleton>
          </Box>
        </GridItem>
        <GridItem colSpan={5}>
          <Skeleton isLoaded={isLoading}>
            <Tooltip label={title} placement="right-start">
              <Text
                fontSize={"14px"}
                fontWeight={600}
                transition={"all ease .3s"}
                zIndex={4}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: clean(title) }}
              />
            </Tooltip>
          </Skeleton>
          <Skeleton isLoaded={isLoading}>
            <Text
              mt={1}
              fontSize={"12px"}
              zIndex={4}
              fontWeight={500}
              color={"gray.500"}
              transition={"all ease .3s"}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: clean(desc) }}
            />
          </Skeleton>
        </GridItem>
      </SimpleGrid>
      <HStack pt={4}>
        <Skeleton isLoaded={isLoading}>
          <Text
            p={1}
            align={"center"}
            fontSize={"12px"}
            bg={"#f6f6f6"}
            color={"black"}
            gap={0.1}
            display={"inline-block"}
            fontWeight={500}
            borderRadius={"4px"}
          >
            {tagf}
          </Text>
        </Skeleton>

        <Skeleton isLoaded={isLoading}>
          <Text
            borderRadius={"4px"}
            p={1}
            align={"center"}
            fontSize={"12px"}
            bg={"#f6f6f6"}
            color={"black"}
            display={"inline-block"}
            fontWeight={500}
            gap={0.1}
          >
            {tags}
          </Text>
        </Skeleton>
      </HStack>
    </Box>
  );
};

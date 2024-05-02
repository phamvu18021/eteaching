"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Card,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  Tooltip
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
export const CardAdmission = ({
  title,
  desc,
  tags,
  image,
  path,
  type
}: {
  type?: string;
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  path?: string;
}) => {
  return (
    <>
      <Card
        as={Link}
        boxShadow={type == "under" ? "none" : "sm"}
        href={path ?? "#"}
        bg={type == "right" ? "SecondGreen.100" : "white"}
        p={4}
        border={"1px solid"}
        borderColor={"transparent"}
        borderRadius={"5px"}
        _hover={{
          bg:
            type == "right"
              ? "SecondGreen.100"
              : type == "under"
              ? "SecondWhite.100"
              : "white",
          borderColor: type !== "under" ? "SecondGreen.200" : "gray.300",
          textColor: "green",
          color: "green.400"
        }}
      >
        <SimpleGrid
          columns={{
            md:
              type == "under"
                ? 6
                : type == "right"
                ? 7
                : type == "detail"
                ? 4
                : 3,
            base: 5
          }}
          gap={type == "under" ? 3 : 4}
        >
          <GridItem colSpan={1} display={"flex"} justifyContent={"center"}>
            <Box
              pos={"relative"}
              aspectRatio={1 / 1}
              objectFit={"cover"}
              minW={"45px"}
              overflow={"hidden"}
              borderRadius={"2px"}
            >
              <Image
                width={"100"}
                height={"100"}
                src={image || `/1.webp`}
                style={{ width: "auto", height: "100" }}
                alt={title}
              />
            </Box>
          </GridItem>
          <GridItem
            colSpan={{
              md:
                type == "under"
                  ? 5
                  : type == "right"
                  ? 6
                  : type == "detail"
                  ? 3
                  : 2,
              base: 4
            }}
          >
            <Tooltip label={title} placement="right-start">
              <Text
                fontSize={type == "under" ? "14px" : "16px"}
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
            <Text
              mt={"6px"}
              fontSize={type == "under" ? "12px" : "14px"}
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
            {(type == "right" || type == "detail") && (
              <HStack
                pt={{ base: 2, md: 6 }}
                display={"flex"}
                flexWrap={"wrap"}
              >
                {tags?.map(
                  (tag, index) =>
                    tag && (
                      <Text
                        key={index}
                        p={1}
                        align={"center"}
                        fontSize={"xs"}
                        bg={"SecondWhite.100"}
                        color={"gray.700"}
                        gap={0.1}
                        display={"inline-block"}
                        fontWeight={500}
                        borderRadius={"4px"}
                      >
                        {tag}
                      </Text>
                    )
                )}
              </HStack>
            )}
          </GridItem>
        </SimpleGrid>
        {type == "under" && (
          <HStack
            pt={{ base: 2, md: 4 }}
            pr={2}
            display="flex"
            flexWrap={"wrap"}
          >
            {tags?.map(
              (tag, index) =>
                tag && (
                  <Text
                    key={index}
                    p={1}
                    align={"center"}
                    fontSize={"xs"}
                    bg={"SecondWhite.100"}
                    color={"gray.700"}
                    gap={0.1}
                    display={"inline-block"}
                    fontWeight={500}
                    borderRadius={"4px"}
                  >
                    {tag}
                  </Text>
                )
            )}
          </HStack>
        )}
      </Card>
    </>
  );
};

"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const CardBlogImageOut = ({
  image,
  title,
  desc,
  path,
  date,
  tag,
  type,
  imageH,
  author
}: {
  image?: string;
  title: string;
  desc?: string;
  path: string;
  date?: string;
  tag?: string;
  type?: string;
  imageH?: string;
  author?: string;
}) => {
  return (
    <>
      <Box as={Link} href={path ?? "#"}>
        <SimpleGrid
          flexDir={"column"}
          columns={type == "InfoOnRight" ? 3 : 1}
          spacing={2}
          bg={type == "Briefly" ? "transparent" : "white"}
          rounded={"sm"}
          overflow={"hidden"}
        >
          <GridItem
            colSpan={1}
            display={"flex"}
            justifyContent={"center"}
            objectFit={"cover"}
          >
            {image && (
              <Box pos={"relative"} aspectRatio={508 / 338} overflow={"hidden"}>
                <Box objectFit="contain">
                  <Image
                    width={656}
                    height={436}
                    src={image || `/blog.jpeg`}
                    style={{ maxHeight: imageH }}
                    alt={title}
                  />
                </Box>
              </Box>
            )}
          </GridItem>

          <GridItem
            colSpan={type == "InfoOnRight" ? 2 : 1}
            px={2}
            justifyContent={"space-between"}
          >
            <Heading
              color={type == "Briefly" ? "black" : "facebook.800"}
              as={"h3"}
              fontSize={
                type == "InfoOnRight" ? "14px" : { base: "16px", lg: "20px" }
              }
              fontWeight={"600"}
              mt={type == "InfoOnRight" ? 1 : 0}
              _hover={{ color: "#00b14f" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
            <HStack pt={type == "InfoOnRight" ? { lg: 4, base: 2 } : 2} gap={3}>
              {tag && (
                <Text
                  p={1}
                  align={"center"}
                  fontSize={"10px"}
                  w={"-webkit-fit-content"}
                  bg={"black"}
                  color={"white"}
                  gap={0.1}
                >
                  {tag}
                </Text>
              )}
              {author && <Text fontWeight={600}>Admin</Text>}
              {date && (
                <Text
                  fontSize={type == "InfoOnRight" ? "12px" : "16px"}
                  color={"gray.500"}
                >
                  {date?.slice(5)}
                </Text>
              )}
            </HStack>

            {desc && (
              <Text
                color={"gray.500"}
                fontSize={"1rem"}
                mb={2}
                mt={1}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: clean(desc || "") }}
              />
            )}
          </GridItem>
        </SimpleGrid>
        {type == "Briefly" && <Divider borderBottomWidth={"2px"} />}
      </Box>
    </>
  );
};

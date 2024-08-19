"use client";

import { clean } from "@/lib/sanitizeHtml";
import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const CardBlog = ({
  image,
  title,
  path,
  date,
  tag,
  type
}: {
  image?: string;
  title: string;
  path: string;
  date?: string;
  tag?: string;
  type: string;
}) => {
  return (
    <>
      <Box as={Link} href={path}>
        <Box
          display={"flex"}
          pos={"relative"}
          aspectRatio={type === "OutBig" ? "49 / 34" : "54 / 32"}
          overflow={"hidden"}
          bgImg={image || "/blog.jpeg"}
          bgSize={"cover"}
          alignSelf={"end"}
          boxShadow={
            type === "InfoInsideImg"
              ? "inset 0px -40px 40px -20px #000 "
              : "none"
          }
          _hover={{
            boxShadow: "none"
          }}
        >
          <VStack
            alignItems={"start"}
            justifyContent={type === "InfoInsideImg" ? "end" : "start"}
            pb={16}
            p={type !== "InfoInsideImg" ? 0 : 2}
          >
            <Text
              p={1}
              align={"center"}
              fontSize={type !== "InfoInsideImg" ? "10px" : "12px"}
              bg={"#690097"}
              color={"white"}
              gap={0.1}
              display={"inline-block"}
              fontWeight={500}
              borderRadius={type === "InfoInsideImg" ? "4px" : "0px"}
            >
              {tag}
            </Text>
            {type == "InfoInsideImg" && (
              <>
                <Text
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"white"}
                  transition={"all ease .3s"}
                  css={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                  _hover={{
                    color: "#690097"
                  }}
                  dangerouslySetInnerHTML={{ __html: clean(title) }}
                />

                <Text fontSize={"md"} mt={-2} color={"white"} pb={15}>
                  {date?.slice(5)}
                </Text>
              </>
            )}
          </VStack>
        </Box>
        {type !== "OutBig" && type !== "Out" && (
          <Text
            className="event-heading"
            color={"facebook.700"}
            fontSize={"12px"}
            fontFamily={"body"}
            fontWeight={"600"}
            _hover={{ color: "#690097" }}
            css={{
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            dangerouslySetInnerHTML={{ __html: clean(title) }}
          />
        )}
        {type == "Out" && (
          <Text
            className="event-heading"
            color={"Black"}
            fontSize={"16px"}
            fontFamily={"body"}
            fontWeight={"600"}
            _hover={{ color: "#690097" }}
            css={{
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            dangerouslySetInnerHTML={{ __html: clean(title) }}
          />
        )}
        {type == "OutBig" && (
          <Text
            className="event-heading"
            color={"Black"}
            fontSize={"24px"}
            fontFamily={"body"}
            fontWeight={"600"}
            _hover={{ color: "#690097" }}
            css={{
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            dangerouslySetInnerHTML={{ __html: clean(title) }}
          />
        )}
      </Box>
    </>
  );
};

import { Box, Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const MajorCardSide = ({
  name,
  desc,
  image,
  slug
}: {
  name: string;
  desc: string;
  image: string;
  slug: string;
}) => {
  const router = useRouter();
  return (
    <>
      <Box
        onClick={() => router.push(`/nganh/${slug}`)}
        cursor={"pointer"}
        border={"1px solid #f1f2f4"}
        bg={"white"}
        p={2}
        boxShadow="-1px 1px 4px rgba(0,0,0,.051)"
        borderRadius={"5px"}
      >
        <SimpleGrid columns={3} mt={1} spacing={2}>
          <GridItem colSpan={1}>
            <Box aspectRatio={320 / 150} pos={"relative"}>
              <Box pos={"relative"} objectFit="contain" overflow={"hidden"}>
                <Image
                  width={656}
                  height={436}
                  src={image || `/ngon-ngu-nhat.webp`}
                  alt={"title"}
                />
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box alignItems={"center"}>
              <Text
                textTransform={"uppercase"}
                color="#263A4d"
                fontSize={"14px"}
                fontWeight={600}
                lineHeight={1.2}
              >
                {name || "Quản trị kinh doanh"}
              </Text>
              <Divider
                mt={1}
                borderBottomWidth={"3px"}
                borderBlockEndColor={"#00b14f"}
                w={"50px"}
              />
              <Text
                fontSize={"12px"}
                mt={1}
                color={"#8C8C8C"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {desc ||
                  "Học viện Công nghệ Bưu chính Viễn thông được thành lập theo quyết định số 516/TTg của Thủ tướng Chính phủ ngày 11 tháng 7"}
              </Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};

import { Box, Divider, Skeleton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const MajorCard = ({
  type,
  name,
  desc,
  image,
  url,
  // eslint-disable-next-line no-unused-vars
  isLoading
}: {
  type?: string;
  name?: string;
  desc?: string;
  image?: string;
  url?: string;
  isLoading: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      <Box
        border={"1px solid #f1f2f4"}
        bg={"white"}
        cursor={"pointer"}
        p={2}
        boxShadow="-1px 1px 4px rgba(0,0,0,.051)"
        onClick={() => router.push(`/nganh/${url}`)}
        borderRadius={"5px"}
        w={"full"}
      >
        <Box pos={"relative"}>
          <Skeleton isLoaded={!isLoading}>
            <Box
              pos={"relative"}
              aspectRatio={320 / 150}
              w={"auto"}
              h={"auto"}
              bgSize={"cover"}
              bgPosition={"center"}
              bgImage={image ? image : `/ngon-ngu-nhat.webp`}
              overflow={"hidden"}
            ></Box>
          </Skeleton>
        </Box>

        <Box alignItems={"center"} mt={3}>
          <Skeleton isLoaded={!isLoading}>
            <Text
              textTransform={"uppercase"}
              color="#263A4d"
              fontSize={type == "same" ? "14px" : "16px"}
              fontWeight={600}
              lineHeight={1.2}
            >
              {name || "Quản trị kinh doanh"}
            </Text>
          </Skeleton>

          <Skeleton isLoaded={!isLoading}>
            <Divider
              mt={2}
              borderBottomWidth={"3px"}
              borderBlockEndColor={"#690097"}
              w={type == "same" ? "80px" : "120px"}
            />
          </Skeleton>

          <Skeleton isLoaded={!isLoading}>
            <Text
              fontSize={"14px"}
              mt={2}
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
                "Học viện Công nghệ Bưu chính Viễn thông được thành lập theo quyếtđịnh số 516/TTg của Thủ tướng Chính phủ ngày 11 tháng 7 năm 1997."}
            </Text>
          </Skeleton>
        </Box>
      </Box>
    </>
  );
};

import { Box, Skeleton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const SchoolCard = ({
  type,
  logo,
  banner,
  name,
  desc,
  url,
  isLoading
}: {
  type?: string;
  logo?: string;
  banner?: string;
  name?: string;
  desc?: string;
  url?: string;
  isLoading: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      <Box
        border={"1px solid #f1f2f4"}
        bg={"white"}
        cursor="pointer"
        boxShadow="-1px 1px 4px rgba(0,0,0,.051)"
        borderRadius={"5px"}
        onClick={() => router.push(`/truong/${url}`)}
        w={"full"}
      >
        <Box aspectRatio={320 / 125} pos={"relative"}>
          <Skeleton isLoaded={!isLoading}>
            <Box
              borderRadius={"5px 5px 0 0"}
              pos={"relative"}
              aspectRatio={320 / 100}
              overflow={"hidden"}
              w={"auto"}
              h={"auto"}
              bgSize={"cover"}
              bgPosition={"center"}
              bgImage={banner ? banner : `/a1.webp`}
            ></Box>
          </Skeleton>

          <Box
            pos={"absolute"}
            aspectRatio={55 / 55}
            top={type == "side" ? "65px" : "85px"}
            left={"15px"}
            bg={"white"}
            border={"1px solid #eee"}
            borderRadius={"5px"}
            zIndex={8}
          >
            <Skeleton isLoaded={!isLoading}>
              <Box p={1} objectFit="contain">
                <Image
                  width={type == "side" ? 35 : 45}
                  height={type == "side" ? 35 : 45}
                  src={logo ? logo : `/logo-neu3.webp`}
                  alt={"title"}
                />
              </Box>
            </Skeleton>
          </Box>
        </Box>

        <Box alignItems={"center"} px={4} pt={1} pb={4}>
          <Skeleton isLoaded={!isLoading}>
            <Text
              textTransform={"uppercase"}
              color={"#333"}
              fontSize={"14px"}
              fontWeight={700}
              lineHeight={1.2}
            >
              {name ? name : "Đại học kinh tế quốc dân"}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text
              fontSize={"14px"}
              mt={"4px"}
              color={"#8C8C8C"}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {desc
                ? desc
                : "Học viện Công nghệ Bưu chính Viễn thông được thành lập theo quyết định số 516/TTg của Thủ tướng Chính phủ ngày 11 tháng 7 năm 1997"}
            </Text>
          </Skeleton>
        </Box>
      </Box>
    </>
  );
};

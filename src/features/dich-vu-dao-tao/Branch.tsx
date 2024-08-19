"use client";
import { Swiperlayout } from "@/components/Swiperlayout";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const Item = ({
  desc,
  title,
  image
}: {
  desc: string;
  title: string;
  image: string;
}) => {
  return (
    <Flex
      px="2px"
      py="24px"
      flexDirection={"column"}
      alignItems="center"
      color="#42474c"
    >
      <Image boxSize="100px" objectFit="cover" src={image} alt={title} />

      <Text
        mt="10px"
        textAlign="center"
        lineHeight="22px"
        fontWeight="700"
        fontSize="16px"
      >
        {title}
      </Text>
      <Text
        color={"#4D0070"}
        textAlign="center"
        mt="10px"
        fontSize="14px"
        lineHeight="24px"
      >
        {desc}
      </Text>
    </Flex>
  );
};

const slidesPerView = {
  base: 1, // Giá trị mặc định cho màn hình cỡ nhỏ
  md: 5, // Giá trị cho màn hình có độ rộng từ 48em trở lên
  lg: 5, // Giá trị cho màn hình có độ rộng từ 62em trở lên
  xl: 5, // Giá trị cho màn hình có độ rộng từ 80em trở lên
  "2xl": 5 // Giá trị cho màn hình có độ rộng từ 96em trở lên
};

export const Branch = (topBranch: any) => {
  const reviews = [
    {
      school: "",
      path: topBranch?.topBranch?.major_1?.link || "#",
      major: topBranch?.topBranch?.major_1?.title || "Ngôn-ngữ-Trungz",
      desc: topBranch?.topBranch?.major_1?.desc || "Chương trìnhz",
      title: topBranch?.topBranch?.major_1?.name || "Ngôn ngữ Trungz",
      image: topBranch?.topBranch?.major_1?.image || "/icon-kd.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_2?.link || "#",
      major: topBranch?.topBranch?.major_2?.title || "Ngôn-ngữ-Anhz",
      desc: topBranch?.topBranch?.major_2?.desc || "Hình thứcz",
      title: topBranch?.topBranch?.major_2?.name || "Ngôn ngữ Anhz",
      image: topBranch?.topBranch?.major_2?.image || "/icon-nna.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_3?.link || "#",
      major: topBranch?.topBranch?.major_3?.title || "Quản-trị-kinh-doanhz",
      desc: topBranch?.topBranch?.major_3?.desc || "Phát triển",
      title: topBranch?.topBranch?.major_3?.name || "Quản trị kinh doanhz",
      image: topBranch?.topBranch?.major_3?.image || "/icon-qtkd.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_4?.link || "#",
      major: topBranch?.topBranch?.major_4?.title || "Thương-mại-điện-tửz",
      desc: topBranch?.topBranch?.major_4?.desc || "NEU E-Learning ",
      title: topBranch?.topBranch?.major_4?.name || "Thương mại điện tửz",
      image: topBranch?.topBranch?.major_4?.image || "/icon-tmdt.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_5?.link || "#",
      major: topBranch?.topBranch?.major_5?.title || "Công-nghệ-thông-tinz",
      desc: topBranch?.topBranch?.major_5?.desc || "Luôn cập nhật",
      title: topBranch?.topBranch?.major_5?.name || "Công nghệ thông tinz",
      image: topBranch?.topBranch?.major_5?.image || "/icon-l.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_6?.link || "#",
      major: topBranch?.topBranch?.major_6?.title || "Luậtz",
      desc: topBranch?.topBranch?.major_6?.desc || "Không cần",
      title: topBranch?.topBranch?.major_6?.name || "Luậtz",
      image: topBranch?.topBranch?.major_6?.image || "/icon-l.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_7?.link || "#",
      major: topBranch?.topBranch?.major_7?.title || "Luật-kinh-tếz",
      desc: topBranch?.topBranch?.major_7?.desc || "Chương trình ",
      title: topBranch?.topBranch?.major_7?.name || "Luật kinh tếz",
      image: topBranch?.topBranch?.major_7?.image || "/icon-lkt.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_8?.link || "#",
      major: topBranch?.topBranch?.major_8?.title || "Tài-chính-ngân-hàngz",
      desc: topBranch?.topBranch?.major_8?.desc || "Hình thức",
      title: topBranch?.topBranch?.major_8?.name || "Tài chính ngân hàngz",
      image: topBranch?.topBranch?.major_8?.image || "/icon-tcnh.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_9?.link || "#",
      major: topBranch?.topBranch?.major_9?.title || "Kế-toánz",
      desc: topBranch?.topBranch?.major_9?.desc || "Phát triển ",
      title: topBranch?.topBranch?.major_9?.name || "Kế-toánz",
      image: topBranch?.topBranch?.major_9?.image || "/icon-kt.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_10?.link || "#",
      major: topBranch?.topBranch?.major_10?.title || "Kế-toán-tổng-hợpz",
      desc: topBranch?.topBranch?.major_10?.desc || "NEU E-Learning ",
      title: topBranch?.topBranch?.major_10?.name || "Kế toán tổng hợpz",
      image: topBranch?.topBranch?.major_10?.image || "/icon-kt.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_11?.link || "#",
      major: topBranch?.topBranch?.major_11?.title || "Điện-tử-viễn-thôngz",
      desc: topBranch?.topBranch?.major_11?.desc || "cập nhật",
      title: topBranch?.topBranch?.major_11?.name || "Điện tử viễn thôngz",
      image: topBranch?.topBranch?.major_11?.image || "/icon-dtvt.webp"
    },
    {
      school: "",
      path: topBranch?.topBranch?.major_12?.link || "#",
      major: topBranch?.topBranch?.major_12?.title || "Thương-mại-điện-tử-",
      desc: topBranch?.topBranch?.major_12?.desc || "thi tuyển",
      title: topBranch?.topBranch?.major_12?.name || "Thương mại điện tử ",
      image: topBranch?.topBranch?.major_12?.image || "/icon-tmdtmkt.webp"
    }
  ];
  return (
    <Box bg={"linear-gradient(85deg,#75bb39,#56ae68)"} pb={"40px"}>
      <Box bgImage={"/background.svg"} bgSize={"cover"}>
        <Container maxW="7xl" px={"-20px"} mt={"-60px"}>
          <Text
            position={"relative"}
            top="90px"
            px="20px"
            color={"#ffffff"}
            fontSize={" max(1.3vw, 32px)"}
            fontWeight={400}
            lineHeight="32px"
            textAlign="center"
            mb="50px"
          >
            {topBranch?.topBranch?.title ||
              "Hơn 100 chương trình đào tạo dài hạn từ các trường đại học uy tín"}
          </Text>

          <Swiperlayout
            slides={reviews}
            slidesPerView={slidesPerView}
            cardComponent={Item}
            navigation={true}
            loop={false}
            isContainer="Listgt"
            grid={{
              rows: 2
            }}
          />
        </Container>
      </Box>
    </Box>
  );
};

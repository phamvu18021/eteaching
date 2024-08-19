"use client";
import { Swiperlayout } from "@/components/Swiperlayout";
import { Container, Flex, Image, Text } from "@chakra-ui/react";

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
  md: 2, // Giá trị cho màn hình có độ rộng từ 48em trở lên
  lg: 3, // Giá trị cho màn hình có độ rộng từ 62em trở lên
  xl: 4, // Giá trị cho màn hình có độ rộng từ 80em trở lên
  "2xl": 4 // Giá trị cho màn hình có độ rộng từ 96em trở lên
};

export const TopBranch = (topBranch: any) => {
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
      major:
        topBranch?.topBranch?.major_12?.title ||
        "Thương-mại-điện-tử-và-Marketing-sốz",
      desc: topBranch?.topBranch?.major_12?.desc || "thi tuyển",
      title:
        topBranch?.topBranch?.major_12?.name ||
        "Thương mại điện tử và Marketing sốz",
      image: topBranch?.topBranch?.major_12?.image || "/icon-tmdtmkt.webp"
    }
  ];
  return (
    <Container maxW="6xl" mt={"-40px"} px={"-20px"}>
      <Text
        position={"relative"}
        top="110px"
        px="20px"
        color={"#4D0070"}
        fontSize={" max(1.3vw, 20px)"}
        fontWeight={700}
        lineHeight="40px"
        textAlign="left"
        mb="50px"
      >
        {topBranch?.topBranch?.title || "Top ngành học nổi bậtz"}
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
  );
};

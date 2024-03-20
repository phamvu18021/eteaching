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
        color={"#00b14f"}
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

const reviews = [
  {
    school: "",
    path: "#",
    major: "Quản-trị-kinh-doanh",
    desc: "Chương trình",
    title: "Quản trị kinh doanh",
    image: "/icon-kd.webp"
  },
  {
    school: "",
    path: "#",
    major: "Ngôn-ngữ-Anh",
    desc: "Hình thức",
    title: "Ngôn ngữ Anh",
    image: "/icon-nna.webp"
  },
  {
    school: "",
    path: "#",
    major: "Công-nghệ-thông-tin",
    desc: "Phát triển",
    title: "It",
    image: "/icon-it.webp"
  },
  {
    school: "",
    path: "#",
    major: "Tài-chính-ngân-hàng",
    desc: "NEU E-Learning ",
    title: "Tài chính ngân hàng",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Luật",
    desc: "Luôn cập nhật",
    title: "Luật",
    image: "/icon-l.webp"
  },
  {
    school: "",
    path: "#",
    major: "Luật-kinh-tế",
    desc: "Không cần",
    title: "Luật kinh tế",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Quản-trị-kinh-doanh",
    desc: "Chương trình ",
    title: "Quản trị kinh doanh",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Ngôn-ngữ-Anh",
    desc: "Hình thức",
    title: "Ngôn ngữ Anh",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Kế-toán",
    desc: "Phát triển ",
    title: "Áp dụng thực tiễn",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Công-nghệ-thông-tin",
    desc: "NEU E-Learning ",
    title: "Thương hiệu top 1 ",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Luật-kinh-tế",
    desc: "cập nhật",
    title: "Tư vấn 24/7",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Công-nghệ-thông-tin",
    desc: "thi tuyển",
    title: "Công nghệ thông tin",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Công-nghệ-thông-tin",
    desc: " thi tuyển, .",
    title: "Công nghệ thông tin",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Tài-chính-ngân-hàng",
    desc: "Bằng ",
    title: "Tài chính ngân hàng",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Ngôn-ngữ-Trung",
    desc: "100% giảng viên ",
    title: "Ngôn ngữ Trung",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Ngôn-ngữ-Anh",
    desc: "Hình thức ",
    title: "Ngôn ngữ Anh",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Công-nghệ-thông-tin",
    desc: "Phát triển ",
    title: "Áp dụng thực tiễn",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Luật-kinh-tế",
    desc: "NEU E-Learning ",
    title: "Thương hiệu top 1 ",
    image: "/icon-tcnh.webp"
  },
  {
    school: "",
    path: "#",
    major: "Quản-trị-kinh-doanh",
    desc: "Luôn cập ",
    title: "Tư vấn 24/7",
    image: "/icon-tcnh.webp"
  }
];

const slidesPerView = {
  base: 1, // Giá trị mặc định cho màn hình cỡ nhỏ
  md: 2, // Giá trị cho màn hình có độ rộng từ 48em trở lên
  lg: 3, // Giá trị cho màn hình có độ rộng từ 62em trở lên
  xl: 4, // Giá trị cho màn hình có độ rộng từ 80em trở lên
  "2xl": 4 // Giá trị cho màn hình có độ rộng từ 96em trở lên
};

export const TopBranch = () => {
  return (
    <Container maxW="6xl" mt={"-40px"} px={"-20px"}>
      <Text
        position={"relative"}
        top="110px"
        px="20px"
        color={"#009643"}
        fontSize={" max(1.3vw, 20px)"}
        fontWeight={700}
        lineHeight="40px"
        textAlign="left"
        mb="50px"
      >
        Top ngành học nổi bật
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

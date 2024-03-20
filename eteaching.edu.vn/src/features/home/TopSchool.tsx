"use client";

import { Swiperlayout } from "@/components/Swiperlayout";
import { Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdOutlineDiamond } from "react-icons/md";

const Item = ({ title, image }: { title: string; image: string }) => {
  return (
    <Flex height="204px" px="19px" py="47px" color="#ffffff">
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"full"}
        px="6px"
        position="absolute"
        top="13px"
        left="13px"
        fontSize="14px"
        fontWeight={500}
        bg="#00b14f"
      >
        <MdOutlineDiamond />
        <Text fontSize="12px">TOP</Text>
      </Flex>
      <Image
        src={image}
        alt={title}
        width={180}
        height={110}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />
    </Flex>
  );
};

const reviews = [
  {
    school: "dai-hoc-thai-nguyen",
    major: "",
    path: "#",
    image: "/Logo-dhtn.png",
    title: "Đại học Thái Nguyên",
    desc: `Hệ đào tạo từ xa `
  },
  {
    school: "dai-hoc-nong-lam-thai-nguyen",
    major: "",
    path: "#",
    image: "/Logo-nltn.png",
    title: "Đại học Nông Lâm Thái Nguyên",
    desc: `Hệ đào tạo từ xa`
  },
  {
    school: "dai-hoc-mo-ha-noi",
    major: "",
    path: "#",
    image: "/Logo-ehou.png",
    title: "Đại học Mở Hà Nội",
    desc: `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
  },
  {
    school: "dai-hoc-ky-thuat-cong-nghiep-thai-nguyen",
    major: "",
    path: "#",
    image: "/Logo-ktcn2.png",
    title: "Đại học Kỹ Thuật Công Nghiệp Thái Nguyên",
    desc: `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
  },
  {
    school: "hoc-vien-tai-chinh",
    major: "",
    path: "#",
    image: "/Logo-hvtc1.png",
    desc: `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`,
    title: "Học viện Tài chính"
  },
  {
    school: "dai-hoc-kinh-te-quoc-dan",
    major: "",
    path: "#",
    image: "/Logo-neu3.png",
    title: "Đại học Kinh tế Quốc dân",
    desc: `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
  },
  {
    school: "hoc-vien-cong-nghe-buu-chinh-vien-thong",
    major: "",
    path: "#",
    image: "/ptit-logo.png",
    title: "Học viện Bưu chính Viễn thông ",
    desc: `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
  }
];

export const TopSchool = () => {
  const slidesPerView = {
    base: 2, // Giá trị mặc định cho màn hình cỡ nhỏ
    md: 3, // Giá trị cho màn hình có độ rộng từ 48em trở lên
    lg: 4, // Giá trị cho màn hình có độ rộng từ 62em trở lên
    xl: 5, // Giá trị cho màn hình có độ rộng từ 80em trở lên
    "2xl": 5 // Giá trị cho màn hình có độ rộng từ 96em trở lên
  };
  return (
    <Container maxW="6xl" mb="35px" px={"-20px"}>
      <Text
        pl="20px"
        pt="40px"
        color={"#009643"}
        fontSize={" max(1.3vw, 20px)"}
        fontWeight={700}
        lineHeight="40px"
        textAlign="left"
      >
        Danh sách các trường nổi bật
      </Text>
      <Swiperlayout
        slides={reviews}
        slidesPerView={slidesPerView}
        cardComponent={Item}
        navigation={false}
        loop={true}
        isContainer="Listnganh"
        grid={{
          rows: 1
        }}
      />
    </Container>
  );
};

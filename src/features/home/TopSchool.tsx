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

export const TopSchool = (topSchool: any) => {
  const reviews = [
    {
      school: topSchool?.topSchool?.university_1?.name || "dai-hoc-thai-nguyen",
      major: "",
      path: topSchool?.topSchool?.university_1?.link || "#",
      image: topSchool?.topSchool?.university_1?.image || "/Logo-dhtn.webp",
      title: topSchool?.topSchool?.university_1?.title || "Đại học Thái Nguyên",
      desc: topSchool?.topSchool?.university_1?.name || `Hệ đào tạo từ xa `
    },
    {
      school:
        topSchool?.topSchool?.university_2?.name ||
        "dai-hoc-nong-lam-thai-nguyen",
      major: "",
      path: topSchool?.topSchool?.university_2?.link || "#",
      image: topSchool?.topSchool?.university_2?.image || "/Logo-nltn.webp",
      title:
        topSchool?.topSchool?.university_2?.title ||
        "Đại học Nông Lâm Thái Nguyên",
      desc: topSchool?.topSchool?.university_2?.name || `Hệ đào tạo từ xa`
    },
    {
      school: topSchool?.topSchool?.university_3?.name || "dai-hoc-mo-ha-noi",
      major: "",
      path: topSchool?.topSchool?.university_3?.link || "#",
      image: topSchool?.topSchool?.university_3?.image || "/Logo-ehou.webp",
      title: topSchool?.topSchool?.university_3?.title || "Đại học Mở Hà Nội",
      desc:
        topSchool?.topSchool?.university_3?.name ||
        `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
    },
    {
      school:
        topSchool?.topSchool?.university_4?.name ||
        "dai-hoc-ky-thuat-cong-nghiep-thai-nguyen",
      major: "",
      path: topSchool?.topSchool?.university_4?.link || "#",
      image: topSchool?.topSchool?.university_4?.image || "/Logo-ktcn2.webp",
      title:
        topSchool?.topSchool?.university_4?.title ||
        "Đại học Kỹ Thuật Công Nghiệp Thái Nguyên",
      desc:
        topSchool?.topSchool?.university_4?.name ||
        `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
    },
    {
      school: topSchool?.topSchool?.university_5?.name || "hoc-vien-tai-chinh",
      major: "",
      path: topSchool?.topSchool?.university_5?.link || "#",
      image: topSchool?.topSchool?.university_5?.image || "/Logo-hvtc1.webp",
      desc:
        topSchool?.topSchool?.university_5?.title ||
        `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`,
      title: topSchool?.topSchool?.university_5?.name || "Học viện Tài chính"
    },
    {
      school:
        topSchool?.topSchool?.university_6?.name || "dai-hoc-kinh-te-quoc-dan",
      major: "",
      path: topSchool?.topSchool?.university_6?.link || "#",
      image: topSchool?.topSchool?.university_6?.image || "/Logo-neu3.webp",
      title:
        topSchool?.topSchool?.university_6?.title || "Đại học Kinh tế Quốc dân",
      desc:
        topSchool?.topSchool?.university_6?.name ||
        `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
    },
    {
      school:
        topSchool?.topSchool?.university_7?.name ||
        "hoc-vien-cong-nghe-buu-chinh-vien-thong",
      major: "",
      path: topSchool?.topSchool?.university_7?.link || "#",
      image: topSchool?.topSchool?.university_7?.image || "/ptit-logo.webp",
      title:
        topSchool?.topSchool?.university_7?.title ||
        "Học viện Bưu chính Viễn thông ",
      desc:
        topSchool?.topSchool?.university_7?.name ||
        `Hệ đào tạo từ xa Đại học Kinh tế Quốc dân`
    }
  ];
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
        {topSchool?.topSchool?.title || "Danh sách các trường nổi bậtz"}
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

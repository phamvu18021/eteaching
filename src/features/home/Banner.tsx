"use client";

import { SearchForm } from "@/components/SearchForm";
import { Swiperlayout } from "@/components/Swiperlayout";
import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

export const CardBanner = ({
  title,
  image
}: {
  title: string;
  image: string;
}) => {
  return (
    <Box>
      <Image
        priority
        className="Image"
        src={image}
        alt={title}
        width={"1100"}
        height={"220"}
        style={{
          width: "auto",
          height: "100%",
          borderRadius: "0.5rem"
        }}
      />
    </Box>
  );
};

export const Banner = (banner: any) => {
  const teachers = [
    {
      school: "",
      major: "",
      path: "#",
      title: "Tuyển sinh năm 2023",
      image: banner?.banner?.banner_image?.banner_1 || `/1.webp`,
      desc: ``
    },
    {
      school: "",
      major: "",
      path: "#",
      title: "Tuyển sinh năm 2023",
      image: banner?.banner?.banner_image?.banner_2 || `/2.webp`,
      desc: ``
    },
    {
      school: "",
      major: "",
      path: "#",
      title: "Tuyển sinh năm 2023",
      image: banner?.banner?.banner_image?.banner_3 || `/3.webp`,
      desc: ``
    },
    {
      school: "",
      major: "",
      path: "#",
      title: "Tuyển sinh năm 2023",
      image: banner?.banner?.banner_image?.banner_4 || `/4.webp`,
      desc: ``
    }
  ];

  const slidesPerView = {
    base: 1, // Giá trị mặc định cho màn hình cỡ nhỏ
    md: 1, // Giá trị cho màn hình có độ rộng từ 48em trở lên
    lg: 1, // Giá trị cho màn hình có độ rộng từ 62em trở lên
    xl: 1, // Giá trị cho màn hình có độ rộng từ 80em trở lên
    "2xl": 1 // Giá trị cho màn hình có độ rộng từ 96em trở lên
  };

  return (
    <Box
      bgImage={"./bga1.jpg"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Container maxW={"6xl"}>
        <Text
          pt="32px"
          color={"#009643"}
          fontSize={" max(1.6vw, 20px)"}
          fontWeight={700}
          lineHeight="40px"
          textAlign="center"
          pb={"24px"}
        >
          {banner?.banner?.banner_title ||
            "Lựa chọn ngành nghề đào tạo, các trường đào tạo phù hợp nhất với bạn"}
        </Text>
        <SearchForm />
      </Container>
      <Container maxW={"6xl"} mt={"52px"} pb={"25px"} px="-20px">
        <Swiperlayout
          slides={teachers}
          slidesPerView={slidesPerView}
          cardComponent={CardBanner}
          hasPagination={true}
          navigation={true}
          loop={true}
          isContainer="Swiper"
          grid={{
            rows: 1
          }}
        />
      </Container>
    </Box>
  );
};

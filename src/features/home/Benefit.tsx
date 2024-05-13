import { Swiperlayout } from "@/components/Swiperlayout";
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { BsCardChecklist, BsPersonWorkspace } from "react-icons/bs";
import { GiDiploma } from "react-icons/gi";

export const Item = ({
  path,
  title,
  image,
  desc
}: {
  path: string;
  title: string;
  image: string;
  desc: string;
}) => {
  const Article = styled.article`
    border-radius: 20px;
    position: relative;
    cursor: pointer;
    box-shadow: none;
    transition: box-shadow 0.3s ease;

    &::after {
      content: "";
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: black;
      border-radius: 20px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  `;

  const HoveredArticle = styled(Article)`
    &:hover {
      &::after {
        opacity: 0.8;
      }
      .text {
        opacity: 1;
        z-index: 2;
      }
    }
  `;

  return (
    <Box as={Link} href={path}>
      <HoveredArticle>
        <Image
          width={900}
          height={500}
          src={image}
          alt={title || `image`}
          style={{
            objectFit: "cover",
            borderRadius: "20px",
            width: "100%",
            height: "auto",
            transition: "transform 0.3s ease-in-out"
          }}
        />
        <Box
          w={"100%"}
          position="absolute"
          top="50%"
          left="50%"
          transform={"translate(-50%,-50%)"}
          color="white"
          opacity={0}
          transition="opacity 0.3s ease"
          className="text"
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              width={200}
              height={100}
              src={desc}
              alt={title || `image`}
              style={{
                objectFit: "cover",
                width: "100px",
                height: "auto",
                transition: "transform 0.3s ease"
              }}
            />
          </Box>

          <Text textAlign={"center"} mt="20px">
            {title}
          </Text>
        </Box>
      </HoveredArticle>
    </Box>
  );
};

export const Benefit = (benefit: any) => {
  const teachers = [
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_1?.link ||
        "https://bcvt.edu.vn/",
      title:
        benefit?.benefit?.Universities?.university_1?.name ||
        "Học viện Công nghệ Bưu chính Viễn thôngz",
      image: benefit?.benefit?.Universities?.university_1?.image || `/a.webp`,
      desc:
        benefit?.benefit?.Universities?.university_1?.logo || `/ptit-logo.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_2?.link ||
        "https://eaof.vn/",
      title:
        benefit?.benefit?.Universities?.university_2?.name ||
        "Học viện Tài chínhz",
      image: benefit?.benefit?.Universities?.university_2?.image || `/a1.webp`,
      desc:
        benefit?.benefit?.Universities?.university_2?.logo || `/Logo-hvtc1.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_3?.link ||
        "https://dec.neu.edu.vn/",
      title:
        benefit?.benefit?.Universities?.university_3?.name ||
        "Đại học Kinh tế Quốc dânz",
      image: benefit?.benefit?.Universities?.university_3?.image || `/a2.webp`,
      desc:
        benefit?.benefit?.Universities?.university_3?.logo || `/Logo-neu3.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_4?.link ||
        "https://tuaf.vn/",
      title:
        benefit?.benefit?.Universities?.university_4?.name ||
        "Đại học Nông Lâm Thái Nguyênz",
      image: benefit?.benefit?.Universities?.university_4?.image || `/a3.webp`,
      desc:
        benefit?.benefit?.Universities?.university_4?.logo || `/Logo-tuaf1.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_5?.link ||
        "https://dhthainguyen.edu.vn/",
      title:
        benefit?.benefit?.Universities?.university_5?.name ||
        "Đại Học Thái Nguyênz",
      image: benefit?.benefit?.Universities?.university_5?.image || `/a4.webp`,
      desc:
        benefit?.benefit?.Universities?.university_5?.logo || `/Logo-dhtn.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_6?.link ||
        "https://ehou.vn/",
      title:
        benefit?.benefit?.Universities?.university_6?.name ||
        "Đại học Mở Hà Nộiz",
      image: benefit?.benefit?.Universities?.university_6?.image || `/a5.webp`,
      desc:
        benefit?.benefit?.Universities?.university_6?.logo || `/Logo-ehou.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_7?.link ||
        "https://tnut.vn/",
      title:
        benefit?.benefit?.Universities?.university_7?.name ||
        "Đại học Kỹ thuật Công nghiệpz",
      image: benefit?.benefit?.Universities?.university_7?.image || `/a6.webp`,
      desc:
        benefit?.benefit?.Universities?.university_7?.logo || `/Logo-ktcn2.webp`
    },
    {
      school: "",
      major: "",
      path:
        benefit?.benefit?.Universities?.university_8?.link ||
        "https://dec.dainam.edu.vn/",
      title:
        benefit?.benefit?.Universities?.university_8?.name ||
        "Đại học Đại Namz",
      image: benefit?.benefit?.Universities?.university_8?.image || `/a7.webp`,
      desc:
        benefit?.benefit?.Universities?.university_8?.logo || `/logo-dnu.webp`
    }
  ];

  const slidesPerView = {
    base: 1,
    md: 2,
    lg: 3,
    xl: 3,
    "2xl": 3
  };

  return (
    <Box bg={"#f3f5f7"} pb={"18px"}>
      <Container maxW="6xl">
        <Text
          pt="40px"
          color={"#009643"}
          fontSize={" max(1.3vw, 20px)"}
          fontWeight={700}
          lineHeight="40px"
          textAlign="left"
        >
          {benefit?.benefit?.section_title ||
            "Lợi ích khi theo học chương trình đào tạo từ xa trình độ đại học"}
        </Text>
        <SimpleGrid
          mt="50px"
          spacing={"4"}
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
        >
          <GridItem
            as={Link}
            href={"#"}
            bgImage={"linear-gradient(90deg,#213142 .62%,#0a9c4b 99.38%);"}
            color="#ffffff"
            py="20px"
            px="20px"
            borderRadius="8px"
            display={"flex"}
            alignItems={"center"}
            _hover={{
              bgImage:
                "linear-gradient(0deg,rgba(0,0,0,.12),rgba(0,0,0,.12)),linear-gradient(90deg,#213142 .62%,#0a9c4b 99.38%);"
            }}
          >
            <Box fontSize={"5xl"} mr="20px">
              <BsCardChecklist />
            </Box>

            <Text fontSize={"12px"} fontWeight={500}>
              {benefit?.benefit?.benefits?.text_1 || "Không thi tuyển"}
            </Text>
          </GridItem>
          <GridItem
            as={Link}
            href={"#"}
            bgImage={"linear-gradient(90deg,#fd7222,#edab28);"}
            color="#ffffff"
            py="20px"
            px="20px"
            borderRadius="8px"
            display={"flex"}
            alignItems={"center"}
            _hover={{
              bgImage:
                "linear-gradient(0deg,rgba(0,0,0,.12),rgba(0,0,0,.12)),linear-gradient(90deg,#fd7222,#edab28)"
            }}
          >
            <Box fontSize={"5xl"} mr="20px">
              <BsPersonWorkspace />
            </Box>

            <Text fontSize={"12px"} fontWeight={500}>
              {benefit?.benefit?.benefits?.text_2 ||
                "Học mọi lúc mọi nơi, tiết kiệm thời gian & chi phí"}
            </Text>
          </GridItem>

          <GridItem
            as={Link}
            href={"#"}
            bgImage={"linear-gradient(90deg,#2a3a4d,#0e60d8)"}
            color="#ffffff"
            py="20px"
            px="20px"
            borderRadius="8px"
            display={"flex"}
            alignItems={"center"}
            _hover={{
              bgImage:
                "linear-gradient(0deg,rgba(0,0,0,.12),rgba(0,0,0,.12)),linear-gradient(90deg,#2a3a4d,#0e60d8)"
            }}
          >
            <Box fontSize={"5xl"} mr="20px">
              <BiSupport />
            </Box>
            <Text fontSize={"12px"} fontWeight={500}>
              {benefit?.benefit?.benefits?.text_3 ||
                "Hỗ trợ 24/7, lộ trình đào tạo rút gọn"}
            </Text>
          </GridItem>
          <GridItem
            as={Link}
            href={"#"}
            bgImage={"linear-gradient(90deg,#009941 .18%,#0bca5d)"}
            color="#ffffff"
            py="20px"
            px="20px"
            borderRadius="8px"
            display={"flex"}
            alignItems={"center"}
            _hover={{
              bgImage:
                "linear-gradient(0deg,rgba(0,0,0,.12),rgba(0,0,0,.12)),linear-gradient(90deg,#009941 .18%,#0bca5d)"
            }}
          >
            <Box fontSize={"5xl"} mr="20px">
              <GiDiploma />
            </Box>
            <Text fontSize={"12px"} fontWeight={500}>
              {benefit?.benefit?.benefits?.text_4 ||
                "Bằng cấp chất lượng được Bộ GD&DT công nhận"}
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Container maxW={"6xl"} mt="60px" pb={"40px"} px="-20px">
        <Swiperlayout
          slides={teachers}
          slidesPerView={slidesPerView}
          cardComponent={Item}
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

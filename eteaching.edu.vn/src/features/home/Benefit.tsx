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

export const Benefit = () => {
  const teachers = [
    {
      school: "",
      major: "",
      path: "https://bcvt.edu.vn/",
      title: "Học viện Công nghệ Bưu chính Viễn thông",
      image: `/a.jpg`,
      desc: `/ptit-logo.png`
    },
    {
      school: "",
      major: "",
      path: "https://eaof.vn/",
      title: "Học viện Tài chính",
      image: `/a1.jpg`,
      desc: `/Logo-hvtc1.png`
    },
    {
      school: "",
      major: "",
      path: "https://dec.neu.edu.vn/",
      title: "Đại học Kinh tế Quốc dân",
      image: `/a2.jpg`,
      desc: `/Logo-neu3.png`
    },
    {
      school: "",
      major: "",
      path: "https://tuaf.vn/",
      title: "Đại học Nông Lâm Thái Nguyên",
      image: `/a3.jpg`,
      desc: `/Logo-tuaf1.png`
    },
    {
      school: "",
      major: "",
      path: "https://dhthainguyen.edu.vn/",
      title: "Đại Học Thái Nguyên",
      image: `/a4.jpg`,
      desc: `/Logo-dhtn.png`
    },
    {
      school: "",
      major: "",
      path: "https://ehou.vn/",
      title: "Đại học Mở Hà Nội",
      image: `/a5.jpg`,
      desc: `/Logo-ehou.png`
    },
    {
      school: "",
      major: "",
      path: "https://tnut.vn/",
      title: "Đại học Kỹ thuật Công nghiệp",
      image: `/a6.jpg`,
      desc: `/Logo-ktcn2.png`
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
          Lợi ích khi theo học chương trình đào tạo từ xa trình độ đại học
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
              Không thi tuyển
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
              Học mọi lúc mọi nơi, tiết kiệm thời gian & chi phí
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
              Hỗ trợ 24/7, lộ trình đào tạo rút gọn
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
              Bằng cấp chất lượng được Bộ GD&DT công nhận
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

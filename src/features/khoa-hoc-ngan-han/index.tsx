"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Button
} from "@chakra-ui/react";
import styles from "@/styles/Post.module.css";
import { ImUserCheck } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa6";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdPlayCircle } from "react-icons/io";
import { GrArticle } from "react-icons/gr";
import { AiOutlineFileZip } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { clean } from "@/lib/sanitizeHtml";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import { LuBadgeCheck } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { CourseCard } from "../dich-vu-dao-tao/CourseCard";
import { LuAlarmClock } from "react-icons/lu";
import { RiRefund2Line } from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

export const ShortCourse = () => {
  const [show, setShow] = useState(false);
  const [SideBar, setSideBar] = useState(false);
  let listcourse = [1, 2, 3];

  const handleScrollEvent = () => {
    if (typeof window != "undefined") {
      const scrollTop: number =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollTop >= 200 && !SideBar) {
        setSideBar(true);
        console.log("Bạn đã cuộn xuống 200px!");
      } else if (scrollTop < 200 && SideBar) {
        setSideBar(false);
        console.log("Bạn đã cuộn lên đỉnh");
      }
    }
  };

  const initializeScrollListener = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScrollEvent);
    }
  };

  initializeScrollListener();

  const listBenefit = `Sử dụng thành thạo công cụ trong Excel Format Pain, Cell Styles, Sort hay Calculation Options, Show Formulas, New Note, Freeze Panes, Goal Seek, Fill và Data Validation, Conditional Formatting. \n Thành thạo các thủ thuật với hàm Excel như tắt, mở chức năng gợi ý viết công thức/ hàm, dùng phím tắt để hiển thị cú pháp của hàm, kiểm tra dữ liệu số khi tính toán trong Excel, chuyển đổi từ Số la mã thành Số thường và ngược lại... \n Ứng dụng thành thạo các hàm ngày tháng trong Excel như hàm DATE kết hợp VLOOKUP, hay dùng DATEDIF, hàm DAY-MONTH-YEAR-DATE... Hay các hàm tính toán và dò tìm dữ liệu như SUM, SUMIFS, COUNTIFS, VLOOKUP, INDEX \n Thành thạo các thao tác với Excel như chèn hình ảnh, tạo nền chìm cho trang in, thiết lập hiện/ẩn thanh Sheet Tabs, thanh cuộn ngang, thanh công thức... \n Thành thạo kỹ năng vẽ biểu đồ trong ô bằng Sparklines, hàm REPR hay các dạng Pivot Table và Slicer, sử dụng các đối tượng hình ảnh - hình khối - biểu đồ, gắn nội dung văn bản trong ô vào hình khối.`;
  function splitTextToArray(text: any) {
    return text.split(/\n\s*/);
  }
  function parseTextToObjects(text: string) {
    const lines = text.split(/\r\n\s*/);
    const result: any[] = [];
    let currentObject: any = null;

    lines.forEach((line) => {
      // Kiểm tra xem dòng hiện tại có phải là tiêu đề không
      if (!line.startsWith("-")) {
        if (currentObject) {
          result.push(currentObject);
        }
        const parts = line.split(" ; ");
        currentObject = {
          title: parts[0].trim() || "",
          cout: parts[1] ? parts[1].trim() : "",
          time: parts[2] ? parts[2].trim() : "",
          content: []
        };
      } else {
        const parts = line.split(";");
        currentObject.content.push({
          title: parts[0].replace("-", "").trim(),
          time: parts[1].trim()
        });
      }
    });

    if (currentObject) {
      result.push(currentObject);
    }

    return result;
  }

  // Ví dụ sử dụng
  const text =
    "B\u1eaft \u0111\u1ea7u c\u00f4ng vi\u1ec7c k\u1ebf to\u00e1n t\u1ed5ng h\u1ee3p ; 2 ba\u0300i gia\u0309ng ; 1h\r\n-1. H\u01b0\u1edbng d\u1eabn t\u1ea3i t\u00e0i li\u1ec7u k\u00e8m theo kh\u00f3a h\u1ecdc ; 12:00\r\n-2. Th\u1ea3o lu\u1eadn, g\u00f3p \u00fd, trao \u0111\u1ed5i v\u1edbi gi\u1ea3ng vi\u00ean v\u1ec1 n\u1ed9i dung kh\u00f3a h\u1ecdc ; 01:00\r\nNh\u1eefng n\u1ed9i dung ch\u00ednh trong kh\u00f3a h\u1ecdc ; 13 ba\u0300i gia\u0309ng ; 12h\r\n- 3. Kh\u00e1i ni\u1ec7m gi\u00e1 th\u00e0nh v\u00e0 c\u00e1c ph\u01b0\u01a1ng ph\u00e1p t\u00ednh gi\u00e1 th\u00e0nh ; 00:57 \r\n- 4. C\u0103n c\u1ee9 v\u00e0 c\u00e1ch x\u00e1c \u0111\u1ecbnh kh\u1ed1i l\u01b0\u1ee3ng NVL s\u1eed d\u1ee5ng trong s\u1ea3n xu\u1ea5t ; 09:42";
  const result = parseTextToObjects(text);
  const ListContent = [
    {
      icon: <IoMdPlayCircle size={"30px"} />,
      title: "Video",
      content: "8h 20p giờ học"
    },
    {
      icon: <GrArticle size={"30px"} />,
      title: "Article",
      content: "2 bài viết chuyên môn"
    },
    {
      icon: <AiOutlineFileZip size={"30px"} />,
      title: "Material",
      content: "14 tài liệu đính kèm"
    },
    {
      icon: <GrNotes size={"30px"} />,
      title: "Exams",
      content: "2 bài kiểm tra đầu ra"
    }
  ];

  const ListSide = [
    {
      icon: <RiRefund2Line size={"30px"} />,
      content: "Hoàn tiền nếu không hài lòng"
    },
    {
      icon: <PiVideoLight size={"30px"} />,
      content: "107 bài giảng, 8 giờ học"
    },
    {
      icon: <FaMobileAlt size={"30px"} />,
      content: "Học online, mọi lúc mọi nơi"
    },
    {
      icon: <FaLaptop size={"30px"} />,
      content: "Học trên máy tính, điện thoại"
    },
    {
      icon: <FaBookBookmark size={"30px"} />,
      content: "Sở hữu khóa học trọn đời"
    }
  ];
  return (
    <>
      <Box>
        <Box
          bg={"#212529"}
          h={{ base: "850px", md: "250px" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Container color={"white"} maxW={"7xl"}>
            <Box>
              <Breadcrumb
                mb={4}
                fontSize={"14px"}
                separator={<ChevronRightIcon color="gray.500" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink color={"#2997ff"} href="#">
                    Trang chủ
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink color={"#2997ff"} href="#">
                    Dịch vụ đào tạo
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink color={"#2997ff"} href="#">
                    Khóa học ngắn hạn
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box
                display={{ base: "block", md: "none" }}
                bgImage={"/a1.webp"}
                width={"full"}
                height={"auto"}
                bgSize={"cover"}
                aspectRatio={16 / 9}
                borderRadius={"5px 5px 0 0"}
                my={4}
              ></Box>
              <Text maxW={"900px"} fontSize={"26px"} color={"#CECECE"}>
                KTG02 - Kế toán giá thành theo phương pháp giản đơn
              </Text>
              <Text
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                maxW={"900px"}
                fontSize={"16px"}
                color={"#CECECE"}
              >
                Biết Excel là chưa đủ để bạn làm việc nhanh chóng và hiệu quả
                chính vì vậy Gitiho ra mắt khóa học về thủ thuật Excel. Qua khóa
                học của Gitiho người làm văn phòng sẽ tự tin thao tác về những
                hàm, công cụ trong Excel và ứng dụng để giải quyết công việc một
                cách nhanh chóng .
              </Text>
              <HStack
                fontSize={{ base: "14px", lg: "16px" }}
                mt={6}
                gap={6}
                h={"35px"}
              >
                <HStack gap={"1rem"}>
                  <Box
                    w={"40px"}
                    border={"2px solid white"}
                    borderRadius={"100px"}
                    h={"40px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <ImUserCheck fontSize={"22px"} color="white" />
                  </Box>
                  <VStack justifyContent={"start"} gap={0} alignItems={"start"}>
                    <Text>Chuyên gia</Text>
                    <Text>Phan Mạnh Ninh</Text>
                  </VStack>
                </HStack>
                <Divider orientation="vertical" />

                <HStack gap={"1rem"}>
                  <Box
                    w={"40px"}
                    border={"2px solid white"}
                    borderRadius={"100px"}
                    h={"40px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <BsCalendar2CheckFill fontSize={"22px"} color="white" />
                  </Box>
                  <VStack justifyContent={"start"} gap={0} alignItems={"start"}>
                    <Text>Ngày update</Text>
                    <Text>08/2024</Text>
                  </VStack>
                </HStack>
                <Divider orientation="vertical" color={"white"} />

                <HStack gap={"1rem"} display={{ base: "none", md: "flex" }}>
                  <Box
                    w={"40px"}
                    border={"2px solid white"}
                    borderRadius={"100px"}
                    h={"40px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <FaUserPlus fontSize={"22px"} color="white" />
                  </Box>
                  <VStack justifyContent={"start"} gap={0} alignItems={"start"}>
                    <Text>Học viên đăng ký</Text>
                    <Text>20000</Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack
                fontSize={{ base: "14px", lg: "16px" }}
                display={{ base: "flex", md: "none" }}
                mt={6}
              >
                <Box
                  w={"40px"}
                  border={"2px solid white"}
                  borderRadius={"100px"}
                  h={"40px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <FaUserPlus fontSize={"22px"} color="white" />
                </Box>
                <VStack justifyContent={"start"} gap={0} alignItems={"start"}>
                  <Text>Học viên đăng ký</Text>
                  <Text>20000</Text>
                </VStack>
              </HStack>
            </Box>
            <Box mt={4} p={4} display={{ base: "block", md: "none" }}>
              <HStack>
                <LuAlarmClock color="#fff" />
                <Text color="#fff" fontSize={"14px"}>
                  Giá ưu đãi chỉ còn
                  <Text as={"span"} fontWeight={600}>
                    {" "}
                    1 ngày
                  </Text>
                </Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <HStack>
                  <Text color={"#d91b5c"} fontSize={"20px"}>
                    199.000đ
                  </Text>
                  <Text
                    color={"#90a0b7"}
                    fontSize={"14px"}
                    textDecoration={"line-through"}
                  >
                    199.000đ
                  </Text>
                </HStack>
                <Text color={"#fff"} fontSize={"14px"}>
                  Tiết kiệm
                  <Text as={"span"} color={"#d91b5c"} fontWeight={600}>
                    {" "}
                    60%
                  </Text>
                </Text>
              </HStack>

              <Button mt={4} w={"full"} color={"white"} bg={"#D91b56"}>
                Thêm vào giỏ hàng
              </Button>
              <Button
                // borderColor={"#fff"}
                // color={"#fff"}
                colorScheme="whiteAlpha"
                my={2}
                w={"full"}
                variant="solid"
              >
                Mua ngay
              </Button>
              <Text
                mt={4}
                mb={2}
                color={"#fff"}
                fontSize={"14px"}
                fontWeight={600}
              >
                Đăng ký số lượng lớn
              </Text>
              <Text color={"#fff"} fontSize={"14px"}>
                Giúp người thân, bạn bè của bạn truy cập không giới hạn 500+
                khoá học, mọi lúc, mọi nơi
              </Text>
              <Button
                mt={2}
                w={"full"}
                color={"#fff"}
                bg={"#E1E8EF"}
                variant="solid"
              >
                Tư vấn mua theo gói
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box>
        <Container position={"relative"} maxW={"7xl"} mt={10}>
          <Box maxW={"900px"}>
            <Text fontSize={"26px"} color={"#212529"}>
              Bạn sẽ học được gì?
            </Text>
            <Box border={"1px solid #dee2e6"} px={8} py={4} mt={4}>
              {splitTextToArray(listBenefit).map((item: any, index: any) => (
                <Box key={index} my={4}>
                  <HStack gap={2}>
                    <Box width={"26px"} height={"full"}>
                      <IoCheckmarkCircleOutline color="#D91B5C" />
                    </Box>
                    <Text>{item}</Text>
                  </HStack>
                </Box>
              ))}
            </Box>
          </Box>
          <Box maxW={"900px"}>
            <Text fontSize={"26px"} mt={8} mb={2} color={"#212529"}>
              Khóa học này sẽ có :
            </Text>
            <SimpleGrid columns={{ base: 1, lg: 4 }} gap={6}>
              {ListContent.map((item: any, index: any) => (
                <GridItem colSpan={1} key={index}>
                  <Box px={4} py={2} border={"1px solid #dee2e6"}>
                    <HStack>
                      <Box width={"28px"} height={"28px"}>
                        {item.icon}
                      </Box>
                      <Text fontWeight={500} fontSize={"14px"}>
                        {item.title}
                      </Text>
                    </HStack>
                    <Text fontSize={"14px"} fontWeight={500} mt={4}>
                      {item.content}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>

          <Box maxW={"900px"}>
            <Text fontSize={"26px"} mt={8} mb={2} color={"#212529"}>
              Nội dung khoá học :
            </Text>
            <Accordion defaultIndex={[0]} allowMultiple>
              {result.map((item: any, index: any) => (
                <AccordionItem color={"#334d6e"} bg={"#f3f3f3"} key={index}>
                  <AccordionButton h={"60px"}>
                    <AccordionIcon mr="2" />
                    <Box
                      fontSize={"16px"}
                      flex="1"
                      textAlign="left"
                      fontWeight={600}
                    >
                      {item.title || "Section 1 title"}
                    </Box>
                    <Text fontSize={"14px"}>
                      {item.cout || "17 bài giảng "} .
                    </Text>
                    <Text mx={2} fontSize={"14px"}>
                      {item.time || "2 giờ"}
                    </Text>
                  </AccordionButton>
                  <AccordionPanel bg={"#ffffff"} pb={4}>
                    {item.content &&
                      item.content.map((item: any, index: any) => (
                        <Box
                          key={index}
                          py={4}
                          borderBottom={"1px solid rgba(221,225,238,.502)"}
                        >
                          <HStack justifyContent={"space-between"} gap={2}>
                            <HStack>
                              <MdOutlinePlayCircleOutline color="#E0165D" />
                              <Text fontSize={"16px"}>{item.title}</Text>
                            </HStack>
                            <Text fontSize={"14px"}>{item.time}</Text>
                          </HStack>
                        </Box>
                      ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          <Box maxW={"900px"}>
            <Box p={"20px 24px"} mt={4} borderRadius={"8px"}>
              {!show && (
                <>
                  <Box
                    __css={{
                      WebkitMaskImage: "linear-gradient(black, transparent)",
                      maskImage: "linear-gradient(black, transparent)"
                    }}
                  >
                    <div className={styles["post__main"]}>
                      <Text
                        css={{
                          display: "-webkit-box",
                          WebkitLineClamp: "12",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                        dangerouslySetInnerHTML={{
                          __html: clean(
                            ` <h2 class=\"f-32 fw-500 mb-3\">M\u00f4 t\u1ea3 kho\u00e1 h\u1ecdc<\/h2>\n<div class=\"show-more--container\">\n<div class=\"cou-description ck-content show-more--with-gradient show-more--content f-16\">\n<p>Excel l\u00e0 c\u00f4ng c\u1ee5 tin h\u1ecdc v\u0103n ph\u00f2ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ph\u1ed5 bi\u1ebfn trong nhi\u1ec1u l\u0129nh v\u1ef1c h\u1ecdc t\u1eadp v\u00e0 c\u00f4ng vi\u1ec7c. Tuy nhi\u00ean, th\u1eddi c\u00f2n \u0111i h\u1ecdc ch\u00fang ta th\u01b0\u1eddng kh\u00f4ng qu\u00e1 ch\u00fa tr\u1ecdng v\u00e0o m\u00f4n h\u1ecdc n\u00e0y.<\/p>\n<p>Sau n\u00e0y \u0111i l\u00e0m, \u0111a s\u1ed1 c\u00e1c file d\u1eef li\u1ec7u \u0111\u1ec1u \u0111\u01b0\u1ee3c l\u01b0u v\u00e0 x\u1eed l\u00fd tr\u00ean Excel. Nhi\u1ec1u b\u1ea1n l\u00fang t\u00fang\u00a0 kh\u00f4ng bi\u1ebft thao t\u00e1c x\u1eed l\u00fd d\u1eef li\u1ec7u nh\u01b0 n\u00e0o, d\u1eabn \u0111\u1ebfn t\u1ed1n nhi\u1ec1u th\u1eddi gian h\u01a1n v\u00e0 hi\u1ec7u su\u1ea5t c\u00f4ng vi\u1ec7c gi\u1ea3m xu\u1ed1ng m\u1ed9t c\u00e1ch \u0111\u00e1ng k\u1ec3.?<\/p>\n<p><strong>N\u1ebfu nh\u01b0 b\u1ea1n:<\/strong><\/p>\n<ul>\n<li><i>\u0110ang d\u00f9ng Excel trong c\u00f4ng vi\u1ec7c nh\u01b0ng ch\u01b0a hi\u1ec7u qu\u1ea3, ki\u1ebfn th\u1ee9c c\u00f3p nh\u1eb7t \u201cv\u1ee5n v\u1eb7t\u201d, kh\u00f4ng b\u00e0i b\u1ea3n.\u00a0<\/i><\/li>\n<li><i>Ho\u1eb7c tr\u01b0\u1edbc \u0111\u00e2y ch\u1ec9 h\u1ecdc l\u00fd thuy\u1ebft n\u00ean kh\u00f4ng bi\u1ebft \u00e1p d\u1ee5ng v\u00e0o th\u1ef1c t\u1ebf c\u00f4ng vi\u1ec7c nh\u01b0 n\u00e0o.\u00a0<\/i><\/li>\n<li><i>Ho\u1eb7c \u0111\u00e3 c\u00f3 ki\u1ebfn th\u1ee9c c\u01a1 b\u1ea3n v\u1ec1 Excel v\u00e0 \u0111ang mu\u1ed1n n\u00e2ng cao k\u1ef9 n\u0103ng c\u1ee7a m\u00ecnh l\u00ean.<\/i><\/li>\n<\/ul>\n<p>Th\u00ec Gitiho \u1edf \u0111\u00e2y \u0111\u1ec3 gi\u00fap b\u1ea1n gi\u1ea3i quy\u1ebft t\u1ea5t c\u1ea3 nh\u1eefng kh\u00f3 kh\u0103n m\u00e0 b\u1ea1n g\u1eb7p ph\u1ea3i khi \u0111i l\u00e0m v\u1edbi kh\u00f3a h\u1ecdc\u00a0<strong>EXG02 &#8211; Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt h\u00e0ng tu\u1ea7n cho d\u00e2n v\u0103n ph\u00f2ng\u00a0<\/strong>v\u1edbi 107 b\u00e0i gi\u1ea3ng trong 8 gi\u1edd.<\/p>\n<p>Ho\u00e0n th\u00e0nh kh\u00f3a h\u1ecdc, b\u1ea1n c\u00f3 th\u1ec3 t\u1ef1 tin gi\u1ea3i quy\u1ebft c\u00f4ng vi\u1ec7c theo c\u00e1ch th\u00f4ng minh, nhanh ch\u00f3ng, t\u1eeb \u0111\u00f3 t\u1ecfa s\u00e1ng n\u01a1i c\u00f4ng s\u1edf, \u0111\u01b0\u1ee3c s\u1ebfp tin t\u01b0\u1edfng v\u00e0 ra t\u0103ng c\u01a1 h\u1ed9i th\u0103ng ti\u1ebfn.<\/p>\n<h2>T\u1ea1i sao kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel l\u1ea1i c\u1ea7n thi\u1ebft cho d\u00e2n v\u0103n ph\u00f2ng?<\/h2>\n<p>\u0110a s\u1ed1 m\u1ecdi ng\u01b0\u1eddi khi c\u00f2n \u0111ang \u0111i h\u1ecdc th\u01b0\u1eddng kh\u00f4ng d\u00e0nh nhi\u1ec1u th\u1eddi gian \u0111\u1ec3 h\u1ecdc tin h\u1ecdc nh\u1ea5t l\u00e0 Excel. B\u1edfi h\u1ecd ch\u01b0a bi\u1ebft \u0111\u01b0\u1ee3c Excel c\u00f3 th\u1ec3 \u00e1p d\u1ee5ng v\u00e0o vi\u1ec7c x\u1eed l\u00fd c\u00e1c c\u00f4ng vi\u1ec7c h\u00e0ng ng\u00e0y.<\/p>\n<p>Khi \u0111i l\u00e0m, b\u1ea1n s\u1ebd th\u1ea5y n\u1ebfu kh\u00f4ng th\u00e0nh th\u1ea1o trong vi\u1ec7c s\u1eed d\u1ee5ng Excel s\u1ebd t\u1ed1n nhi\u1ec1u th\u1eddi gian, c\u00f4ng s\u1ee9c \u0111\u1ec3 x\u1eed l\u00fd c\u00f4ng vi\u1ec7c. H\u01a1n n\u1eefa, ch\u00fang ta c\u0169ng kh\u00f4ng bi\u1ebft nh\u1eefng th\u1ee9 m\u00ecnh \u0111ang th\u1ef1c hi\u1ec7n \u0111\u00fang hay kh\u00f4ng.<\/p>\n<p>Hi\u1ec7n nay\u00a0<strong>100% c\u00e1c doanh nghi\u1ec7p t\u1ea1i Vi\u1ec7t Nam<\/strong>\u00a0\u0111\u1ec1u c\u1ea7n t\u1edbi k\u1ef9 n\u0103ng Excel khi \u1ee9ng tuy\u1ec3n v\u00e0o v\u1ecb tr\u00ed k\u1ebf to\u00e1n, x\u1eed l\u00fd d\u1eef li\u1ec7u, b\u00e1n h\u00e0ng, qu\u1ea3n l\u00fd, nh\u00e2n vi\u00ean ng\u00e2n h\u00e0ng, t\u00e0i ch\u00ednh&#8230; M\u1ed7i c\u1ea5p \u0111\u1ed9 s\u1ebd c\u00f3 y\u00eau c\u1ea7u th\u00e0nh th\u1ea1o Excel x\u1eed l\u00fd c\u00f4ng vi\u1ec7c kh\u00e1c nhau.<\/p>\n<p>Ch\u00ednh v\u00ec \u0111i\u1ec1u \u0111\u00f3 Gitiho \u0111\u00e3 m\u1edf kh\u00f3a h\u1ecdc v\u1ec1\u00a0<strong>Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt h\u00e0ng tu\u1ea7n &#8211; EXG02<\/strong>\u00a0v\u1edbi h\u01a1n<strong>\u00a07h+ h\u1ecdc<\/strong>\u00a0c\u00f9ng v\u1edbi\u00a0<strong>92 t\u00e0i li\u1ec7u \u0111\u00ednh k\u00e8m<\/strong>\u00a0b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ee3i \u00edch v\u00f4 t\u1eadn nh\u01b0:<\/p>\n<ul>\n<li>Gi\u1ea3ng vi\u00ean l\u00e0 nh\u1eefng ng\u01b0\u1eddi c\u00f3 tr\u00ecnh \u0111\u1ed9 chuy\u00ean m\u00f4n cao, kinh nghi\u1ec7m th\u1ef1c ti\u1ec5n d\u00e0y d\u1eb7n \u0111\u00e3 v\u00e0 \u0111ang \u0111\u00e0o t\u1ea1o tr\u1ef1c ti\u1ebfp cho nhi\u1ec1u \u0111\u01a1n v\u1ecb l\u1edbn nh\u01b0\u00a0<strong>Vietinbank, VPBank, FPT software, Vietcombank, MIC, T\u1eadp \u0111o\u00e0n Th\u00e0nh C\u00f4ng, TH True Milk<\/strong>,\u2026 s\u1ebd gi\u00fap b\u1ea1n th\u00e0nh th\u1ea1o k\u1ef9 n\u0103ng s\u1eed d\u1ee5ng Excel nhanh ch\u00f3ng.<\/li>\n<li>H\u1ecdc nhanh nh\u01b0ng nh\u1edb l\u00e2u b\u1edfi lu\u00f4n c\u00f3 c\u00e1c b\u00e0i t\u1eadp th\u1ef1c h\u00e0nh k\u00e8m v\u1edbi l\u00fd thuy\u1ebft.<\/li>\n<li>C\u00e1c video b\u00e0i gi\u1ea3ng \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng d\u1ef1a tr\u00ean c\u00e1c ch\u1ee7 \u0111\u1ec1 c\u1ee5 th\u1ec3, \u0111\u1ed3ng th\u1eddi ch\u00fa tr\u1ecdng t\u1ed1i \u0111a \u0111\u1ebfn t\u00ednh \u1ee9ng d\u1ee5ng cao. \u0110\u1eb7c bi\u1ec7t, b\u1ed9 video\u00a0<strong>c\u00e1c th\u1ee7 thu\u1eadt trong Excel 2013, 2016, 2019<\/strong>\u00a0v\u00e0 nhi\u1ec1u phi\u00ean b\u1ea3n kh\u00e1c, ph\u00f9 h\u1ee3p v\u1edbi t\u1ea5t c\u1ea3 m\u1ecdi \u0111\u1ed1i t\u01b0\u1ee3ng mu\u1ed1n t\u1ecfa s\u00e1ng n\u01a1i c\u00f4ng s\u1edf v\u1edbi th\u1ee7 thu\u1eadt Excel n\u00e2ng cao th\u00f4ng minh v\u00e0 t\u1ea1o k\u1ebft qu\u1ea3 b\u1ea5t ng\u1edd trong c\u00f4ng vi\u1ec7c.<\/li>\n<li>B\u1ea1n s\u1ebd t\u1ef1 tin x\u1eed l\u00fd \u0111\u01b0\u1ee3c m\u1ecdi vi\u1ec7c tr\u00ean c\u00e1c c\u00f4ng c\u1ee5 Excel m\u1ed9t c\u00e1ch chuy\u00ean nghi\u1ec7p gi\u00fap \u0111\u1ea9y nh\u00e2n \u0111\u01b0\u1ee3c ti\u1ebfn \u0111\u1ed9 c\u00f4ng vi\u1ec7c, n\u00e2ng cao hi\u1ec7u su\u1ea5t l\u00e0m vi\u1ec7c l\u00ean t\u1edbi 5 l\u1ea7n.<\/li>\n<\/ul>\n<p>\u0110\u1eb7c bi\u1ec7t khi\u00a0<strong>\u0111\u0103ng k\u00fd kh\u00f3a h\u1ecdc EXG02\u00a0<\/strong>h\u1ecdc vi\u00ean s\u1ebd c\u00f3 c\u01a1 h\u1ed9i nh\u1eadn \u01b0u \u0111\u00e3i s\u1edf h\u1eefu tr\u1ecdn \u0111\u1eddi ch\u1ec9 v\u1edbi\u00a0<strong>199.000\u0111<\/strong>. Thao t\u00e1c \u0111\u0103ng k\u00fd kh\u00e1 \u0111\u01a1n gi\u1ea3n, b\u1ea1n ch\u1ec9 c\u1ea7n nh\u1ea5n v\u00e0o \u0110\u0102NG K\u00dd H\u1eccC NGAY kh\u00f3a h\u1ecdc EXG08 tr\u00ean gitiho.com l\u00e0 xong.<\/p>\n<p>N\u1ebfu c\u00f3 b\u1ea5t c\u1ee9 th\u1eafc m\u1eafc n\u00e0o li\u00ean quan \u0111\u1ebfn t\u1edbi\u00a0<strong>kh\u00f3a h\u1ecdc EXG02 &#8211; Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt h\u00e0ng tu\u1ea7n<\/strong>\u00a0b\u1ea1n h\u00e3y \u0111\u1ec3 k\u1ebft n\u1ed1i cho Gitiho qua hotline 0774 116 285 \u0111\u1ec3 \u0111\u01b0\u1ee3c t\u01b0 v\u1ea5n chi ti\u1ebft nh\u00e9.<\/p>\n<h2>N\u1ed9i dung b\u00e0i gi\u1ea3ng trong kh\u00f3a h\u1ecdc th\u1ee7 thu\u1eadt tr\u00ean Excel c\u1ee7a Gitiho?<\/h2>\n<p>Kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt c\u00e1c m\u1eb9o Excel v\u0103n ph\u00f2ng h\u00e0ng tu\u1ea7n, b\u1ea1n c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c update nh\u1eefng n\u1ed9i dung m\u1edbi nh\u1ea5t v\u1ec1 tin h\u1ecdc v\u0103n ph\u00f2ng nh\u01b0 sau:<\/p>\n<ul>\n<li>\u0110\u1ecbnh d\u1ea1ng nhanh b\u1eb1ng c\u00f4ng c\u1ee5\u00a0<strong>Format Painter<\/strong>\u00a0v\u00e0<strong>\u00a0Cell Styles<\/strong>, s\u1eafp x\u1ebfp b\u1ea3ng t\u00ednh, thay \u0111\u1ed5i thi\u1ebft l\u1eadp t\u00ednh to\u00e1n, c\u00e1c th\u1ee7 thu\u1eadt excel t\u00ednh t\u1ed5ng, \u0111\u1eb7t t\u00ean nhanh cho b\u1ea3ng t\u00ednh, hi\u1ec3n th\u1ecb c\u00f4ng th\u1ee9c trong \u00f4, t\u1ea1o ghi ch\u00fa v\u00e0 c\u1ed1 \u0111\u1ecbnh d\u00f2ng &#8211; c\u1ed9t.<\/li>\n<li>K\u1ef9 thu\u1eadt \u0111\u1ecbnh d\u1ea1ng v\u00e0 x\u1eed l\u00fd d\u1eef li\u1ec7u bao g\u1ed3m t\u1ef1 \u0111\u1ed9ng th\u00eam k\u00fd hi\u1ec7u ti\u1ec1n t\u1ec7, vi\u1ebft bi\u1ec3u th\u1ee9c h\u00f3a h\u1ecdc &#8211; to\u00e1n h\u1ecdc v\u00e0 lo\u1ea1i b\u1ecf d\u1eef li\u1ec7u tr\u00f9ng l\u1eb7p.<\/li>\n<li>T\u1ed5ng h\u1ee3p th\u1ee7 thu\u1eadt v\u1edbi h\u00e0m, c\u00f4ng th\u1ee9c bao g\u1ed3m c\u00e1ch t\u1eaft\/m\u1edf g\u1ee3i \u00fd khi vi\u1ebft h\u00e0m, \u0111\u1eb7t t\u00ean v\u00e0 s\u1eed d\u1ee5ng t\u00ean trong c\u00f4ng th\u1ee9c v\u00e0 c\u00e1c h\u00e0m t\u00ednh to\u00e1n theo th\u1eddi gian.<\/li>\n<li>T\u1ed5ng h\u1ee3p h\u00e0m, c\u00f4ng th\u1ee9c t\u00ednh to\u00e1n theo th\u1eddi gian nh\u01b0 h\u00e0m t\u00ednh to\u00e1n theo th\u00e1ng, tu\u1ed5i, ng\u00e0y h\u1ebft h\u1ea1n h\u1ee3p \u0111\u1ed3ng,&#8230;<\/li>\n<li>H\u01b0\u1edbng d\u1eabn d\u00f9ng c\u00e1c h\u00e0m v\u00e0 c\u00f4ng th\u1ee9c n\u00e2ng cao nh\u01b0\u00a0<strong>SUM, SUMIFS, VLOOKUP, INDEX<\/strong>, v\u00e0 c\u00e1c th\u1ee7 thu\u1eadt hay trong Excel kh\u00e1c v\u1edbi h\u00e0m v\u00e0 c\u00f4ng th\u1ee9c.<\/li>\n<li>Nh\u1eefng thi\u1ebft l\u1eadp ch\u1ebf \u0111\u1ed9 l\u00e0m vi\u1ec7c tr\u00ean Excel nh\u01b0 thi\u1ebft l\u1eadp theme, background, in \u1ea5n, v\u00e0 c\u00e1c thanh, ti\u00eau \u0111\u1ec1, \u0111\u01b0\u1eddng k\u1ebb l\u01b0\u1edbi trong Excel.<\/li>\n<li>H\u00ecnh kh\u1ed1i, Bi\u1ec3u \u0111\u1ed3 trong Excel: V\u1ebd bi\u1ec3u \u0111\u1ed3 trong \u00f4, t\u1ea1o bi\u1ec3u \u0111\u1ed3 \u0111\u1ed9ng, c\u1ed1 \u0111\u1ecbnh c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng h\u00ecnh kh\u1ed1i, v\u00e0 g\u00e1n n\u1ed9i dung v\u0103n b\u1ea3n v\u00e0o h\u00ecnh kh\u1ed1i.<\/li>\n<li>M\u1ed9t s\u1ed1 th\u1ee7 thu\u1eadt h\u1eefu \u00edch kh\u00e1c trong Excel nh\u01b0: kh\u00f3a b\u1ea3o v\u1ec7 n\u1ed9i dung trong Sheet, t\u1ea1o m\u1ee5c l\u1ee5c di chuy\u1ec3n nhanh, thao t\u00e1c tr\u00ean nhi\u1ec1u Sheet c\u00f9ng l\u00fac, v\u00e0 nhi\u1ec1u th\u1ee7 thu\u1eadt kh\u00e1c.<\/li>\n<\/ul>\n<h2>T\u1ea1i sao n\u00ean ch\u1ecdn kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel t\u1ea1i Gitiho?<\/h2>\n<p>\u1ede Gitiho, kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel c\u00f3 nh\u1eefng \u01b0u \u0111i\u1ec3m \u0111\u1eb7c bi\u1ec7t, x\u1ee9ng \u0111\u00e1ng \u0111\u1ec3 b\u1ea1n l\u1ef1a ch\u1ecdn nh\u01b0:<\/p>\n<p><strong>H\u1ecdc t\u1eeb chuy\u00ean gia<\/strong>: \u0110\u01b0\u1ee3c x\u00e2y d\u1ef1ng v\u00e0 d\u1ea1y b\u1edfi c\u00e1c chuy\u00ean gia h\u00e0ng \u0111\u1ea7u trong l\u0129nh v\u1ef1c tin h\u1ecdc v\u0103n ph\u00f2ng, \u0111\u1ea3m b\u1ea3o ki\u1ebfn th\u1ee9c s\u00e2u r\u1ed9ng v\u1ec1 Excel n\u00e2ng cao cho d\u00e2n v\u0103n ph\u00f2ng.<\/p>\n<p><strong>H\u1ecdc t\u1eadp linh ho\u1ea1t<\/strong>: B\u1ea1n s\u1edf h\u1eefu kh\u00f3a h\u1ecdc tr\u1ecdn \u0111\u1eddi, h\u1ecdc b\u1ea5t c\u1ee9 l\u00fac n\u00e0o v\u00e0 tr\u00ean b\u1ea5t k\u1ef3 thi\u1ebft b\u1ecb n\u00e0o v\u1edbi k\u1ebft n\u1ed1i internet. Kh\u1ea3 n\u0103ng \u00f4n t\u1eadp l\u1ea1i k\u1ef9 thu\u1eadt b\u1ea5t k\u1ef3 khi n\u00e0o gi\u00fap c\u1ea3i thi\u1ec7n hi\u1ec7u qu\u1ea3 l\u00e0m vi\u1ec7c.<\/p>\n<p><strong>N\u1ed9i dung d\u1ec5 hi\u1ec3u, \u00e1p d\u1ee5ng ngay v\u00e0o c\u00f4ng vi\u1ec7c<\/strong>: T\u1eadp trung v\u00e0o n\u1ed9i dung thi\u1ebft th\u1ef1c v\u00e0 quan tr\u1ecdng c\u1ee7a Excel, gi\u00fap b\u1ea1n \u00e1p d\u1ee5ng ki\u1ebfn th\u1ee9c ngay trong c\u00f4ng vi\u1ec7c h\u00e0ng ng\u00e0y.<\/p>\n<p><strong>N\u00e2ng cao hi\u1ec7u su\u1ea5t c\u00f4ng vi\u1ec7c<\/strong>: Th\u00e0nh th\u1ea1o Excel gi\u00fap c\u00f4ng vi\u1ec7c c\u1ee7a b\u1ea1n tr\u1edf n\u00ean nhanh ch\u00f3ng, hi\u1ec7u qu\u1ea3 h\u01a1n \u0111\u1eb7c bi\u1ec7t khi x\u1eed l\u00fd d\u1eef li\u1ec7u l\u1edbn, ph\u1ee9c t\u1ea1p.<\/p>\n<p><strong>H\u1ed7 tr\u1ee3 gi\u1ea3i \u0111\u00e1p trong 8 ti\u1ebfng l\u00e0m vi\u1ec7c<\/strong>: M\u1ecdi th\u1eafc m\u1eafc s\u1ebd \u0111\u01b0\u1ee3c gi\u1ea3i \u0111\u00e1p chi ti\u1ebft, c\u1ee5 th\u1ec3 trong kho\u1ea3ng th\u1eddi gian n\u00e0y.<\/p>\n<p><strong>C\u01a1 h\u1ed9i th\u0103ng ti\u1ebfn v\u00e0 ch\u1ee9ng ch\u1ec9 ho\u00e0n th\u00e0nh<\/strong>: Th\u00e0nh th\u1ea1o Excel s\u1ebd n\u00e2ng cao kh\u1ea3 n\u0103ng c\u1ee7a b\u1ea1n, t\u1ea1o c\u01a1 h\u1ed9i th\u0103ng ti\u1ebfn v\u00e0 nh\u1eadn \u0111\u01b0\u1ee3c ch\u1ee9ng ch\u1ec9 quan tr\u1ecdng khi ho\u00e0n th\u00e0nh kh\u00f3a h\u1ecdc, l\u00e0 \u0111i\u1ec3m c\u1ed9ng l\u1edbn khi xin vi\u1ec7c.<\/p>\n<p>V\u1edbi\u00a0<strong>kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel Online c\u1ee7a Gitiho<\/strong>, s\u1ebd gi\u00fap b\u1ea1n l\u00e0m vi\u1ec7c linh ho\u1ea1t h\u01a1n, m\u1edf ra c\u01a1 h\u1ed9i th\u00e0nh c\u00f4ng trong s\u1ef1 nghi\u1ec7p c\u1ee7a b\u1ea1n. \u0110\u0103ng k\u00fd ngay \u0111\u1ec3 nh\u1eadn nh\u1eefng \u01b0u \u0111\u00e3i tuy\u1ec7t v\u1eddi t\u1eeb Gitiho nh\u00e9.<\/p>\n<\/div>\n<\/div>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n`
                          )
                        }}
                      />
                    </div>
                  </Box>
                  <HStack mt={4} onClick={() => setShow(true)}>
                    <Text color={"#334d6e"} fontWeight={600}>
                      Hiển thị thêm
                    </Text>
                    <FaAngleDown color={"#334d6e"} />
                  </HStack>
                </>
              )}
              {show && (
                <>
                  <Box>
                    <div>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: clean(
                            ` <h2 class=\"f-32 fw-500 mb-3\">M\u00f4 t\u1ea3 kho\u00e1 h\u1ecdc<\/h2>\n<div class=\"show-more--container\">\n<div class=\"cou-description ck-content show-more--with-gradient show-more--content f-16\">\n<p>Excel l\u00e0 c\u00f4ng c\u1ee5 tin h\u1ecdc v\u0103n ph\u00f2ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ph\u1ed5 bi\u1ebfn trong nhi\u1ec1u l\u0129nh v\u1ef1c h\u1ecdc t\u1eadp v\u00e0 c\u00f4ng vi\u1ec7c. Tuy nhi\u00ean, th\u1eddi c\u00f2n \u0111i h\u1ecdc ch\u00fang ta th\u01b0\u1eddng kh\u00f4ng qu\u00e1 ch\u00fa tr\u1ecdng v\u00e0o m\u00f4n h\u1ecdc n\u00e0y.<\/p>\n<p>Sau n\u00e0y \u0111i l\u00e0m, \u0111a s\u1ed1 c\u00e1c file d\u1eef li\u1ec7u \u0111\u1ec1u \u0111\u01b0\u1ee3c l\u01b0u v\u00e0 x\u1eed l\u00fd tr\u00ean Excel. Nhi\u1ec1u b\u1ea1n l\u00fang t\u00fang\u00a0 kh\u00f4ng bi\u1ebft thao t\u00e1c x\u1eed l\u00fd d\u1eef li\u1ec7u nh\u01b0 n\u00e0o, d\u1eabn \u0111\u1ebfn t\u1ed1n nhi\u1ec1u th\u1eddi gian h\u01a1n v\u00e0 hi\u1ec7u su\u1ea5t c\u00f4ng vi\u1ec7c gi\u1ea3m xu\u1ed1ng m\u1ed9t c\u00e1ch \u0111\u00e1ng k\u1ec3.?<\/p>\n<p><strong>N\u1ebfu nh\u01b0 b\u1ea1n:<\/strong><\/p>\n<ul>\n<li><i>\u0110ang d\u00f9ng Excel trong c\u00f4ng vi\u1ec7c nh\u01b0ng ch\u01b0a hi\u1ec7u qu\u1ea3, ki\u1ebfn th\u1ee9c c\u00f3p nh\u1eb7t \u201cv\u1ee5n v\u1eb7t\u201d, kh\u00f4ng b\u00e0i b\u1ea3n.\u00a0<\/i><\/li>\n<li><i>Ho\u1eb7c tr\u01b0\u1edbc \u0111\u00e2y ch\u1ec9 h\u1ecdc l\u00fd thuy\u1ebft n\u00ean kh\u00f4ng bi\u1ebft \u00e1p d\u1ee5ng v\u00e0o th\u1ef1c t\u1ebf c\u00f4ng vi\u1ec7c nh\u01b0 n\u00e0o.\u00a0<\/i><\/li>\n<li><i>Ho\u1eb7c \u0111\u00e3 c\u00f3 ki\u1ebfn th\u1ee9c c\u01a1 b\u1ea3n v\u1ec1 Excel v\u00e0 \u0111ang mu\u1ed1n n\u00e2ng cao k\u1ef9 n\u0103ng c\u1ee7a m\u00ecnh l\u00ean.<\/i><\/li>\n<\/ul>\n<p>Th\u00ec Gitiho \u1edf \u0111\u00e2y \u0111\u1ec3 gi\u00fap b\u1ea1n gi\u1ea3i quy\u1ebft t\u1ea5t c\u1ea3 nh\u1eefng kh\u00f3 kh\u0103n m\u00e0 b\u1ea1n g\u1eb7p ph\u1ea3i khi \u0111i l\u00e0m v\u1edbi kh\u00f3a h\u1ecdc\u00a0<strong>EXG02 &#8211; Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt h\u00e0ng tu\u1ea7n cho d\u00e2n v\u0103n ph\u00f2ng\u00a0<\/strong>v\u1edbi 107 b\u00e0i gi\u1ea3ng trong 8 gi\u1edd.<\/p>\n<p>Ho\u00e0n th\u00e0nh kh\u00f3a h\u1ecdc, b\u1ea1n c\u00f3 th\u1ec3 t\u1ef1 tin gi\u1ea3i quy\u1ebft c\u00f4ng vi\u1ec7c theo c\u00e1ch th\u00f4ng minh, nhanh ch\u00f3ng, t\u1eeb \u0111\u00f3 t\u1ecfa s\u00e1ng n\u01a1i c\u00f4ng s\u1edf, \u0111\u01b0\u1ee3c s\u1ebfp tin t\u01b0\u1edfng v\u00e0 ra t\u0103ng c\u01a1 h\u1ed9i th\u0103ng ti\u1ebfn.<\/p>\n<h2>T\u1ea1i sao kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel l\u1ea1i c\u1ea7n thi\u1ebft cho d\u00e2n v\u0103n ph\u00f2ng?<\/h2>\n<p>\u0110a s\u1ed1 m\u1ecdi ng\u01b0\u1eddi khi c\u00f2n \u0111ang \u0111i h\u1ecdc th\u01b0\u1eddng kh\u00f4ng d\u00e0nh nhi\u1ec1u th\u1eddi gian \u0111\u1ec3 h\u1ecdc tin h\u1ecdc nh\u1ea5t l\u00e0 Excel. B\u1edfi h\u1ecd ch\u01b0a bi\u1ebft \u0111\u01b0\u1ee3c Excel c\u00f3 th\u1ec3 \u00e1p d\u1ee5ng v\u00e0o vi\u1ec7c x\u1eed l\u00fd c\u00e1c c\u00f4ng vi\u1ec7c h\u00e0ng ng\u00e0y.<\/p>\n<p>Khi \u0111i l\u00e0m, b\u1ea1n s\u1ebd th\u1ea5y n\u1ebfu kh\u00f4ng th\u00e0nh th\u1ea1o trong vi\u1ec7c s\u1eed d\u1ee5ng Excel s\u1ebd t\u1ed1n nhi\u1ec1u th\u1eddi gian, c\u00f4ng s\u1ee9c \u0111\u1ec3 x\u1eed l\u00fd c\u00f4ng vi\u1ec7c. H\u01a1n n\u1eefa, ch\u00fang ta c\u0169ng kh\u00f4ng bi\u1ebft nh\u1eefng th\u1ee9 m\u00ecnh \u0111ang th\u1ef1c hi\u1ec7n \u0111\u00fang hay kh\u00f4ng.<\/p>\n<p>Hi\u1ec7n nay\u00a0<strong>100% c\u00e1c doanh nghi\u1ec7p t\u1ea1i Vi\u1ec7t Nam<\/strong>\u00a0\u0111\u1ec1u c\u1ea7n t\u1edbi k\u1ef9 n\u0103ng Excel khi \u1ee9ng tuy\u1ec3n v\u00e0o v\u1ecb tr\u00ed k\u1ebf to\u00e1n, x\u1eed l\u00fd d\u1eef li\u1ec7u, b\u00e1n h\u00e0ng, qu\u1ea3n l\u00fd, nh\u00e2n vi\u00ean ng\u00e2n h\u00e0ng, t\u00e0i ch\u00ednh&#8230; M\u1ed7i c\u1ea5p \u0111\u1ed9 s\u1ebd c\u00f3 y\u00eau c\u1ea7u th\u00e0nh th\u1ea1o Excel x\u1eed l\u00fd c\u00f4ng vi\u1ec7c kh\u00e1c nhau.<\/p>\n<p>Ch\u00ednh v\u00ec \u0111i\u1ec1u \u0111\u00f3 Gitiho \u0111\u00e3 m\u1edf kh\u00f3a h\u1ecdc v\u1ec1\u00a0<strong>Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt h\u00e0ng tu\u1ea7n &#8211; EXG02<\/strong>\u00a0v\u1edbi h\u01a1n<strong>\u00a07h+ h\u1ecdc<\/strong>\u00a0c\u00f9ng v\u1edbi\u00a0<strong>92 t\u00e0i li\u1ec7u \u0111\u00ednh k\u00e8m<\/strong>\u00a0b\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ee3i \u00edch v\u00f4 t\u1eadn nh\u01b0:<\/p>\n<ul>\n<li>Gi\u1ea3ng vi\u00ean l\u00e0 nh\u1eefng ng\u01b0\u1eddi c\u00f3 tr\u00ecnh \u0111\u1ed9 chuy\u00ean m\u00f4n cao, kinh nghi\u1ec7m th\u1ef1c ti\u1ec5n d\u00e0y d\u1eb7n \u0111\u00e3 v\u00e0 \u0111ang \u0111\u00e0o t\u1ea1o tr\u1ef1c ti\u1ebfp cho nhi\u1ec1u \u0111\u01a1n v\u1ecb l\u1edbn nh\u01b0\u00a0<strong>Vietinbank, VPBank, FPT software, Vietcombank, MIC, T\u1eadp \u0111o\u00e0n Th\u00e0nh C\u00f4ng, TH True Milk<\/strong>,\u2026 s\u1ebd gi\u00fap b\u1ea1n th\u00e0nh th\u1ea1o k\u1ef9 n\u0103ng s\u1eed d\u1ee5ng Excel nhanh ch\u00f3ng.<\/li>\n<li>H\u1ecdc nhanh nh\u01b0ng nh\u1edb l\u00e2u b\u1edfi lu\u00f4n c\u00f3 c\u00e1c b\u00e0i t\u1eadp th\u1ef1c h\u00e0nh k\u00e8m v\u1edbi l\u00fd thuy\u1ebft.<\/li>\n<li>C\u00e1c video b\u00e0i gi\u1ea3ng \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng d\u1ef1a tr\u00ean c\u00e1c ch\u1ee7 \u0111\u1ec1 c\u1ee5 th\u1ec3, \u0111\u1ed3ng th\u1eddi ch\u00fa tr\u1ecdng t\u1ed1i \u0111a \u0111\u1ebfn t\u00ednh \u1ee9ng d\u1ee5ng cao. \u0110\u1eb7c bi\u1ec7t, b\u1ed9 video\u00a0<strong>c\u00e1c th\u1ee7 thu\u1eadt trong Excel 2013, 2016, 2019<\/strong>\u00a0v\u00e0 nhi\u1ec1u phi\u00ean b\u1ea3n kh\u00e1c, ph\u00f9 h\u1ee3p v\u1edbi t\u1ea5t c\u1ea3 m\u1ecdi \u0111\u1ed1i t\u01b0\u1ee3ng mu\u1ed1n t\u1ecfa s\u00e1ng n\u01a1i c\u00f4ng s\u1edf v\u1edbi th\u1ee7 thu\u1eadt Excel n\u00e2ng cao th\u00f4ng minh v\u00e0 t\u1ea1o k\u1ebft qu\u1ea3 b\u1ea5t ng\u1edd trong c\u00f4ng vi\u1ec7c.<\/li>\n<li>B\u1ea1n s\u1ebd t\u1ef1 tin x\u1eed l\u00fd \u0111\u01b0\u1ee3c m\u1ecdi vi\u1ec7c tr\u00ean c\u00e1c c\u00f4ng c\u1ee5 Excel m\u1ed9t c\u00e1ch chuy\u00ean nghi\u1ec7p gi\u00fap \u0111\u1ea9y nh\u00e2n \u0111\u01b0\u1ee3c ti\u1ebfn \u0111\u1ed9 c\u00f4ng vi\u1ec7c, n\u00e2ng cao hi\u1ec7u su\u1ea5t l\u00e0m vi\u1ec7c l\u00ean t\u1edbi 5 l\u1ea7n.<\/li>\n<\/ul>\n<p>\u0110\u1eb7c bi\u1ec7t khi\u00a0<strong>\u0111\u0103ng k\u00fd kh\u00f3a h\u1ecdc EXG02\u00a0<\/strong>h\u1ecdc vi\u00ean s\u1ebd c\u00f3 c\u01a1 h\u1ed9i nh\u1eadn \u01b0u \u0111\u00e3i s\u1edf h\u1eefu tr\u1ecdn \u0111\u1eddi ch\u1ec9 v\u1edbi\u00a0<strong>199.000\u0111<\/strong>. Thao t\u00e1c \u0111\u0103ng k\u00fd kh\u00e1 \u0111\u01a1n gi\u1ea3n, b\u1ea1n ch\u1ec9 c\u1ea7n nh\u1ea5n v\u00e0o \u0110\u0102NG K\u00dd H\u1eccC NGAY kh\u00f3a h\u1ecdc EXG08 tr\u00ean gitiho.com l\u00e0 xong.<\/p>\n<p>N\u1ebfu c\u00f3 b\u1ea5t c\u1ee9 th\u1eafc m\u1eafc n\u00e0o li\u00ean quan \u0111\u1ebfn t\u1edbi\u00a0<strong>kh\u00f3a h\u1ecdc EXG02 &#8211; Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt h\u00e0ng tu\u1ea7n<\/strong>\u00a0b\u1ea1n h\u00e3y \u0111\u1ec3 k\u1ebft n\u1ed1i cho Gitiho qua hotline 0774 116 285 \u0111\u1ec3 \u0111\u01b0\u1ee3c t\u01b0 v\u1ea5n chi ti\u1ebft nh\u00e9.<\/p>\n<h2>N\u1ed9i dung b\u00e0i gi\u1ea3ng trong kh\u00f3a h\u1ecdc th\u1ee7 thu\u1eadt tr\u00ean Excel c\u1ee7a Gitiho?<\/h2>\n<p>Kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel c\u1eadp nh\u1eadt c\u00e1c m\u1eb9o Excel v\u0103n ph\u00f2ng h\u00e0ng tu\u1ea7n, b\u1ea1n c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c update nh\u1eefng n\u1ed9i dung m\u1edbi nh\u1ea5t v\u1ec1 tin h\u1ecdc v\u0103n ph\u00f2ng nh\u01b0 sau:<\/p>\n<ul>\n<li>\u0110\u1ecbnh d\u1ea1ng nhanh b\u1eb1ng c\u00f4ng c\u1ee5\u00a0<strong>Format Painter<\/strong>\u00a0v\u00e0<strong>\u00a0Cell Styles<\/strong>, s\u1eafp x\u1ebfp b\u1ea3ng t\u00ednh, thay \u0111\u1ed5i thi\u1ebft l\u1eadp t\u00ednh to\u00e1n, c\u00e1c th\u1ee7 thu\u1eadt excel t\u00ednh t\u1ed5ng, \u0111\u1eb7t t\u00ean nhanh cho b\u1ea3ng t\u00ednh, hi\u1ec3n th\u1ecb c\u00f4ng th\u1ee9c trong \u00f4, t\u1ea1o ghi ch\u00fa v\u00e0 c\u1ed1 \u0111\u1ecbnh d\u00f2ng &#8211; c\u1ed9t.<\/li>\n<li>K\u1ef9 thu\u1eadt \u0111\u1ecbnh d\u1ea1ng v\u00e0 x\u1eed l\u00fd d\u1eef li\u1ec7u bao g\u1ed3m t\u1ef1 \u0111\u1ed9ng th\u00eam k\u00fd hi\u1ec7u ti\u1ec1n t\u1ec7, vi\u1ebft bi\u1ec3u th\u1ee9c h\u00f3a h\u1ecdc &#8211; to\u00e1n h\u1ecdc v\u00e0 lo\u1ea1i b\u1ecf d\u1eef li\u1ec7u tr\u00f9ng l\u1eb7p.<\/li>\n<li>T\u1ed5ng h\u1ee3p th\u1ee7 thu\u1eadt v\u1edbi h\u00e0m, c\u00f4ng th\u1ee9c bao g\u1ed3m c\u00e1ch t\u1eaft\/m\u1edf g\u1ee3i \u00fd khi vi\u1ebft h\u00e0m, \u0111\u1eb7t t\u00ean v\u00e0 s\u1eed d\u1ee5ng t\u00ean trong c\u00f4ng th\u1ee9c v\u00e0 c\u00e1c h\u00e0m t\u00ednh to\u00e1n theo th\u1eddi gian.<\/li>\n<li>T\u1ed5ng h\u1ee3p h\u00e0m, c\u00f4ng th\u1ee9c t\u00ednh to\u00e1n theo th\u1eddi gian nh\u01b0 h\u00e0m t\u00ednh to\u00e1n theo th\u00e1ng, tu\u1ed5i, ng\u00e0y h\u1ebft h\u1ea1n h\u1ee3p \u0111\u1ed3ng,&#8230;<\/li>\n<li>H\u01b0\u1edbng d\u1eabn d\u00f9ng c\u00e1c h\u00e0m v\u00e0 c\u00f4ng th\u1ee9c n\u00e2ng cao nh\u01b0\u00a0<strong>SUM, SUMIFS, VLOOKUP, INDEX<\/strong>, v\u00e0 c\u00e1c th\u1ee7 thu\u1eadt hay trong Excel kh\u00e1c v\u1edbi h\u00e0m v\u00e0 c\u00f4ng th\u1ee9c.<\/li>\n<li>Nh\u1eefng thi\u1ebft l\u1eadp ch\u1ebf \u0111\u1ed9 l\u00e0m vi\u1ec7c tr\u00ean Excel nh\u01b0 thi\u1ebft l\u1eadp theme, background, in \u1ea5n, v\u00e0 c\u00e1c thanh, ti\u00eau \u0111\u1ec1, \u0111\u01b0\u1eddng k\u1ebb l\u01b0\u1edbi trong Excel.<\/li>\n<li>H\u00ecnh kh\u1ed1i, Bi\u1ec3u \u0111\u1ed3 trong Excel: V\u1ebd bi\u1ec3u \u0111\u1ed3 trong \u00f4, t\u1ea1o bi\u1ec3u \u0111\u1ed3 \u0111\u1ed9ng, c\u1ed1 \u0111\u1ecbnh c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng h\u00ecnh kh\u1ed1i, v\u00e0 g\u00e1n n\u1ed9i dung v\u0103n b\u1ea3n v\u00e0o h\u00ecnh kh\u1ed1i.<\/li>\n<li>M\u1ed9t s\u1ed1 th\u1ee7 thu\u1eadt h\u1eefu \u00edch kh\u00e1c trong Excel nh\u01b0: kh\u00f3a b\u1ea3o v\u1ec7 n\u1ed9i dung trong Sheet, t\u1ea1o m\u1ee5c l\u1ee5c di chuy\u1ec3n nhanh, thao t\u00e1c tr\u00ean nhi\u1ec1u Sheet c\u00f9ng l\u00fac, v\u00e0 nhi\u1ec1u th\u1ee7 thu\u1eadt kh\u00e1c.<\/li>\n<\/ul>\n<h2>T\u1ea1i sao n\u00ean ch\u1ecdn kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel t\u1ea1i Gitiho?<\/h2>\n<p>\u1ede Gitiho, kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel c\u00f3 nh\u1eefng \u01b0u \u0111i\u1ec3m \u0111\u1eb7c bi\u1ec7t, x\u1ee9ng \u0111\u00e1ng \u0111\u1ec3 b\u1ea1n l\u1ef1a ch\u1ecdn nh\u01b0:<\/p>\n<p><strong>H\u1ecdc t\u1eeb chuy\u00ean gia<\/strong>: \u0110\u01b0\u1ee3c x\u00e2y d\u1ef1ng v\u00e0 d\u1ea1y b\u1edfi c\u00e1c chuy\u00ean gia h\u00e0ng \u0111\u1ea7u trong l\u0129nh v\u1ef1c tin h\u1ecdc v\u0103n ph\u00f2ng, \u0111\u1ea3m b\u1ea3o ki\u1ebfn th\u1ee9c s\u00e2u r\u1ed9ng v\u1ec1 Excel n\u00e2ng cao cho d\u00e2n v\u0103n ph\u00f2ng.<\/p>\n<p><strong>H\u1ecdc t\u1eadp linh ho\u1ea1t<\/strong>: B\u1ea1n s\u1edf h\u1eefu kh\u00f3a h\u1ecdc tr\u1ecdn \u0111\u1eddi, h\u1ecdc b\u1ea5t c\u1ee9 l\u00fac n\u00e0o v\u00e0 tr\u00ean b\u1ea5t k\u1ef3 thi\u1ebft b\u1ecb n\u00e0o v\u1edbi k\u1ebft n\u1ed1i internet. Kh\u1ea3 n\u0103ng \u00f4n t\u1eadp l\u1ea1i k\u1ef9 thu\u1eadt b\u1ea5t k\u1ef3 khi n\u00e0o gi\u00fap c\u1ea3i thi\u1ec7n hi\u1ec7u qu\u1ea3 l\u00e0m vi\u1ec7c.<\/p>\n<p><strong>N\u1ed9i dung d\u1ec5 hi\u1ec3u, \u00e1p d\u1ee5ng ngay v\u00e0o c\u00f4ng vi\u1ec7c<\/strong>: T\u1eadp trung v\u00e0o n\u1ed9i dung thi\u1ebft th\u1ef1c v\u00e0 quan tr\u1ecdng c\u1ee7a Excel, gi\u00fap b\u1ea1n \u00e1p d\u1ee5ng ki\u1ebfn th\u1ee9c ngay trong c\u00f4ng vi\u1ec7c h\u00e0ng ng\u00e0y.<\/p>\n<p><strong>N\u00e2ng cao hi\u1ec7u su\u1ea5t c\u00f4ng vi\u1ec7c<\/strong>: Th\u00e0nh th\u1ea1o Excel gi\u00fap c\u00f4ng vi\u1ec7c c\u1ee7a b\u1ea1n tr\u1edf n\u00ean nhanh ch\u00f3ng, hi\u1ec7u qu\u1ea3 h\u01a1n \u0111\u1eb7c bi\u1ec7t khi x\u1eed l\u00fd d\u1eef li\u1ec7u l\u1edbn, ph\u1ee9c t\u1ea1p.<\/p>\n<p><strong>H\u1ed7 tr\u1ee3 gi\u1ea3i \u0111\u00e1p trong 8 ti\u1ebfng l\u00e0m vi\u1ec7c<\/strong>: M\u1ecdi th\u1eafc m\u1eafc s\u1ebd \u0111\u01b0\u1ee3c gi\u1ea3i \u0111\u00e1p chi ti\u1ebft, c\u1ee5 th\u1ec3 trong kho\u1ea3ng th\u1eddi gian n\u00e0y.<\/p>\n<p><strong>C\u01a1 h\u1ed9i th\u0103ng ti\u1ebfn v\u00e0 ch\u1ee9ng ch\u1ec9 ho\u00e0n th\u00e0nh<\/strong>: Th\u00e0nh th\u1ea1o Excel s\u1ebd n\u00e2ng cao kh\u1ea3 n\u0103ng c\u1ee7a b\u1ea1n, t\u1ea1o c\u01a1 h\u1ed9i th\u0103ng ti\u1ebfn v\u00e0 nh\u1eadn \u0111\u01b0\u1ee3c ch\u1ee9ng ch\u1ec9 quan tr\u1ecdng khi ho\u00e0n th\u00e0nh kh\u00f3a h\u1ecdc, l\u00e0 \u0111i\u1ec3m c\u1ed9ng l\u1edbn khi xin vi\u1ec7c.<\/p>\n<p>V\u1edbi\u00a0<strong>kh\u00f3a h\u1ecdc Th\u1ee7 thu\u1eadt Excel Online c\u1ee7a Gitiho<\/strong>, s\u1ebd gi\u00fap b\u1ea1n l\u00e0m vi\u1ec7c linh ho\u1ea1t h\u01a1n, m\u1edf ra c\u01a1 h\u1ed9i th\u00e0nh c\u00f4ng trong s\u1ef1 nghi\u1ec7p c\u1ee7a b\u1ea1n. \u0110\u0103ng k\u00fd ngay \u0111\u1ec3 nh\u1eadn nh\u1eefng \u01b0u \u0111\u00e3i tuy\u1ec7t v\u1eddi t\u1eeb Gitiho nh\u00e9.<\/p>`
                          )
                        }}
                      />
                    </div>
                  </Box>
                  <HStack mt={4} onClick={() => setShow(false)}>
                    <Text color={"#334d6e"} fontWeight={600}>
                      Thu gọn
                    </Text>
                    <FaAngleUp color={"#334d6e"} />
                  </HStack>
                </>
              )}
            </Box>
          </Box>

          <Box maxW={"900px"} mt={10}>
            <Text fontSize={"26px"} mt={8} mb={2} color={"#212529"}>
              Giảng viên :
            </Text>
            <HStack>
              <Text textDecoration={"underline"} color={"#334d6e"}>
                G-LEARNING
              </Text>
              <BiSolidBadgeCheck color={"#00A1ED"} />
            </HStack>
            <Text fontSize={"14px"} color="#90a0b7" mt={1}>
              Trường đào tạo & phát triển kỹ năng ứng dụng tin học văn phòng
            </Text>
            <HStack gap={4} mt={4}>
              <Box
                aspectRatio={1 / 1}
                w={"28px"}
                height={"28px"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                bgImage={"/facebook.webp"}
              ></Box>
              <Box
                aspectRatio={1 / 1}
                w={"28px"}
                height={"28px"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                bgImage={"/tiktok.webp"}
              ></Box>
            </HStack>
            <HStack mt={4} gap={4} alignItems={"start"}>
              <Box
                borderRadius={"1000px"}
                boxShadow={"lg"}
                bg={"white"}
                aspectRatio={1 / 1}
                w={"125px"}
                height={"125px"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                bgImage={"/logo-eteaching2.jpg"}
              ></Box>
              <VStack
                css={{ wordSpacing: "0.002rem", letterSpacing: "0.01rem" }}
                gap={4}
                alignItems={"start"}
              >
                <HStack gap={3}>
                  <TiStarFullOutline fontSize={"20px"} />
                  <Text fontSize={"14px"} color={"#212529"}>
                    4.8 điểm đánh giá
                  </Text>
                </HStack>
                <HStack gap={3}>
                  <LuBadgeCheck fontSize={"18px"} />
                  <Text fontSize={"14px"} color={"#212529"}>
                    928 đánh giá
                  </Text>
                </HStack>
                <HStack gap={3}>
                  <FaUserCheck fontSize={"20px"} />
                  <Text fontSize={"14px"} color={"#212529"}>
                    338,398 học viên
                  </Text>
                </HStack>
                <HStack gap={3}>
                  <FaCirclePlay fontSize={"16px"} />
                  <Text fontSize={"14px"} color={"#212529"}>
                    101 khóa học
                  </Text>
                </HStack>
              </VStack>
            </HStack>
            <Text
              css={{ wordSpacing: "0.002rem", letterSpacing: "0.01rem" }}
              mt={4}
              color={"#2d2f31"}
              fontSize={"14px"}
            >
              I have been working with Cloud Computing (main AWS) since 2015 and
              5 year working and living in Japan. Language: Japanese (Business
              Intermediate level), English (Intermediate). Certificates: -AWS
              Certified Developer Associate (2016) -AWS Certified Solution
              Architect Associate (2018) -AWS Certified Solution Architect
              Professional (since 2018, re-new 2023).
            </Text>
          </Box>

          <Box maxW={"900px"} my={4}>
            <Text fontSize={"26px"} mt={8} mb={2} color={"#212529"}>
              Khóa học khác
            </Text>
            <GridItem colSpan={{ base: 1, lg: 3 }}>
              <SimpleGrid mt={2} columns={{ base: 1, lg: 3 }} spacing={4}>
                {listcourse.map((item, index) => (
                  <GridItem colSpan={1} key={index}>
                    <CourseCard />
                  </GridItem>
                ))}
              </SimpleGrid>
            </GridItem>
          </Box>
          <Box
            zIndex={100}
            bgColor={"white"}
            height={"-moz-max-content"}
            width={"320px"}
            position={"absolute"}
            top={"-16rem"}
            right={0}
            display={{ base: "none", lg: SideBar ? "none" : "block" }}
            borderRadius={"5px"}
            boxShadow={"0 5px 10px rgba(0,0,0,.2)"}
          >
            <Box
              bgImage={"/a1.webp"}
              width={"full"}
              height={"auto"}
              bgSize={"cover"}
              aspectRatio={16 / 9}
              borderRadius={"5px 5px 0 0"}
            ></Box>
            <Box p={4}>
              <HStack>
                <LuAlarmClock color="#d91b5c" />
                <Text color="#d91b5c" fontSize={"14px"}>
                  Giá ưu đãi chỉ còn
                  <Text as={"span"} fontWeight={600}>
                    {" "}
                    1 ngày
                  </Text>
                </Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <HStack>
                  <Text color={"#334d6e"} fontSize={"20px"}>
                    199.000đ
                  </Text>
                  <Text
                    color={"#90a0b7"}
                    fontSize={"14px"}
                    textDecoration={"line-through"}
                  >
                    199.000đ
                  </Text>
                </HStack>
                <Text color={"#212529"} fontSize={"14px"}>
                  Tiết kiệm
                  <Text as={"span"} color={"#d91b5c"} fontWeight={600}>
                    {" "}
                    60%
                  </Text>
                </Text>
              </HStack>

              <Button mt={4} w={"full"} color={"white"} bg={"#D91b56"}>
                Thêm vào giỏ hàng
              </Button>
              <Button
                borderColor={"#2d2f31"}
                my={2}
                w={"full"}
                variant="outline"
              >
                Mua ngay
              </Button>
              {ListSide.map((item: any, index: number) => (
                <>
                  <HStack mx={2} my={4} alignItems={"center"} key={index}>
                    {item.icon}
                    <Text>{item.content}</Text>
                  </HStack>
                  <Divider
                    mt={2}
                    ml={1}
                    borderBottomWidth={"1px"}
                    borderBlockEndColor={"#abb8c3"}
                    w={"95%"}
                  />
                </>
              ))}
              <Text
                mt={4}
                mb={2}
                color={"#334d6e"}
                fontSize={"14px"}
                fontWeight={600}
              >
                Đăng ký số lượng lớn
              </Text>
              <Text color={"#334d6e"} fontSize={"14px"}>
                Giúp người thân, bạn bè của bạn truy cập không giới hạn 500+
                khoá học, mọi lúc, mọi nơi
              </Text>
              <Button
                mt={2}
                w={"full"}
                color={"#595C5E"}
                bg={"#E1E8EF"}
                variant="solid"
              >
                Tư vấn mua theo gói
              </Button>
            </Box>
          </Box>
          <Box
            zIndex={100}
            bgColor={"white"}
            height={"-moz-max-content"}
            width={"320px"}
            position={"fixed"}
            top={{ lg: "6.5rem" }}
            right={{ base: "0rem", lg: "19.5rem" }}
            display={{ base: "none", lg: SideBar ? "block" : "none" }}
            borderRadius={"5px"}
            boxShadow={"0 5px 10px rgba(0,0,0,.2)"}
          >
            <Box p={4}>
              <HStack>
                <LuAlarmClock color="#d91b5c" />
                <Text color="#d91b5c" fontSize={"14px"}>
                  Giá ưu đãi chỉ còn
                  <Text as={"span"} fontWeight={600}>
                    {" "}
                    1 ngày
                  </Text>
                </Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <HStack>
                  <Text color={"#334d6e"} fontSize={"20px"}>
                    199.000đ
                  </Text>
                  <Text
                    color={"#90a0b7"}
                    fontSize={"14px"}
                    textDecoration={"line-through"}
                  >
                    199.000đ
                  </Text>
                </HStack>
                <Text color={"#212529"} fontSize={"14px"}>
                  Tiết kiệm
                  <Text as={"span"} color={"#d91b5c"} fontWeight={600}>
                    {" "}
                    60%
                  </Text>
                </Text>
              </HStack>

              <Button mt={4} w={"full"} color={"white"} bg={"#D91b56"}>
                Thêm vào giỏ hàng
              </Button>
              <Button
                borderColor={"#2d2f31"}
                my={2}
                w={"full"}
                variant="outline"
              >
                Mua ngay
              </Button>
              <Text
                mt={4}
                mb={2}
                color={"#334d6e"}
                fontSize={"14px"}
                fontWeight={600}
              >
                Đăng ký số lượng lớn
              </Text>
              <Text color={"#334d6e"} fontSize={"14px"}>
                Giúp người thân, bạn bè của bạn truy cập không giới hạn 500+
                khoá học, mọi lúc, mọi nơi
              </Text>
              <Button
                mt={2}
                w={"full"}
                color={"#595C5E"}
                bg={"#E1E8EF"}
                variant="solid"
              >
                Tư vấn mua theo gói
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

"use client";

import { AboutDk, ListNd } from "@/components/Branch";
import { useModal } from "@/components/ModalContext";
import {
  Box,
  Button,
  Container,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Image from "next/image";

interface IBranch {
  titleprogram: string[];
  name: string;
  overview: string[];
  jobs: string[];
  program: string[];
  title: string;
  work: string[];
  workjobs: string[];
  programtitle: string;
  worktitle: string;
  workjobstitle: string;
  overviewtitle: string;
}

export const DanhSachTruongNganh = (props: IBranch) => {
  const { isOpen, onOpen } = useModal();

  return (
    <>
      <ListNd {...props} />

      <Box bg={"#42474c"} py={"82px"}>
        <Container maxW="6xl">
          <SimpleGrid
            spacing={"8"}
            gridTemplateColumns={{
              base: "1fr",
              md: " 1fr",
              lg: "repeat(2, 1fr)"
            }}
          >
            <GridItem color="white" textAlign={"left"}>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "28px", lg: "40px" }}
                letterSpacing="1.5px"
                lineHeight="48px"
              >
                Về Đại Học Kinh Tế Quốc Dân
              </Text>
              <Text
                pt={"12px"}
                fontSize={"18px"}
                letterSpacing="1.5px"
                lineHeight="30px"
              >
                Hệ đào tạo từ xa theo hình thức học Online của trường hiện nay
                được rất nhiều học viên quan tâm và lựa chọn theo học. Đây là
                một hình thức đã có từ lâu nhưng hiện nay đã có rất nhiều thay
                đổi và được tối ưu đặc biệt phù hợp với người đi làm bận rộn
              </Text>

              <Button
                color={"white"}
                size={"md"}
                rounded={"sm"}
                borderRadius="4px"
                mt="30px"
                bg={"#558dd9"}
                transition={"all ease .4s"}
                h={"50px"}
                _hover={{
                  background: "linear-gradient(135deg,3071ff 0%, #035762 100%)",
                  color: "#42474c"
                }}
                onClick={() => !isOpen && onOpen && onOpen()}
              >
                NHẬN TƯ VẤN MIỄN PHÍ
              </Button>
            </GridItem>
            <GridItem>
              <Image
                src="/bg-gt2.jpg"
                alt="Picture"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
      <AboutDk {...props} />
      <Box
        bgRepeat={"no-repeat"}
        bgSize="cover"
        w={"100%"}
        bg="#1d1d1dad"
        position="relative"
        py="1px"
      >
        <Image
          priority
          alt="Mountains"
          src={"/dai-hoc-kinh-te-quoc-dan.jpg"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1"
          }}
        />
      </Box>
    </>
  );
};

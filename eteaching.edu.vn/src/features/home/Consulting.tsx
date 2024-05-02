"use client";

import { BtnQuiz } from "@/components/BtnTheme";
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Consulting = (consulting: any) => {
  return (
    <Box
      bgImage={"/bg_header.webp"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="6xl" py={"70px"}>
        <SimpleGrid
          spacing={"100px"}
          gridTemplateColumns={{
            base: "1fr",
            md: " 1fr",
            lg: "repeat(2, 1fr)"
          }}
          color={"#ffffff"}
        >
          <GridItem>
            <Text
              mt={{ base: "0px", lg: "40px" }}
              fontWeight={"bold"}
              textAlign={"left"}
              fontSize={{ base: "24px", lg: "30px", md: "30px" }}
              mb="32px"
            >
              {consulting?.consulting?.consulting_text?.text_1 ||
                "Bạn không biết nên bắt đầu từ đâu?z"}
            </Text>
            <Text
              fontWeight={300}
              textAlign={"left"}
              fontSize={"18px"}
              lineHeight="30px"
              mb="40px"
            >
              {consulting?.consulting?.consulting_text?.text_2 ||
                "Hãy cho chúng tôi biết điều gì quan trọng nhất với bạn và chúng tôi sẽ tạo một danh sách tùy chỉnh các trường phù hợp với nhu cầu của bạnz."}
            </Text>

            <BtnQuiz w="250px" href={"/cau-hoi-trac-nghiem"}>
              {consulting?.consulting?.consulting_text?.text_button ||
                "Bắt đầuz"}
            </BtnQuiz>
          </GridItem>
          <GridItem>
            <Image
              src="/bg-aa.png"
              alt="Picture"
              width={700}
              height={438}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

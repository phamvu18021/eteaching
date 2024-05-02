import { SendSheets } from "@/components/FormContact";
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

export const Contact = (contact: any) => {
  return (
    <Box
      py={"80px"}
      backgroundImage="/hotline_bg.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Container maxW="6xl">
        <SimpleGrid
          spacing={"70px"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          <GridItem color={"#ffffff"}>
            <Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                fontSize={" max(2vw, 20px)"}
              >
                {contact?.contact?.title || "Thông tin liên hệ, tư vấn"}
              </Text>
              <Text textAlign={"left"} pt={"12px"} fontSize={"14px"}>
                {contact?.contact?.desc ||
                  "Xét tuyển theo hồ sơ học bạ THPT, Văn bằng; Nhận hồ sơ liên tục trong nămz"}
              </Text>
            </Box>
            <Box mt="20px">
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"18px"}
              >
                {contact?.contact?.contact_1 || "1. Đối tượng tuyển sinh"}
              </Text>
              <Text textAlign={"left"} pt={"10px"} fontSize={"14px"}>
                {contact?.contact?.text_1 ||
                  "Sinh viên đang theo tại các trường đại học, cao đẳng."}
              </Text>
              <Text textAlign={"left"} fontSize={"14px"}>
                {contact?.contact?.text_2 ||
                  "Cán bộ, công chức, người đang làm việc tại các cơ quan, tổ chức,doanh nghiệp nhà nước, tư nhân, … đã có bằng tốt nghiệp THPT"}
              </Text>
              <Text textAlign={"left"} fontSize={"14px"}>
                {contact?.contact?.text_3 ||
                  "Những người đã có bằng tốt nghiệp THPT hoặc tương đương trở lên."}
              </Text>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"18px"}
              >
                {contact?.contact?.contact_2 ||
                  "2. Thời gian và thủ tục đăng ký"}
              </Text>
              <Text textAlign={"left"} pt={"10px"} fontSize={"14px"}>
                {contact?.contact?.text_4 ||
                  "Thời gian học: Căn cứ vào hồ sơ, văn bằng của sinh viên nộp trong hồ sơ xét tuyển"}
              </Text>
              <Text textAlign={"left"} fontSize={"14px"}>
                {contact?.contact?.text_5 ||
                  "Cách đăng ký: Học viên vui lòng liên hệ theo hotline hoặc đăng ký theo form để được hỗ trợ tư vấn chi tiết về chương trình, lộ trình học và thủ tục đăng ký chương trình đại học từ xa của trường."}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <SendSheets title="Tư vấn lộ trình học và ưu đãi" />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

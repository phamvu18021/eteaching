import {
  Box,
  Container,
  Text,
  VStack,
  GridItem,
  SimpleGrid
} from "@chakra-ui/react";
import { CourseCard, CourseCardf } from "./CourseCard";

export const ListCourse = ({
  type,
  columns
}: {
  type: string;
  columns?: string;
}) => {
  let listcourse = [1, 2, 3, 4];
  return (
    <Box py={columns ? 2 : 12} bg={"#ffffff"}>
      <Container maxW={"7xl"}>
        {!columns && (
          <VStack gap={0} fontSize={"20px"} alignItems={"flex-start"}>
            <Text color={"#382d8b"} fontWeight={600}>
              {type == "long"
                ? "Chương trình đào tạo dài hạn"
                : "Khóa học kỹ năng ngắn hạn"}
            </Text>
            <Text lineHeight={1.4} fontSize={"32px"}>
              {type == "long"
                ? "Hãy bắt đầu kiếm một tấm bằng ngay hôm nay"
                : "Học thêm kỹ năng, nâng cao chuyên môn nghề nghiệp"}
            </Text>
            <Text fontSize={"16px"}>
              {type == "long"
                ? "Mức giá mang tính cách mạng cho 100% bằng cấp trực tuyến được cung cấp bởi các trường đại học danh tiếng nhất."
                : "Thông qua các chương trình này, bạn có thể học các kỹ năng có giá trị, đạt được trình độ chuyên môn và tiến tới lấy bằng trước khi đăng ký."}
            </Text>
          </VStack>
        )}
        <SimpleGrid
          mt={2}
          columns={{ base: 1, lg: Number(columns) || 4 }}
          spacing={4}
        >
          {listcourse.map((item, index) => (
            <GridItem colSpan={1} key={index}>
              {type == "long" && <CourseCardf />}
              {type == "short" && <CourseCard />}
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

/* eslint-disable no-unused-vars */
import { Box, Text, Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";

export const CourseFil = () => {
  return (
    <Box top={"150px"}>
      <Text color={"#1f1f1f"} fontSize={"24px"} fontWeight={500}>
        Lọc theo
      </Text>
      <Box my={8}>
        <Text color={"#1f1f1f"} fontSize={"18px"} fontWeight={600} mb={2}>
          Trường học
        </Text>
        <CheckboxGroup colorScheme="teal">
          <Stack
            color={"#000000"}
            spacing={[1, 3]}
            direction={["column", "column"]}
          >
            <Checkbox value="1">Đại học Kinh tế Quốc dân</Checkbox>
            <Checkbox value="2">Đại học Mở Hà Nội</Checkbox>
            <Checkbox value="3">Đại học Thái Nguyên</Checkbox>
            <Checkbox value="4">
              Học Viện Công nghệ Bưu chính Viễn thông
            </Checkbox>
            <Checkbox value="5">Học Viện Tài Chính</Checkbox>
            <Checkbox value="6">
              Đại học Kỹ thuật công nghiệp Thái Nguyên
            </Checkbox>
            <Checkbox value="7">Đại học Nông lâm Thái Nguyên</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text color={"#1f1f1f"} fontSize={"18px"} fontWeight={600} mb={2}>
          Ngành học
        </Text>
        <CheckboxGroup colorScheme="teal">
          <Stack
            color={"#000000"}
            spacing={[1, 3]}
            direction={["column", "column"]}
          >
            <Checkbox value="8">Khối ngành ngôn ngữ</Checkbox>
            <Checkbox value="9">Khối ngành Kinh tế & Quản trị</Checkbox>
            <Checkbox value="10">Khối ngành Luật</Checkbox>
            <Checkbox value="11">Khối ngành Công nghệ</Checkbox>
            <Checkbox value="12">Khối ngành Công nghiệp</Checkbox>
            <Checkbox value="13">Khối ngành Nông nghiệp</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export const CourseFilShort = () => {
  return (
    <Box top={"150px"}>
      <Text color={"#1f1f1f"} fontSize={"24px"} fontWeight={500}>
        Lọc theo
      </Text>
      <Box my={8}>
        <Text color={"#1f1f1f"} fontSize={"18px"} fontWeight={600} mb={2}>
          Khóa học ngôn ngữ
        </Text>
        <CheckboxGroup colorScheme="teal">
          <Stack
            color={"#000000"}
            spacing={[1, 3]}
            direction={["column", "column"]}
          >
            <Checkbox value="1">Ngôn ngữ Anh</Checkbox>
            <Checkbox value="2">Ngôn ngữ Trung Quốc</Checkbox>
            <Checkbox value="3">Ngôn ngữ Nhật Bản</Checkbox>
            <Checkbox value="4">Ngôn ngữ Hàn Quốc</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text color={"#1f1f1f"} fontSize={"18px"} fontWeight={600} mb={2}>
          Kỹ năng nghề nghiệp
        </Text>
        <CheckboxGroup colorScheme="teal">
          <Stack
            color={"#000000"}
            spacing={[1, 3]}
            direction={["column", "column"]}
          >
            <Checkbox value="5">Kỹ năng tin học</Checkbox>
            <Checkbox value="6">Kỹ năng marketing</Checkbox>
            <Checkbox value="7">Kỹ năng quản lý</Checkbox>
            <Checkbox value="8">Kỹ năng sale</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

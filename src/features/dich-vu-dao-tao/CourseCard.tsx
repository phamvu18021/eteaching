import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { SlScreenDesktop } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

export const CourseCard = () => {
  return (
    <Box border={"2px solid #e5e7e8"} borderRadius={"8px"}>
      <Box m={2}>
        <Box
          bgImage={"/a1.webp"}
          width={"full"}
          height={"auto"}
          bgSize={"cover"}
          aspectRatio={16 / 9}
          borderRadius={"8px"}
        ></Box>
      </Box>

      <Box px={5} pb={4}>
        <HStack>
          {/* <Box p={"2px"} border={"1px solid #e5e7e8"} borderRadius={"5px"}>
                <Box
                  bgImage={"/p1-tz.jpg"}
                  width={"30px"}
                  height={"auto"}
                  bgSize={"cover"}
                  aspectRatio={1 / 1}
                ></Box>
              </Box> */}
          <Text fontSize={"14px"} fontWeight={"500"} color={"#636363"}>
            Đơn vị cung cấp khóa học
          </Text>
        </HStack>
        <Text
          mt={3}
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={1.2}
          color={"#1f1f1f"}
        >
          Khóa học ngắn hạn về kỹ năng ngành nghề
        </Text>
        {/* <Text mt={1} lineHeight={1.2} fontSize={"13px"} color={"#9e9e9e"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              illum nesciunt
            </Text> */}
        <VStack
          mx={1}
          justifyContent={"space-between"}
          alignItems={"start"}
          my={3}
        >
          <HStack>
            <FiUser color={"#636363"} size={"22px"} />
            <Text color={"#636363"} fontSize={"16px"}>
              500 học sinh
            </Text>
          </HStack>
          <HStack>
            <SlScreenDesktop color={"#636363"} size={"20px"} />
            <Text color={"#636363"} fontSize={"16px"}>
              Online
            </Text>
          </HStack>
          <HStack>
            <IoMdTime color={"#636363"} size={"22px"} />
            <Text color={"#636363"} fontWeight={100} fontSize={"16px"}>
              20 giờ / 10 buổi
            </Text>
          </HStack>
        </VStack>
        <HStack justifyContent={"space-between"} mt={4}>
          <Text fontSize={"20px"} color={"#ee4d2d"}>
            499,000đ
          </Text>
          <HStack>
            <Button colorScheme="purple">
              <FaCartPlus size={"22px"} />
            </Button>
            <Button
              textColor={"#465159"}
              fontSize={"14px"}
              variant="outline"
              colorScheme="gray"
            >
              Chi tiết
            </Button>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export const CourseCardf = () => {
  return (
    <Box border={"2px solid #e5e7e8"} borderRadius={"8px"}>
      <Box m={2}>
        <Box
          bgImage={"/a1.webp"}
          width={"full"}
          height={"auto"}
          bgSize={"cover"}
          aspectRatio={16 / 9}
          borderRadius={"8px"}
        ></Box>
      </Box>

      <Box px={5} pb={4}>
        <HStack>
          {/* <Box p={"2px"} border={"1px solid #e5e7e8"} borderRadius={"5px"}>
            <Box
              bgImage={"/p1-tz.jpg"}
              width={"30px"}
              height={"auto"}
              bgSize={"cover"}
              aspectRatio={1 / 1}
            ></Box>
          </Box> */}
          <Text fontSize={"14px"} fontWeight={"500"} color={"#636363"}>
            Đại học kinh tế quốc dân
          </Text>
        </HStack>
        <Text
          mt={3}
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={1.2}
          color={"#1f1f1f"}
        >
          Cử nhân ngành Công nghệ thông tin Đại học Kinh tế Quốc dân
        </Text>
        {/* <Text mt={1} lineHeight={1.2} fontSize={"13px"} color={"#9e9e9e"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          illum nesciunt
        </Text> */}
        <VStack
          mx={1}
          justifyContent={"space-between"}
          alignItems={"start"}
          my={3}
        >
          <HStack>
            <FiUser color={"#636363"} size={"22px"} />
            <Text color={"#636363"} fontSize={"16px"}>
              500 học sinh
            </Text>
          </HStack>
          <HStack>
            <SlScreenDesktop color={"#636363"} size={"20px"} />
            <Text color={"#636363"} fontSize={"16px"}>
              Online
            </Text>
          </HStack>
          <HStack>
            <PiStudent color={"#636363"} size={"22px"} />
            <Text color={"#636363"} fontWeight={100} fontSize={"16px"}>
              Nhận bằng đại học
            </Text>
          </HStack>
        </VStack>
        <HStack justifyContent={"space-between"} mt={4}>
          <Button
            textColor={"#465159"}
            fontSize={"14px"}
            variant="outline"
            colorScheme="gray"
          >
            Xem thêm
          </Button>
          <Button fontSize={"14px"} colorScheme="teal">
            Đăng ký ngay
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

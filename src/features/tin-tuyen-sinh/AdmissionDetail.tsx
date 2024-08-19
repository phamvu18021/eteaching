/* eslint-disable no-unused-vars */
"use client";

import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  Skeleton
} from "@chakra-ui/react";
import { clean } from "@/lib/sanitizeHtml";
import styles from "@/styles/Post.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { AiFillRead } from "react-icons/ai";

export const AdmissionDetail = ({
  postsWp,
  data,
  isLoading,
  isError
}: {
  postsWp?: any;
  data?: any;
  isLoading?: boolean;
  isError?: boolean;
}) => {
  if (isError)
    return (
      <Center>
        <Text>Something went wrong!</Text>
      </Center>
    );
  return (
    <Box>
      <Box
        p={"24px"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        boxShadow={"0 4px 5px -3px rgba(0,0,0,.05)"}
        bg={"white"}
        borderRadius={"8px"}
      >
        <Skeleton isLoaded={data != undefined ? true : false}>
          <Heading
            style={{ color: "#263a4d", fontWeight: "700" }}
            fontSize={{ lg: "20px", base: "16px" }}
          >
            {data?.data?.title ||
              "Đại học Kinh tế quốc dân tuyển sinh đại học từ xa ngành kế toán năm 2024"}
          </Heading>
        </Skeleton>
        <HStack spacing={8} pt={4} flexWrap={"wrap"}>
          <Flex
            direction={"row"}
            alignItems="start"
            justifyContent="center"
            gap="8px"
          >
            <Box
              width="40px"
              height="40px"
              bg="linear-gradient(11deg, #00bf5d, #00907c)"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={MdReceipt} color="#fff" w="24px" height="24px" />
            </Box>

            <Box color="#212f3f">
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="400">
                Ngành học
              </Text>
              <Skeleton isLoaded={data != undefined ? true : false}>
                <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                  {(Array.isArray(data?.data?.major) &&
                    data?.data?.major[0]?.label) ||
                    "Công nghệ thông tin"}
                </Text>
              </Skeleton>
            </Box>
          </Flex>

          <Flex
            direction={"row"}
            alignItems="start"
            justifyContent="center"
            gap="8px"
          >
            <Box
              width="40px"
              height="40px"
              bg="linear-gradient(11deg, #00bf5d, #00907c)"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaMapMarkerAlt} color="#fff" w="24px" height="24px" />
            </Box>
            <Box color="#212f3f">
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="400">
                Địa điểm học
              </Text>
              <Skeleton isLoaded={data != undefined ? true : false}>
                <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                  {(Array.isArray(data?.data?.city) &&
                    data?.data?.city[0]?.label) ||
                    "Học tại trường"}
                </Text>
              </Skeleton>
            </Box>
          </Flex>

          <Flex
            direction={"row"}
            alignItems="start"
            justifyContent="center"
            gap="8px"
          >
            <Box
              width="40px"
              height="40px"
              bg="linear-gradient(11deg, #00bf5d, #00907c)"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={PiStudentFill} color="#fff" w="24px" height="24px" />
            </Box>

            <Box color="#212f3f">
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="400">
                Phương thức tuyển sinh
              </Text>
              <Skeleton isLoaded={data != undefined ? true : false}>
                <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                  {(Array.isArray(data?.data?.method) &&
                    data?.data?.method[0]?.label) ||
                    "Xét tuyển học bạ"}
                </Text>
              </Skeleton>
            </Box>
          </Flex>

          <Flex
            direction={"row"}
            alignItems="start"
            justifyContent="center"
            gap="8px"
          >
            <Box
              width="40px"
              height="40px"
              bg="linear-gradient(11deg, #00bf5d, #00907c)"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={AiFillRead} color="#fff" w="24px" height="24px" />
            </Box>
            <Box color="#212f3f">
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="400">
                Hình thức đào tạo
              </Text>
              <Skeleton isLoaded={data != undefined ? true : false}>
                <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                  {(Array.isArray(data?.data?.channel) &&
                    data?.data?.channel[0]?.label) ||
                    "Đào tạo tập trung"}
                </Text>
              </Skeleton>
            </Box>
          </Flex>
        </HStack>
        <HStack
          borderRadius={"5px"}
          bg={"gray.200"}
          p={1}
          fontSize={"14px"}
          mt={8}
        >
          <MdOutlineAccessTimeFilled />
          <Skeleton isLoaded={data != undefined ? true : false}>
            <Text>
              Hạn nộp hồ sơ :{" "}
              {data?.data?.time_stop ||
                "Hạn nộp hồ sơ : 06/28/2024, 12:00:00 AM"}
            </Text>
          </Skeleton>
        </HStack>
      </Box>
      <Divider />
      <Skeleton isLoaded={data != undefined ? true : false}>
        <Box bg={"white"} p={"20px 24px"} mt={4} borderRadius={"8px"}>
          <div className={styles["post__main"]}>
            <div
              dangerouslySetInnerHTML={{
                __html: clean(
                  postsWp?.content.rendered ||
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas vel sed ea quis modi cumque ipsum aut fugiat, odio eaque repellat fuga praesentium laudantium dolore culpa delectus. Rem, ipsum?`
                )
              }}
            />
          </div>
        </Box>
      </Skeleton>
    </Box>
  );
};

"use client";

import { getAdmission } from "@/ultil/fetch-auth";
import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Text
} from "@chakra-ui/react";
import { clean } from "@/lib/sanitizeHtml";
import styles from "@/styles/Post.module.css";
import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { AiFillRead } from "react-icons/ai";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

export const AdmissionDetail = () => {
  const router = useRouter();
  const id = router.query?.id;
  const slug = router.query?.slug;
  const [postsWp, setpostsWp] = useState<any>();
  const { data, isLoading, isError } = useQuery(
    ["getSingleAdmission", `${id}`],
    () => id && getAdmission({ id: String(id) })
  );

  useEffect(() => {
    const getpostsWp = async () => {
      try {
        const res = await fetch(`/api/post-tts/?slug=${slug}`, {
          next: { revalidate: 3 }
        });
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setpostsWp(posts[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getpostsWp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
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
        <Heading
          style={{ color: "#263a4d", fontWeight: "700" }}
          fontSize={{ lg: "20px", base: "16px" }}
        >
          {data?.data?.title}
        </Heading>
        <HStack spacing={8} pt={4} flexWrap={"wrap"}>
          <Flex
            direction={"row"}
            alignItems="start"
            justifyContent="center"
            gap="8px"
          >
            {!isLoading && (
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
            )}

            <Box color="#212f3f">
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="400">
                Ngành học
              </Text>
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                {Array.isArray(data?.data?.major) &&
                  data?.data?.major[0]?.label}
              </Text>
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
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                {Array.isArray(data?.data?.city) && data?.data?.city[0]?.label}
              </Text>
            </Box>
          </Flex>

          <Flex
            direction={"row"}
            alignItems="start"
            justifyContent="center"
            gap="8px"
          >
            {!isLoading && (
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
            )}

            <Box color="#212f3f">
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="400">
                Phương thức tuyển sinh
              </Text>
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                {Array.isArray(data?.data?.method) &&
                  data?.data?.method[0]?.label}
              </Text>
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
              <Text fontSize={{ lg: "14px", base: "12px" }} fontWeight="600">
                {Array.isArray(data?.data?.channel) &&
                  data?.data?.channel[0]?.label}
              </Text>
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
          <Text>Hạn nộp hồ sơ : {data?.data?.time_stop}</Text>
        </HStack>
      </Box>
      <Divider />
      {data?.data && (
        <Box bg={"white"} p={"20px 24px"} mt={4} borderRadius={"8px"}>
          <div className={styles["post__main"]}>
            <div
              dangerouslySetInnerHTML={{
                __html: clean(postsWp?.content.rendered)
              }}
            />
          </div>
        </Box>
      )}
    </Box>
  );
};

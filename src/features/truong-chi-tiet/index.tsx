/* eslint-disable no-unused-vars */
"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Skeleton,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { DetailSidebar } from "./DetailSidebar";
import { SchoolCard } from "../truong/SchoolCard";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getListSchool, getSchool } from "@/ultil/fetch-auth";
import { useEffect, useState } from "react";
import styles from "@/styles/Post.module.css";
import { clean } from "@/lib/sanitizeHtml";

export const SchoolDetail = () => {
  const [postsWp, setpostsWp] = useState<any>();
  const router = useRouter();
  const slugQuery = router.query.slug as string;
  const { data, isLoading, isError } = useQuery(
    `getSingleSchool,${slugQuery}`,
    () =>
      getSchool({
        slug: slugQuery
      })
  );

  const {
    data: data2,
    isLoading: isloading2,
    isError: isError2
  } = useQuery(`getListSchoolSame`, () =>
    getListSchool({
      page: "1",
      perpage: "2"
    })
  );

  useEffect(() => {
    const getpostsWp = async () => {
      try {
        const res = await fetch(`/api/post-tts/?slug=${slugQuery}`, {
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
  return (
    <>
      <Container maxW={"6xl"} mt={2}>
        <Box
          borderRadius={"10px"}
          bg={"linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"}
          aspectRatio={{ base: 320 / 240, lg: 320 / 105 }}
          pos={"relative"}
        >
          <Skeleton isLoaded={!isLoading}>
            <Box
              borderRadius={"10px 10px 0 0"}
              pos={"relative"}
              objectFit="contain"
              aspectRatio={320 / 72}
              overflow={"hidden"}
              bgImage={data?.data?.image_banner || `/a1.webp`}
              w={"auto"}
              h={"auto"}
              bgSize={"cover"}
              bgPosition={"center"}
            ></Box>{" "}
          </Skeleton>

          <Box
            pos={"absolute"}
            aspectRatio={60 / 60}
            top={{ base: "50px", lg: "170px" }}
            left={{ base: "30px", lg: "100px" }}
            bg={"white"}
            border={"1px solid #eee"}
            borderRadius={1000}
          >
            <Skeleton isLoaded={!isLoading}>
              <Box
                bgImage={data?.data?.image_logo || `/logo-neu3.webp`}
                bgSize={"cover"}
                bgPos={"center"}
                borderRadius={1000}
                w={{ base: "60px", lg: "150px" }}
                h={{ base: "60px", lg: "150px" }}
                p={1}
                objectFit="contain"
              ></Box>
            </Skeleton>
          </Box>
          <Box
            pt={2}
            pos={"absolute"}
            top={{ base: "80px", lg: "260px" }}
            left={{ base: "100px", lg: "290px" }}
          >
            <Skeleton isLoaded={!isLoading}>
              <Text color={"white"} fontWeight={700} fontSize={"20px"}>
                {data?.data?.name || "Đại Học Kinh Tế Quốc Dân"}
              </Text>
            </Skeleton>

            <Stack
              direction={{ base: "column", md: "row" }}
              mt={4}
              gap={{ base: 2, lg: 10 }}
            >
              <HStack>
                <FaGlobe size={"18px"} color="white" />
                <Skeleton isLoaded={!isLoading}>
                  <Text fontSize={{ base: "16px", lg: "18px" }} color={"white"}>
                    {data?.data?.website || "https://www.neu.edu.vn/"}
                  </Text>
                </Skeleton>
              </HStack>
              <HStack>
                <FaSchool size={"18px"} color="white" />
                <Skeleton isLoaded={!isLoading}>
                  <Text fontSize={{ base: "16px", lg: "18px" }} color={"white"}>
                    {data?.data?.totalStudent || 10000} học sinh
                  </Text>
                </Skeleton>
              </HStack>
              <HStack>
                <FaAward size={"18px"} color="white" />
                <Skeleton isLoaded={!isLoading}>
                  <Text fontSize={{ base: "16px", lg: "18px" }} color={"white"}>
                    {data?.data?.education_department || "Đa ngành"}
                  </Text>{" "}
                </Skeleton>
              </HStack>
            </Stack>
          </Box>
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 7 }} gap={8} my={4}>
          <GridItem colSpan={{ base: 1, lg: 5 }}>
            <Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                color={"white"}
                fontSize={"18px"}
                fontWeight={"600"}
                h={"50px"}
                bg={
                  "linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"
                }
                borderRadius={"10px 10px 0 0"}
              >
                <Text ml={4}>Thông tin</Text>
              </Box>
              <Box>
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
            </Box>
            <Box>
              <Box
                mt={4}
                display={"flex"}
                alignItems={"center"}
                color={"white"}
                fontSize={"18px"}
                fontWeight={"600"}
                h={"50px"}
                bg={
                  "linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"
                }
                borderRadius={"10px 10px 0 0"}
              >
                <Text ml={4}>Một số trường khác</Text>
              </Box>
              <Text
                textAlign={"end"}
                textDecoration={"underline"}
                fontSize={"16px"}
                mr={4}
                mt={2}
                color={"#174520"}
                onClick={() => router.push(`/truong`)}
                cursor={"pointer"}
              >
                Xem tất cả
              </Text>
              <Box bg={"white"} borderRadius={"0 0 10px 10px"}>
                <SimpleGrid columns={2} gap={2}>
                  {data2?.data?.school.map((item: any, index: number) => (
                    <GridItem p={2} colSpan={1} key={index}>
                      <SchoolCard
                        name={item.name}
                        url={item.url}
                        desc={item.description}
                        logo={item.image_logo}
                        banner={item.image_banner}
                        isLoading={isloading2}
                      />
                    </GridItem>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <DetailSidebar
              address={
                data?.data?.address || "116 trần vỹ, mai dịch, cầu giấy, hà nội"
              }
              addressEmbed={
                data?.data?.address_embed ||
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7610727725328!2d105.7737102!3d21.042244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1722415685337!5m2!1svi!2s"
              }
              listMajor={data?.data?.major || []}
              schoolCode={data?.data?.data || "KHA"}
              schoolSlug={data?.data?.url || "truong-dai-hoc-kinh-te-quoc-dan"}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

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
  Text
} from "@chakra-ui/react";

import { DetailSidebar } from "./DetailSideBar";
import { MajorCard } from "../nganh/MajorCard";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getListMajor, getListSchool, getMajor } from "@/ultil/fetch-auth";
import { useEffect, useState } from "react";
import styles from "@/styles/Post.module.css";
import { clean } from "@/lib/sanitizeHtml";

export const MajorDetail = () => {
  const [postsWp, setpostsWp] = useState<any>();
  const router = useRouter();
  const slugQuery = router.query.slug as string;
  const [majorcode, setMajorcode] = useState("");
  const { data, isLoading, isError } = useQuery(
    `getSingleMajor,${slugQuery}`,
    () =>
      getMajor({
        slug: slugQuery
      })
  );
  useEffect(() => {
    setMajorcode(data?.data?.code);
  }, [data]);
  const {
    data: data2,
    isLoading: isloading2,
    isError: isError2
  } = useQuery(`getListMajorSame`, () =>
    getListMajor({
      page: "1",
      perpage: "3"
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
        <SimpleGrid columns={{ base: 1, lg: 7 }} gap={8} mb={4}>
          <GridItem colSpan={{ base: 1, lg: 5 }}>
            <Box
              bg={"white"}
              borderRadius={10}
              p={4}
              mb={4}
              border={"1px solid #D9D9D9"}
            >
              <SimpleGrid columns={2} gap={4}>
                <GridItem colSpan={1}>
                  <Skeleton isLoaded={!isLoading}>
                    <Box
                      aspectRatio={328 / 218}
                      bgSize={"cover"}
                      bgImage={
                        data?.data?.image_banner_url || "/ngon-ngu-nhat.webp"
                      }
                      w={"full"}
                      h={"200"}
                    ></Box>
                  </Skeleton>
                </GridItem>
                <GridItem colSpan={1}>
                  <Skeleton isLoaded={!isLoading}>
                    <Text
                      fontSize={"24px"}
                      color="#263A4d"
                      fontWeight={600}
                      mb={5}
                    >
                      {data?.data?.name || "Ngành Quản trị kinh doanh"}
                    </Text>{" "}
                  </Skeleton>

                  <Text my={4} color={"#8c8c8c"} fontSize={"16px"}>
                    Mã ngành :{" "}
                    <Skeleton isLoaded={!isLoading}>
                      <Text color="#212f3f" as={"span"} fontWeight={600}>
                        {" "}
                        {data?.data?.code || "11232143"}
                      </Text>{" "}
                    </Skeleton>
                  </Text>
                  <Text color={"#8c8c8c"} fontSize={"16px"}>
                    Khối ngành :
                    <Skeleton isLoaded={!isLoading}>
                      <Text color="#212f3f" as={"span"} fontWeight={600}>
                        {" "}
                        {data?.data?.major_combines.label ||
                          "Kinh tế & Quản trị"}
                      </Text>{" "}
                    </Skeleton>
                  </Text>
                  <Text my={4} color={"#8c8c8c"} fontSize={"16px"}>
                    Tổ hợp xét tuyển :
                    <Skeleton isLoaded={!isLoading}>
                      {data?.data?.block_combines?.map(
                        (item: any, index: number) => (
                          <Text
                            color="#212f3f"
                            fontWeight={600}
                            as="span"
                            key={index}
                          >
                            {" "}
                            {item.label},
                          </Text>
                        )
                      )}
                      {!data && (
                        <Text color="#212f3f" fontWeight={600} as="span">
                          {" "}
                          A00, A01, D01
                        </Text>
                      )}{" "}
                    </Skeleton>
                  </Text>
                </GridItem>
              </SimpleGrid>
            </Box>
            <Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                color={"white"}
                fontSize={"16px"}
                fontWeight={"600"}
                h={"30px"}
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
                fontSize={"16px"}
                fontWeight={"600"}
                h={"30px"}
                bg={
                  "linear-gradient(90deg, #212f3f, #00b14f 100%) 0% 0% / cover"
                }
                borderRadius={"10px 10px 0 0"}
              >
                <Text ml={4}>Một số ngành khác</Text>
              </Box>
              <Text
                textAlign={"end"}
                textDecoration={"underline"}
                fontSize={"16px"}
                mr={4}
                mt={2}
                color={"#174520"}
                onClick={() => router.push(`/nganh`)}
                cursor={"pointer"}
              >
                Xem tất cả
              </Text>
              <Box bg={"white"} borderRadius={"0 0 10px 10px"}>
                <SimpleGrid columns={3} gap={4}>
                  {data2?.data?.major.map((item: any, index: number) => (
                    <GridItem colSpan={1} key={index}>
                      <MajorCard
                        name={item.name}
                        desc={item.desc}
                        image={item.image_banner_url}
                        url={item.slug}
                        type="same"
                        isLoading={isloading2}
                      />
                    </GridItem>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <DetailSidebar majorslug={"test"} majorcode={majorcode} />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};

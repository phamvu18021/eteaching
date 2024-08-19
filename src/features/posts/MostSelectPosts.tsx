import { CardBlog } from "@/components/CardBlog";
import { getPosts } from "@/ultil/fetch-auth";
import {
  Box,
  Center,
  Container,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { SectionPost } from "./SectionPost";

export const MostSelectPosts = () => {
  const {
    query: { consulting_university_page }
  } = useRouter();
  const { data, isError, isLoading } = useQuery(
    `consultinguniversity,${consulting_university_page}`,
    async () =>
      getPosts({
        type: "university",
        perpage: 5,
        page: (consulting_university_page as string) || 1
      })
  );

  const { data: data_mostselect, isLoading: isLoadingMost } = useQuery(
    `mostSelected`,
    async () =>
      getPosts({
        type: "mostview",
        perpage: 6,
        page: 1
      })
  );
  const postsSelected = data_mostselect?.posts;
  const posts = data?.posts || [];
  const totalPosts = data?.totalPosts || "0";

  if (isError)
    return (
      <Center>
        <Text>Sory. Something went wrong</Text>
      </Center>
    );

  return (
    <Box>
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 8 }} gap={8} py={12}>
          <GridItem colSpan={{ lg: 6, base: 1 }}>
            <SectionPost
              posts={posts}
              totalPosts={totalPosts}
              title_left="Tư vấn chọn trường"
              isError={isError}
              isLoading={isLoading}
              type="consulting_university"
              page={(consulting_university_page as string) || 1}
              perpage={5}
            />
          </GridItem>

          <GridItem colSpan={2}>
            <Box pb={4}>
              <Text fontSize={"24px"} fontWeight={700} color={"#4D0070"}>
                Đọc nhiều
              </Text>
            </Box>

            <SimpleGrid columns={{ lg: 2, base: 2 }} spacing={4}>
              {!isLoadingMost &&
                postsSelected?.slice(0, 6).map((post: any, index: number) => (
                  <GridItem key={index} colSpan={1}>
                    <CardBlog
                      type="Side"
                      title={post?.title?.rendered}
                      image={post?.featured_image || ""}
                      path={`/${post?.slug}`}
                      tag={"Tin tức"}
                    />
                  </GridItem>
                ))}
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

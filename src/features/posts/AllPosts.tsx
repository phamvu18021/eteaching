import { getPosts } from "@/ultil/fetch-auth";
import { formatDate } from "@/ultil/format-date";
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { SectionPost } from "./SectionPost";
import { CardBlogImageOut } from "@/components/CardBlogImageOut";

export const AllPosts = () => {
  const {
    query: { all_new_page }
  } = useRouter();
  const { data, isError, isLoading } = useQuery(
    `allnew,${all_new_page}`,
    async () =>
      getPosts({
        type: "news",
        perpage: 6,
        page: (all_new_page as string) || 1
      })
  );

  const { data: consulting, isLoading: isLoadingConsulting } = useQuery(
    `consulting`,
    async () =>
      getPosts({
        type: "news",
        perpage: 4,
        page: 1
      })
  );

  const posts = data?.posts || [];
  const totalPosts = data?.totalPosts || "0";
  const postsConsulting = consulting?.posts || [];

  return (
    <Box>
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap={8} py={12}>
          <GridItem colSpan={2}>
            <SectionPost
              posts={posts}
              totalPosts={totalPosts}
              title_left="Tin tức"
              isError={isError}
              isLoading={isLoading}
              type="all_new"
              page={(all_new_page as string) || 1}
              perpage={6}
            />
          </GridItem>

          <GridItem colSpan={1}>
            <Box pb={6}>
              <Text fontSize={"24px"} fontWeight={700} color={"#4D0070"}>
                Tư vấn tuyển sinh
              </Text>
            </Box>

            <SimpleGrid columns={1} gap={4}>
              {!isLoadingConsulting &&
                postsConsulting?.slice(0, 4).map((post: any, index: number) => (
                  <GridItem key={index} colSpan={1}>
                    <CardBlogImageOut
                      type="Briefly"
                      date={post?.date ? formatDate(post.date) : ""}
                      title={post?.title?.rendered}
                      path={`/${post?.slug}`}
                      author="1"
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

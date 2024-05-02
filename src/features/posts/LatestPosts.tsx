"use client";

import { CardBlog } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import { formatDate } from "@/ultil/date";
import {
  Center,
  Container,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useQuery } from "react-query";

export const LatestPosts = () => {
  const { isError, isLoading, data } = useQuery("Newest", async () =>
    fetch(`/api/posts/?type=news&page=1`, {
      next: { revalidate: 3 }
    }).then((res) => res.json())
  );

  const posts = data?.posts || [];

  if (isError)
    return (
      <Center>
        <Text>Something went wrong...</Text>
      </Center>
    );

  return (
    <>
      <Container maxW={"6xl"} py={8}>
        {!isLoading && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={"0.5"}>
            {posts?.slice(0, 1).map((post: any, index: number) => (
              <GridItem key={index} rowSpan={2} colSpan={2}>
                <CardBlog
                  type="InfoInsideImg"
                  date={post?.date ? formatDate(post.date) : ""}
                  title={post?.title?.rendered}
                  image={post?.featured_image || ""}
                  path={`/${post?.slug}`}
                  tag={"Tin tức"}
                />
              </GridItem>
            ))}
            {posts?.slice(1, 5).map((post: any, index: number) => (
              <GridItem key={index}>
                <CardBlog
                  type="InfoInsideImg"
                  date={""}
                  title={post?.title?.rendered}
                  image={post?.featured_image || ""}
                  path={`/${post?.slug}`}
                  tag={"Tin tức"}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        )}
        {!isLoading && posts?.length === 0 && (
          <Center placeItems={"center"} height={"40vh"} textAlign={"center"}>
            Dữ liệu đang được chúng tôi cập nhập
          </Center>
        )}
        {isLoading && <Loading />}
      </Container>
    </>
  );
};

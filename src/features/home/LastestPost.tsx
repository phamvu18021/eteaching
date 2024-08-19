"use client";
import { CardBlog } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import {
  Center,
  Container,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const LastestPost = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=${page}`, {
          next: { revalidate: 3 }
        });
        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page]);

  return (
    <>
      <Container maxW={"6xl"} py={8}>
        <Text
          fontSize={"24px"}
          fontWeight={"700"}
          color={"#4D0070"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "center" }}
        >
          TIN TỨC CẬP NHẬT
        </Text>
        {!isLoading && (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={"0.5"}
            gap={3}
          >
            {posts?.map((post: any, index: number) => (
              <GridItem key={index}>
                <CardBlog
                  type="Out"
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
        {posts?.length === 0 && (
          <Center placeItems={"center"} height={"40vh"} textAlign={"center"}>
            Dữ liệu đang được chúng tôi cập nhập
          </Center>
        )}
        {isLoading && <Loading />}
      </Container>
    </>
  );
};

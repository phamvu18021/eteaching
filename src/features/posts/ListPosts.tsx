"use client";

import { CardBlog } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Center,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 1rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 0.5rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 3px;
    margin-left: 3px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 24px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const ListPosts = ({
  handleRouter
}: {
  // eslint-disable-next-line no-unused-vars
  handleRouter?: ({ selected }: { selected: number }) => void;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);

  const len = Math.ceil(Number(totalPosts) / 8) || 1;

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=${page}`, {
          next: { revalidate: 3 }
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
        totalPosts && setTotalPosts(totalPosts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page]);

  return (
    <>
      <Box>
        <Heading
          size={"xl"}
          color={"blue.700"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "center" }}
        >
          Tin Tức
        </Heading>
        {!isLoading && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
            {posts?.map((post: any, index: number) => (
              <GridItem key={index}>
                <CardBlog
                  type="Hero"
                  date={post?.date ? formatDate(post.date) : ""}
                  title={post?.title?.rendered}
                  image={post?.featured_image || ""}
                  path={`/${post?.slug}`}
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
      </Box>
      {posts?.length > 0 && (
        <HStack pt={"32px"} justify={"center"}>
          <StyledPaginate
            previousLabel="<"
            nextLabel=">"
            pageCount={len}
            onPageChange={handleRouter}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
          />
        </HStack>
      )}
    </>
  );
};

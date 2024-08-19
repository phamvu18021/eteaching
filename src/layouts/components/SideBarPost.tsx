/* eslint-disable no-unused-vars */
import { Box, Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { FormMain } from "@/components/FormContact";
import { getPosts } from "@/ultil/fetch-auth";
import { useQuery } from "react-query";
import { CardBlogImageOut } from "@/components/CardBlogImageOut";
import { formatDate } from "@/ultil/date";

export const SideBarPost = ({}) => {
  const { data, isError, isLoading } = useQuery(`newpost`, async () =>
    getPosts({
      type: "news",
      perpage: 3,
      page: 1
    })
  );
  const posts = data?.posts || [];

  const {
    data: data2,
    isError: isError2,
    isLoading: isLoading2
  } = useQuery(`newpostpp`, async () =>
    getPosts({
      type: "mostview",
      perpage: 3,
      page: 1
    })
  );
  const ppposts = data2?.posts || [];
  console.log(posts);
  return (
    <Box pos={"sticky"} top={"100px"} bg={"gray.100"}>
      <Box borderRadius={"6px"} mb={10} boxShadow={"lg"} bg={"white"}>
        <FormMain title="Tư vấn lộ trình" />
      </Box>

      <Text my={2} fontSize={"22px"} fontWeight={600}>
        Bài viết mới
      </Text>
      <Box my={2} pb={"20px"} alignContent={"center"}>
        <Divider
          zIndex={9999}
          borderBottomWidth={"3px"}
          borderBlockEndColor={"#690097"}
          w={"100px"}
        />
      </Box>
      <SimpleGrid>
        {posts?.slice(0, 3)?.map((post: any, index: number) => (
          <GridItem key={index} pb={8} borderRadius={"5px"}>
            <CardBlogImageOut
              type="InfoOnRight"
              date={post?.date ? formatDate(post.date) : ""}
              title={post?.title?.rendered}
              image={post?.featured_image || "/blog.jpeg"}
              path={`/${post?.slug}`}
              tag={"Tin tức"}
            />
            <Divider
              mt={1}
              zIndex={9999}
              borderBottomWidth={"1px"}
              borderBlockEndColor={"gray.300"}
              w={"100%"}
            />
          </GridItem>
        ))}
      </SimpleGrid>

      <Text my={2} mt={4} fontSize={"22px"} fontWeight={600}>
        Bài viết nổi bật
      </Text>
      <Box my={2} pb={"20px"} alignContent={"center"}>
        <Divider
          zIndex={9999}
          borderBottomWidth={"3px"}
          borderBlockEndColor={"#690097"}
          w={"100px"}
        />
      </Box>
      <SimpleGrid>
        {ppposts?.slice(0, 3)?.map((post: any, index: number) => (
          <GridItem key={index} pb={8} borderRadius={"5px"}>
            <CardBlogImageOut
              type="InfoOnRight"
              date={post?.date ? formatDate(post.date) : ""}
              title={post?.title?.rendered}
              image={post?.featured_image || "/blog.jpeg"}
              path={`/${post?.slug}`}
              tag={"Tin tức"}
            />
            <Divider
              mt={1}
              zIndex={9999}
              borderBottomWidth={"1px"}
              borderBlockEndColor={"gray.300"}
              w={"100%"}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

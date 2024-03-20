import { CardBlogImageOut } from "@/components/CardBlogImageOut";
import { Loading } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Center,
  Divider,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";

interface ISectionPost {
  isLoading: boolean;
  isError: boolean;
  posts: any[];
  totalPosts: number | string;
  page: number | string;
  perpage: number | string;
  type: string;
  title_left: string;
}

export const SectionPost = (props: ISectionPost) => {
  const router = useRouter();
  const {
    posts,
    totalPosts,
    page,
    perpage,
    type,
    isError,
    isLoading,
    title_left
  } = props;
  const handleNext = () => {
    router.push(`/tin-tuc?${type}_page=${Number(page) + 1}`, undefined, {
      scroll: false
    });
  };
  const handlePrev = () => {
    router.push(`/tin-tuc?${type}_page=${Number(page) - 1}`, undefined, {
      scroll: false
    });
  };

  if (isError)
    return (
      <Center>
        <Text>Sorry. Something went wrong</Text>
      </Center>
    );

  if (isLoading) return <Loading />;

  return (
    <>
      <Box pb={8}>
        <Text fontSize={"24px"} fontWeight={700} color={"#00b14f"}>
          {title_left}
        </Text>
        <Divider borderBottomWidth={"4px"} borderBlockEndColor={"#00b14f"} />
      </Box>
      {type === "all_new" && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          rowGap={8}
          columnGap={14}
        >
          {posts?.slice(0, 6)?.map((post: any, index: number) => (
            <GridItem key={index} colSpan={1}>
              <CardBlogImageOut
                date={post?.date ? formatDate(post.date) : ""}
                title={post?.title?.rendered}
                desc={post?.desc?.rendered}
                image={post?.featured_image || ""}
                path={`/${post?.slug}`}
                author="1"
              />
            </GridItem>
          ))}
        </SimpleGrid>
      )}

      {(type === "consulting_major" || type === "consulting_university") && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 6 }} gap={8}>
          {posts?.slice(0, 1)?.map((post: any, index: number) => (
            <GridItem key={index} colSpan={{ base: 1, lg: 3 }}>
              <CardBlogImageOut
                date={post?.date ? formatDate(post.date) : ""}
                title={post?.title?.rendered}
                desc={post?.excerpt?.rendered}
                image={post?.featured_image || "/blog.jpeg"}
                path={`/${post?.slug}`}
              />
            </GridItem>
          ))}
          <GridItem colSpan={{ base: 1, lg: 3 }}>
            <SimpleGrid>
              {posts?.slice(1, 5)?.map((post: any, index: number) => (
                <GridItem key={index} pb={8} borderRadius={"5px"}>
                  <CardBlogImageOut
                    type="InfoOnRight"
                    date={post?.date ? formatDate(post.date) : ""}
                    title={post?.title?.rendered}
                    image={post?.featured_image || "/blog.jpeg"}
                    path={`/${post?.slug}`}
                    tag={"Tin tức"}
                  />
                </GridItem>
              ))}
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      )}

      <Box
        mt={4}
        display={"flex"}
        justifyContent={"flex-start"}
        alignContent={"center"}
      >
        <Pagination
          totalItem={totalPosts}
          currentPage={page as string}
          next={handleNext}
          prev={handlePrev}
          perPage={perpage}
        />
      </Box>
    </>
  );
};

import { SendSheets } from "@/components/FormContact";
import { getPosts } from "@/ultil/fetch-auth";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  GridItem,
  HStack,
  Input,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiLogoTiktok } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useQuery } from "react-query";
import { SectionPost } from "./SectionPost";

export const ConsultingPosts = () => {
  const router = useRouter();
  const {
    query: { consulting_major_page }
  } = useRouter();
  const { data, isError, isLoading } = useQuery(
    `consultingmajor,${consulting_major_page}`,
    async () =>
      getPosts({
        type: "majors",
        perpage: 5,
        page: (consulting_major_page as string) || 1
      })
  );
  const posts = data?.posts || [];
  const totalPosts = data?.totalPosts || "0";

  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/ket-qua-tim-kiem?s=${encodedSearchQuery}`);
  };

  if (isError)
    return (
      <Center>
        <Text>Sory. Something went wrong</Text>
      </Center>
    );

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Box>
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 8 }} gap={8}>
          <GridItem colSpan={{ lg: 6, base: 1 }}>
            <SectionPost
              posts={posts}
              totalPosts={totalPosts}
              title_left="Tư vấn chọn ngành"
              isError={isError}
              isLoading={isLoading}
              type="consulting_major"
              page={(consulting_major_page as string) || 1}
              perpage={5}
            />
          </GridItem>

          <GridItem colSpan={{ lg: 2, md: 1, base: 1 }}>
            <Box pt={4} pb={4}>
              <form onSubmit={onSearch}>
                <HStack columnGap={"0"}>
                  <Input
                    value={searchQuery}
                    type="Text"
                    border={"1px solid #BFBFBF "}
                    borderRadius={0}
                    placeholder="Tìm kiếm..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    borderRadius={0}
                    onClick={onSearch}
                    bg={"blue.800"}
                    color={"white"}
                    _hover={{
                      bg: "red.600"
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </HStack>
              </form>
            </Box>

            <Box rounded={"sm"} p="24px">
              <HStack spacing={"16px"}>
                <Button
                  colorScheme="facebook"
                  w={"full"}
                  as={Link}
                  href={"https://www.facebook.com/daihoctuxatnut"}
                >
                  <FaFacebook />
                </Button>
                <Button
                  bg="blackAlpha.800"
                  w={"full"}
                  color={"whiteAlpha.800"}
                  as={Link}
                  href={"https://www.tiktok.com/@tnut_elearning"}
                >
                  <BiLogoTiktok />
                </Button>
                <Button
                  colorScheme="red"
                  w={"full"}
                  as={Link}
                  href={"https://www.youtube.com/@etnut"}
                >
                  <FaYoutube />
                </Button>
              </HStack>
            </Box>

            <Box pt={"8px"}>
              <SendSheets title="Đăng ký nhận lộ trình" />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

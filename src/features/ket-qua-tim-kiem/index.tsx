import { CardAdmission } from "@/components/CardAdmission";
import { Pagination } from "@/components/Pagination";
import { SearchForm } from "@/components/SearchForm";
import { Sidebar } from "@/layouts/components/Sidebar";
import { getAdmissions } from "@/ultil/fetch-auth";
import { scrollToTop } from "@/ultil/scroll";
import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Divider } from "@chakra-ui/react";
import { deleteSpace } from "@/ultil/deleteSpace";
export const SearchResults = () => {
  const router = useRouter();
  const { major, city, method, channel, school, page } = router.query;
  const majorQuery = deleteSpace(major as string) || "all";
  // toSlug({
  //   input: (major as string) || "",
  //   type: "signed"
  // }) || "all";
  const cityQuery = (city as string) || "all";
  const methodQuery = (method as string) || "all";
  const channelQuery = (channel as string) || "all";
  const schoolQuery = (school as string) || "all";
  const pageQuery = (page as string) || "1";

  const { data, isLoading, isError } = useQuery(
    [
      "filter_common_admission",
      `${pageQuery}`,
      `${majorQuery}`,
      `${methodQuery}`,
      `${cityQuery}`,
      `${channelQuery}`,
      `${schoolQuery}`
    ],
    () =>
      getAdmissions({
        page: pageQuery as string,
        major: majorQuery as string,
        method: methodQuery as string,
        city: cityQuery as string,
        channel: channelQuery as string,
        school: schoolQuery as string
      })
  );

  const { data: dataCare, isLoading: isLoadingCare } = useQuery(
    ["notFound"],
    () =>
      getAdmissions({
        perpage: "4",
        page: "1",
        major: "all",
        method: "all",
        city: "all",
        channel: "all"
      })
  );
  const next = () => {
    router.push(
      `/ket-qua-tim-kiem?major=${majorQuery}&city=${cityQuery}&method=${methodQuery}&channel=${channelQuery}&school=${schoolQuery}&page=${
        parseInt(pageQuery) + 1
      }`
    );
  };

  const prev = () => {
    router.push(
      `/ket-qua-tim-kiem?major=${majorQuery}&method=${methodQuery}&city=${cityQuery}&channel=${channelQuery}&school=${schoolQuery}&page=${
        parseInt(pageQuery) - 1
      }`
    );
  };

  useEffect(() => {
    scrollToTop();
  }, [majorQuery, methodQuery, channelQuery, cityQuery, pageQuery]);

  const filterElearnTop = (addmissions: any[]) => {
    for (let i = 0; i < addmissions.length - 1; i++) {
      if (
        addmissions[i].city[0].code != "hoc-tai-nha" &&
        addmissions[i + 1].city[0].code == "hoc-tai-nha"
      ) {
        let temp = addmissions[i];
        addmissions[i] = addmissions[i + 1];
        addmissions[i + 1] = temp;
      }
    }
    return addmissions;
  };
  return (
    <>
      <Box background={"linear-gradient(90deg,#360350,#66008d)"}>
        <Container maxW={"6xl"} py={4}>
          <Text color={"#FFF"} fontSize={"28px"} fontWeight={600}>
            TIN TUYỂN SINH
          </Text>
          <SearchForm />
        </Container>
      </Box>

      <Box bg={"gray.100"}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, lg: 16 }} spacing={"1"}>
            <GridItem colSpan={{ base: 1, lg: 11 }}>
              <Box>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap={4} py={6}>
                  {data?.data?.admissions &&
                    filterElearnTop(data.data.admissions).map(
                      (post: any, index: number) => (
                        <GridItem key={index}>
                          <CardAdmission
                            type="right"
                            title={post?.title}
                            desc={post?.school?.label}
                            image={post?.img_thumb || ""}
                            path={`/tin-tuyen-sinh/${post?.slug_url}`}
                            tags={[
                              Array.isArray(post?.city) && post?.city[0]?.label,
                              Array.isArray(post?.major) &&
                                post?.major[0]?.label,
                              Array.isArray(post?.method) &&
                                post?.method[0]?.label,
                              Array.isArray(post?.channel) &&
                                post?.channel[0]?.label
                            ]}
                          />
                        </GridItem>
                      )
                    )}
                </SimpleGrid>

                {!isLoading && data?.data?.admissions?.length > 0 && (
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    pb={4}
                  >
                    <Pagination
                      hasCurentPage={true}
                      next={next}
                      prev={prev}
                      currentPage={pageQuery}
                      perPage={9}
                      totalItem={Number(data?.data?.total_documents) || 0}
                    />
                  </Box>
                )}
              </Box>

              {!isLoading && data?.data?.admissions?.length == 0 && (
                <>
                  <Text
                    boxShadow={"md"}
                    borderRadius={"10px"}
                    bg={"white"}
                    py={12}
                    textAlign={"center"}
                    fontSize={20}
                  >
                    Không có tin tuyển sinh phù hợp yêu cầu của bạn.
                  </Text>
                  <Divider />

                  {!isLoadingCare && (
                    <>
                      <Text py={8} fontSize={16} fontWeight={600}>
                        Tin tuyển sinh có thể bạn sẽ quan tâm
                      </Text>
                      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap={4}>
                        {dataCare?.data?.admissions?.map(
                          (post: any, index: number) => (
                            <GridItem key={index}>
                              <CardAdmission
                                type="right"
                                title={post?.title}
                                desc={post?.school?.label}
                                image={post?.img_thumb || ""}
                                path={`/tin-tuyen-sinh/${post?.slug_url}`}
                                tags={[
                                  Array.isArray(post?.city) &&
                                    post?.city[0]?.label,
                                  Array.isArray(post?.major) &&
                                    post?.major[0]?.label,
                                  Array.isArray(post?.method) &&
                                    post?.method[0]?.label,
                                  Array.isArray(post?.channel) &&
                                    post?.channel[0]?.label
                                ]}
                              />
                            </GridItem>
                          )
                        )}
                      </SimpleGrid>
                    </>
                  )}
                </>
              )}
              {isError && (
                <Text mt={12} textAlign={"center"} fontSize={20}>
                  Sory. Something went wrong.
                </Text>
              )}
            </GridItem>

            <GridItem colSpan={{ base: 1, lg: 5 }}>
              <Sidebar sticky={"125px"} />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

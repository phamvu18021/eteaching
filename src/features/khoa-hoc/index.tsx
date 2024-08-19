import {
  Box,
  Button,
  Container,
  GridItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { CourseFil, CourseFilShort } from "./CourseFil";
import { CourseCard, CourseCardf } from "../dich-vu-dao-tao/CourseCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const Course = () => {
  const [tabIndex, setTabIndex] = useState(0);

  let listcourse = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();
  useEffect(() => {
    setTabIndex(Number(router.query.type as string) || 0);
  }, [router]);
  console.log(router);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={{ base: "450px", lg: "300px" }}
        bgColor={"#003584"}
        position={"relative"}
      >
        <Box
          style={{
            position: "absolute",
            top: "0%",
            right: "10%",
            objectFit: "cover",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            opacity: "0.2"
          }}
          width={"auto"}
          height={"100%"}
          display={{ base: "none", md: "block" }}
          bgImage={"/long-course.png"}
          aspectRatio={"16/9"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        ></Box>

        <Container zIndex={10} maxW={"7xl"}>
          <Box>
            <Box>
              <Text
                fontSize={{ base: "32px", md: "44px" }}
                lineHeight={"1.2"}
                color={"white"}
                fontWeight={500}
              >
                Bắt đầu thuận lợi với bằng cấp của bạn
              </Text>
              <Text
                fontSize={"20px"}
                color={"white"}
                width={{ base: "full", lg: "800px" }}
                fontWeight={100}
                lineHeight={1.4}
                my={4}
              >
                Bất kể bạn đang ở đâu trong hành trình sự nghiệp của mình, chúng
                tôi đều đưa ra những con đường linh hoạt để đạt được bằng cấp.
                Với các chương trình cấp bằng này, bạn có thể đạt được tiến bộ
                bằng cách bắt đầu với các khóa học, Chuyên ngành hoặc Chứng chỉ
                Chuyên môn đủ điều kiện.
              </Text>
              <Button width={"180px"} height={"50px"}>
                Để lại thông tin
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bg={"white"} py={8}>
        <Container maxW={"7xl"}>
          <Tabs
            index={tabIndex}
            onChange={(e: any) => {
              setTabIndex(e);
              router.push(`?type=${e}`);
            }}
          >
            <TabList>
              <Tab
                fontSize={"18px"}
                _selected={{
                  fontWeight: "600",
                  color: "#003584",
                  borderBottom: "4px solid #003584"
                }}
              >
                Chương trình dài hạn
              </Tab>
              <Tab
                fontSize={"18px"}
                _selected={{
                  fontWeight: "600",
                  color: "#003584",
                  borderBottom: "4px solid #003584"
                }}
              >
                Khóa học ngắn hạn
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid mt={8} gap={4} columns={{ base: 1, lg: 4 }}>
                  <GridItem colSpan={{ base: 1, lg: 1 }}>
                    <CourseFil />
                  </GridItem>
                  <GridItem colSpan={{ base: 1, lg: 3 }}>
                    <SimpleGrid mt={2} columns={{ base: 1, lg: 3 }} spacing={4}>
                      {listcourse.map((item, index) => (
                        <GridItem colSpan={1} key={index}>
                          <CourseCardf />
                        </GridItem>
                      ))}
                    </SimpleGrid>
                  </GridItem>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid mt={8} gap={4} columns={{ base: 1, lg: 4 }}>
                  <GridItem colSpan={{ base: 1, lg: 1 }}>
                    <CourseFilShort />
                  </GridItem>
                  <GridItem colSpan={{ base: 1, lg: 3 }}>
                    <SimpleGrid mt={2} columns={{ base: 1, lg: 3 }} spacing={4}>
                      {listcourse.map((item, index) => (
                        <GridItem colSpan={1} key={index}>
                          <CourseCard />
                        </GridItem>
                      ))}
                    </SimpleGrid>
                  </GridItem>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};

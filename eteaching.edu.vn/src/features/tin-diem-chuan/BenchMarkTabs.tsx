import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaBookOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { useState } from "react";
import { UniversityTab } from "./UniversityTab";
import { MajorTab } from "./MajorTab";
import { PointRangeTab } from "./PointRangeTab";
import { useQuery } from "react-query";
import { getMajorUniver } from "@/ultil/fetch-auth";

export const BenchMarkTabs = () => {
  const [value, setValue] = useState<string>("1");
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useQuery("universitymajor", () =>
    getMajorUniver()
  );
  return (
    <Box>
      <Container maxW={"6xl"} py={20} bg={"white"}>
        <Box width={{ base: "auto", md: "3xl", lg: "5xl" }}>
          <Tabs align="start" variant={"unstyled"}>
            <TabList
              fontSize={{ base: "14px", md: "16px" }}
              paddingTop={"5"}
              bg="#f5f7fa"
            >
              <Tab
                width={"180px"}
                marginLeft={{ base: "0", md: "10" }}
                bg="#ebeef4"
                color="#8c99b4"
                _selected={{ color: "black", bg: "white" }}
                fontWeight={600}
                onClick={() => setValue("1")}
              >
                <Box>
                  <LiaUniversitySolid
                    style={{
                      color: value == "1" ? "#00b14f" : "#8c99b4"
                    }}
                    size={"22px"}
                  />
                </Box>

                <Text paddingLeft={"10px"}>Tìm trường</Text>
              </Tab>
              <Tab
                marginLeft={{ base: "2", md: "10" }}
                width={"180px"}
                bg="#ebeef4"
                color="#8c99b4"
                _selected={{ color: "black", bg: "white" }}
                fontWeight={600}
                onClick={() => setValue("2")}
              >
                <Box>
                  <FaBookOpen
                    style={{
                      color: value == "2" ? "#00b14f" : "#8c99b4"
                    }}
                    size={"20px"}
                  />
                </Box>

                <Text paddingLeft={"10px"}>Tìm ngành</Text>
              </Tab>
              <Tab
                width={"180px"}
                marginLeft={{ base: "2", md: "10" }}
                bg="#ebeef4"
                color="#8c99b4"
                _selected={{ color: "black", bg: "white" }}
                fontWeight={600}
                onClick={() => setValue("3")}
              >
                <Box>
                  <FaBook
                    style={{
                      color: value == "3" ? "#00b14f" : "#8c99b4"
                    }}
                    size={"20px"}
                  />
                </Box>
                <Text paddingLeft={"10px"}>Tìm theo điểm</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <UniversityTab
                  listUniversity={data?.data[0]?.items}
                  isLoading={isLoading}
                />
              </TabPanel>
              <TabPanel>
                <MajorTab
                  listMajor={data?.data[1]?.items}
                  isLoading={isLoading}
                />
              </TabPanel>
              <TabPanel>
                <PointRangeTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

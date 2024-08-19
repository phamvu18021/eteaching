import {
  Box,
  Button,
  GridItem,
  Stack,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import ChartComponent from "@/components/ChartComponent";
import { IBenchMarkApi } from "@/interfaces/admissions";
export const CardBenchMark = ({
  stt,
  item
}: {
  stt: number;
  item: IBenchMarkApi;
}) => {
  const [markButton, setMarkButton] = useState<boolean>(false);
  const chartData = [];
  const chartLabels = [];
  Number(item.point_2016) > 0
    ? (chartData.push(Number(item.point_2016)), chartLabels.push("2016"))
    : null;
  Number(item.point_2017) > 0
    ? (chartData.push(Number(item.point_2017)), chartLabels.push("2017"))
    : null;
  Number(item.point_2018) > 0
    ? (chartData.push(Number(item.point_2018)), chartLabels.push("2018"))
    : null;
  Number(item.point_2019) > 0
    ? (chartData.push(Number(item.point_2019)), chartLabels.push("2019"))
    : null;
  Number(item.point_2020) > 0
    ? (chartData.push(Number(item.point_2020)), chartLabels.push("2020"))
    : null;
  Number(item.point_2021) > 0
    ? (chartData.push(Number(item.point_2021)), chartLabels.push("2021"))
    : null;
  Number(item.point_2022) > 0
    ? (chartData.push(Number(item.point_2022)), chartLabels.push("2022"))
    : null;
  Number(item.point_2023) > 0
    ? (chartData.push(Number(item.point_2023)), chartLabels.push("2023"))
    : null;
  Number(item.point_2024) > 0
    ? (chartData.push(Number(item.point_2024)), chartLabels.push("2024"))
    : null;
  return (
    <>
      <Box bg={stt % 2 == 1 ? "#f5f7fa" : "#fff"} py={4}>
        <SimpleGrid
          fontSize={{ base: "12px", md: "14px" }}
          columns={{ base: 11, md: 13 }}
          alignItems={"center"}
          gap={2}
        >
          <GridItem alignContent={"center"} colSpan={1}>
            <Text px={{ base: 1, md: 4 }}>{stt}</Text>
          </GridItem>
          <GridItem colSpan={3} justifyContent={"center"}>
            <VStack alignItems={"start"}>
              <Text fontWeight={600}>{item.title}</Text>
              <Text>{item.major_code}</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <VStack alignItems={"start"}>
              <Text marginLeft={2}>{item.point}</Text>
              {!markButton && chartData.length > 2 && (
                <Button
                  w={{ base: "60px", md: "90px", lg: "110px" }}
                  color={"white"}
                  h={"30px"}
                  bg={"#690097"}
                  fontSize={{ base: "11px", md: "13px" }}
                  boxShadow={"0 1px 2px rgba(0,0,0,.15)"}
                  onClick={() => setMarkButton(true)}
                  cursor={"pointer"}
                  _hover={{ bg: "#9100D1" }}
                >
                  <Stack direction={{ base: "column", md: "row" }}>
                    <Text>Theo năm</Text>
                    <Box display={{ md: "block", base: "none" }}>
                      <RiBarChart2Fill color="white" />
                    </Box>
                  </Stack>
                </Button>
              )}
              {markButton && chartData.length > 2 && (
                <Button
                  w={{ base: "60px", md: "90px", lg: "110px" }}
                  color={"#8c99b4"}
                  h={"30px"}
                  bg={"#f5f7fa"}
                  fontSize={{ base: "11px", md: "13px" }}
                  boxShadow={"0 1px 2px rgba(0,0,0,.15)"}
                  onClick={() => setMarkButton(false)}
                  cursor={"pointer"}
                >
                  <Stack direction={{ base: "column", md: "row" }}>
                    <Text>Thu gọn</Text>
                    <Box display={{ md: "block", base: "none" }}>
                      <IoMdArrowDropup color="#8c99b4" />
                    </Box>
                  </Stack>
                </Button>
              )}
            </VStack>
          </GridItem>
          <GridItem alignContent={"center"} colSpan={2}>
            <Stack
              alignItems={"center"}
              direction={{ base: "column", md: "row" }}
              px={2}
            >
              {item.block_combine.map((item, index) => (
                <Text key={index} fontWeight={400}>
                  {index > 0 && ","}
                  {item.label}
                </Text>
              ))}
            </Stack>
          </GridItem>
          <GridItem
            mr={{ base: 1, md: "0px" }}
            alignContent={"center"}
            colSpan={3}
          >
            {item.school.label}
          </GridItem>
          <GridItem
            alignContent={"center"}
            display={{ base: "none", md: "block" }}
            colSpan={{ base: 0, md: 2 }}
          >
            {item.note}
          </GridItem>
        </SimpleGrid>
        {markButton && (
          <Box pt={3} px={4}>
            <ChartComponent data={chartData} labels={chartLabels} />
          </Box>
        )}
      </Box>
    </>
  );
};

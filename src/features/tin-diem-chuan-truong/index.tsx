import {
  Box,
  Container,
  HStack,
  Skeleton,
  Text,
  VStack
} from "@chakra-ui/react";
import { ListBenchMark } from "../tin-diem-chuan/ListBenchMark";
import { SelectComponent } from "../../components/Select";
import { useQuery } from "react-query";
import { getBenchMarkByUni, getFilterBenchMark } from "@/ultil/fetch-auth";
import { Option } from "../../components/Select";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
export const BenchMarkUniversity = () => {
  const router = useRouter();
  const unicodeQuery = (router.query.slug as string) || "neu";

  const { data: data2, isLoading: isLoadingBench } = useQuery(
    ["benchmark", `${unicodeQuery}`],
    () =>
      getBenchMarkByUni({
        unicode: unicodeQuery
      })
  );
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useQuery("filter-benchmark", () =>
    getFilterBenchMark()
  );
  let year: Option[] = [{ value: "all", label: "Tất cả" }];
  let yearOption: Option[] = data?.data[0].items
    .map((item: any) => {
      return {
        value: item.year,
        label: item.label
      };
    })
    .sort((a: any, b: any) => {
      return b.value - a.value;
    });
  let yearArr = yearOption && [...year, ...yearOption];
  const [yearValue, setYearValue] = useState("all");
  const handleChangeYear = (value: string) => {
    setYearValue(value);
  };
  return (
    <>
      <Box>
        <Container maxW={"6xl"} bg={"white"}>
          <HStack pt={8}>
            <Image
              alt="ảnh trường"
              src={data2?.info[0]?.img_url || `/default.jpg`}
              width={100}
              height={100}
            />
            <VStack align="left">
              <Skeleton isLoaded={data2}>
                <Text fontSize={"24px"} color={"#4D0070"} fontWeight={600}>
                  {data2?.info[0]?.label || "Đại học kinh tế quốc dân"}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={data2}>
                <Text fontSize={"16px"}>
                  Mã trường : {data2?.info[0]?.code || "AUM"}
                </Text>
              </Skeleton>
            </VStack>
          </HStack>

          <Box>
            <HStack pt={16} pb={2}>
              <Text fontWeight={600}>Điểm chuẩn năm:</Text>
              <SelectComponent
                listOp={yearArr}
                value={"Tất cả các năm"}
                onChange={handleChangeYear}
              />
            </HStack>

            <ListBenchMark
              year={yearValue}
              listbm={data2?.data?.bench_mark}
              isLoading={isLoadingBench}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

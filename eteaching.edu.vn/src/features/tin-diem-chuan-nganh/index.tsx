import { Box, Container, Text } from "@chakra-ui/react";
import { ListBenchMark } from "../tin-diem-chuan/ListBenchMark";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getBenchMarkByMajor } from "@/ultil/fetch-auth";

export const BenchMarkMajor = () => {
  const router = useRouter();
  const { major } = router.query;
  const majorQuery = (major as string) || "neu";
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useQuery(
    ["benchmark", `${majorQuery}`],
    () =>
      getBenchMarkByMajor({
        major: majorQuery
      })
  );
  return (
    <>
      <Box>
        <Container maxW={"6xl"} bg={"white"}>
          <Text
            fontSize={"24px"}
            mb={16}
            color={"#00b14f"}
            fontWeight={600}
            pt={8}
          >
            Nhóm ngành {data?.info[0].label}
          </Text>
          <ListBenchMark
            listbm={data?.data?.bench_mark}
            isLoading={isLoading}
          />
        </Container>
      </Box>
    </>
  );
};

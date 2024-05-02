import { CardBenchMark } from "@/components/CardBenchMark";
import {
  Box,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  HStack
} from "@chakra-ui/react";
import { FilterBenchMark } from "./FilterBenchMark";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { usezFilterBench } from "@/hooks/useFilterBench";

export const ListBenchMark = ({
  listbm,
  isLoading,
  year,
  startValue,
  endValue
}: {
  listbm: any;
  isLoading: boolean;
  year?: string;
  startValue?: string;
  endValue?: string;
}) => {
  const [blockValue, setBlockValue] = useState("all");
  const [sortValue, setSortValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [debounceSearchValue] = useDebounce(searchValue, 500);
  const [page, setPage] = useState(1);
  const [list, setList] = useState<any[]>();
  const handleChangeBlock = (value: string) => {
    setBlockValue(value);
  };
  const handleChangeSort = (value: string) => {
    setSortValue(value);
  };
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  useEffect(() => {
    setPage(1);
  }, [blockValue, sortValue, searchValue]);
  useEffect(() => {
    const listBen = year
      ? usezFilterBench({
          year: year,
          blockValue: blockValue,
          sortValue: sortValue,
          searchValue: debounceSearchValue,
          listBen: listbm || []
        })
      : startValue && endValue
      ? usezFilterBench({
          startValue: startValue,
          endValue: endValue,
          blockValue: blockValue,
          sortValue: sortValue,
          searchValue: debounceSearchValue,
          listBen: listbm || []
        })
      : usezFilterBench({
          blockValue: blockValue,
          sortValue: sortValue,
          searchValue: debounceSearchValue,
          listBen: listbm || []
        });
    setList(listBen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    blockValue,
    debounceSearchValue,
    sortValue,
    isLoading,
    listbm,
    year,
    startValue,
    endValue
  ]);

  return (
    <>
      <Box borderRadius={"10px"} shadow={"2px 2px 6px rgba(0,0,0,.15)"}>
        <HStack pl={4} py={4} fontWeight={600} fontSize={"18px"}>
          <Text color={"#00b14f"}>{list?.length}</Text>
          <Text>Kết quả</Text>
        </HStack>
        <FilterBenchMark
          blockValue={blockValue}
          sortValue={sortValue}
          handleChangeBlock={handleChangeBlock}
          handleChangeSort={handleChangeSort}
          searchValue={searchValue}
          handleSearch={handleSearch}
        />
        <Box py={8}>
          <SimpleGrid
            border={"1px solid #f7f7f7"}
            boxShadow={"0 1px 2px rgba(0,0,0,.15)"}
            fontSize={"14px"}
          >
            <GridItem py={5}>
              <SimpleGrid
                fontSize={{ base: "12px", md: "14px" }}
                columns={{ base: 11, md: 13 }}
                alignItems={"center"}
                justifyItems={{ base: "center", md: "start" }}
              >
                <GridItem fontWeight={600} colSpan={1}>
                  <Text px={{ base: "0", md: "2" }}>STT</Text>
                </GridItem>
                <GridItem fontWeight={600} colSpan={3}>
                  Tên,mã ngành
                </GridItem>
                <GridItem fontWeight={600} colSpan={2}>
                  Điểm chuẩn
                </GridItem>
                <GridItem pl={{ md: 0, base: 2 }} fontWeight={600} colSpan={2}>
                  Tổ hợp xét tuyển
                </GridItem>
                <GridItem fontWeight={600} colSpan={3}>
                  Tên trường
                </GridItem>
                <GridItem
                  fontWeight={600}
                  display={{ base: "none", md: "block" }}
                  colSpan={{ base: 0, md: 2 }}
                >
                  Ghi chú
                </GridItem>
              </SimpleGrid>
            </GridItem>
            {list?.slice(0, page * 10).map((item: any, index: number) => (
              <GridItem key={index}>
                <CardBenchMark stt={index + 1} item={item} />
              </GridItem>
            ))}
            {list && page * 10 < list?.length && (
              <Box py={4} justifySelf={"center"}>
                <Button
                  color={"#8c99b4"}
                  bg={"#f5f7fa"}
                  onClick={() => setPage(page + 1)}
                  shadow={"md"}
                >
                  Xem thêm
                </Button>
              </Box>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

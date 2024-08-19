/* eslint-disable no-unused-vars */
import { Box, GridItem, HStack, Input, SimpleGrid } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { SelectComponent } from "../../components/Select";
import { Option } from "../../components/Select";

export const FilterBenchMark = ({
  blockValue,
  sortValue,
  searchValue,
  handleChangeBlock,
  handleChangeSort,
  handleSearch
}: {
  blockValue: string;
  sortValue: string;
  searchValue: string;
  handleChangeBlock: (value: string) => void;
  handleChangeSort: (value: string) => void;
  handleSearch: (value: string) => void;
}) => {
  const khoi: Option[] = [
    { value: "all", label: "Tất cả các khối" },
    { value: "A", label: "Khối A" },
    { value: "B", label: "Khối B" },
    { value: "C", label: "Khối C" },
    { value: "D", label: "Khối D" },
    { value: "H", label: "Khối H" },
    { value: "M", label: "Khối M" },
    { value: "N", label: "Khối N" },
    { value: "S", label: "Khối S" },
    { value: "T", label: "Khối T" },
    { value: "K", label: "Khối K" },
    { value: "R", label: "Khối R" },
    { value: "V", label: "Khối V" }
  ];

  const sort: Option[] = [
    { value: "all", label: "Sắp xếp theo" },
    { value: "nameaz", label: "Tên ngành A -> Z" },
    { value: "nameza", label: "Tên ngành Z -> A" },
    { value: "codeaz", label: "Mã ngành A -> Z" },
    { value: "codeza", label: "Mã ngành Z -> A" },
    { value: "pointza", label: "Điểm chuẩn từ  cao -> thấp" },
    { value: "pointaz", label: "Điểm chuẩn từ thấp -> cao" }
  ];

  return (
    <>
      <Box>
        <SimpleGrid
          alignItems={"center"}
          columns={{ md: 9, base: 2 }}
          gap={{ base: 2, md: 6 }}
        >
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <SelectComponent
              listOp={khoi || ""}
              value={"Tất cả các khối"}
              onChange={handleChangeBlock}
            />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 4 }}>
            <SelectComponent
              listOp={sort || ""}
              value={"Sắp xếp theo"}
              onChange={handleChangeSort}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 3 }}>
            <HStack
              border={"1px solid #690097"}
              borderRadius={"4px"}
              py={2}
              px={2}
              bg={"rgb(0, 255, 144,0.01)"}
            >
              <BsSearch color="#4D0070" />
              <Input
                ml="10px"
                variant="unstyled"
                placeholder="Nhập tên ngành hoặc mã ngành"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};

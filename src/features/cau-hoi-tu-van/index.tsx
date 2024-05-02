"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { filters, listpost } from "@/fakedata";
import {
  Box,
  ButtonGroup,
  Container,
  FormControl,
  Heading,
  Select,
  Text
} from "@chakra-ui/react";
import { useState } from "react";

export interface ListPost {
  id?: string;
  label?: string;
  desc?: string;
  path?: string;
  img?: string;
  city?: string;
  majors?: string;
  range?: string;
  exam?: string;
  rangeexam?: string;
  train?: string;
  date?: Date;
  finalscore?: string;
  industrysector?: string;
  rangeexam3?: string;
  details?: {
    title: string;
    value: string[];
  }[];
}

export interface Filter {
  type: string;
  label: string;
  unit: string;
  items: { label: string; [key: string]: string }[];
}

interface SelectedValues {
  [key: string]: string;
}

const filterTypes: { [key: string]: string } = {
  place: "Bạn muốn học ở đâu?",
  pointexam: "Điểm thi thử đại học lần gần nhất của bạn?",
  block: "Bạn muốn theo khối nào?",
  pointexam3: "Điểm 3 môn chính trong lần thi thử gần nhất?",
  pointfinal: "Điểm tổng kết tiếng Anh"
};

const desiredFilterOrder = [
  "place",
  "block",
  "pointexam",
  "pointexam3",
  "pointfinal"
];

export const Cauhoituvan = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});
  const [filteredList, setFilteredList] = useState<ListPost[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const handleFilterChange = (value: string, type: string) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [type]: value
    }));
  };

  const handleFilterSubmit = () => {
    const filteredList = listpost.filter((post) =>
      filters.every(
        (filter) =>
          !selectedValues[filter.type] ||
          post[filter.unit as keyof ListPost] ===
            selectedValues[filter.type as keyof SelectedValues]
      )
    );

    setFilteredList(filteredList);
    setShowNoResults(filteredList.length === 0);
  };

  const handleFilterNavigation = (direction: number) => {
    let nextIndex = activeFilterIndex + direction;
    while (nextIndex >= 0 && nextIndex < desiredFilterOrder.length) {
      const nextFilterType = desiredFilterOrder[nextIndex];
      if (filters.some((filter) => filter.type === nextFilterType)) {
        setActiveFilterIndex(nextIndex);
        break;
      }
      nextIndex += direction;
    }
  };

  const isLastFilter = activeFilterIndex === desiredFilterOrder.length - 1;
  const currentFilterType = desiredFilterOrder[activeFilterIndex];
  const currentFilter = filters.find(
    (filter) => filter.type === currentFilterType
  );

  return (
    <Container maxW={"6xl"} my="100px">
      <Heading w="100%" textAlign={"center"} fontWeight="bold" mb="50px">
        {currentFilter && filterTypes[currentFilter.type]}
      </Heading>
      {currentFilter && (
        <FormControl my={4} px="20vw">
          <>
            <Text my="10px">{currentFilter.label}</Text>
            <Select
              placeholder={`Chọn ${currentFilter.label.toLowerCase()}`}
              onChange={(e) =>
                handleFilterChange(e.target.value, currentFilter.type)
              }
              value={selectedValues[currentFilter.type] || ""}
            >
              {currentFilter.items.map((item) => (
                <option
                  key={item.label}
                  value={(item as any)[currentFilter.unit]}
                >
                  {item.label}
                </option>
              ))}
            </Select>
          </>
        </FormControl>
      )}

      <ButtonGroup spacing={4} px="20vw" mt="100px">
        <BtnTheme
          isDisabled={activeFilterIndex === 0}
          onClick={() => handleFilterNavigation(-1)}
        >
          Quay lại
        </BtnTheme>
        {!isLastFilter && (
          <BtnTheme onClick={() => handleFilterNavigation(1)}>
            Tiếp theo
          </BtnTheme>
        )}
        {isLastFilter && <BtnTheme onClick={handleFilterSubmit}>Lọc</BtnTheme>}
      </ButtonGroup>
      <Text px="20vw" mt="20px" mb={4}>
        Câu hỏi {activeFilterIndex + 1}/{desiredFilterOrder.length}
      </Text>
      {filteredList.length > 0 && (
        <Box mt={4}>
          <Heading mb={4}>{`Kết quả lọc (${filteredList.length}):`}</Heading>
          {filteredList.map((post) => (
            <Box key={`${post.id}-${post.label}`} mb={4}>
              <Heading as="h3" fontSize="xl">
                {post.label}
              </Heading>
              <p>{post.desc}</p>
            </Box>
          ))}
        </Box>
      )}
      {showNoResults && (
        <Box mt={4}>
          <Text>Không có danh sách phù hợp</Text>
        </Box>
      )}
    </Container>
  );
};

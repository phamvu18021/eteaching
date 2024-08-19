import { RangeSliderMarkBench } from "@/components/RangeSlider";
import { ListBenchMark } from "./ListBenchMark";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { getBenchMarks } from "@/ultil/fetch-auth";
import { useQuery } from "react-query";

export const PointRangeTab = () => {
  const [inputValue, setInputValue] = useState([0, 30]);
  const [sliderValue, setSliderValue] = useState([0, 30]);
  const [debounceValue] = useDebounce(inputValue, 400);
  const handleChangeSlider = (value: number[]) => {
    setSliderValue(value);
  };
  const handleChangeInput = (value: number[]) => {
    setInputValue(value);
  };
  const { data, isLoading } = useQuery(["benchmark"], () => getBenchMarks({}));

  return (
    <>
      <Box>
        <Text py={2} fontSize={"18px"} fontWeight={"600"} color={"#4D0070"}>
          Xem ngành, trường dựa theo điểm dự kiến
        </Text>
        <Box py={10}>
          <RangeSliderMarkBench
            inputValue={inputValue}
            sliderValue={sliderValue}
            debounceValue={debounceValue}
            handleChangeInput={handleChangeInput}
            handleChangeSlider={handleChangeSlider}
          />
          <ListBenchMark
            startValue={debounceValue[0] + ""}
            endValue={debounceValue[1] + ""}
            listbm={data?.data?.bench_mark}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </>
  );
};

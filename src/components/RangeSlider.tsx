/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  Text,
  RangeSlider,
  RangeSliderMark,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  NumberInputField,
  NumberInput,
  HStack,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdGraphicEq } from "react-icons/md";
import { useDebounce } from "use-debounce";

export const RangeSliderMarkBench = ({
  inputValue,
  debounceValue,
  sliderValue,
  handleChangeInput,
  handleChangeSlider
}: {
  inputValue: number[];
  sliderValue: number[];
  debounceValue: number[];
  handleChangeInput: (value: number[]) => void;
  handleChangeSlider: (value: number[]) => void;
}) => {
  useEffect(() => {
    if (debounceValue[0] > debounceValue[1]) {
    } else if (debounceValue[0] < 0 || debounceValue[1] < 0) {
    } else if (debounceValue[0] > 30 || debounceValue[1] > 40) {
    } else if (debounceValue == sliderValue) {
    } else {
      handleChangeSlider(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (sliderValue == debounceValue) {
    } else {
      handleChangeInput([sliderValue[0], sliderValue[1]]);
    }
  }, [sliderValue]);
  return (
    <>
      <HStack>
        <Text>Khoảng điểm từ</Text>
        <NumberInput
          maxW="150px"
          mr="1rem"
          value={inputValue[0]}
          onChange={(e: string) => {
            handleChangeInput([Number(e), inputValue[1]]);
          }}
        >
          <HStack border={"1px solid #8c99b4"} borderRadius={"4px"}>
            <NumberInputField border={"none"} />
            <Text pr={2} color={"#8c99b4"} ml={{ base: -10, md: -20 }}>
              Điểm
            </Text>
          </HStack>
        </NumberInput>

        <Text>đến</Text>

        <NumberInput
          maxW={{ base: "100px", md: "150px" }}
          ml={"1rem"}
          value={inputValue[1]}
          onChange={(e: string) => {
            handleChangeInput([inputValue[0], Number(e)]);
          }}
        >
          <HStack>
            <NumberInputField />
            <Text color={"#8c99b4"} ml={{ base: -10, md: -20 }}>
              Điểm
            </Text>
          </HStack>
        </NumberInput>
      </HStack>
      {debounceValue[0] > debounceValue[1] && (
        <>
          <Alert
            mt={1}
            display={"flex"}
            position={"absolute"}
            zIndex={4}
            status="warning"
            boxShadow={"14px 14px 3px -7px rgba(0,0,0,0.1)"}
            w={"full"}
          >
            <AlertIcon />
            Điểm bắt đầu phải nhỏ hơn hoặc bằng điểm kết thúc
          </Alert>
        </>
      )}

      <RangeSlider
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={["min", "max"]}
        defaultValue={[0, (100 / 30) * 10]}
        value={sliderValue}
        onChange={(val) => handleChangeSlider(val)}
        mt={12}
        min={0}
        max={40}
        mb={16}
      >
        <RangeSliderMark value={0} mt="3" ml="-2.5" fontSize="md">
          0
        </RangeSliderMark>
        <RangeSliderMark value={10} mt="3" ml="-2.5" fontSize="md">
          10
        </RangeSliderMark>

        <RangeSliderMark value={20} mt="3" ml="-2.5" fontSize="md">
          20
        </RangeSliderMark>

        <RangeSliderMark value={30} mt="3" ml="-2.5" fontSize="md">
          30
        </RangeSliderMark>
        <RangeSliderMark value={40} mt="3" ml="-2.5" fontSize="md">
          40
        </RangeSliderMark>
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#690097" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0}>
          <Box color="#690097" as={MdGraphicEq} />
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1}>
          <Box color="#690097" as={MdGraphicEq} />
        </RangeSliderThumb>
      </RangeSlider>
    </>
  );
};

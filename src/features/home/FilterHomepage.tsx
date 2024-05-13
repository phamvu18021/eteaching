"use client";

import { useFilterHomepage } from "@/hooks/useFilterHomepage";
import { TFilterHomepageUnit } from "@/interfaces/filterHompage";
import {
  changeUnit,
  changeUnitValue,
  fetchFilterHomepageThunk
} from "@/redux/features/filterHomepageSlice";
import { useAppDispatch } from "@/redux/store";
import {
  Box,
  Button,
  Center,
  GridItem,
  HStack,
  Select,
  SimpleGrid,
  Skeleton,
  Text
} from "@chakra-ui/react";
import { useEffect } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import { HorizontalSlide } from "../../components/HorizontalSlide";
import { SkeletonHorizontal } from "@/components/SkeletonCards";

export const FilterHomepage = () => {
  const dispatch = useAppDispatch();
  const { data, unit, list_value_of_units, unit_value, loading } =
    useFilterHomepage();

  useEffect(() => {
    dispatch(fetchFilterHomepageThunk());
  }, [dispatch]);

  if (loading === "failed")
    return (
      <Center>
        <Text>Sory. Something went wrong!</Text>
      </Center>
    );

  return (
    <SkeletonHorizontal numberCard={4} isLoaded={loading === "succeeded"}>
      <SimpleGrid
        w={{ base: "91vw", lg: "auto" }}
        columns={{ base: 1, md: 2, lg: 10 }}
        gap={{ lg: 8, base: 2 }}
      >
        <GridItem colSpan={{ base: 1, lg: 3 }}>
          <HStack
            py={1.5}
            gap={2}
            bg={"white"}
            display={"flex"}
            borderRadius={"5px"}
            justifyContent={"space-between"}
            border="1px solid #d3d5d9"
          >
            <HStack>
              <Box px={2}>
                <HiOutlineBars3BottomLeft color={"gray"} />
              </Box>
              <Text display={"inline-block"} color={"gray.500"}>
                Lọc theo:
              </Text>
            </HStack>
            <Box>
              <Select
                minW={"197px"}
                fontSize={"14px"}
                fontWeight={400}
                border={"none"}
                width={{ base: "50", lg: "40" }}
                display={"flex"}
                justifyContent={"end"}
                variant="unstyled"
                onChange={(e) => {
                  dispatch(changeUnit(e.target.value as TFilterHomepageUnit));
                }}
              >
                {data?.map((item: any, index: number) => (
                  <option key={index} value={item.unit}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </Box>
          </HStack>
        </GridItem>

        {list_value_of_units.length > 0 && (
          <HorizontalSlide unit={unit}>
            <SwiperSlide>
              <Button
                _hover={{
                  background: "white",
                  border: "1px solid #00b14f"
                }}
                border={"1px solid #E9EAEC"}
                className={`${`${unit_value}` === "all" ? "active" : ""}`}
                onClick={() => {
                  dispatch(changeUnitValue("all"));
                }}
                cursor={"pointer"}
                display={"flex"}
                whiteSpace={"nowrap"}
                bg={"#E9EAEC"}
                borderRadius={"20px"}
                textAlign={"center"}
                fontSize={"14px"}
                fontWeight={"500"}
              >
                Tất cả
              </Button>
            </SwiperSlide>

            {list_value_of_units?.map((child: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Box px={1} pb={{ base: 1, lg: 0 }}>
                    <Button
                      _hover={{
                        background: "white",
                        border: "1px solid #00b14f"
                      }}
                      border={"1px solid #E9EAEC"}
                      key={index}
                      className={`${
                        `${String(unit_value)}` === String(child[unit])
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        dispatch(changeUnitValue(child[unit]));
                      }}
                      cursor={"pointer"}
                      display={"inline-block"}
                      whiteSpace={"nowrap"}
                      bg={"#E9EAEC"}
                      fontSize={"14px"}
                      fontWeight={"500"}
                      borderRadius={"20px"}
                      textAlign={"center"}
                    >
                      {child["label"]}
                    </Button>
                  </Box>
                </SwiperSlide>
              );
            })}
          </HorizontalSlide>
        )}
        {loading == "pending" && (
          <GridItem colSpan={{ base: 0, lg: 7 }}>
            <Skeleton isLoaded={false}>dasfsdfasd </Skeleton>
          </GridItem>
        )}

        <GridItem colSpan={1} display={{ base: "block", lg: "none" }}>
          <Select
            bg={"white"}
            onChange={(e) => {
              dispatch(changeUnitValue(e.target.value));
            }}
            value={unit_value}
          >
            <option key={600} value={"all"}>
              Tất cả
            </option>
            {list_value_of_units?.map((child: any, index: number) => (
              <option key={index} value={child[unit]}>
                {child["label"]}
              </option>
            ))}
          </Select>
        </GridItem>
      </SimpleGrid>
    </SkeletonHorizontal>
  );
};

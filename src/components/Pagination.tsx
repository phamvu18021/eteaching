import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { BtnCircle } from "./BtnTheme";

export const Pagination = ({
  hasCurentPage = false,
  next,
  prev,
  currentPage,
  totalItem,
  perPage
}: {
  hasCurentPage?: boolean;
  currentPage: number | string;
  totalItem: number | string;
  perPage: number | string;
  next: () => void;
  prev: () => void;
}) => {
  const totalPage = Math.ceil(Number(totalItem) / Number(perPage));
  const isDisableStart = Number(currentPage) <= 1;
  const isDisableEnd = Number(currentPage) >= totalPage;
  return (
    <HStack spacing={0}>
      <Box px={2}>
        <BtnCircle
          border={`1px solid`}
          borderColor={"purple.500"}
          isDisabled={isDisableStart}
          onClick={() => {
            !isDisableStart && prev && prev();
          }}
        >
          <Icon as={MdOutlineNavigateBefore} w={"20px"} height={"20px"} />
        </BtnCircle>
      </Box>

      {hasCurentPage && (
        <>
          <Text color="purple.500">{currentPage} </Text>
          <Text color="gray.400"> / {totalPage} Trang</Text>
        </>
      )}

      <Box pl={2}>
        <BtnCircle
          w={"20px"}
          border={`1px solid`}
          borderColor={"purple.500"}
          isDisabled={isDisableEnd}
          onClick={() => {
            !isDisableEnd && next && next();
          }}
        >
          <Icon as={MdOutlineNavigateNext} w={"20px"} height={"20px"} />
        </BtnCircle>
      </Box>
    </HStack>
  );
};

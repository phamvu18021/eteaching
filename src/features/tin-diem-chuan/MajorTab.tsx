/* eslint-disable react-hooks/exhaustive-deps */
import { CardMajor } from "@/components/CardMajor";
import { toSlug } from "@/ultil/toSlug";
import {
  HStack,
  Input,
  SimpleGrid,
  GridItem,
  Box,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "use-debounce";

export const MajorTab = ({
  listMajor,
  isLoading
}: {
  listMajor: any;
  isLoading: boolean;
}) => {
  const [searchText, setSearchText] = useState("");
  const [debounceSearchText] = useDebounce(searchText, 500);
  const [major, setMajor] = useState<any[]>(listMajor ? listMajor : []);
  useEffect(() => {
    const listnew = listMajor?.filter((item: any) => {
      return (
        item &&
        (toSlug({ input: item.label, type: "signed" }).includes(
          toSlug({ input: debounceSearchText, type: "signed" })
        ) ||
          toSlug({ input: item.major, type: "signed" }).includes(
            toSlug({ input: debounceSearchText, type: "signed" })
          ))
      );
    });
    listnew?.length > 0 ? setMajor(listnew) : "";
  }, [debounceSearchText, isLoading]);
  return (
    <>
      <Box>
        <Text py={2} fontSize={"18px"} fontWeight={"600"} color={"#690097"}>
          Xem điểm chuẩn theo ngành
        </Text>
        <HStack
          border={"1px solid #690097"}
          borderRadius={"4px"}
          py={2}
          px={4}
          my={4}
          mb={6}
          bg={"rgb(0, 255, 144,0.01)"}
        >
          <BsSearch color="#4D0070" />
          <Input
            ml="10px"
            variant="unstyled"
            placeholder="Nhập tên ngành"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </HStack>
        <SimpleGrid mt={2} columns={2} gap={{ base: 2, md: 4 }}>
          {major?.map((item: any, index: number) => (
            <GridItem key={index} colSpan={{ base: 2, md: 1 }}>
              <CardMajor
                name={item.label}
                code={item.major}
                description={item.description}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

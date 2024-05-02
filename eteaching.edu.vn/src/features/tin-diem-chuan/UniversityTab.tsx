import { CardUniversity } from "@/components/CardUniversity";
import { toSlug } from "@/ultil/toSlug";
import {
  HStack,
  Input,
  SimpleGrid,
  GridItem,
  Box,
  Text
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "use-debounce";

export const UniversityTab = ({
  listUniversity,
  isLoading
}: {
  listUniversity: any;
  isLoading: boolean;
}) => {
  const [searchText, setSearchText] = useState("");
  const [debounceSearchText] = useDebounce(searchText, 500);
  const [unis, setUnis] = useState<any[]>(listUniversity ? listUniversity : []);
  useEffect(() => {
    const listnew = listUniversity?.filter((item: any) => {
      return (
        item &&
        (toSlug({ input: item.label, type: "signed" }).includes(
          toSlug({ input: debounceSearchText, type: "signed" })
        ) ||
          toSlug({ input: item.school, type: "signed" }).includes(
            toSlug({ input: debounceSearchText, type: "signed" })
          ))
      );
    });
    listnew?.length > 0 ? setUnis(listnew) : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearchText, isLoading]);

  return (
    <>
      <Box>
        <Text py={2} fontSize={"18px"} fontWeight={"600"} color={"#00b14f"}>
          Xem điểm chuẩn theo trường
        </Text>

        <HStack
          border={"1px solid #00b14f"}
          borderRadius={"4px"}
          py={2}
          px={4}
          my={4}
          bg={"rgb(0, 255, 144,0.01)"}
        >
          <BsSearch color="#00b14f" />
          <Input
            ml="10px"
            variant="unstyled"
            placeholder="Nhập tên trường hoặc mã trường"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </HStack>
        <SimpleGrid>
          {unis?.map((item: any, index: number) => (
            <GridItem key={index} colSpan={1} py={2}>
              <CardUniversity name={item.label} code={item.school} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

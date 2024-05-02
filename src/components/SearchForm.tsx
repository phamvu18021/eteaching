import { useFilterCommon } from "@/hooks/useFilterCommon";
import {
  IFilterCommonApi,
  IFilterCommonPayload
} from "@/interfaces/filterCommon";
import {
  changeUnit,
  fetchFilterCommonThunk
} from "@/redux/features/fitlerCommonSlice";
import { useAppDispatch } from "@/redux/store";
import { deleteSpace } from "@/ultil/deleteSpace";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  GridItem,
  Input,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  Select,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Fuse from "fuse.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BtnTheme } from "./BtnTheme";
import { Loading } from "./Loading";
import { toSlug } from "@/ultil/toSlug";

const SearchOptions = {
  keys: ["label"]
};

const Options = ({
  value,
  loading,
  placeholder,
  data,
  unit,
  onChange
}: {
  value: string;
  loading: string;
  placeholder?: string;
  data: IFilterCommonApi[];
  unit: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (c: string) => void;
}) => {
  const options =
    data?.find((filter: any) => filter.unit === unit)?.items || [];

  return (
    <Select
      border={"none"}
      focusBorderColor={"white"}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option value="all">{placeholder} </option>
      {loading === "succeeded" &&
        options.map((option: any, index: number) => (
          <option key={index} value={option[unit]}>
            {option.label}
          </option>
        ))}
      {loading == "pending" && <option>Dữ liệu đang được cập nhật</option>}
      {loading == "failed" && <option>Sever hiện tại đang bị lỗi</option>}
    </Select>
  );
};

const FuseSearch = ({
  loading,
  searchFuse,
  setSearchFuse,
  data,
  searchText,
  onChooseFuseValue
}: {
  loading: "succeeded" | "failed" | "pending" | "idle";
  data: any[];
  searchText: string;
  searchFuse: any[];
  // eslint-disable-next-line no-unused-vars
  setSearchFuse?: (c: any) => void;
  // eslint-disable-next-line no-unused-vars
  onChooseFuseValue: (fuse_value: any) => void;
}) => {
  const fuse = new Fuse(
    data?.length > 0
      ? data
      : [
          {
            label: "sever hiện đang bị lỗi",
            major: "server-hien-dang-bi-loi"
          }
        ],
    SearchOptions
  );

  useEffect(() => {
    const searchFuse = searchText.trim() !== "" ? fuse.search(searchText) : [];
    setSearchFuse && setSearchFuse(searchFuse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <>
      {loading == "succeeded" && (
        <SimpleGrid columns={1}>
          {searchFuse?.map((res: any, index: number) => (
            <GridItem
              key={index}
              colSpan={{ base: 1, lg: 1, md: 0 }}
              display={"flex"}
              px={2}
              py={1}
              gap={2}
              alignItems={"center"}
              fontSize={"18px"}
              _hover={{
                background: "#F2F4F5"
              }}
              onClick={() => {
                onChooseFuseValue(fuse.search(res.item.label)[0].item.label);
              }}
            >
              <BsSearch color="gray.100" /> {res.item.label}
            </GridItem>
          ))}

          {searchFuse?.length === 0 && (
            <Text textAlign={"center"} fontSize={"xs"} color={"gray.500"}>
              Không tìm thấy kết quả phù hợp
            </Text>
          )}
        </SimpleGrid>
      )}
      {loading == "pending" && <Loading he="50px" />}
      {loading == "failed" && <Text>Lỗi server</Text>}
    </>
  );
};

export const SearchForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { major, city, method, channel } = router.query;
  const { loading, data, current } = useFilterCommon();
  const [searchText, setSearchText] = useState<string>(current.search_text);
  const [searchFuse, setSearchFuse] = useState<any[]>([]);
  const [isOpenFuse, setIsOpenFuse] = useState(false);
  const majors = data?.find((item) => item.unit === "major")?.items || [];

  useEffect(() => {
    setSearchText(current.search_text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current.search_text, router.query]);

  useEffect(() => {
    setIsOpenFuse(
      searchText !== "" && searchText !== deleteSpace(major as string)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    dispatch(
      searchFuse &&
        changeUnit({
          major: searchFuse[0]?.item?.label || "all"
        } as IFilterCommonPayload)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFuse]);

  useEffect(() => {
    setIsOpenFuse(false);
    dispatch(
      changeUnit({
        major: deleteSpace(major as string) || "all",
        city: (city as string) || "all",
        method: (method as string) || "all",
        channel: (channel as string) || "all",
        search_text: major !== "all" ? deleteSpace(major as string) || "" : ""
      } as IFilterCommonPayload)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  useEffect(() => {
    dispatch(fetchFilterCommonThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SimpleGrid
        my="10px"
        columns={{ base: 7, lg: 10 }}
        gap={{ base: "10px", lg: "30px" }}
        bg={{ lg: "none", base: "white" }}
        borderRadius="6px"
      >
        <GridItem py={{ base: 2, lg: 0 }} colSpan={{ base: 5, lg: 9 }}>
          <SimpleGrid spacing={"4"} columns={{ base: 1, md: 2, lg: 4 }}>
            <Popover
              placement="bottom-start"
              isOpen={isOpenFuse}
              isLazy
              autoFocus={false}
              closeOnBlur={true}
            >
              <PopoverAnchor>
                <GridItem
                  p={{ lg: "5px 10px", base: "10px 10px" }}
                  bg="white"
                  display="flex"
                  alignItems={"center"}
                  borderRadius="6px"
                >
                  <BsSearch color="gray.100" />
                  <Input
                    ml="10px"
                    variant="unstyled"
                    placeholder="Nhập nội dung ngành nghề"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </GridItem>
              </PopoverAnchor>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                  <Text fontSize={"16px"} fontWeight={600} pb={2}>
                    Từ khóa gợi ý
                  </Text>
                </PopoverHeader>
                <PopoverBody>
                  <FuseSearch
                    data={majors}
                    searchText={searchText}
                    loading={loading}
                    searchFuse={searchFuse}
                    setSearchFuse={setSearchFuse}
                    onChooseFuseValue={(value) => {
                      setSearchText(value);
                      setIsOpenFuse(false);
                    }}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <GridItem
              p={"5px 10px"}
              bg="white"
              display={{ lg: "flex", base: "none" }}
              alignItems={"center"}
              borderRadius="6px"
            >
              <Options
                unit="city"
                placeholder="Địa điểm học"
                value={current.city}
                data={data}
                loading={loading}
                onChange={(value) => {
                  dispatch(changeUnit({ city: value } as IFilterCommonPayload));
                }}
              />
            </GridItem>
            <GridItem
              p={"5px 10px"}
              bg="white"
              display={{ lg: "flex", base: "none" }}
              alignItems={"center"}
              borderRadius="6px"
            >
              <Options
                placeholder="Phương thức tuyển sinh"
                unit="method"
                loading={loading}
                data={data}
                value={current.method}
                onChange={(value) =>
                  dispatch(
                    changeUnit({
                      method: value
                    } as IFilterCommonPayload)
                  )
                }
              />
            </GridItem>
            <GridItem
              p={"5px 10px"}
              bg="white"
              display={{ lg: "flex", base: "none" }}
              alignItems={"center"}
              borderRadius="6px"
            >
              <Options
                placeholder="Hình thức đào tạo"
                unit="channel"
                value={current.channel}
                loading={loading}
                onChange={(value) =>
                  dispatch(
                    changeUnit({ channel: value } as IFilterCommonPayload)
                  )
                }
                data={data}
              />
            </GridItem>
          </SimpleGrid>
        </GridItem>

        <GridItem
          display={"flex"}
          colSpan={{ base: 2, lg: 1 }}
          justifyContent="center"
          alignItems="center"
          borderRadius="6px"
          pr={{ base: 2, lg: 0 }}
          py={{ base: 2, lg: 0 }}
        >
          <BtnTheme
            as={Link}
            href={`/ket-qua-tim-kiem/?major=${toSlug({
              input: current.major
            })}&city=${current.city}&method=${current.method}&channel=${
              current.channel
            }`}
          >
            Tìm kiếm
          </BtnTheme>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid my="10px" columns={1} borderRadius="6px">
        <GridItem colSpan={1}>
          <Accordion
            borderTopColor={"#cfffe4"}
            borderBottomColor={"#cfffe4"}
            bg="gray"
            width={"100vw"}
            allowToggle
            display={{ lg: "none", base: "inline" }}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" color={"#00b14f"}>
                    Tìm kiếm nâng cao
                  </Box>
                  <AccordionIcon color={"#00b14f"} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid my="10px" columns={1} gap={"30px"}>
                  <GridItem colSpan={{ base: 1 }}>
                    <SimpleGrid
                      spacing={"4"}
                      columns={{ base: 1, md: 2, lg: 4 }}
                    >
                      <GridItem
                        p={"5px 10px"}
                        bg="white"
                        display="flex"
                        alignItems={"center"}
                        borderRadius="6px"
                      >
                        <Options
                          unit="area"
                          placeholder="Khu vực tuyển sinh"
                          value={current.city}
                          data={data}
                          loading={loading}
                          onChange={(value) => {
                            dispatch(
                              changeUnit({
                                city: value
                              } as IFilterCommonPayload)
                            );
                          }}
                        />
                      </GridItem>
                      <GridItem
                        p={"5px 10px"}
                        bg="white"
                        display="flex"
                        alignItems={"center"}
                        borderRadius="6px"
                      >
                        <Options
                          placeholder="Phương thức tuyển sinh"
                          unit="method"
                          loading={loading}
                          data={data}
                          value={current.method}
                          onChange={(value) =>
                            dispatch(
                              changeUnit({
                                method: value
                              } as IFilterCommonPayload)
                            )
                          }
                        />
                      </GridItem>
                      <GridItem
                        p={"5px 10px"}
                        bg="white"
                        display="flex"
                        alignItems={"center"}
                        borderRadius="6px"
                      >
                        <Options
                          placeholder="Hình thức đào tạo"
                          unit="channel"
                          value={current.channel}
                          loading={loading}
                          onChange={(value) =>
                            dispatch(
                              changeUnit({
                                channel: value
                              } as IFilterCommonPayload)
                            )
                          }
                          data={data}
                        />
                      </GridItem>
                    </SimpleGrid>
                  </GridItem>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

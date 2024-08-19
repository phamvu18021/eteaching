import { menus } from "@/router";
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

// interface INavItem {
//   title: string;
//   children?: Array<INavItem>;
//   path?: string;
// }

export const DesktopNav = () => {
  const linkColor = "#212f3f";
  const linkHoverColor = "#4D0070";
  const popoverContentBgColor = "white";
  const router = useRouter();

  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
      {menus.map((navItem) => (
        <Box key={navItem.title}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                px={2}
                href={navItem.path ?? "#"}
                fontSize={"15px"}
                fontWeight={600}
                color={
                  router.asPath === (navItem.path || "/")
                    ? linkHoverColor
                    : linkColor
                }
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor
                }}
              >
                {navItem.title}
              </Box>
            </PopoverTrigger>

            {navItem.childs && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"xs"}
              >
                <Stack>
                  {navItem.childs.map((child: any) => (
                    <Popover
                      trigger={"hover"}
                      key={child.title}
                      placement={"right-start"}
                    >
                      <PopoverTrigger>
                        <Stack>
                          <DesktopSubNav key={child.title} {...child} />
                        </Stack>
                      </PopoverTrigger>

                      {child && child.childs2 && (
                        <PopoverContent
                          border={0}
                          boxShadow={"xl"}
                          bg={popoverContentBgColor}
                          p={4}
                          rounded={"xl"}
                          minW={"xs"}
                        >
                          <Stack>
                            {child.childs2.map((child2: any) => (
                              <DesktopSubNav key={child2.title} {...child2} />
                            ))}
                          </Stack>
                        </PopoverContent>
                      )}
                    </Popover>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export const DesktopSubNav = ({
  title,
  path
}: {
  title: string;
  path: string;
}) => {
  return (
    <Box
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "#eee" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color={"#212f3f"}
            _groupHover={{ color: "#4D0070" }}
            fontWeight={600}
            fontSize={"14px"}
          >
            {title}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#4D0070"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Box>
  );
};

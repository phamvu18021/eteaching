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

interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const DesktopNav = () => {
  const linkColor = "#212f3f";
  const linkHoverColor = "#00b14f";
  const popoverContentBgColor = "white";
  const router = useRouter();

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      {menus.map((navItem) => (
        <Box key={navItem.title}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                href={navItem.path ?? "#"}
                fontSize={"14px"}
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
                minW={"sm"}
              >
                <Stack>
                  {navItem.childs.map((child) => (
                    <DesktopSubNav key={child.title} {...child} />
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

export const DesktopSubNav = ({ title, path }: INavItem) => {
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
            _groupHover={{ color: "#00b14f" }}
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
          <Icon color={"#00b14f"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Box>
  );
};

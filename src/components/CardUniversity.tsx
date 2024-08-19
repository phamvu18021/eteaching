import { Box, Divider, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const CardUniversity = ({
  name,
  code,
  description
}: {
  name: string;
  code: string;
  description: string;
}) => {
  return (
    <>
      <Box as={Link} href={`/tin-diem-chuan-truong/${description}`}>
        <Box
          boxShadow={"0 1px 2px rgba(0,0,0,.15)"}
          border={"1px solid #f7f7f7"}
          rounded={"md"}
          p={4}
          _hover={{ bg: "#f5f7fa" }}
          cursor={"pointer"}
        >
          <HStack>
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              color={"#4f4f4f"}
            >
              {code}
            </Text>
            <Divider color={"#959ea9"} h={"20px"} orientation="vertical" />
            <Text fontWeight={600} color={"#4f4f4f"}>
              {name}
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

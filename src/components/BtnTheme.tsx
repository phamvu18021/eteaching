import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";

interface IBtnTheme extends ButtonProps {
  href?: string;
}

export const BtnTheme = (props: IBtnTheme) => {
  const { children, href, ...args } = props;
  return (
    <Button
      padding={"12px 20px"}
      color={"#e7d83b"}
      rounded={"sm"}
      borderRadius={"4px"}
      bg={"#690097"}
      target="_blank"
      _hover={{
        background: "#A400ED"
      }}
      fontWeight={400}
      href={href}
      {...args}
    >
      {children}
    </Button>
  );
};

export const BtnQuiz = (props: ButtonProps & { href?: string }) => {
  const { href, children, ...args } = props;
  return (
    <Button
      padding={"15px 20px"}
      color={"white"}
      fontSize={"18px"}
      rounded={"sm"}
      borderRadius={"4px"}
      {...args}
      as={Link}
      href={href}
      bg={"#690097"}
      _hover={{
        background: "8800BA"
      }}
      fontWeight={400}
    >
      {children}
    </Button>
  );
};

export const BtnCircle = (props: ButtonProps) => {
  const { children, ...args } = props;

  return (
    <Button
      w={"40px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"purple.500"}
      // bg={"green.500"}
      rounded={"full"}
      fontSize={"1.5rem"}
      _hover={{ bg: "purple.400", color: "white" }}
      _disabled={{
        cursor: "not-allowed",
        bg: "gray.100",
        color: "gray.200",
        border: "1px solid",
        borderColor: "gray.200"
      }}
      {...args}
    >
      {children}
    </Button>
  );
};

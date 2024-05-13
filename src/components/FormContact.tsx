"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Loading } from "./Loading";

export const SendSheets = ({ title }: { title: string }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    SelectedOption: ""
  });
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message?: string;
  }>({ success: false });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (!submitStatus.success) {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || submitStatus.success) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzwGa6UcWuhhJ5DGxUPgENcXI1IEWGnnX0i95X0yx-TrlfvGBdj8K7_m4-Q8ttbVtD0ww/exec",
        {
          method: "POST",
          body: new FormData(e.currentTarget)
        }
      );
      if (response.ok) {
        setSubmitStatus({ success: true });
        setIsLoading(false);
        e.currentTarget?.reset(); // Reset the form
      } else {
        throw new Error("Úi có lỗi!");
      }
    } catch (error: any) {
      setIsLoading(false);
      setSubmitStatus({ success: false, message: "Úi có lỗi!" });
    }
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (submitStatus.success) {
      e.preventDefault();
    }
  };
  return (
    <Box bg={"white"} rounded={"xl"} px={"24px"} py={"24px"} h={"max-content"}>
      <form onSubmit={submitStatus.success ? undefined : handleSubmit}>
        <Heading
          as={"h2"}
          size={"lg"}
          textAlign={"center"}
          pb={"24px"}
          color={"#00b14f"}
        >
          {!isLoading && submitStatus.message
            ? submitStatus.message
            : submitStatus.success
            ? "Đăng ký thành công"
            : title || "Đăng ký nhận tư vấn"}
        </Heading>
        <Flex>
          <Input
            type="email"
            placeholder="Nhập Email của bạn"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            size="md"
            disabled={submitStatus.success}
            bgColor={"#edf2f7"}
          />
        </Flex>
        <Flex mt={4}>
          <Input
            type="text"
            placeholder="Nhập Họ và Tên"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            size="md"
            disabled={submitStatus.success}
            bgColor={"#edf2f7"}
          />
        </Flex>
        <Flex mt={4}>
          <Input
            type="number"
            placeholder="Nhập Số điện thoại"
            id="phone"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            required
            size="md"
            disabled={submitStatus.success}
            bgColor={"#edf2f7"}
          />
        </Flex>
        <Flex mt={4}>
          <Select
            placeholder="Chọn khoá học"
            id="selectedOption"
            name="SelectedOption"
            value={formData.SelectedOption}
            onChange={handleChange}
            required
            size="md"
            disabled={submitStatus.success}
            bgColor={"#edf2f7"}
          >
            <option value="Luật">Luật</option>
            <option value="Kế toán">Kế toán</option>
            <option value="Tài chính ngân hàng">Tài chính ngân hàng</option>
          </Select>
        </Flex>
        <Flex mt={4}>
          <Button
            bgGradient={
              submitStatus.success
                ? "linear-gradient(90deg,#13C964,#13C964)"
                : "linear-gradient(90deg,#047E3C,#13C964)"
            }
            fontSize="md"
            fontWeight="bold"
            type="submit"
            disabled={submitStatus.success}
            isLoading={isLoading}
            onClick={handleButtonClick}
            _hover={{
              bgImage: "linear-gradient(90deg,#13C964,#047E3C);"
            }}
            transform={"all 0.5s"}
            w={"full"}
            mt={"24px"}
            color={"white"}
          >
            {submitStatus.success ? <FaCheck /> : "Đăng ký"}
          </Button>
        </Flex>
        <Text
          mt="15px"
          textAlign={"center"}
          fontSize={".7rem"}
          fontWeight={"bold"}
        >
          * Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm (trong vòng
          24h)
        </Text>
      </form>
    </Box>
  );
};

const comonForm = ({ id, href }: { id: string; href: string }) => {
  const generateMatch = ({ utm, value }: { utm: string; value?: string }) => {
    const valueCur = value || "=([^;]+)";
    const matchers = document.cookie.match(new RegExp(utm + valueCur));
    return matchers ? matchers : [];
  };

  let r =
    window.document.referrer != ""
      ? window.document.referrer
      : window.location.origin;
  const regex = /(https?:\/\/.*?)\//g;
  const furl = regex.exec(r);
  r = furl ? furl[0] : r;
  const f = document.createElement("iframe");
  const url_string = new URLSearchParams(window.location.search);

  if (
    (!url_string.has("utm_source") || url_string.get("utm_source") == "") &&
    generateMatch({ utm: "utm_source" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_source" })[0];
  } else {
    r +=
      url_string.get("utm_source") != null
        ? "&utm_source=" + url_string.get("utm_source")
        : "";
  }
  if (
    (!url_string.has("utm_campaign") || url_string.get("utm_campaign") == "") &&
    generateMatch({ utm: "utm_campaign" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_campaign" })[0];
  } else {
    r +=
      url_string.get("utm_campaign") != null
        ? "&utm_campaign=" + url_string.get("utm_campaign")
        : "";
  }
  if (
    (!url_string.has("utm_medium") || url_string.get("utm_medium") == "") &&
    generateMatch({ utm: "utm_medium" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_medium" })[0];
  } else {
    r +=
      url_string.get("utm_medium") != null
        ? "&utm_medium=" + url_string.get("utm_medium")
        : "";
  }
  if (
    (!url_string.has("utm_content") || url_string.get("utm_content") == "") &&
    generateMatch({ utm: "utm_content" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_content" })[0];
  } else {
    r +=
      url_string.get("utm_content") != null
        ? "&utm_content=" + url_string.get("utm_content")
        : "";
  }
  if (
    (!url_string.has("utm_term") || url_string.get("utm_term") == "") &&
    generateMatch({ utm: "utm_term" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_term" })[0];
  } else {
    r +=
      url_string.get("utm_term") != null
        ? "&utm_term=" + url_string.get("utm_term")
        : "";
  }
  if (
    (!url_string.has("utm_user") || url_string.get("utm_user") == "") &&
    generateMatch({ utm: "utm_user" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_user" })[0];
  } else {
    r +=
      url_string.get("utm_user") != null
        ? "&utm_user=" + url_string.get("utm_user")
        : "";
  }
  if (
    (!url_string.has("utm_account") || url_string.get("utm_account") == "") &&
    generateMatch({ utm: "utm_account" }) != null
  ) {
    r += "&" + generateMatch({ utm: "utm_account" })[0];
  } else {
    r +=
      url_string.get("utm_account") != null
        ? "&utm_account=" + url_string.get("utm_account")
        : "";
  }
  r += "&full_url=" + encodeURIComponent(window.location.href);
  r += "&full_url=" + encodeURIComponent(window.location.href);
  f.setAttribute("src", href + r);
  f.style.width = "100%";
  f.style.height = "400px";
  f.setAttribute("frameborder", "0");
  f.setAttribute("marginheight", "0");
  f.setAttribute("marginwidth", "0");
  const s = document.getElementById(id);

  if (!s?.hasChildNodes()) s?.appendChild(f);
};

export const FormPoup = ({
  title,
  id,
  href
}: {
  title?: string;
  id?: string;
  href?: string;
}) => {
  useEffect(() => {
    id &&
      href &&
      comonForm({
        id,
        href
      });
  }, [href, id]);

  return (
    <Box minH={"45vh"}>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"#00b14f"}
          pb={"16px"}
        >
          {title}
        </Heading>
      )}

      <div id={id} />
    </Box>
  );
};

export const FormMain = ({ title }: { title?: string }) => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-main`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href, isLoading]);
  useEffect(() => {
    comonForm({
      id,
      href
    });
  }, [isLoading, id, href]);
  return (
    <>
      {title && (
        <Heading
          as={"h2"}
          size={{ base: "md", md: "lg" }}
          textAlign={"center"}
          color={"#00b14f"}
          pb={"16px"}
        >
          {title}
        </Heading>
      )}
      {isLoading && <Loading he={"38vh"} />}
      {!isLoading && <div id={id} />}
    </>
  );
};

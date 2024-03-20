"use client";

import { useModal } from "@/components/ModalContext";
import { useEffect } from "react";
import { AdmissionsNews } from "./AdmissionsNews";
import { Banner } from "./Banner";
import { Benefit } from "./Benefit";
import { Consulting } from "./Consulting";
import { Contact } from "./Contact";
import { LastestPost } from "./LastestPost";
import { TopBranch } from "./TopBranch";
import { TopSchool } from "./TopSchool";

export const Home = () => {
  const { isOpen, onOpen } = useModal();
  useEffect(() => {
    setTimeout(() => {
      !isOpen && onOpen && onOpen();
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Banner />
      <Benefit />
      <AdmissionsNews />
      <Consulting />
      <TopBranch />
      <TopSchool />
      <Contact />
      <LastestPost />
    </>
  );
};

"use client";

import { useModal } from "@/components/ModalContext";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <p>Loading...</p>
});

const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit), {
  loading: () => <p>Loading...</p>
});

const AdmissionsNews = dynamic(
  () => import("./AdmissionsNews").then((mod) => mod.AdmissionsNews),
  {
    loading: () => <p>Loading...</p>
  }
);

const Consulting = dynamic(
  () => import("./Consulting").then((mod) => mod.Consulting),
  {
    loading: () => <p>Loading...</p>
  }
);

const TopBranch = dynamic(
  () => import("./TopBranch").then((mod) => mod.TopBranch),
  {
    loading: () => <p>Loading...</p>
  }
);

const TopSchool = dynamic(
  () => import("./TopSchool").then((mod) => mod.TopSchool),
  {
    loading: () => <p>Loading...</p>
  }
);

const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact), {
  loading: () => <p>Loading...</p>
});

const LastestPost = dynamic(
  () => import("./LastestPost").then((mod) => mod.LastestPost),
  {
    loading: () => <p>Loading...</p>
  }
);

export const Home = () => {
  const { isOpen, onOpen } = useModal();
  const [home_content, setHomeContent] = useState<any>(null);

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setHomeContent(data?.contentPage[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getHomeContent();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      !isOpen && onOpen && onOpen();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner banner={home_content?.acf?.banner} />
      <Benefit benefit={home_content?.acf?.benefit} />
      <AdmissionsNews admissonsTitle={home_content?.acf?.title_admisson} />
      <Consulting consulting={home_content?.acf?.consulting} />
      <TopBranch topBranch={home_content?.acf?.top_major} />
      <TopSchool topSchool={home_content?.acf?.top_university} />
      <Contact contact={home_content?.acf?.contact} />
      <LastestPost />
    </>
  );
};

"use client";

import { TFilterHomepageUnit } from "@/interfaces/filterHompage";
import { Box, GridItem, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef, useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import "swiper/css";
import { Swiper } from "swiper/react";
import { BtnCircle } from "./BtnTheme";

const StyledSwiper = styled(Swiper)`
.swiper {
  width:  150%;
  height: 100%;
}

.swiper-slide {
  text-align: center;s
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: start;
  align-items: center;
  width: auto;
}
`;

export const HorizontalSlide = ({
  children,
  onNext,
  onPrev,
  onReset,
  unit
}: {
  children: ReactNode;
  onNext?: () => void;
  onPrev?: () => void;
  onReset?: () => void;
  unit?: TFilterHomepageUnit;
}) => {
  const swiperRef = useRef<any>(null);
  const [key, setKey] = useState<number>(0);

  const next = () => {
    if (swiperRef.current) {
      let swiper = swiperRef.current.swiper;
      swiper.slideNext();
    }
    onNext && onNext();
  };
  const prev = () => {
    if (swiperRef.current) {
      let swiper = swiperRef.current.swiper;
      swiper.slidePrev();
    }

    onPrev && onPrev();
  };
  const reset = () => {
    if (swiperRef.current) {
      let swiper = swiperRef.current.swiper;
      swiper.slideTo(0);
      setKey((prevKey) => prevKey + 1);
    }

    onReset && onReset();
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);

  return (
    <GridItem
      colSpan={{ base: 1, lg: 7 }}
      display={{ lg: "flex", base: "none" }}
      flexDirection={"row"}
    >
      <Box
        display={{ lg: "flex", base: "none" }}
        justifyContent={"flex-start"}
        alignItems={"center"}
        px={2}
        onClick={prev}
      >
        <BtnCircle border={"1px solid #690097"}>
          <Icon as={MdOutlineNavigateBefore} w={"20px"} height={"20px"} />
        </BtnCircle>
      </Box>
      <StyledSwiper
        key={key}
        ref={swiperRef}
        slidesPerView={"auto"}
        spaceBetween={5}
        className="mySwiperFil"
      >
        {children}
      </StyledSwiper>

      <Box
        pl={2}
        display={{ lg: "flex", base: "none" }}
        justifyContent={"flex-end"}
        alignItems={"center"}
        onClick={() => next()}
      >
        <BtnCircle border={"1px solid #690097"}>
          <Icon as={MdOutlineNavigateNext} w={"20px"} height={"20px"} />
        </BtnCircle>
      </Box>
    </GridItem>
  );
};

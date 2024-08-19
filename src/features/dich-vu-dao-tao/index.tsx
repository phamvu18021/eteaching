"use client";

import { Banner } from "./Banner";
import { Branch } from "./Branch";
import { ListCourse } from "./ListCourse";

export const TrainingServices = () => {
  return (
    <>
      <Banner />
      <Branch />
      <ListCourse type="long" />
      <ListCourse type="short" />
    </>
  );
};

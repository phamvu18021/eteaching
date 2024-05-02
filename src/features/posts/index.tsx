"use client";

import { videos } from "@/dataVideo";
import { AllPosts } from "./AllPosts";
import { ConsultingPosts } from "./ConsultingPosts";
import { LatestPosts } from "./LatestPosts";
import { MostSelectPosts } from "./MostSelectPosts";
import { VideoList } from "./VideoList";

export const Posts = () => {
  return (
    <>
      <LatestPosts />
      <ConsultingPosts />
      <MostSelectPosts />
      <VideoList videos={videos} />
      <AllPosts />
    </>
  );
};

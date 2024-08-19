"use client";

import { VideoCard } from "@/components/VideoCard";
import {
  AspectRatio,
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  TabList,
  Tabs
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SlControlPlay } from "react-icons/sl";
interface Video {
  id: string;
  title: string;
  embedCode: string;
}

interface VideoListProps {
  videos: Video[];
}

export const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const extractImageUrlFromEmbedCode = (embedCode: string): string | null => {
    const regex = /<iframe.*?src=['"](.*?)['"].*?>/g;
    const match = regex.exec(embedCode);
    if (match && match[1]) {
      const videoUrl = match[1];

      if (videoUrl.includes("youtube.com")) {
        const videoIdMatch =
          /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i.exec(
            videoUrl
          );
        const videoId = videoIdMatch ? videoIdMatch[1] : null;

        if (videoId) {
          return `/video-placeholder.jpg`;
        }
      }
    }
    return null;
  };

  useEffect(() => {
    if (videos.length > 0) {
      setSelectedVideo(videos[0]);
    }
  }, [videos]);

  return (
    <Container maxW={"6xl"} bg={"#202124"} pl={{ lg: 0 }}>
      <Heading color={"#fff"} fontSize={"sm"} p={4}>
        {" "}
        Watch now{" "}
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 3 }}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          {selectedVideo && (
            <AspectRatio
              maxW={{ lg: "780px" }}
              h={{ lg: "420px", md: "420px", base: "430px" }}
              ratio={1}
              py={{ base: 10 }}
              _before={{ pos: "relative", zIndex: "-1", height: "420px" }}
            >
              <Box
                dangerouslySetInnerHTML={{ __html: selectedVideo.embedCode }}
              />
            </AspectRatio>
          )}
        </GridItem>
        <GridItem>
          <Flex
            color={"#fff"}
            fontSize={"sm"}
            p={4}
            align={"center"}
            bg={"purple.500"}
            justifyContent={{ lg: "space-evenly", md: "flex-start" }}
          >
            <span style={{ fontSize: "20px", paddingRight: "4px" }}>
              {" "}
              <SlControlPlay />
            </span>
            {videos.length} danh sách video đang chờ phát
          </Flex>
          <Tabs>
            <TabList
              flexDirection={"column"}
              justifyContent={"flex-start"}
              overflowX={"auto"}
              maxH={{ lg: "370px", base: "200px" }}
              css={{
                "::-webkit-scrollbar": {
                  width: "5px"
                },
                "::-webkit-scrollbar-thumb": {
                  background: "#C1C1C1"
                },
                "::-webkit-scrollbar-track": {
                  background: "#b1b1b1"
                },
                borderColor: "#000"
              }}
            >
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={handleVideoClick}
                  extractImageUrlFromEmbedCode={extractImageUrlFromEmbedCode}
                />
              ))}
            </TabList>
          </Tabs>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

"use client";

import { Box, Flex, Image, Tab, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Video {
  id: string;
  title: string;
  embedCode: string;
  time?: string;
}

interface VideoCardProps {
  video: Video;
  // eslint-disable-next-line no-unused-vars
  onClick: (video: Video) => void;
  // eslint-disable-next-line no-unused-vars
  extractImageUrlFromEmbedCode: (embedCode: string) => string | null;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onClick,
  extractImageUrlFromEmbedCode
}) => {
  const imageUrl = extractImageUrlFromEmbedCode(video.embedCode);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <Tab
      onClick={() => {
        onClick(video);
        setSelectedVideo(video);
      }}
      justifyContent={"flex-start"}
      display={"flex"}
      _selected={{
        borderBottom: "none",
        backgroundColor: selectedVideo === video ? "#b1b1b1" : "initial",
        borderLeft: selectedVideo === video ? "4px solid #2b6cb0" : "initial"
      }}
    >
      <Flex>
        <Box width={"95px"} height={"45px"}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={video.title}
              objectFit={"cover"}
              width={"95px"}
              height={"45px"}
              pr={4}
            />
          )}
        </Box>
      </Flex>
      <Flex flexDirection={"column"}>
        <Text fontSize={"11px"} color={"#fff"} textAlign={"left"}>
          {video.title}
        </Text>
        <Text
          color={"#fff"}
          fontSize={"10px"}
          textAlign={"left"}
          fontStyle="italic"
        >
          {video.time && `  ${video.time}`}
        </Text>
      </Flex>
    </Tab>
  );
};

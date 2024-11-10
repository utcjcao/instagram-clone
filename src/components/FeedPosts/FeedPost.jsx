import React from "react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile}></PostHeader>
      <Box my={2} borderRadius={4} overflow="hidden">
        <Image src={post.imageURL} alt={"FEED POST IMG"}></Image>
      </Box>
      <PostFooter post={post} creatorProfile={userProfile}></PostFooter>
    </>
  );
};

export default FeedPost;

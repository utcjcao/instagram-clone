import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure;();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("")
  }
  return (
    <Box mb={10} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={4} w ={"full"} pt={0} mb={2} mt={4}>
            <Box onClick={handleLikePost} cursor={"pointer"}fontSize={18}>
                {!isLiked ? <NotificationsLogo/> : <UnlikeLogo />}
            </Box>
            <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
                <CommentLogo/>
            </Box>
        </Flex>
        <Text fontSize={"sm"} fontWeight={600}>
            {likes} likes
        </Text>
        {isProfilePage && ()}
    </Box>
  )
};

export default PostFooter;

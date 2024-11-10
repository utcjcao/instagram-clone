import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { useState } from "react";
import { firestore } from "../Firebase";
import usePostStore from "../storage/postStore";

const useCommentPost = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const addComment = usePostStore((state) => state.addComment);

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) {
      return;
    }
    if (!authUser) {
      showToast("Error", "not logged in", "error");
      return;
    }
    setIsCommenting(true);
    const newComment = {
      comment,
      createdAt: DataTransfer.now,
      createdBy: authUser.uid,
      postId,
    };
    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });
      addComment(postId, newComment);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };
};

export default useCommentPost;

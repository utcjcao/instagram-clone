import { React, useState } from "react";
import CommentButton from "./CommentButton";

const CommentForm = ({ imageId, userId }) => {
  const [comment, setComment] = useState("");

  return (
    <form>
      <input
        name="comment"
        onChange={(e) => setComment(e.target.value)}
        required
      />

      <CommentButton
        imageId={imageId}
        userId={userId}
        commentText={comment}
      ></CommentButton>
    </form>
  );
};

export default CommentForm;

import React from "react";

const CommentButton = ({ imageId, userId, commentText }) => {
  const addComment = async (imageId, userId, commentText) => {
    const imageDocRef = doc(firestore, "img_data", iamgeId);
    await updateDoc(imageDocRef, {
      comments: arrayUnion({ userId: userId, comment: commentText }),
    });
  };
  return <button onClick={addComment}>comment</button>;
};

export default CommentButton;

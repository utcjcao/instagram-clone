import React from "react";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { firestore } from "../Firebase";

const LikeButton = ({ imageId, userId }) => {
  const addLike = async (imageId, userId) => {
    const imageDocRef = doc(firestore, "img_data", imageId);
    await updateDoc(imageDocRef, { likes: arrayUnion(userId) });
  };
  return <button onClick={addLike(imageId, userId)}></button>;
};

export default LikeButton;

import { updateDoc, arrayUnion, arrayRemove, doc } from "firebase/firestore";
import { firestore } from "../../Firebase";
import { Comment } from "./Comment";

export class CommentRepository {
  async likeComment(img_id, comment_id, user_id) {
    try {
      const postRef = doc(firestore, "img_data", `${img_id}`);
      const postDoc = await getDoc(postRef);
      const comments = postDoc.data().comments;

      const commentIndex = comments.findIndex(
        (comment) => comment.comment_id === comment_id
      );

      if (commentIndex !== -1) {
        const commentToUpdate = comments[commentIndex];
        commentToUpdate.likeComment(user_id);
        await updateDoc(postRef, {
          [`comments.${commentIndex}.likes`]: arrayUnion(user_id),
        });
      } else {
        console.error("Comment not found");
      }
    } catch (e) {
      console.error("Error liking comment: ", e);
    }
  }

  async unlikeComment(img_id, comment_id, user_id) {
    try {
      const postRef = doc(firestore, "img_data", `${img_id}`);
      const postDoc = await getDoc(postRef);
      const comments = postDoc.data().comments;

      const commentIndex = comments.findIndex(
        (comment) => comment.comment_id === comment_id
      );

      if (commentIndex !== -1) {
        const commentToUpdate = comments[commentIndex];
        commentToUpdate.unlikeComment(user_id);
        await updateDoc(postRef, {
          [`comments.${commentIndex}.likes`]: arrayRemove(user_id),
        });
      } else {
        console.error("Comment not found");
      }
    } catch (e) {
      console.error("Error liking comment: ", e);
    }
  }
}

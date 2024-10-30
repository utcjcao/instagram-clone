import { updateDoc, arrayUnion, arrayRemove, doc } from "firebase/firestore";
import { firestore } from "../../Firebase";
import { Comment } from "./Comment";

export class CommentRepository {
  async likeComment(commentId, userId) {
    try {
      const commentRef = doc(firestore, "comments", `${commentId}`);
      await updateDoc(commentRef, {
        likes: arrayUnion(userId),
      });
    } catch (e) {
      console.error("Error liking comment: ", e);
    }
  }

  async unlikeComment(commentId, userId) {
    try {
      const commentRef = doc(firestore, "comments", `${commentId}`);
      await updateDoc(commentRef, {
        likes: arrayRemove(userId),
      });
    } catch (e) {
      console.error("Error unliking comment: ", e);
    }
  }
}

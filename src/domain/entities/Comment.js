export class Comment {
  constructor({ comment_id, user_id, commentText, timestamp, likes = [] }) {
    this.comment_id = comment_id;
    this.user_id = user_id;
    this.commentText = commentText;
    this.timestamp = timestamp;
    this.likes = likes;
  }
  likeComment(user_id) {
    this.likes.push(user_id);
  }
  unlikeComment(user_id) {
    this.likes.filter((id) => id !== user_id);
  }
}

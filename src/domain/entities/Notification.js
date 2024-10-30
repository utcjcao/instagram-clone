export class Notification {
  constructor({ id, userId, type, postId, commentId, timestamp }) {
    this.id = id;
    this.userId = userId;
    this.type = type;
    this.postId = postId;
    this.commentId = commentId;
    this.timestamp = timestamp;
  }
}

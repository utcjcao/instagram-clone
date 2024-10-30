export class Comment {
  constructor({ comment_id, post_id, user_id, commentText, timestamp }) {
    this.comment_id = comment_id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.commentText = commentText;
    this.timestamp = timestamp;
  }
  likePost(follower_id) {
    this.likes.push(follower_id);
  }
  unlikePost(follower_id) {
    this.likes.filter((id) => id !== follower_id);
  }
  commentPost(follower_id, commentText) {
    this.comments.push({ user_id: follower_id, commentText: commentText });
  }
  updateCaption(caption) {
    this.caption = caption;
  }
}

import { times } from "lodash";

export class Post {
  constructor({
    filename,
    timeUploaded,
    url,
    user_id,
    img_id,
    caption,
    likes = [],
    comments = [],
  }) {
    this.filename = filename;
    this.timeUploaded = timeUploaded;
    this.url = url;
    this.user_id = user_id;
    this.img_id = img_id;
    this.caption = caption;
    this.likes = likes;
    this.comments = comments;
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

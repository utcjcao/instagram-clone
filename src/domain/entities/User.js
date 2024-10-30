export class User {
  constructor({
    username,
    email,
    bio,
    profilePicture,
    followers = [],
    following = [],
  }) {
    this.username = username;
    this.email = email;
    this.bio = bio;
    this.profilePicture = profilePicture;
    this.followers = followers;
    this.following = following;
  }
  addFollower(follower_id) {
    this.followers.push(follower_id);
  }
  removeFollower(follower_id) {
    this.followers.filter((id) => id !== follower_id);
  }
  editBio(new_bio) {
    this.bio = new_bio;
  }
  editUsername(new_username) {
    this.username = new_username;
  }
  changeProfilePicture(file) {
    this.profilePicture = file;
  }
  followUser(follower_id) {
    this.following.push(follower_id);
  }
  unfollowUser(follower_id) {
    this.following.filter((id) => id !== follower_id);
  }
}

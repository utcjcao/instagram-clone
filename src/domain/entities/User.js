export class User {
  constructor({
    id,
    username,
    email,
    bio,
    profilePicture,
    followers = [],
    following = [],
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.bio = bio;
    this.profilePicture = profilePicture;
    this.followers = followers;
    this.following = following;
  }
}

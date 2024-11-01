import { UserRepository } from "../../repositories/UserRepository";

export default function followUser(follower_id, followed_id) {
  // repo here
  const userRepository = new UserRepository();

  return async function execute() {
    try {
      const follower_user = userRepository.findUserProfile(follower_id);
      const followed_user = userRepository.findUserProfile(followed_id);
      if (!follower_user || !followed_user) {
        throw new Error("ids not valid!");
      }
      userRepository.followUser(follower_id, followed_id);
    } catch (error) {
      console.error("Failed to follow user:", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}

import { UserRepository } from "../../repositories/UserRepository";

export default function fetchUserFollowers() {
  // repo here
  const userRepository = new UserRepository();

  return async function execute() {
    try {
      // pre check for input validation, or if its already happened, etc
      const followers = await userRepository.getUserFollowers();
      if (!followers) {
        throw new Error("no followers");
      }
      return followers;
    } catch (error) {
      console.error("Failed to fetch current user followers:", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}

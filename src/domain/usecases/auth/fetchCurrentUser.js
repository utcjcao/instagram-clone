import { UserRepository } from "../../repositories/UserRepository";

export default function fetchCurrentUser() {
  // repo here
  const userRepository = new UserRepository();

  return async function execute() {
    try {
      // pre check for input validation, or if its already happened, etc
      const user = await userRepository.getCurrentUserProfile();
      if (!user) {
        throw new Error("no user logged in");
      }
      return user;
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}

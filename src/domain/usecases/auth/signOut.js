import { AuthRepository } from "../../repositories/AuthRepository";

export default function signOut() {
  // repo here
  const authRepository = new AuthRepository();

  return async function execute() {
    try {
      await authRepository.signOut();
    } catch (error) {
      console.error("Failed to sign out", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}

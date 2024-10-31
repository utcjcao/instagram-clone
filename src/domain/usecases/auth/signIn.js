import { AuthRepository } from "../../repositories/AuthRepository";

export default function signIn(email, password) {
  // repo here
  const authRepository = new AuthRepository();

  return async function execute() {
    try {
      if (!email || !password) {
        throw new Error("field(s) are empty");
      }
      const user = await authRepository.signIn(email, password);
      if (!user) {
        throw new Error("sign in failed");
      }
      return user;
    } catch (error) {
      console.error("Failed to sign in", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}

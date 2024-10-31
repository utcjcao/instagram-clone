import { AuthRepository } from "../../repositories/AuthRepository";

export default function signUp(email, password) {
  // repo here
  const authRepository = new AuthRepository();

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validatePassword(password) {
    return password.length >= 6;
  }

  return async function execute() {
    try {
      if (!validateEmail(email)) {
        throw new Error("email not valid");
      } else if (!validatePassword(password)) {
        throw new Error("user not valid");
      }
      const user = await authRepository.signUp(email, password);
      return user;
    } catch (error) {
      console.error("Failed to sign up", error);
      throw error;
    }

    // any extra stuff you might need here
  };
}

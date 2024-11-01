import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";

const useLogin = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      console.log("new error");
    }
    try {
      const userCredentials = signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCredentials) {
      }
    } catch (error) {}
  };
};

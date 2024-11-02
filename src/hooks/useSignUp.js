import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useSignUp = () => {
  const [createUser, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const signUp = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      console.log("error");
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };
};

export default useSignUp;

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../Firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import useAuthStore from "../storage/authStore";
import useShowToast from "./useShowToast";

const useLogin = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();
  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }
    try {
      const userCredentials = signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCredentials) {
        const docRef = doc(firestore, "users", userCredentials.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", "Please fill all the fields", error);
      return;
    }
  };
  return { loading, error, login };
};

export default useLogin;

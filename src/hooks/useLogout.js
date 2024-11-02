import { useSignOut } from "react-firebase-hooks/auth";
import { auth, firestore } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useLogin = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const logoutUser = useAuthStore((state) => state.logout);
  const logout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, error, logout };
};

export default useLogin;

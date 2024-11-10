import { useSignOut } from "react-firebase-hooks/auth";
import { auth, firestore } from "../Firebase";
import useAuthStore from "../storage/authStore";
import useShowToast from "./useShowToast";

const useLogin = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const logoutUser = useAuthStore((state) => state.logout);
  const showToast = useShowToast();
  const logout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { logout, isLoggingOut, error };
};

export default useLogin;

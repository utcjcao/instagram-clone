import { firestore } from "../Firebase";
import useShowToast from "./useShowToast";
import { useState } from "react";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const showToast = useShowToast();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);
      try {
        const q = query(
          collection(firestore, "users", where("username", "===", username))
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          return setUserProfile(null);
        }
        let userDoc = null;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [showToast, setUserProfile, username]);
  return { isLoading, userProfile, setUserProfile };
};
export default useGetUserProfileByUsername;

import { useEffect, useState } from "react";
import usePostStore from "../storage/postStore";
import useUserProfileStore from "../storage/useUserProfileStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../storage/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../Firebase";

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const showToast = useShowToast();
  const { setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserPosts = async () => {
      if (!userProfile) {
        return;
      }
      setPosts([]);
      setIsLoading(true);

      try {
        const q = query(
          collection(firestore, "posts", where("createdBy", "==", authUser.uid))
        );
        const querySnapshot = await getDocs(q);
        const userPosts = [];

        querySnapshot.forEach((doc) => {
          userPosts.push({ id: doc.id, ...doc.data() });
        });
        userPosts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(userPosts);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };
    if (authUser) {
      getUserPosts();
    }
  }, [authUser, showToast, setPosts, setUserProfile]);
  return { isLoading, posts };
};
export default useGetUserPosts;

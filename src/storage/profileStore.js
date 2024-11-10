import { create } from "zustand";

const useProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [post.id, ...state.userProfile.posts],
      },
    })),
  deletePost: (id) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [state.posts.filter((post) => post.id !== id)],
      },
    })),
}));
export default useProfileStore;

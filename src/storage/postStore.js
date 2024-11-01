import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, state.posts] })),
  deletePost: (id) =>
    set((state) => ({ posts: [state.posts.filter((post) => post.id !== id)] })),
  setPosts: (posts) => set({ posts }),
  addComment: (id, comment) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            comments: [...post.comments, comment],
          };
        }
        return post;
      }),
    })),
}));

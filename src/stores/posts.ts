import { defineStore } from "pinia";
import { ref } from "vue";
import { apiRequest } from "@/utils/api";
// import type { Post as PostApi } from "@/types/api";

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export const usePostsStore = defineStore("posts", () => {
  const posts = ref<Post[]>([]);

  const fetchPosts = async () => {
    const postsR = await apiRequest("/api/posts", "GET");
    console.log("postsR", postsR);
    posts.value = [];
  };

  return { posts, fetchPosts };
});

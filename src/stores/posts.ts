import { defineStore } from "pinia";
import { ref } from "vue";
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
    const response = await fetch("http://localhost:7007/api/posts");
    posts.value = await response.json();
  };

  return { posts, fetchPosts };
});

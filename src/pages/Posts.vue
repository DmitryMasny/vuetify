<template>
  <v-container>
    <PostsList :posts="posts" />
    <v-btn @click="$router.push('/create-post')">Create Post</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { usePostsStore } from "@/stores/posts";

export default defineComponent({
  setup() {
    const postsStore = usePostsStore();

    onMounted(() => {
      postsStore.fetchPosts();
    });

    return {
      posts: postsStore.posts,
    };
  },
});
</script>

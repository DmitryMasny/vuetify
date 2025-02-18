<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <template v-if="authStore.isAuthenticated">
          <PostsList :posts="posts" />
          <v-btn color="primary" @click="$router.push('/create-post')">
            Create Post
          </v-btn>
        </template>
        <template v-else>
          <v-btn color="primary" @click="$router.push('/login')">
            Register / Login
          </v-btn>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";

export default defineComponent({
  name: "Home",
  setup() {
    const authStore = useAuthStore();
    const postsStore = usePostsStore();

    onMounted(() => {
      postsStore.fetchPosts();
    });

    return {
      authStore,
      posts: postsStore.posts,
    };
  },
});
</script>

<style scoped>
.v-container {
  background-color: #f2f2f2;
}
</style>

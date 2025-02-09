<template>
  <v-container>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="post in posts" :key="post.id">
          <v-list-item-content>
            <v-list-item-title>{{ post.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ post.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-btn @click="$router.push('/create-post')">Create Post</v-btn>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';
// import useSWR from 'swr';


const fetchPosts = async () => {
  // Fetch posts from your API
  return await fetch('/api/posts').then(res => res.json());
};

export default {
  // setup() {
  //   const { data: posts } = useSWR('/api/posts', fetchPosts);
  //   return { posts };
  // },
};
</script>
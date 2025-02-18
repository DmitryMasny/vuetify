<template>
  <v-list>
    <v-list-item-group>
      <v-list-item v-for="post in posts" :key="post.id">
        <v-list-item-content>
          <v-list-item-title>{{ post.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ post.content }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Post } from "@/stores/posts";

export default defineComponent({
  name: "PostsList",
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
});
</script>

<template>
  <div>
    <h1 class="text-h4 mb-4">Управление постами</h1>
    <v-card>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Заголовок</th>
              <th>Автор</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in postsStore.posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.authorId }}</td>
              <td>
                <v-btn size="small" color="primary" class="mr-2">
                  Редактировать
                </v-btn>
                <v-btn size="small" color="error"> Удалить </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from "@/stores/posts";
import { onMounted } from "vue";

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.fetchPosts();
});
</script>

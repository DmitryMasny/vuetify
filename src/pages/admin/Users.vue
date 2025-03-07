<template>
  <div>
    <h1 class="text-h4 mb-4">Управление пользователями</h1>
    <v-card>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Роль</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
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
import { ref } from "vue";
import type { User } from "@/stores/auth";

const users = ref<User[]>([]);
import { onMounted } from "vue";

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:7007/api/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    users.value = await response.json();
  } catch (error) {
    console.error("Ошибка при получении списка пользователей:", error);
  }
});
</script>

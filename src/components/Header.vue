<template>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Мой блог</v-app-bar-title>

    <template v-slot:append>
      <v-btn
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.to"
        :color="item.color"
        @click="item.action && item.action()"
        class="mx-1"
      >
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped></style>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const authStore = useAuthStore();

const menuItems = computed(() => {
  const items = [
    { title: "Главная", to: "/", color: "primary" },
    { title: "Посты", to: "/posts", color: "primary" },
  ];

  if (!authStore.isAuthenticated) {
    items.push({ title: "Войти", to: "/login", color: "primary" });
  } else {
    if (authStore.user?.role === "ADMIN") {
      items.push({ title: "Админ панель", to: "/admin", color: "primary" });
    }
    items.push({ title: "Выйти", action: logout, color: "error" });
  }

  return items;
});

const logout = () => {
  authStore.logout();
};
</script>

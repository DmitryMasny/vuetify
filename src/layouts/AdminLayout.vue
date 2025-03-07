<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const menuItems = [
  {
    title: "Главная",
    to: "/admin",
    icon: "mdi-home",
  },
  {
    title: "Пользователи",
    to: "/admin/users",
    icon: "mdi-account-group",
  },
  {
    title: "Посты",
    to: "/admin/posts",
    icon: "mdi-post",
  },
  {
    title: "Настройки",
    to: "/admin/settings",
    icon: "mdi-cog",
  },
];
</script>

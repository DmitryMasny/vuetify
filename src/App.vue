<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { fetchUserData } from "@/utils/auth";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(async () => {
      // При запуске WebApp из Telegram
      const tg = window.Telegram?.WebApp;

      // Получаем данные пользователя
      const user = tg?.initDataUnsafe?.user;
      const userId = user?.id;
      console.log("user", user);
      console.log("tg", tg);
      // Отправляем на бэкенд
      // await fetch("/api/auth/tg", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ userId }),
      // });
      // const token = localStorage.getItem("jwt");
      // if (token) {
      //   try {
      //     await fetchUserData(token);
      //   } catch {
      //     // Обработка ошибок, если необходимо
      //   }
      // }
    });
  },
});
</script>

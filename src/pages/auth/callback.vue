<template>
  <div>Авторизация...</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AuthCallback",
  setup() {
    const router = useRouter();
    onMounted(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (token) {
        // Сохраняем токен, например, в localStorage или Vuex
        localStorage.setItem("jwt", token);
        // Обновляем состояние приложения или `store`
        // Перенаправляем пользователя на главную или другую страницу
        router.push("/");
      } else {
        console.error("Ошибка авторизации: токен не получен");
      }
    });
    return {};
  },
});
</script>

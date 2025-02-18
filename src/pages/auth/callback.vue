<template>
  <div>Авторизация...</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import { fetchUserData } from "@/utils/auth";

/** Страница авторизации через Google */
export default defineComponent({
  name: "AuthCallback",
  setup() {
    const router = useRouter();

    onMounted(async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (token) {
        localStorage.setItem("jwt", token);
        try {
          await fetchUserData(token);
          router.push("/");
        } catch {
          router.push("/login");
        }
      } else {
        console.error("Ошибка авторизации: токен не получен");
        router.push("/login");
      }
    });
    return {};
  },
});
</script>

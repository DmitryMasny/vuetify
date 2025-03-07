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
      const token = localStorage.getItem("jwt");
      if (token) {
        try {
          await fetchUserData(token);
        } catch {
          // Обработка ошибок, если необходимо
        }
      }
    });
  },
});
</script>

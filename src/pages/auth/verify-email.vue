<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { apiRequest, fetchUserData } from "@/utils";

export default defineComponent({
  data() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    const authStore = useAuthStore();

    return {
      code: "",
      valid: false,
      email,
      errorMessage: "",
      rules: {
        code: (v: string) => v?.length > 5 || "Введите код подтверждения",
      },
      setUser: authStore.setUser,
    };
  },
  methods: {
    clearErrors() {
      if (this.$refs.form) {
        (this.$refs.form as any).resetValidation();
      }
      this.errorMessage = "";
    },
    async submit() {
      if (!this.valid) {
        return;
      }

      if (!this.email) {
        return;
      }

      try {
        const response = await apiRequest("/api/auth/verify-code", "POST", {
          data: {
            email: this.email,
            code: this.code,
          },
        });
        if (response.token) {
          localStorage.setItem("jwt", response.token);
          await fetchUserData(response.token);
        }
        this.$router.push("/");
      } catch (error: any) {
        console.error("Registration failed:", { error });

        this.errorMessage = error?.message || "Ошибка при регистрации";
      }
    },
  },
});
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-6 full-width">
          <v-card-title class="text-h5 mb-4"> Введите код </v-card-title>

          <v-form ref="form" v-model="valid" validate-on="blur" @submit.prevent>
            <v-text-field
              v-model="code"
              :rules="[rules.code]"
              label="Код подтверждения"
              variant="filled"
              class="mb-2"
              @input="clearErrors"
            ></v-text-field>

            <v-alert
              v-if="errorMessage"
              variant="tonal"
              type="error"
              class="mb-4"
            >
              {{ errorMessage }}
            </v-alert>

            <v-btn
              block
              color="primary"
              size="large"
              :disabled="!valid"
              @click="submit"
              class="mb-3"
            >
              Отправить
            </v-btn>

            <p class="text-caption text-grey-darken-1 mt-2">
              Код был отправлен на {{ email }}
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

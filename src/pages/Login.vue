<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { apiRequest } from "@/utils";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();

    const isRegister = computed(() => !!route.query.registration);

    const toggleMode = () => {
      router.replace({
        query: {
          ...route.query,
          registration: isRegister.value ? undefined : "true",
        },
      });
    };

    return { isRegister, router, authStore, toggleMode };
  },
  data() {
    return {
      email: "",
      password: "",
      valid: true,
      errorMessage: "",
      rules: {
        required: (v: string) => !!v || "Обязательное поле",
        password: (v: string) => v?.length >= 6 || "Слишком простой пароль",
        email: (v: string) => /.+@.+\..+/.test(v) || "Введите корректный email",
      },
    };
  },
  methods: {
    clearErrors() {
      if (this.$refs.form) {
        (this.$refs.form as any).resetValidation();
      }
      this.errorMessage = "";
    },
    async loginWithEmail() {
      if (!this.valid) return;
      try {
        const response = await apiRequest("/api/auth/login", "POST", {
          data: {
            email: this.email.trim(),
            password: this.password,
          },
        });

        localStorage.setItem("jwt", response.token);
        this.router.push("/");
      } catch (error) {
        this.errorMessage = "Некорректные данные";
        console.error("Login failed:", error);
      }
    },

    async registerWithEmail() {
      if (!this.valid) return;

      const email = this.email.trim();

      try {
        await apiRequest("/api/auth/registration", "POST", {
          data: {
            email,
            password: this.password,
          },
        });

        this.router.push(`/auth/verify-email?email=${email}`);
      } catch (error: any) {
        console.error("Registration failed:", { error });

        this.errorMessage = error?.message || "Ошибка при регистрации";
      }
    },

    loginWithGoogle() {
      window.location.href = `${import.meta.env.VITE_BASE_URL}/api/auth/google`;
    },

    logout() {
      this.authStore.logout();
    },
  },
});
</script>

<template>
  <v-container>
    <v-card class="elevation-12 pa-6 full-width mt-6 mx-auto" max-width="480">
      <v-card-title class="text-h5 text-center mb-4">
        {{ isRegister ? "Зарегистрироваться" : "Войти в аккаунт" }}
      </v-card-title>

      <v-form ref="form" v-model="valid" validate-on="blur" @submit.prevent>
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="Email"
          prepend-inner-icon="mdi-email"
          variant="filled"
          class="mb-2"
          @input="clearErrors"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.password]"
          label="Пароль"
          prepend-inner-icon="mdi-lock"
          type="password"
          variant="filled"
          class="mb-4"
          @input="clearErrors"
        ></v-text-field>

        <v-alert v-if="errorMessage" variant="tonal" type="error" class="mb-4">
          {{ errorMessage }}
        </v-alert>

        <v-btn
          block
          color="primary"
          size="large"
          :disabled="!valid"
          @click="isRegister ? registerWithEmail() : loginWithEmail()"
          class="mb-3"
        >
          {{ isRegister ? "Зарегистрироваться" : "Войти" }}
        </v-btn>

        <div class="text-center my-3">
          <v-divider class="mb-3">
            <span class="text-medium-emphasis">или</span>
          </v-divider>
        </div>

        <v-btn
          block
          color="red"
          size="large"
          variant="elevated"
          @click="loginWithGoogle"
          class="mb-3"
        >
          <v-icon start>mdi-google</v-icon>
          Войти через Google
        </v-btn>

        <div class="text-center mt-4">
          <span class="text-medium-emphasis">{{
            isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"
          }}</span>
          <v-btn
            variant="text"
            color="primary"
            class="ml-2"
            @click="toggleMode"
          >
            {{ isRegister ? "Войти" : "Зарегистрироваться" }}
          </v-btn>
        </div>

        <div class="text-center mt-4" v-if="authStore.isAuthenticated">
          <v-btn variant="text" color="primary" class="ml-2" @click="logout">
            Выйти
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

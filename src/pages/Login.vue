<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-6 full-width">
          <v-card-title class="text-h5 text-center mb-4">
            {{ isRegister ? "Зарегистрироваться" : "Войти в аккаунт" }}
          </v-card-title>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="Email"
              prepend-inner-icon="mdi-email"
              variant="filled"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="[rules.required]"
              label="Пароль"
              prepend-inner-icon="mdi-lock"
              type="password"
              variant="filled"
              class="mb-4"
            ></v-text-field>

            <v-btn
              block
              color="primary"
              size="large"
              :disabled="!valid"
              @click="login"
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

            <v-btn
              block
              color="blue"
              size="large"
              variant="elevated"
              @click="loginWithVK"
              class="mb-3"
            >
              <v-icon start>mdi-vk</v-icon>
              Войти через VK
            </v-btn>

            <div class="text-center mt-4">
              <span class="text-medium-emphasis">Нет аккаунта?</span>
              <v-btn
                variant="text"
                color="primary"
                class="ml-2"
                @click="register"
              >
                {{ isRegister ? "Войти" : "Зарегистрироваться" }}
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      isRegister: false,
      rules: {
        required: (v: string) => !!v || "Обязательное поле",
        email: (v: string) => /.+@.+\..+/.test(v) || "Введите корректный email",
      },
    };
  },
  methods: {
    async login() {
      if (!(this.$refs.form as any).validate()) return;
      // Implement login logic
    },
    register() {
      if (this.isRegister) {
        this.isRegister = false;
      } else {
        this.isRegister = true;
      }
    },
    loginWithGoogle() {
      window.location.href = "http://localhost:7007/api/auth/google";
    },
    async loginWithVK() {
      // Implement VK login logic
    },
  },
});
</script>

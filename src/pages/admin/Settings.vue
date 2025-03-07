<template>
  <div>
    <h1 class="text-h4 mb-4">Настройки</h1>
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field label="Название сайта" v-model="settings.siteName" />
          <v-switch
            label="Включить регистрацию"
            v-model="settings.enableRegistration"
          />
          <v-btn color="primary"> Сохранить настройки </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const settings = ref({
  siteName: "",
  enableRegistration: false,
});
</script>

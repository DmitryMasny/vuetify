<script>
export default {
  data: () => ({
    items: [{ title: "Войти", to: "/login", color: "primary" }],
  }),
};
</script>

<template>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>

    <template v-slot:append>
      <v-btn class="icon-btn" color="primary">
        <v-icon icon="mdi-account"></v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped></style>

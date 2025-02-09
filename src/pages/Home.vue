<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-btn color="primary" @click="$router.push('/login')">Register / Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .v-container {
    background-color: #f2f2f2;
  }
  </style>
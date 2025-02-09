<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :rules="[rules.required]"
        label="Title"
        required
        solo
      ></v-text-field>
      <v-textarea
        v-model="text"
        :rules="[rules.required]"
        label="Text"
        required
        solo
      ></v-textarea>
      <v-file-input
        v-model="image"
        label="Upload Image"
        accept="image/*"
        solo
      ></v-file-input>
      <v-btn @click="createPost">Create Post</v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const title = ref('');
    const text = ref('');
    const image = ref(null);
    const valid = ref(false);
    const rules = {
      required: (v: any) => !!v || 'Required.',
    };

    const createPost = () => {
      // Implement post creation logic
    };

    return { title, text, image, valid, rules, createPost };
  },
};
</script>
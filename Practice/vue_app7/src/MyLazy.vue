<script setup>
import { ref } from 'vue';
const message = ref("");
</script>

<template>
  <div>
    <h1>v-model.lazy</h1>
    <input type="text" v-model.lazy="message" />
    <pre>[{{ message }}]</pre>
  </div>
</template>

<style scoped>
  div { margin: 1em; padding: 5px 30px; }
h1 { font-size: 20pt; margin: 4px; }
input { padding: 4px; }
</style>

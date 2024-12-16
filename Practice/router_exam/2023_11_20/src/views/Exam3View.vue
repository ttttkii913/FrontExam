<script setup>
import { ref } from 'vue';
const message = ref("");
import MyMessage from './MyMessage.vue';
</script>

<template>
  <div class="app">
    <h1>Exam3</h1>
    <div class="input-container">
      <input type="text" v-model="message" />
    </div>
    <MyMessage :message="message" />
  </div>
</template>

<style scoped>
.input-container {
  margin-bottom: 10px;
}

div.app { 
  width: 350px; min-height: 150px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}

</style>
<script setup>
import { ref } from 'vue';
const message = ref("좋은 아침");   // 초기값
console.log(message.value); // 반응형 객체의 초기값 좋은 아침 출력(위에서 선언함)
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <input type="text" v-model="message" />
  </div>
</template>

<style scoped>
  div { background-color: #f8f8f8; padding: 5px; 
    margin: 1em; text-align: center; }
  input { padding: 4px; }
</style>

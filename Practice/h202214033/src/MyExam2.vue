<script setup>
import { ref } from 'vue';
const message = ref("안녕하세요");   // 초기값
console.log(message.value); // 반응형 객체의 초기값 좋은 아침 출력(위에서 선언함)
</script>

<template>
  <div>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
  div { background-color: skyblue; padding: 1em;  }
  input { padding: 4px; }
</style>

<script setup>
import { ref } from 'vue';
import MyExam5Child from './MyExam5Child.vue'; 

const message = ref("안녕하세요"); 
</script>

<template>
  <div>
    <input type="text" v-model="message" /> 
    <MyExam5Child :message="message" /> 
  </div>
</template>

<style scoped>
  div { background-color: lightpink; padding: 1em; } 
  input { padding: 4px; }
</style>

<script setup>
import { ref } from 'vue';
const message = ref("안녕하세요")
</script>

<template>
  <div>
    <p><input type="text" v-model="message" /></p>
    <MyExam5Child :message="message"/>
</div>
</template>

<style scoped>
  div { margin: 1em; padding: 5px 30px; background-color: #fff3f3; }
  input { padding: 4px; }
</style>

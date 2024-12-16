<script setup>
import { defineProps } from 'vue';

// 부모 컴포넌트로부터 message를 props로 전달받음
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="box">
    <span>{{ message }}</span>
  </div>
</template>

<style scoped>
.box {
  background-color: rgb(253, 251, 124); /* 배경색 변경 */
  padding: 10px; 
  display: inline-block; 
  width: 300px; 
  height: 20px;
  border: 1px solid;
  text-align: center;
}
</style>

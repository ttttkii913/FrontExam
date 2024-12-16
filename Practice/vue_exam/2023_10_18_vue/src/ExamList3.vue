<script setup>
import { ref, computed } from 'vue';

// num의 초기값을 "0"으로 설정
const num = ref("");

// 색상 계산을 위한 computed 속성
const textColor = computed(() => {
  const value = parseFloat(num.value);
  if (value === 0) return 'black';
  return (value % 2 === 0 && !isNaN(value)) ? 'red' : 'blue';
});
</script>

<template>
  <div>
    <h1>exam3</h1>
    <input type="text" v-model="num" />
  </div>
  <div>
    <!-- computed 속성을 사용하여 동적으로 색상 지정 -->
    <span :style="{ color: textColor }">
      {{ num }}
    </span>
  </div>
</template>

<style scoped>
  div { background-color: #f8f8f8; padding: 5px 30px; margin:1em }
  input { padding: 4px; margin-right: 1em; display: inline-block; }
  span { display: inline-block; margin-right: 1em; }
</style>

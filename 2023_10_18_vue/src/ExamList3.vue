<script setup>
import { ref } from 'vue';

// num의 초기값을 "0"으로 설정
const num = ref("");
</script>

<template>
  <div>
    <h1>exam3</h1>
    <input type="text" v-model="num" />
  </div>
  <div>
    <!-- num 값에 따라 동적으로 색상을 지정 -->
    <span :style="{ color: parseFloat(num) > 0 ? 'blue' : parseFloat(num) < 0 ? 'red' : 'black' }">
      {{ num }}
    </span>
  </div>
</template>

<style scoped>
  div { background-color: #f8f8f8; padding: 1em;  }
  input { padding: 4px; margin-right: 1em; display: inline-block; }
  span { display: inline-block; margin-right: 1em; }
</style>

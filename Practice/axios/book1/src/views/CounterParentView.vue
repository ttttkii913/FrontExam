<script setup>
import CounterChild from './CounterChildView.vue'; // 자식 컴포넌트 import
import { useCounterStore } from '@/stores/counter'; // Pinia store 사용

const counterStore = useCounterStore(); // Pinia store 연결
</script>

<template>
  <div>
    <!-- 자식 컴포넌트 불러와서 출력 -->
    <CounterChild />

    <!-- 버튼 = 부모 컴포넌트에서 출력-->
    <button @click="counterStore.increment">++</button>
  </div>
</template>

<style scoped>
button { font-size: 14pt; padding: .2em 1em; }

</style>

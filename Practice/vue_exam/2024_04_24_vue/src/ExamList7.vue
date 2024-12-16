<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'step']);
const count = ref(0);
const inputValue = ref(props.step); // 초기값을 props.step으로 설정
</script>

<template>
  <div class="container">
    <p>{{ props.title }}</p>
    <p class="count">{{ count }}</p>
    <div class="input-container">
      <input type="number" v-model="inputValue" class="input"/>
      <button type="button" v-on:click="count += Number(inputValue)">++</button>
      <button type="button" v-on:click="count -= Number(inputValue)">--</button>
    </div>
  </div>
</template>

<style scoped>
.container { text-align: left; }
.count { color: blue; font-size: 15pt; }
.input-container { display: flex; gap: 5px; align-items: center; padding: 10px; margin-right: 15px;}
.input { width: 50px; }
</style>

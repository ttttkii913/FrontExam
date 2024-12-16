<script setup>
import { ref } from 'vue';

const props = defineProps(['title', 'step']);
const count = ref(0);

// 카운트를 0으로 설정하는 메서드
const resetCount = () => {
  count.value = 0;
};
</script>

<template>
  <div>
    <p>{{ props.title }}</p>
    <p class="count">{{ count }}</p>
    <div class="button-container">
      <button type="button" v-on:click="count += props.step">++</button>
      <button type="button" v-on:click="count -= props.step">--</button>
      <button type="button" v-on:click="resetCount">zero</button>
    </div>
  </div>
</template>

<style scoped>
div {  margin:1em; padding: 5px 30px;}
.count { color: blue; font-size: 15pt; }
.button-container { display: flex; gap: 5px; }
button { padding: 0.7em 1.5em; margin: 0; }
</style>

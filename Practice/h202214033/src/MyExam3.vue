<script setup>
import { ref } from 'vue';
const color = ref("yellow");
</script>

<template>
  <div class="row">
      <select v-model="color">
        <option value="yellow">노랑</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
      </select>
    </div>
    <div class="row">{{ color }}</div>
</template>

<style scoped>
  div { background-color: chartreuse; padding: 1em; }
</style>

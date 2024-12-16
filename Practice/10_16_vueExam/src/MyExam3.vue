<script setup>
import { ref } from 'vue';
const color = ref("yellow")
</script>

<template>
  <div>
    <p>
      <select v-model="color">
        <option value="yellow">노랑</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
      </select>
    </p>
    <p>{{ color }}</p>
</div>
</template>

<style scoped>
  div { margin: 1em; padding: 5px 30px; background-color: #efe; }
  select { padding: 4px; width: 180px; }
</style>

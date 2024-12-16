<script setup>
import { ref } from 'vue';
const visible = ref(true)
</script>

<template>
  <div>
    <p>
      <button @click="visible = true">show</button>
      <button @click="visible = false">hide</button>
      <span>{{ visible }}</span>
    </p>
    <p class="msg" v-show="visible">안녕하세요</p>
</div>
</template>

<style scoped>
  div { margin: 1em; padding: 5px 30px; background-color: #ffd; }
  button { width: 70px; height: 25px; margin-right: 5px; }
  span { margin-left: 20px; }
  p.msg { color: #d00; font-size: 13pt; }
</style>

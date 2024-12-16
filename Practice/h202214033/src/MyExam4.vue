<script setup>
import { ref } from 'vue'
const visible = ref(true) // 초기값을 true로 설정
</script>

<template>
  <div>
    <button @click="visible = true">show</button>
    <button @click="visible = false">hide</button>
    <span>{{ visible }}</span>
    <div id="hello" v-if="visible">
      안녕하세요 
    </div> 
    <br />
  </div>
</template>

<style scoped>
  div { background-color: yellow; color: red; padding: 1em;  }
  button { padding: 4px 10px; margin: 5px; }
  span {color:black; }
</style>

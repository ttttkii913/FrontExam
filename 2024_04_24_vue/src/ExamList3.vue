<script setup>
import { ref } from 'vue';
const list = ref([]);
const wordIndex = ref(0);

function remove(index) {
  if (confirm("삭제하시겠습니까?")) {
    list.value.splice(index, 1);
  }
}

function addWord() {
  wordIndex.value++;
  list.value.push(wordIndex.value);
}
</script>

<template>
  <div>
    <div>
      <span v-for="(s, index) in list" :key="s" @click="remove(index)">
        {{ s }}
      </span>
    </div>
    <button type="button" @click="addWord">추가</button>
  </div>
</template>

<style scoped>
span { 
  display: inline-block; 
  margin: 5px; 
  padding: 8px 15px; 
  border: 1px solid black; 
  cursor: pointer; 
}
button { 
  padding: 4px 10px; 
  margin: 5px; 
}
</style>

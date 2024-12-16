<script setup>
import { ref } from 'vue';

const list = ref(["1", "2", "3"]);
const word = ref(4);

function remove(index) {
  if (confirm("삭제하시겠습니까?")) {
    list.value.splice(index, 1);
  }
}

function addWord() {
  list.value.push(word.value.toString());
  word.value++;
}
</script>

<template>
  <h1>Exam1</h1>
  <span 
    v-for="(s, index) in list" 
    v-bind:key="s" 
    v-on:click="remove(index)">
    {{ s }}
  </span>
  <br>
  <input type="text" v-model="word" />
  <button type="button" @click="addWord">add</button>
</template>

<style scoped>
span:hover { 
  background-color: rgb(255, 255, 189) 
}
span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
input { padding: 4px; margin: 5px; }
button { padding: 4px 10px; margin: 5px; }
</style>
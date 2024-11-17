<template>
    <div class="app">
    ExamFourChild
    <br>
      <input v-model="word" />
      <button @click="sendWord">전달</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 부모로부터 전달받은 props 정의
  const props = defineProps(['addWord']);
  
  const word = ref("");
  
  function sendWord() {
    if (word.value) {
      props.addWord(word.value); // 부모의 addWord 메소드를 호출
      word.value = ""; // 입력 필드 비우기
    } else {
      alert("단어를 입력하세요.");
    }
  }
  </script>

<style scoped>
div.app { 
    background-color: lightyellow;
  width: 400px; height: 100px;
  margin: 1em auto; padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
input { padding: 4px; margin: 5px; }
button { padding: 4px 10px; margin: 5px; }
</style>
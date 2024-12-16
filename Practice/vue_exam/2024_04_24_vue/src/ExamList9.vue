<template>
    <div>
      <h1>test2</h1>
      <div>
        <span v-for="(num, index) in a" :key="index">
            {{ num }} 
        </span>
      </div>
      <div>
        <button @click="increase">++</button>
        <button @click="decrease">--</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const a = ref([0, 1, 2]); // 초기 배열

  
  const increase = () => {
    a.value.push(a.value.length); // 배열에 숫자 추가
  };
  
  const decrease = () => {
    a.value.pop(); // 배열에서 마지막 숫자 제거
  };
  </script>
  
  <style scoped>
  div { margin:1em; padding: 5px 30px; background-color: aliceblue;}

    span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
input { padding: 4px; margin: 5px; }
button { padding: 4px 10px; margin: 5px; }
  </style>
  
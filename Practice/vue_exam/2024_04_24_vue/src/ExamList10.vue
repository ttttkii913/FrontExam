<template>
    <div class="container">
      <h1>test1</h1>
      <div>
        <input type="number" v-model.number="value1" placeholder="첫 번째 숫자" />
        <br />
        <input type="number" v-model.number="value2" placeholder="두 번째 숫자" />
      </div>
      <div>
        <button @click="multiply">곱하기</button>
        <button @click="divide">나누기</button>
      </div>
      <hr />
      <p>{{ result }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const value1 = ref(0); // 첫 번째 입력값
  const value2 = ref(0); // 두 번째 입력값
  const result = ref(0); // 결과값
  
  const multiply = () => {
    result.value = value1.value * value2.value; // 곱하기
  };
  
  const divide = () => {
    // 나누기 (0으로 나누는 경우 처리)
    result.value = value2.value !== 0 ? value1.value / value2.value : '무한대';
  };
  </script>
  
  <style scoped>
  div.container { margin:1em; padding: 5px 30px; background-color: aliceblue;}
  span { display: inline-block; margin: 5px; padding: 8px 15px; 
  border: 1px solid black; cursor: pointer; }
input { padding: 4px; margin: 5px; }
button { padding: 4px 10px; margin: 5px; }
  </style>
  
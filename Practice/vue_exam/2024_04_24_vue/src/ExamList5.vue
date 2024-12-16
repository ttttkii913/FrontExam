<script setup>
import { ref } from 'vue';

const width = ref(350); // 초기값: 350
const height = ref(200); // 초기값: 200
</script>

<template>
    <div class="container" 
      :style="{ width: width + 'px', height: height + 'px' }">
      <h2>exam9</h2>
      <div class="bigbox">
        <div>
          <label for="width">넓이: </label>
          <input type="number" id="width" v-model="width" />
          <br />
        </div>
        <div>
          <label for="height">높이: </label>
          <input type="number" id="height" v-model="height" />
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  .container {
    margin-left: 20em;
    margin-top: 1em;
    padding: 1em;
    border: 1px solid #000;
    transition: all 0.3s; /* 부드러운 크기 변화를 위해 추가 */
  }
  
  .bigbox {
    margin-top: 1.5em;
  }
label { margin-right: 7px;}
  input { margin-bottom: 18px; padding: 3px;}
  </style>
  
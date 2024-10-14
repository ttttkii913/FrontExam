<script setup>
import { ref } from 'vue'
const name = ref("");
const gender = ref("");
const blood = ref("");
</script>

<template>
  <div class="MyForm">
    <h1>exam1</h1>
    <div class="row">
      <label>이름: <input type="text" v-model="name" /></label>
    </div>
    <div class="row">
        혈액형:
      <select v-model="blood">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="AB">AB</option>
        <option value="O">O</option>
      </select>
    </div>
    <div class="row">
      <label>성별: <input type="radio" v-model="gender" value="남" /> 남자</label>
      <label><input type="radio" v-model="gender" value="여" /> 여자</label>
    </div>
    <hr />
    <div class="row">name: {{ name }}</div>
    <div class="row">blood: {{ blood }}</div>
    <div class="row">gender: {{ gender }}</div>
  </div>
</template>

<style scoped>
div.MyForm { padding: 1em; background-color: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type=radio]) { margin-right: 1em; }
select { padding: 4px; width: 100px; }
</style>


  
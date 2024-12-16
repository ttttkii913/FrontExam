<script setup>
import { ref } from 'vue'
const enabled = ref(true);
const studentNo = ref("202214033");
const name = ref("유하영");
const department = ref("소프"); // value 값이 들어가야됨 - 초기값으로
const state = ref("재학");
</script>

<template>
  <div class="MyForm">
    <div class="row">
      <label><input type="checkbox" v-model="enabled" /> 활성화</label>
    </div>
    <div class="row">
      <label><input type="text" v-model="studentNo" value="학번" /> </label>
      <label><input type="text" v-model="name" value="이름" /> </label>
    </div>
    <div class="row">
      <select v-model="department">
        <option value="소프">소프트웨어공학</option>
        <option value="컴공">컴퓨터공학</option>
        <option value="정통">정보통신공학</option>
      </select>
    </div>
    <div class="row">
      <label><input type="radio" v-model="state" value="재학" />재학</label>
      <label><input type="radio" v-model="state" value="휴학" />휴학</label>
      <label><input type="radio" v-model="state" value="졸업" />졸업</label>
    </div>
    <hr />
    <div class="row">활성: {{ enabled }}</div>
    <div class="row">학번: {{ studentNo }}</div>
    <div class="row">이름: {{ name }}</div>
    <div class="row">소속: {{ department }}</div>
    <div class="row">학적 상태: {{ state }}</div>
  </div>
</template>

<style scoped>
div.MyForm { padding: 5px 30px; margin: 1em; background-color: #f8f8f8; }
div.row { margin: 0.7em; }
label:has(input[type=radio]) { margin-right: 1em; }
select { padding: 4px; width: 100px; }
</style>


  
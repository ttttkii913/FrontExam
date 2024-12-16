<script setup>
import { ref } from 'vue';
const message = ref("");
</script>

<template>
  <div class="main">
    <h2>Exam3</h2>
    <div class="input-container">
      <input type="text" v-model="message" />
    </div>
    <div class="box">
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<style scoped>


.input-container {
  margin-bottom: 10px; /* 입력 필드와 메시지 간격 */
}

div.main { margin:1em; padding: 5px 30px; background-color: aliceblue;}
input {
  padding: 4px; /* 패딩 증가 */
  width: 150px; /* 너비 조정 */
  margin-left: 30px;
  margin-bottom: 10px;
  border: 1px solid; /* 테두리 설정 */
}

.box {
  background-color: yellow; /* 배경색 변경 */
  padding: 10px; /* 패딩 추가 */
  display: inline-block; /* 너비 조정 */
  width: 200px; /* 너비 조정 */
  height: 25px;
  border: 1px solid;
  text-align: center;
}
</style>

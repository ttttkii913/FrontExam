<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { postProfessor } from '@/backendService';

const router = useRouter();
const professor = ref({});

async function insertProfessor() {
  try {
    await postProfessor(professor.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/");
}
</script>

<template>
  <h1>교수 등록</h1>
  <form>
    <div>
      <label>이름</label>
      <input type="text" v-model="professor.name" />
    </div>
    <div>
      <label>학과명</label>
      <select v-model="professor.departmentId">
        <option value=1>소프</option>
        <option value=2>컴공</option>
        <option value=3>정통</option>
        <option value=4>글티</option>
      </select>
    </div>
    <div>
      <label>전화</label>
      <input type="phone" v-model="professor.phone" />
    </div>
    <div>
      <label>이메일</label>
      <input type="email" v-model="professor.email" />
    </div>
    <div>
      <label>연구실</label>
      <input type="email" v-model="professor.office" />
    </div>
    <div>
      <button type="button" class="btn lg" @click="insertProfessor">저장</button>
      <button type="button" class="btn lg" @click="goList">취소</button>
    </div>
  </form>
</template>

<style scoped>
form { font-size: 11pt; display: grid; grid-template-columns: 1fr 1fr; }
h1 { border-bottom: 1px solid gray; }
div { margin-top: 1.5em; }
label:nth-child(1) { display: inline-block; width: 3em; text-align: right; margin-right: 1em; }
input:not([type=radio]), select { padding: .7em; font-size: 1em; border: none; width: 13em;
  border: 1px solid #aaa; box-shadow: .15em .15em .3em rgba(0,0,0,.1); }
div:last-child { margin-top: 2.5em; padding-left: 2em; }
</style>

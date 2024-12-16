<script setup>
import { getStudent, putStudent, deleteStudent } from '@/backendService';
import ConfirmModal from '@/components/ConfirmModal.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const student = ref({});
const confirmModal = ref(null);

onMounted(loadStudent);

async function loadStudent() {
  try {
    student.value = await getStudent(id);
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function updateStudent() {
  try {
    await putStudent(student.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function delStudent() {
  try {
    confirmModal.value.open(async () => {
      await deleteStudent(id);
      goList();
    });
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/");
}
</script>

<template>
  <h1>학생 수정</h1>
  <form>
    <div>
      <label>학번</label>
      <input type="text" v-model="student.studentNo" />
    </div>
    <div>
      <label>이름</label>
      <input type="text" v-model="student.name" />
    </div>
    <div>
      <label>전화</label>
      <input type="phone" v-model="student.phone" />
    </div>
    <div>
      <label>이메일</label>
      <input type="email" v-model="student.email" />
    </div>
    <div>
      <label>학과</label>
      <select v-model="student.departmentId">
        <option value=1>소프</option>
        <option value=2>컴공</option>
        <option value=3>정통</option>
        <option value=4>글티</option>
      </select>
    </div>
    <div>
      <label>성별</label>
      <label><input type="radio" value="남" v-model="student.sex" /> 남자</label>
      <label><input type="radio" value="여" v-model="student.sex" /> 여자</label>
    </div>
    <div>
      <button type="button" class="btn lg" @click="updateStudent">저장</button>
      <button type="button" class="btn lg" @click="delStudent">삭제</button>
      <button type="button" class="btn lg" @click="goList">취소</button>
    </div>
  </form>
  <ConfirmModal ref="confirmModal" message="삭제하시겠습니까?" />
</template>

<style scoped>
form { font-size: 11pt; display: grid; grid-template-columns: 1fr 1fr; }
h1 { border-bottom: 1px solid gray; }
div { margin-top: 1.5em; }
label:nth-child(1) { display:inline-block; width:3em; text-align:right; margin-right:1em; }
input:not([type=radio]), select { padding: .7em; font-size: 1em; border: none; width: 13em;
  border: 1px solid #aaa; box-shadow: .15em .15em .3em rgba(0,0,0,.1); }
div:last-child { margin-top: 2.5em; padding-left: 2em; }
</style>

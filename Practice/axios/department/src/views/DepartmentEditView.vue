<script setup>
import { getDepartment, putDepartment, deleteDepartment } from '@/backendService';
import ConfirmModal from '@/components/ConfirmModal.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const department = ref({});
const confirmModal = ref(null);

onMounted(loadDepartment);

async function loadDepartment() {
  try {
    department.value = await getDepartment(id);
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function updateDepartment() {
  try {
    await putDepartment(department.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function delDepartment() {
  try {
    confirmModal.value.open(async () => {
      await deleteDepartment(id);
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
  <h1>학과 수정</h1>
  <form>
    <div>
      <label>학과명</label>
      <input type="text" v-model="department.name" />
    </div>
    <div>
      <label>단축명</label>
      <input type="text" v-model="department.shortName" />
    </div>
    <div>
      <label>전화</label>
      <input type="phone" v-model="department.phone" />
    </div>
    <div>
      <button type="button" class="btn lg" @click="updateDepartment">저장</button>
      <button type="button" class="btn lg" @click="delDepartment">삭제</button>
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

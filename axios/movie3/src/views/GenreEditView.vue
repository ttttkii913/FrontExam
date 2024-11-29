<script setup>
import { getGenre, putGenre, deleteGenre } from '@/backendService';
import ConfirmModal from '@/components/ConfirmModal.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const genre = ref({});
const confirmModal = ref(null);

onMounted(loadGenre);

async function loadGenre() {
  try {
    genre.value = await getGenre(id);
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function updateGenre() {
  try {
    await putGenre(genre.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

async function delGenre() {
  try {
    confirmModal.value.open(async () => {
      await deleteGenre(id);
      goList();
    });
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/genre");
}
</script>

<template>
  <h1>장르 수정</h1>
  <form>
    <div>
      <label>제목</label>
      <input type="text" v-model="genre.title" />
    </div>
    
    <div>
      <button type="button" class="btn lg" @click="updateGenre">저장</button>
      <button type="button" class="btn lg" @click="delGenre">삭제</button>
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

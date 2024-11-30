<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { postCategory } from '@/backendService';

const router = useRouter();
const category = ref({});

async function insertCategory() {
  try {
    await postCategory(category.value);
    goList();
  } catch (error) {
    alert('저장 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goList() {
  router.push("/category");
}
</script>

<template>
  <h1>카테고리 등록</h1>
  <form>
    <div>
      <label>카테고리 이름</label>
      <input type="text" v-model="category.name" />
    </div>
    
    <div>
      <button type="button" class="btn lg" @click="insertCategory">저장</button>
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

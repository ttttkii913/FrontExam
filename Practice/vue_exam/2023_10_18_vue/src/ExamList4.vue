<script setup>
import { ref } from 'vue';
const num = ref(5); // 기본값을 1로 설정
const col_size = 10;
</script>

<template>
  <div>
  <input type="number" v-model="num" />
  <table>
    <tr v-for="r in num" :key="r">
      <td v-for="c in col_size" :key="c">
        ({{ r }}, {{ c }})
      </td>
    </tr>
  </table>
</div>
</template>

<style scoped>
div { padding: 5px 30px; margin: 1em;}
table { border-collapse: collapse; margin: auto; }
td { padding: 15px; border: 1px solid black; text-align: center; }
div { background-color: #f8f8f8; padding: 1em; }
input { padding: 4px; margin-right: 1em; margin-bottom: 20px; /* 간격 추가 */ }
span { display: inline-block; margin-right: 1em; }
</style>

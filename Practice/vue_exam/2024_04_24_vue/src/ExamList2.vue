<script setup>
const row_size = 8; // 기본값을 1로 설정
const col_size = 9;
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td v-for="r in row_size" :key="r">
            <div v-for="c in col_size" :key="c">
              {{ r + 1 }} * {{ c }} = {{ (r + 1) * c }}
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table { border-collapse: collapse; margin: auto; }
td { padding: 15px; border: 1px solid black;  text-align: center; }
</style>

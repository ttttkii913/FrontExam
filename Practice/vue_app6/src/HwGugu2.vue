<script setup>
const row_size = 8;
const col_size = 9;
</script>

<template>
    <div>
  <table>
    <tr v-for="r in row_size" :key="r">
      <td v-for="c in col_size" :key="c">
        {{ r + 1 }} * {{ c }} = {{ (r + 1) * c}}
      </td>
    </tr>
  </table>
</div>
</template>

<style scoped>
div{ padding: 30px; margin: 30px auto; width: 1000px; 
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;  }
  table { border-collapse: collapse; margin: auto; }
  td { padding: 10px; border: 1px solid black;  text-align: center; }
</style>

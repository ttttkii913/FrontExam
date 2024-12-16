<script setup>
const row_size = 4;
const col_size = 4;
</script>

<template>
  <div>
    <table>
        <tbody>
            <tr v-for="r in row_size" :key="r">
                <td v-for="c in col_size" :key="c">
                    {{  }}
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style scoped>
div { margin: 1em; padding: 5px 30px; }
table { border-collapse: collapse; margin: auto; }
td { padding: 15px; border: 1px solid black;  text-align: center; }
</style>

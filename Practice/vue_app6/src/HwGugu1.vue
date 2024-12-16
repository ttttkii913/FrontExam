<script setup>
const row_size = 9;
const col_size = 8;
</script>

<template>
    <div>
        <table>
            <tr v-for="r in row_size" :key="r">
                <td v-for="c in col_size" :key="c">
                    {{ c + 1 }} * {{ r }} = {{ (c + 1) * r}}
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
div { margin: 1em; padding: 5px 30px; }
table { border-collapse: collapse; margin: auto; }
td { width: 50px; padding: 10px; border: 1px solid black;  text-align: center; }
</style>

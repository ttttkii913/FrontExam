<script setup>
import { getProducts } from '@/backendService';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref([]);
onMounted(reloadProducts);

async function reloadProducts() {
  try {
    products.value = await getProducts();
  } catch (error) {
    alert('조회 에러: ' + (error instanceof Error ? error.message : error));
  }
}

function goEdit(id) {
  router.push("/edit/" + id);
}
</script>

<template>
  <main>
    <h1>제품 목록</h1>
    <table>
      <thead>
        <tr><td>id</td><td>제품명</td><td>가격</td><td>수량</td><td>카테고리</td></tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product.id" @click="goEdit(product.id)">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.categoryId_data.title }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
h1 { border-bottom: 1px solid gray; }
table { margin: 3em 0; width: 100%; }
thead { background-color: #eee; text-align: center; }
td { border-bottom: 1px solid gray; padding: .5em; }
td:nth-child(1) { text-align: center; width: 3em; }
tbody tr:hover { background-color: #ffd; cursor: pointer }
</style>

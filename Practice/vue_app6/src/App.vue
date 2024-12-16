<script setup>
import MyList1 from './MyList1.vue';
import MyList2 from './MyList2.vue';
import MyList3Remove from './MyList3Remove.vue';
import MyList4Add from './MyList4Add.vue';
import MyList5For from './MyList5For.vue';
import HwGugu1 from './HwGugu1.vue';
import HwGugu2 from './HwGugu2.vue';
</script>

<template>
  <div class="app">
    <MyList1 />
    <hr />
    <MyList2 />
    <hr />
    <MyList3Remove />
    <hr />
    <MyList4Add />
    <hr />
    <MyList5For />
    <hr />
    <HwGugu1 />
    <hr />
    <HwGugu2 />
  </div>
</template>

<style scoped>
  div.app { border: 1px solid gray;
    width: 600px; margin: 0 auto; }
</style>

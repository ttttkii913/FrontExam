<script setup>
import MyClock from './MyClock.vue'
import MyClock2 from './MyClock2.vue'
import MyClock3 from './MyClock3.vue'

import { ref } from 'vue';
const visible = ref(true);
</script>

<template>
  <div id="app">
    <h1>시계</h1>
    <MyClock v-if="visible"></MyClock>
    <input type="checkbox" v-model="visible" />
    <MyClock2 id="clock1" class="myClock" />
    <MyClock2 id="clock2" class="myClock" interval="3000" />
    <MyClock2 id="clock3" class="myClock"
             format="yyyy-MM-DD HH:mm" interval="30000" />
    <hr />

  </div>
  <div id="app">
    <h1>시계</h1>
    <MyClock3 id="clock1" class="myClock" />
    <MyClock3 id="clock2" class="myClock" interval="3000" />
    <MyClock3 id="clock3" class="myClock"
             format="yyyy-MM-DD HH:mm" interval="30000" />
  </div>

</template>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 600px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
.myClock { margin-right: 5px; }
#clock1 { background-color: #ffd; }
#clock2 { background-color: #dfd; font-size: 15pt; }
#clock3 { background-color: #dff; font-size: 12pt; }
</style>

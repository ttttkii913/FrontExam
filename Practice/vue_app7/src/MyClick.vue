<script setup>
function showMessage() {
  alert("clicked");
}
</script>

<template>
  <div>
    <h1>@click</h1>
    <span @click="showMessage">@click</span>
    <span @click.right.prevent="showMessage">@click.right</span>
    <span @click.ctrl.prevent="showMessage">@click.ctrl</span>
    <span @click.alt.prevent="showMessage">@click.alt</span>
  </div>
</template>

<style scoped>
  div { margin: 1em; padding: 5px 30px; }
h1 { font-size: 20pt; margin: 4px; }
span { display: inline-block; padding: 10px; margin: 10px;
  border: 1px solid gray; box-shadow: 2px 2px 2px #ddd; }
span:hover { background-color: #ffc; cursor: pointer;
  box-shadow: none; transform: translateY(2px); }
</style>

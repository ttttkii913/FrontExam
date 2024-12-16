<template>
  <div class="one">
    <h1>Exam1View</h1>
    <p>{{ count }}</p>
    <div>
      <input type="number" v-model="inputNumber"/>
      <button type="button" @click="increase">++</button>
      <button type="button" @click="decrease">--</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNumber: 0,
      count: 0
    };
  },
  methods: {
    increase() {
      this.count += parseInt(this.inputNumber);
    },
    decrease() {
      this.count -= parseInt(this.inputNumber);
    }
  }
};
</script>

<style scoped>
.one {
  padding: 30px;
  margin: 30px auto;
  width: 300px;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
button {
  padding: 0.5em 2em;
  margin: 3px;
}
p {
  color: blue;
  font-size: 30px;
}
input {
  padding: 5px;
  margin-right: 5px;
  width: 100px;
}
</style>

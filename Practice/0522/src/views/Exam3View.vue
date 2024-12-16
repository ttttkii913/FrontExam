<template>
    <div class="three">
      <h1>Exam3View</h1>
      <table>
        <tr><td>no</td><td>title</td></tr>
        <tr v-for="num in nums" v-bind:key="num.no">
        <td>{{ num.no }}</td>
        <td>{{ num.title }}</td>
        </tr>
      </table>
      <input type="text" v-model="title" />
      <button type="button" v-on:click="addNum">add</button>  
    </div>
</template>
<script>
export default {
    name: "Exam3View",
    data(){
        return{
            nums: [
                { no: 1, title: "one"},
                { no: 2, title: "two"}
            ],
            title: "",
            lastNo: 2
        }
    },
    methods: {
        addNum: function() {
            this.nums.push({no: ++this.lastNo, title: this.title});
            this.title = "";
        }
    }
}
</script>

<style scoped>
div { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; }
button { padding: 0.3em 1.5em; }
</style>

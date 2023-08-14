<template>
  <div id="app">
    <button @click="getUsers">ajax</button>

  </div>
</template>
<script>
// import axios from 'axios'
import Fruit from './components/Fruit.vue'
import Vegetable from './components/Vegetable.vue'
export default {
  data(){
    return {
      currentComponent:'Fruit'
      
    }
  },
  components:{
    Vegetable,
    Fruit,
  },
  methods:{
    getUsers(){
      
      this.$axios.get('http://localhost:8081/api1/users').then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      })
      
      // axios.get('http://localhost:8081/users').then((res)=>{
      //   console.log(res);
      // },(err)=>{
      //   console.log(err);
      // })
    }
  }
}
</script>

<style scoped>
.abc{
  color:red
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>  
    <div id="app">  
      <input ref="editInp" v-if="isEdit" type="text" v-model="msg">  
      <p v-else>{{msg}}</p>  
      <button @click="edit">编辑</button>  
    </div>  
  </template>  
    
  <script>  
    
  export default {  
    data(){  
      return {  
        msg:'hello world',  
        isEdit:false  
      }  
    },  
    methods:{  
      edit(){  
        // console.log(this.$refs);
        this.isEdit =true;  
         this.$nextTick(function(){  
          this.$refs.editInp.focus();  
        });  
    
        //这里也可以使用延迟器实现，但不推荐  
      }  
    },  
     
  }  
  </script>  
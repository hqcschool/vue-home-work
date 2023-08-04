<template>  
    <div id='Demo'>  
        <h2>学校名称：{{name}}</h2>  
        <h2>学校地址：{{address}}</h2>  
        <button @click="showName">点我提示学校名</button>  
    </div>  
</template>  
  
<script type="module">  
    export default {  
        data() {  
            return {  
                name:'清华',  
                address:'北京'  
            }  
        },  
        methods: {  
            showName(){  
                alert(this.name)  
            }  
        },  
    }  
</script>  
  
<style>  
    #Demo{  
        background: orange;  
    }  
</style>  
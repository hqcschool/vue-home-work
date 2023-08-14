<template>
  <div id="box">
    <transition-group name="tablelist">
        <p v-for="(item) in users" :key="item">{{ item }}</p>
    </transition-group>
    <input
      type="text"
      name=""
      @keydown.enter="addUser"
      v-model="newUser"
      id=""
    />
    <ul>
        <transition-group appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__rubberBand"
          leave-active-class="animate__backOutUp">
        <li v-for="(item) in users" :key="item">{{ item }} <button @click="del(item)">删除</button></li>
      </transition-group>
    </ul>


  </div>
</template>
<script>
import 'animate.css';
export default {
  data() {
    return {
        flag:true,
        flag1:true,
        flag2:true,
      newUser: "",
      users: ["张三", "李四", "王五"],
    };
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = "";
    },
    del(item){
        this.users.splice(this.users.indexOf(item),1)
    }
  },
};
</script>
<style scoped>
#box {
  width: 300px;

  margin: auto;
}
.tablelist-enter-active {
  animation: add-animation 1s linear;
}
.tablelist-leave-active {
  animation: add-animation 1s linear reverse;
}
ul {
  list-style: none;
  width: 300px;
  height: 300px;
}
li {
  text-align: center;
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
}
@keyframes add-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>

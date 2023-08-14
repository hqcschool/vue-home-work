import Vue from "vue";
import App from "./App.vue";
import VueAxiosPlugin from "vue-axios-plugin";
Vue.use(VueAxiosPlugin);
Vue.config.productionTip = false;
// const VC = Vue.extend({
//   data() {
//     return {
//       info: "这里是傀儡组件",
//     };
//   },
// });
// const VCObject = new VC();
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线，$bus 就是当前应用的 vm
  },
}).$mount("#app");

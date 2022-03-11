import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'ant-design-vue/dist/antd.css'
import VueRouter from "vue-router";
import router from './router'
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(Antd);
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus=this
  }
}).$mount('#app')
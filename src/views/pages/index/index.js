
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index.vue'
import Hello from './cpage/hello' // 微信登录返回页
import Home from './index.vue' // 微信登录返回页
const routes = [
  { path: '/', component: Home },
  { path: '/list', component: Hello }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes:routes
})
new Vue({
  router: router
}).$mount('#app')

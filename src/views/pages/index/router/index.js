import Vue from 'vue'
import Router from 'vue-router'


import Hello from '../cpage/hello' // 微信登录返回页

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'hello',
            component: Hello
        },
    ]
})
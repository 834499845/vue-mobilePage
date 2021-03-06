

// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store/'
import routerMap from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

// 并且配置路由规则
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routerMap
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

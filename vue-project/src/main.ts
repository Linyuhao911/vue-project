import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'//引入路由相关的函数
import HomePage from './pages/HomePage.vue'//引入组件
import AboutPage from './pages/AboutPage.vue'
import NewPage from './pages/NewPage.vue'
//1.配置路由规则
const routes = [
    {path:"/", redirect:"/home"},            //重定向路由规则
    {path:"/home",component: HomePage, name:'home'},      //首页路由规则,path表示路径，component表示组件
    {path:"/about",component: AboutPage, name:'about'},
    {path:"/news",component: NewPage, name:'news'}
]
//2.创建路由器
const router = createRouter({
    history: createWebHistory(),//路由工作模式
    routes //路由规则
})
//3.加载路由器
const app = createApp(App) //创建应用实例
app.use(router)//加载路由器

app.mount('#app')//挂载应用实例

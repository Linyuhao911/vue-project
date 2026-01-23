# 2026-01-10 Vue 学习笔记 - Day 3：路由插件基础使用
## 学习目标
- 理解 Vue Router 的基本工作原理
- 掌握路由配置的完整写法
- 熟练使用 `<RouterLink>` 和 `<RouterView>`
- 熟悉三种常见的跳转方式及优先级

## 1. 路由配置文件（src/router/index.ts）

```ts
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import NewPage from './pages/NewPage.vue'     // 注意：文件名是 NewPage（建议后续改为 NewsPage）

// 1. 定义路由规则
const routes = [
  // 根路径重定向到首页（非常常用）
  { path: '/', redirect: '/home' },

  // 命名路由（强烈推荐！后续跳转优先使用 name）
  { path: '/home',  component: HomePage,  name: 'home' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/news',  component: NewPage,   name: 'news'  },
]

// 2. 创建路由实例
const router = createRouter({
  history: createWebHistory(),          // HTML5 History 模式（干净的 URL，无 #）
  // 备选：createWebHashHistory() → 带 # 的 hash 模式
  routes
})

export default router
```
## 2. 在 main.ts 中注册路由
```TypeScript
//src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'           // 引入上面创建的 router

const app = createApp(App)
app.use(router)                         // 安装路由插件
app.mount('#app')
```

## 3. 根组件中使用路由（App.vue）
```vue
<!-- src/App.vue -->
<template>
  <div>
    <h1>你好,林玉浩!</h1>
    
    <p>
      <!-- 路由导航链接 -->
      <RouterLink to="/home">首页</RouterLink>
      <RouterLink :to="{ path: '/about' }">关于</RouterLink>
      <RouterLink :to="{ name: 'news' }">新闻</RouterLink>
    </p>

    <!-- 路由出口：匹配到的组件会渲染在这里 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
```
## 核心知识点总结
### 路由跳转方式对比（推荐优先级由高到低）

| 优先级 | 写法                              | 优点                              | 使用场景                          | 推荐指数    |
|--------|-----------------------------------|-----------------------------------|-----------------------------------|-------------|
| 1      | `:to="{ name: 'news' }"`          | 最稳定、路径修改不影响跳转        | 日常开发最推荐的方式              | ★★★★★      |
| 2      | `to="/news"`                      | 写法最简单、直观                  | 路径完全固定，不会变动的情况      | ★★★★       |
| 3      | `:to="{ path: '/news' }"`         | 可动态拼接 path                   | 需要计算或动态生成路径时          | ★★★        |
### 重要概念速查表

| 概念                  | 作用说明                                   | 常见写法 / 示例                                      | 注意事项 / 推荐做法                                                                 |
|-----------------------|--------------------------------------------|-------------------------------------------------------|-------------------------------------------------------------------------------------|
| **创建导航链接**      | 实现页面跳转（不刷新整个页面）             | `<router-link to="/home">首页</router-link>`<br>`<router-link :to="{ name: 'home' }">首页</router-link>` | 优先使用 `name` 方式跳转，最稳定，路径改动不影响代码                               |
| **相当于智能 `<a>` 标签** | 自动渲染成 `<a>` 并阻止默认跳转行为        | 同上                                                  | 加上 `custom` 属性可完全自定义渲染标签（Vue3 推荐写法）                            |
| **路由出口**          | 渲染当前匹配到的组件位置                   | `<router-view></router-view>`                         | **必须写**！不写的话页面永远不切换<br>支持 `<router-view v-slot="{ Component }">` 写法 |
| **name（路由名称）**  | 给路由起个唯一标识，用于编程式导航         | `{ path: '/about', name: 'about', component: About }` | ★★★★★ 强烈建议每个路由都加 name<br>未来改路径时跳转代码无需修改                   |
| **redirect（重定向）**| 把某个路径自动跳转到另一个路径             | `{ path: '/', redirect: '/home' }`<br>`{ path: '/', redirect: { name: 'home' } }` | 推荐用 `name` 做重定向，更稳<br>也可以写函数动态重定向                            |
| **History 模式**      | 干净的 URL，无 `#`                         | `createWebHistory()`                                  | 上线必须后端配合（把所有路径都返回 index.html）<br>开发时通常无感                 |
| **Hash 模式**         | 兼容性最好，默认模式                       | `createWebHashHistory()`                              | URL 带 `#`，SEO 和美观稍差，但无需后端配置                                         |

## 今日易错点 & 注意事项
1. component 必须是导入后的组件变量，不能写字符串
    ```TypeScript
    // 正确
    component: HomePage

    // 错误 → 白屏
    component: 'HomePage'
    ```
2.  :to 需要加冒号（v-bind），不然对象写法会失效
    
3.  重定向用路径（/home），而非 { name: 'home' }（虽然也支持，但较少用）
    

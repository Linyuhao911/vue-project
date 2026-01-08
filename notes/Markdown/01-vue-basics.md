# 2026-01-08 Vue 学习笔记 - Day 1：基础指令与 Options API

今天系统学习了 Vue 的核心基础知识，包括常用指令（数据绑定、事件、条件渲染等）和 Options API 的基本写法（data、methods 等）。以下是详细笔记和代码示例。

## 一、Vue 常用指令

### 1. 数据绑定与插值
- `{{ }}`  
  文本插值表达式，直接在模板中输出变量的值。  
  - 支持 JS 表达式（如 `{{ count + 1 }}`）。  
  - 自动 HTML 转义，防止 XSS。  
  - 输出原始 HTML 用 `v-html`。

### 2. 双向数据绑定
- `v-model`  
  表单元素与数据的双向绑定，常用于 input、textarea、select、checkbox、radio。

  示例：
  ```vue
  <input v-model="message" placeholder="输入内容" />
  <p>你输入了：{{ message }}</p>
  
### 3. 事件绑定
- `v-on`（缩写 @）
  绑定 DOM 事件。

  示例:
  ```vue
  <button @click="handleClick">点击我</button>
  ```
  常用修饰符：.stop、.prevent、.once 等。

### 4. 表单控件常见写法
- `单选框`（radio）

  示例:
  ```vue
  <input type="radio" value="male" v-model="gender" /> 男
  <input type="radio" value="female" v-model="gender" /> 女
  <p>性别：{{ gender }}</p>
  ```
- `下拉框`（select）

  示例:
  ```vue
  <p>岗位: <select v-model="userInfo.department">
      <option value="dev">开发</option>
      <option value="test">测试</option>
      <option value="maintain">运维</option>
    </select>
  </p>

### 5. 条件渲染
- `v-if`

  条件为假时不渲染 DOM（直接销毁）。

  适合不经常切换的场景。
  ```vue
  <div v-if="type === 'A'">A 类型</div>
  <div v-else-if="type === 'B'">B 类型</div>
  <div v-else>其他</div>
  ```
  网页内的代码展示销毁:
  ![](../img/1.2.png)

- `v-show`
  - 通过 display: none/block控制显示隐藏。
  - 元素始终存在于 DOM 中。
  - 适合频繁切换的场景。
  ```vue
  <div class ="userInfo" v-show="showUserInfo">
  ```
  网页内的代码展示隐藏:
  ![](../img/1.3.png)

- `v-if vs v-show 对比`
  ![比较图](../img/1.1.png)

## 二、Options API 基础
Vue 组件通过一个普通对象来定义，常用选项包括 data、methods 等。
### 1. 组件基本结构
  ```vue
  <script>
    export default {
    // 各种选项写在这里
    }
  </script>
  ```
### 2. data()
  - 必须是函数，返回一个对象。
  - 返回的对象属性会成为响应式数据。
  - 每个组件实例独立一份，避免数据共享污染。
  ```javaScript
  data() {
    return {
      message: 'Hello Vue!',
      count: 0,
      gender: 'male',
      selected: ''
    }
  }
  ```
### 3. methods
  - 每个选项后面必须加逗号（最后一个除外），否则报错。
  ```vue
  <script>
  export default{
    data(){
      return{
        userName:'林玉浩',
        salary:10000,
        userInfo:{
          name: '林玉浩',
          age:18,
          sex:'man',
          department:'',
          skills:['JAVA','Python','vue']
        },
        newSkill:'',
        showUserInfo:false,
      }
    },
    methods:{
      addSalary(){
        this.salary += 1000;
      },
      addSkill(){
        if(this.newSkill){
          this.userInfo.skills.push(this.newSkill);
        }
      },
      changeShowUserInfo(){
        this.showUserInfo = !this.showUserInfo;
        },
      }
    }
  </script>
  ```
###  4. 注意事项
  - 每个选项后面必须加逗号（最后一个除外），否则报错。

## 今日小结
- 掌握了 Vue 最核心的指令：{{ }}、v-model、@click、v-if/v-show 等。
- 理解了 Options API 的基本写法，特别是 data() 必须是函数的原因。
- 已经可以写出带有数据、交互和条件显示的简单组件了！

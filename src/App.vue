<template>
  <!--
    "{{  }}" 可以在页面直接显示括号内变量的所有属性
    v-model 双向数据绑定
    v-on:click 绑定点击事件
    radio 单选框
    select 下拉框
    v-if 条件渲染,值为真时 DOM 才存在，为假时直接销毁（不是隐藏）
    v-show 条件显示,他是通过css的display属性来控制显示与隐藏
  -->
<div>
  姓名:<input v-model="userName" />{{ userName }}<br />
  薪水:<input type="number" v-model="salary"/>{{ salary }}<br />
  <button v-on:click="addSalary">加薪</button><button @click="changeShowUserInfo">查看个人信息</button>
  <hr />
  <div class ="userInfo" v-show="showUserInfo">
    <h2>个人信息</h2>
    <p>姓名: <input v-model="userInfo.name"></p>
    <p>年龄: <input type="number" v-model="userInfo.age"></p>
    <p>性别: <input type="radio" value="man" v-model="userInfo.sex">男</input><input type="radio" value="woman" v-model="userInfo.sex">女</input></p>
    <p>岗位: <select v-model="userInfo.department">
      <option value="dev">开发</option>
      <option value="test">测试</option>
      <option value="maintain">运维</option>
    </select>
    </p>
    <p>技术: <span v-for="skill in userInfo.skills ":key="skill">{{ skill }}</span></p>
    <p>新技术: <input v-model="newSkill"/><button v-on:click="addSkill">学习新技术</button></p>
    <p>个人信息汇总: {{ userInfo }}</p>
  </div>
</div>
</template>

<script lang="ts">
  /* 
  default 导出当前组件对象,类似于初始化
  data 函数返回当前组件的响应式数据对象
  return 返回一个对象,对象内定义当前组件的响应式数据
  methods 定义当前组件的方法
  在每行后面都要加逗号,不然会报错
  */
  export default{
    data(){
      return{
        userName:'roy',
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

<style scoped>
  /*和CSS是一样的 */
.userInfo{
  background-color: aqua;
  widows: 800px;

}

.userInfo span{
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
}
</style>

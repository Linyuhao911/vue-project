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
  <!-- 姓名:<input v-model="salaryInfo.userName" />{{ salaryInfo.userName }}<br />
  薪水:<input type="number" v-model="salaryInfo.salary"/>{{ salaryInfo.salary }}<br />
  <button v-on:click="addSalary">加薪</button>
  <hr /> -->

  <MySalaryInfo ref="salaryInfo"></MySalaryInfo>
  <button @click="showRes">展示</button>
</div>
</template>

<script setup lang="ts">
  /* day1:
  default 导出当前组件对象,类似于初始化
  data 函数返回当前组件的响应式数据对象
  return 返回一个对象,对象内定义当前组件的响应式数据
  methods 定义当前组件的方法
  在每行后面都要加逗号,不然会报错
  */

/*
day2:
  在components文件中写一个ts脚本,可以直接在这里引入使用,
  这样可以把组件的逻辑和模板分离开来,让代码更清晰
  Composition API的写法
 */

 /* import SalaryAdd from  '@/components/SalaryAdd.ts';   //引入组件
 let{userName,salary,addSalary}=SalaryAdd();              //解构赋值,把组件中的数据和方法引入到当前组件中使用 */


 /* 
  // let userName= ref("lyh")
  // let salary = ref(5000)          //ref不能操纵对象,只能操作对象的value属性
  let salaryInfo = reactive({     //reactive可以操作对象,并且可以直接操作对象的属性
    userName: 'lyh',
    salary: 5000
  })
  function addSalary() {
    salaryInfo.salary+=1000;
    console.log(salaryInfo)
  } */
import { ref } from 'vue';
import MySalaryInfo from '@/components/MySalaryInfo.vue'
let salaryInfo = ref();
function showRes(){
      console.log(salaryInfo)       //ref对象
      console.log(salaryInfo.value) //proxy对象
      console.log(salaryInfo.value.userName) //具体属性值
      console.log(salaryInfo.value.salary)
}//子传父

/*
  options API的写法
export default {
  data() {
    return {
      userName: "lyh",
      salary: 5000,
    };
  },
  methods: {
    addSalary() {
      this.salary += 1000;
      console.log(this.salary);
    },
  },
};  
*/

</script>

<style scoped>
  /*和CSS是一样的 */
/* .userInfo{
  background-color: aqua;
  widows: 800px;

}

.userInfo span{
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
} */
</style>

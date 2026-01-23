import { ref } from "vue";//引入ref函数,用于创建响应式数据,可以实时监听数据变化并更新视图

export default function() {
    const userName = ref("lyh");
    const salary = ref(10000);
    function addSalary(){
        salary.value += 1000;
        console.log(salary)
    }
return{userName,salary,addSalary}//将userName和salary响应式数据,以及addSalary方法暴露出去,以便在其他组件中使用
}
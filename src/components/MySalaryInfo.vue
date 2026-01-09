<template>
姓名:<input v-model="userName" /> </ br>
薪水:<input type="number" v-model="salary" />
</template>

<script lang="ts">
    export default{
        name:"SalaryInfo"//组件名称,如果不写,默认是文件名
    }
</script>

<script setup lang="ts">
import { ref } from 'vue';

let userName=ref("lyh");
let salary = ref(5000);

defineExpose({
    salary
})

</script>

<style scoped>
    
</style>
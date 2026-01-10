<template>
    <div>
        <h1>你好,林玉浩!</h1>
        <p>
            <!--
              路由链接RouterLink
              路由出口RouterView    
            -->

            <RouterLink to="/home">首页</RouterLink>                <!--字符串跳转-->
            <RouterLink :to="{path:'about'}">关于</RouterLink>  <!--对象跳转-->
            <RouterLink :to="{name:'news'}">新闻</RouterLink>      <!--具体名字跳转-->          
        </p>
        <div class="content">
            <RouterView></RouterView>       <!--路由出口,一定要写不然跳转不了-->
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
    a{
        margin-right: 15px;
        text-decoration: none;
        color: #1aec36;
    }
    .content{
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #14e765;
        min-height: 200px;
        background-color: #14e765;
    }
</style>
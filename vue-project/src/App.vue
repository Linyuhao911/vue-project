<template>
    <div class="app-container">
        <!-- 顶部导航栏 -->
        <header class="header">
            <div class="header-content">
                <div class="logo">
                    <h1 class="welcome-title">
                        <span class="wave">👋</span>
                        你好, 林玉浩!
                    </h1>
                </div>
                <nav class="navigation">
                    <RouterLink to="/home" class="nav-link">
                        <span class="nav-icon">🏠</span>
                        首页
                    </RouterLink>
                    <RouterLink :to="{path:'about'}" class="nav-link">
                        <span class="nav-icon">ℹ️</span>
                        关于
                    </RouterLink>
                    <RouterLink :to="{name:'news'}" class="nav-link">
                        <span class="nav-icon">📰</span>
                        新闻
                    </RouterLink>
                </nav>
            </div>
        </header>

        <!-- 主要内容区域 -->
        <main class="main-content">
            <div class="content-wrapper">
                <RouterView></RouterView>
            </div>
        </main>

        <!-- 装饰性背景元素 -->
        <div class="bg-decoration">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
/* 全局样式重置和基础设置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    position: relative;
    overflow-x: hidden;
}

/* 顶部导航栏样式 */
.header {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo .welcome-title {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wave {
    animation: wave 2s ease-in-out infinite;
    transform-origin: 70% 70%;
}

@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-10deg); }
}

/* 导航链接样式 */
.navigation {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.nav-link.router-link-active {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
}

.nav-icon {
    font-size: 1.1rem;
}

/* 主要内容区域 */
.main-content {
    padding: 2rem 0;
    min-height: calc(100vh - 120px);
    position: relative;
    z-index: 10;
}

.content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-height: 400px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 装饰性背景元素 */
.bg-decoration {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
}

.circle-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    right: 10%;
    animation-delay: 0s;
}

.circle-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 15%;
    animation-delay: 2s;
}

.circle-3 {
    width: 100px;
    height: 100px;
    top: 60%;
    right: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.7;
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.3;
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        text-align: center;
    }
    
    .navigation {
        justify-content: center;
    }
    
    .nav-link {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
    
    .welcome-title {
        font-size: 1.3rem !important;
    }
    
    .main-content {
        padding: 1rem 0;
    }
    
    .content-wrapper {
        margin: 0 1rem;
        padding: 1rem;
    }
    
    .circle {
        display: none;
    }
}

@media (max-width: 480px) {
    .navigation {
        flex-direction: column;
        width: 100%;
    }
    
    .nav-link {
        justify-content: center;
        width: 100%;
    }
}

/* 滚动条美化 */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}
</style>
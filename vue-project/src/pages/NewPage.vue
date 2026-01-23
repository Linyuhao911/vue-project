<template>
    <div class="news-page">
        <div class="news-header">
            <h2 class="news-title">
                <span class="title-icon">📰</span>
                最新资讯
            </h2>
            <p class="news-subtitle">获取最新的行业动态和重要资讯</p>
        </div>
        
        <div class="news-list">
            <article class="news-item" v-for="(news, index) in newsList" :key="index">
                <div class="news-badge">{{ news.category }}</div>
                <div class="news-content">
                    <h3 class="news-item-title">{{ news.title }}</h3>
                    <p class="news-summary">{{ news.summary }}</p>
                    <div class="news-meta">
                        <span class="news-date">{{ news.date }}</span>
                        <span class="news-author">{{ news.author }}</span>
                    </div>
                </div>
                <div class="news-action">
                    <button class="read-more-btn">阅读更多</button>
                </div>
            </article>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const newsList = ref([
    {
        category: '技术',
        title: 'Vue 3.4 正式发布，带来更多性能优化',
        summary: 'Vue.js 团队发布了最新版本，包含了编译器优化、响应式系统改进等重要更新...',
        date: '2024-01-20',
        author: '技术团队'
    },
    {
        category: '产品',
        title: '全新用户界面设计语言发布',
        summary: '我们推出了全新的设计系统，提供更加现代化和用户友好的界面体验...',
        date: '2024-01-18',
        author: '设计团队'
    },
    {
        category: '公司',
        title: '2024年度发展规划正式启动',
        summary: '公司制定了全新的发展战略，将在技术创新、市场拓展等方面加大投入...',
        date: '2024-01-15',
        author: '管理团队'
    }
])
</script>
<style scoped>
.news-page {
    padding: 2rem 0;
}

.news-header {
    text-align: center;
    margin-bottom: 3rem;
}

.news-title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.title-icon {
    font-size: 2rem;
}

.news-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.news-list {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.news-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1.5rem;
    align-items: start;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-item:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.news-badge {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    align-self: flex-start;
}

.news-content {
    flex: 1;
}

.news-item-title {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
    line-height: 1.4;
}

.news-summary {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.news-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
}

.news-date::before {
    content: '📅 ';
}

.news-author::before {
    content: '👤 ';
}

.news-action {
    align-self: center;
}

.read-more-btn {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
}

.read-more-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .news-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 0.3rem;
    }
    
    .news-item {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1.5rem;
    }
    
    .news-badge {
        justify-self: start;
    }
    
    .news-action {
        justify-self: start;
    }
    
    .news-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
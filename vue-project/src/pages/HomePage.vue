<template>
    <div class="home-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="gradient-text">欢迎来到首页</span>
                </h1>
                <p class="hero-subtitle">
                    这里是您的个人空间，探索更多精彩内容
                </p>
                <div class="feature-cards">
                    <div class="card">
                        <div class="card-icon">🚀</div>
                        <h3>快速开始</h3>
                        <p>立即开始您的旅程</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">💡</div>
                        <h3>创新想法</h3>
                        <p>发现新的可能性</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">🎯</div>
                        <h3>精准目标</h3>
                        <p>实现您的目标</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>
<style scoped>
.home-page {
    padding: 2rem 0;
}

.hero-section {
    text-align: center;
    padding: 3rem 0;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 800;
}

.gradient-text {
    background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 3rem;
    line-height: 1.6;
}

.feature-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
}

.card h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.card p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .feature-cards {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .card {
        padding: 1.5rem;
    }
}
</style>
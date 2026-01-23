<template>
    <div class="about-page">
        <div class="about-header">
            <h2 class="about-title">
                <span class="title-icon">ℹ️</span>
                关于我们
            </h2>
            <p class="about-subtitle">了解更多关于我们的信息</p>
        </div>
        
        <div class="about-content">
            <div class="info-section">
                <div class="info-card">
                    <h3>🎯 我们的使命</h3>
                    <p>致力于为用户提供最优质的服务体验，通过创新技术解决实际问题。</p>
                </div>
                
                <div class="info-card">
                    <h3>🌟 我们的愿景</h3>
                    <p>成为行业领先的技术服务提供商，推动数字化转型的发展。</p>
                </div>
                
                <div class="info-card">
                    <h3>💎 核心价值</h3>
                    <p>诚信、创新、专业、服务 - 这是我们始终坚持的核心价值观。</p>
                </div>
            </div>
            
            <div class="stats-section">
                <div class="stat-item">
                    <div class="stat-number">100+</div>
                    <div class="stat-label">满意客户</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">成功项目</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">技术支持</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.about-page {
    padding: 2rem 0;
}

.about-header {
    text-align: center;
    margin-bottom: 3rem;
}

.about-title {
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

.about-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.about-content {
    max-width: 1000px;
    margin: 0 auto;
}

.info-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.info-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.info-card p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.95rem;
}

.stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 3rem 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-weight: 500;
}

@media (max-width: 768px) {
    .about-title {
        font-size: 2rem;
        flex-direction: column;
        gap: 0.3rem;
    }
    
    .info-section {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .info-card {
        padding: 1.5rem;
    }
    
    .stats-section {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 2rem 1rem;
    }
    
    .stat-number {
        font-size: 2.5rem;
    }
}
</style>

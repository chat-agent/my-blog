<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('date', 'DESC').all()
)
</script>

<template>
  <div class="home">
    <div class="home-intro">
      <h1>全栈之路</h1>
      <p>一个前端开发者，用 AI 探索从前端到后端到部署的完整链路。</p>
    </div>
    <div class="post-list">
      <article v-for="post in posts" :key="post.path" class="post-item">
        <NuxtLink :to="post.path">
          <h2>{{ post.title }}</h2>
          <p v-if="post.description" class="post-desc">{{ post.description }}</p>
          <div class="post-meta">
            <time v-if="post.date">{{ post.date }}</time>
            <span v-if="post.tags" class="post-tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </span>
          </div>
        </NuxtLink>
      </article>
      <p v-if="!posts?.length" class="empty">暂无文章</p>
    </div>
  </div>
</template>

<style scoped>
.home-intro {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid #eee;
}

.home-intro h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.home-intro p {
  color: #666;
  font-size: 16px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.post-item a {
  display: block;
  color: inherit;
  text-decoration: none;
}

.post-item h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #1a1a1a;
  transition: color 0.2s;
}

.post-item a:hover h2 {
  color: #0070f3;
}

.post-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #999;
}

.post-tags {
  display: flex;
  gap: 6px;
}

.tag {
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #555;
}

.empty {
  color: #999;
}
</style>

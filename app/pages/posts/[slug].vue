<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData('post-' + route.path, () =>
  queryCollection('posts').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: '文章不存在', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>

<template>
  <article class="post">
    <header class="post-header">
      <NuxtLink to="/" class="back">← 返回列表</NuxtLink>
      <h1>{{ post!.title }}</h1>
      <div class="post-meta">
        <time v-if="post!.date">{{ post!.date }}</time>
        <span v-if="post!.tags" class="post-tags">
          <span v-for="tag in post!.tags" :key="tag" class="tag">{{ tag }}</span>
        </span>
      </div>
    </header>
    <div class="post-body">
      <ContentRenderer :value="post!" />
    </div>
  </article>
</template>

<style scoped>
.post-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.back {
  display: inline-block;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
}

.back:hover {
  color: #0070f3;
}

.post-header h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 12px;
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

.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3) {
  font-weight: 700;
  line-height: 1.3;
  margin: 32px 0 12px;
}

.post-body :deep(h1) { font-size: 26px; }
.post-body :deep(h2) { font-size: 22px; }
.post-body :deep(h3) { font-size: 18px; }

.post-body :deep(p) {
  margin-bottom: 16px;
  color: #333;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  margin: 16px 0;
  padding-left: 24px;
}

.post-body :deep(li) {
  margin-bottom: 6px;
}

.post-body :deep(code) {
  background: #f4f4f4;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Fira Code', monospace;
}

.post-body :deep(pre) {
  background: #1a1a1a;
  color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
}

.post-body :deep(pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

.post-body :deep(blockquote) {
  border-left: 4px solid #0070f3;
  padding-left: 16px;
  color: #666;
  margin: 20px 0;
}

.post-body :deep(a) {
  color: #0070f3;
}

.post-body :deep(hr) {
  border: none;
  border-top: 1px solid #eee;
  margin: 32px 0;
}
</style>

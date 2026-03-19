<template>
  <NuxtRouteAnnouncer />
  <div class="site">
    <header class="site-header">
      <div class="container">
        <NuxtLink to="/" class="site-title">Ming's Blog</NuxtLink>
        <nav class="site-nav">
          <NuxtLink to="/">文章</NuxtLink>
          <NuxtLink to="/about">关于</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="site-main">
      <div class="container">
        <NuxtPage />
      </div>
    </main>
    <footer class="site-footer">
      <div class="container">
        <p>用 AI 构建 · Nuxt3 驱动</p>
      </div>
    </footer>
  </div>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #1a1a1a;
  background: #fafafa;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
}

.site-header {
  border-bottom: 1px solid #eee;
  padding: 16px 0;
  background: #fff;
}

.site-header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
}

.site-nav {
  display: flex;
  gap: 24px;
}

.site-nav a {
  color: #444;
  font-size: 14px;
}

.site-nav a.router-link-active {
  color: #0070f3;
  font-weight: 600;
}

.site-main {
  padding: 48px 0;
  min-height: calc(100vh - 120px);
}

.site-footer {
  border-top: 1px solid #eee;
  padding: 24px 0;
  text-align: center;
  font-size: 13px;
  color: #888;
  background: #fff;
}
</style>

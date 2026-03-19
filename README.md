# Ming's Blog

一个前端开发者用 AI 从零搭建的全栈博客，记录学习过程。

## 技术栈

- **框架**：[Nuxt3](https://nuxt.com/) + [Nuxt Content](https://content.nuxt.com/)
- **语言**：TypeScript
- **内容**：Markdown 文件，存放在 `content/posts/`
- **部署**：Vercel（计划中）

## 项目结构

```
my-blog/
├── app/
│   ├── app.vue              # 全局布局（导航 + Footer）
│   └── pages/
│       ├── index.vue        # 首页，文章列表
│       ├── [...slug].vue    # 通用页面路由（about 等）
│       └── posts/
│           └── [slug].vue   # 文章详情页
├── content/
│   ├── index.md             # 首页内容（占位）
│   ├── about.md             # 关于页
│   └── posts/               # 博客文章目录
│       └── hello-world.md   # 第一篇文章
├── content.config.ts        # Nuxt Content 集合配置
└── nuxt.config.ts           # Nuxt 配置
```

## 本地开发

```bash
npm run dev
```

浏览器访问 http://localhost:3000

## 写文章

在 `content/posts/` 目录下新建 `.md` 文件，文件名即为 URL slug。

文章 frontmatter 格式：

```yaml
---
title: 文章标题
date: 2026-03-19
description: 文章简介（显示在列表页）
tags: ['标签1', '标签2']
---
```

## 路线图

- [x] Phase 1：Nuxt3 + Markdown 博客框架搭建
- [ ] Phase 2：部署到 Vercel，绑定域名
- [ ] Phase 3：加后端（文章管理、评论）
- [ ] Phase 4：加 AI 功能（摘要生成、语义搜索）
- [ ] Phase 5：Docker 化 + CI/CD

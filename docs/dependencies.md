# 依赖说明文档

本文档记录项目中每个依赖的作用，以及后续扩展时可能引入的依赖。

---

## 当前依赖

### 核心框架

| 包名 | 版本 | 作用 |
|------|------|------|
| `nuxt` | ^4.4.2 | 全栈框架，基于 Vue3。提供路由、SSR/SSG、文件系统路由、自动导入等能力。博客的核心运行环境。 |
| `@nuxt/content` | ^3.12.0 | Nuxt 官方内容模块。将 `content/` 目录下的 Markdown 文件解析为页面，支持 frontmatter、MDC 语法、全文搜索。博客文章系统的核心。 |

### 数据库

| 包名 | 版本 | 作用 |
|------|------|------|
| `better-sqlite3` | ^12.8.0 | `@nuxt/content` 在开发/构建时用它存储解析后的内容索引（SQLite），实现快速查询。不需要手动操作，由 Nuxt Content 自动管理。 |

### 原生绑定（平台相关）

> 这三个包是因为 Node.js v20.18.0 + npm 10 存在 optional dependencies 的 bug，导致原生绑定没有自动安装，需要手动补装。
> 它们是 Nuxt 4 内置的 oxc 工具链（Rust 编写的高性能 JS 编译器）的 macOS ARM64 平台绑定。

| 包名 | 作用 |
|------|------|
| `@oxc-parser/binding-darwin-arm64` | JS/TS 代码解析器，Nuxt 用它分析源码做路由生成、自动导入等 |
| `@oxc-transform/binding-darwin-arm64` | JS/TS 代码转换器，处理 TypeScript、JSX 编译 |
| `@oxc-minify/binding-darwin-arm64` | 代码压缩器，生产构建时压缩 JS 体积 |

> 注意：这三个包只在 macOS ARM64（Apple Silicon）机器上需要手动安装。其他平台有对应的 `binding-linux-x64`、`binding-win32-x64` 等版本。

---

## 扩展路线图

### Phase 2：前端增强

| 包名 | 作用 | 安装命令 |
|------|------|----------|
| `@nuxtjs/tailwindcss` | Tailwind CSS 集成，快速写样式 | `npx nuxi@latest module add tailwindcss` |
| `@nuxt/image` | 图片自动优化（压缩、懒加载、WebP） | `npx nuxi@latest module add image` |
| `@nuxtjs/color-mode` | 深色/浅色模式切换 | `npx nuxi@latest module add color-mode` |
| `@nuxt/icon` | 图标库，支持 100,000+ 图标 | `npx nuxi@latest module add icon` |
| `@vueuse/nuxt` | Vue 组合式工具函数集合（滚动、剪贴板、媒体查询等） | `npm install @vueuse/nuxt @vueuse/core` |

### Phase 3：SEO & 性能

| 包名 | 作用 | 安装命令 |
|------|------|----------|
| `@nuxtjs/sitemap` | 自动生成 sitemap.xml，提升 SEO | `npx nuxi@latest module add sitemap` |
| `@nuxtjs/robots` | 生成 robots.txt | `npx nuxi@latest module add robots` |
| `nuxt-og-image` | 自动生成文章分享封面图（Open Graph） | `npx nuxi@latest module add og-image` |

### Phase 4：AI 功能

| 包名 | 作用 | 安装命令 |
|------|------|----------|
| `@anthropic-ai/sdk` | 调用 Claude API，实现文章摘要、语义搜索、写作辅助 | `npm install @anthropic-ai/sdk` |
| `openai` | 调用 OpenAI API（GPT、Embeddings） | `npm install openai` |
| `@xenova/transformers` | 在浏览器/Node 本地跑小型 AI 模型（无需 API） | `npm install @xenova/transformers` |

### Phase 5：后端集成（Java / Python）

> 后端不在前端项目中安装，独立运行。前端通过 HTTP API 调用后端。

**Java（Spring Boot）后端：**
- 参考：`/Users/mingpang2/Desktop/my-ai/todo-list-web/todo-backend/`
- 前端通过 Vite proxy 或直接 fetch 调用 REST API
- Nuxt 配置代理：`nuxt.config.ts` 中的 `routeRules` 或 `vite.server.proxy`

**Python（FastAPI）后端：**
```bash
# Python 后端独立目录
mkdir my-blog-api
cd my-blog-api
pip install fastapi uvicorn
```
- 启动：`uvicorn main:app --port 8000`
- 前端 fetch：`http://localhost:8000/api/...`

**前端调用后端的 Nuxt 配置示例：**
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/api/**': { proxy: 'http://localhost:8000/**' } // 代理到 Python/Java 后端
  }
})
```

### Phase 6：部署 & 运维

| 工具 | 作用 |
|------|------|
| Vercel | 前端静态/SSR 部署，免费，自动 CI/CD |
| Docker | 容器化后端服务，保证环境一致性 |
| GitHub Actions | 自动化测试、构建、部署流水线 |
| Nginx | 反向代理，统一前后端端口 |

---

## 快速参考

```bash
# 本地开发
npm run dev

# 生产构建
npm run build

# 静态导出（纯静态，无需服务器）
npm run generate

# 预览生产构建
npm run preview
```

---

> 更新记录：2026-03-19 初始化，Phase 1 完成

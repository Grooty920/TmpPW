# 小杨王子 · 水墨博客 🏮

> 寄蜉蝣于天地，渺沧海之一粟 — 以笔墨为舟，渡无涯之学海

一个融合**中式水墨美学**与**现代 Web 技术**的个人博客系统，拥有玻璃拟态 UI、动态水墨动画、博客文章、工具导航、全文搜索、评论互动等完整功能。

---

## ✨ 功能特性

### 🎨 视觉设计
- **水墨主题** — 宣纸黄 #F7F3E8、墨黑 #1C1C1C、朱砂红 #C73E3A、石青 #4A6741
- **玻璃拟态** — 毛玻璃卡片、导航栏，科技感与水墨意境融合
- **动态水墨动画** — 墨竹摇曳、云雾飘动、墨滴扩散
- **雪花飘落** — 鼠标跟随排斥效果
- **暗色模式** — 自适应系统主题，暗色模式星空闪烁
- **毛笔字体** — 霞鹜文楷 + 马山正体 + Noto Serif SC

### 📝 博客系统
- **MDX 文章** — 支持 Markdown + JSX 组件
- **文章分类/标签** — 自动分类管理
- **阅读时间估算** — 自动计算
- **目录导航** — 文章内自动生成 TOC
- **代码复制** — 一键"抄录"代码块
- **上一篇/下一篇** — 文章导航

### 💬 评论互动
- **Twikoo 评论** — 支持匿名留言（输入名字即可）
- **表情/回复/Markdown** — 完整评论体验
- **MongoDB 存储** — 数据持久化，所有人可见

### 🔍 搜索功能
- **实时全文搜索** — 搜索文章标题、描述、标签
- **关键词高亮** — 搜索结果中标记匹配内容

### 🛠️ 工具导航
- **分类管理** — 匠心、器用、羽翼、百宝
- **外部链接** — 常用工具集合
- **门锁密码系统** — 施工队密码分配工具
- **后台管理** — 在线编辑工具、导航、文章

### 📡 其他功能
- **RSS 订阅** — 支持博客订阅
- **Sitemap** — 搜索引擎优化
- **PWA 支持** — Service Worker 离线缓存
- **社交分享** — Twitter/X、微博分享
- **页面过渡动画** — View Transitions API

---

## 🏗️ 技术栈

| 技术 | 用途 |
|------|------|
| **Astro 5** | 静态站点生成器 |
| **Tailwind CSS 3** | 样式框架 |
| **MDX** | 文章内容格式 |
| **TypeScript** | 类型安全 |
| **Cloudflare Pages** | 托管部署 |
| **Vercel** | Twikoo 后端部署 |
| **MongoDB Atlas** | 评论数据存储 |
| **Giscus** | GitHub Discussions 评论（已迁移至 Twikoo） |

---

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/Grooty920/TmpPW.git
cd TmpPW

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 环境要求

- Node.js 18+
- npm 9+

---

## 📁 项目结构

```
TmpPW/
├── public/                  # 静态资源
│   ├── admin/               # 后台管理页面
│   ├── ink/                 # 水墨素材（纹理、山脉）
│   ├── uploads/             # 上传文件
│   ├── avatar.jpg           # 头像
│   ├── hero-bg.mp4          # 首页背景视频
│   ├── manifest.json        # PWA 配置
│   └── sw.js                # Service Worker
├── src/
│   ├── components/          # 组件
│   │   ├── AnimationEffects.astro  # 雪花/星空/光晕动画
│   │   ├── AuthorCard.astro        # 博主卡片
│   │   ├── BlogCard.astro          # 博客卡片（首页）
│   │   ├── BlogListCard.astro      # 博客列表卡片
│   │   └── InkBackground.astro     # 水墨背景动画
│   ├── content/
│   │   ├── config.ts        # 内容集合配置
│   │   └── posts/           # MDX 文章
│   ├── data/
│   │   ├── navigation.json  # 导航栏数据
│   │   ├── profile.json     # 个人信息
│   │   └── tools.json       # 工具数据
│   ├── layouts/
│   │   └── Layout.astro     # 主布局
│   ├── pages/
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于页
│   │   ├── search.astro     # 搜索页
│   │   ├── blog/            # 博客页面
│   │   ├── tools/           # 工具页面
│   │   └── rss.xml.ts       # RSS 订阅
│   └── styles/
│       └── global.css       # 全局样式
├── twikoo-vercel/           # Twikoo 评论后端部署文件
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
└── package.json
```

---

## 🎨 主题定制

### 颜色变量

在 `src/styles/global.css` 中修改：

```css
:root {
  --bg-primary: #f7f3e8;    /* 宣纸黄 */
  --text-primary: #1c1c1c;  /* 墨黑 */
  --accent: #c73e3a;        /* 朱砂红 */
  --stone: #4a6741;         /* 石青 */
}
```

### 字体

- **霞鹜文楷** — 正文阅读
- **马山正体** — 标题/书法字
- **Noto Serif SC** — 备用衬线字体

---

## 🌐 部署

### 前端（Cloudflare Pages）

1. Fork 或 Push 到 GitHub
2. 在 Cloudflare Pages 中连接仓库
3. 构建命令：`npm run build`
4. 输出目录：`dist`

### 评论后端（Vercel + MongoDB Atlas）

1. 注册 MongoDB Atlas，创建免费集群
2. 获取连接字符串
3. 在 Vercel 导入本项目，Root Directory 设为 `twikoo-vercel`
4. 添加环境变量 `MONGODB_URI`
5. 部署后将 Vercel 域名填入 `src/pages/blog/[slug].astro` 的 `envId`

---

## 🔧 后台管理

访问 `/admin` 路径，输入管理密码即可进入后台：

- **工具管理** — 增删改工具分类/项目
- **导航管理** — 编辑导航栏
- **个人信息** — 编辑简介、头像、签名
- **文章发布** — 创建/编辑 MDX 文章
- **文件上传** — 上传图片/视频资源

---

## 📄 许可证

MIT License © 2026 小杨王子

---

## 🙏 致谢

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twikoo](https://twikoo.js.org/)
- [霞鹜文楷](https://github.com/lxgw/LxgwWenKai)
- [shuimo-ui](https://github.com/shuimo-design/shuimo-ui)

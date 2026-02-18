# Personal Site (Vite + React + Tailwind CSS)

一个极简风格的个人网站模板，包含：
- 首页（自我介绍）
- 项目展示页（模拟数据）
- 博客列表页（模拟数据）
- 深色模式支持
- GitHub Actions 自动部署到 GitHub Pages

## 技术栈
- Vite 5
- React 18
- Tailwind CSS 3
- GitHub Pages + GitHub Actions

## 本地开发

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 生产构建
```bash
npm run build
```

### 4. 本地预览构建产物
```bash
npm run preview
```

## 一键启动脚本（可选）
项目已提供：
```bash
./scripts/setup.sh
```
该脚本会执行依赖安装并启动开发服务。

## 项目结构
```txt
.
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── scripts/setup.sh
└── src
    ├── App.jsx                    # 页面结构与主题切换
    ├── data.js                    # 项目/博客模拟数据
    ├── index.css                  # Tailwind 入口与全局样式
    └── main.jsx                   # React 入口
```

## 页面与内容修改

### 修改自我介绍
编辑 `src/App.jsx` 中首页段落内容。

### 修改项目列表和博客列表
编辑 `src/data.js`：
- `projects`：项目展示数据
- `blogs`：博客列表数据

### 修改样式
- 全局样式：`src/index.css`
- 主题与扩展：`tailwind.config.js`

## 部署到 GitHub Pages

### 1. 推送到 GitHub 仓库
确保默认分支是 `main`，并将代码推送到远程仓库。

### 2. 启用 GitHub Pages
进入仓库设置：
- `Settings` -> `Pages`
- `Build and deployment` 的 `Source` 选择 `GitHub Actions`

### 3. 自动部署
仓库每次 push 到 `main`，会自动触发：
- 安装依赖：`npm ci`
- 构建项目：`npm run build`
- 发布到 GitHub Pages

工作流文件位置：
- `.github/workflows/deploy.yml`

## 关于 base 路径
`vite.config.js` 已根据 GitHub Actions 环境自动设置 `base`：
- 在 GitHub Actions 中构建时自动使用 `/<repo-name>/`
- 本地开发时使用 `/`

无需手动改动即可兼容本地与 Pages 部署。

## 常见问题

### 页面样式未生效
确认已安装依赖并正常启动：
```bash
npm install
npm run dev
```

### GitHub Pages 打开 404
检查：
1. 仓库是否已启用 `GitHub Actions` 作为 Pages 来源
2. 分支是否推送到 `main`
3. Actions 中 `Deploy to GitHub Pages` 工作流是否成功

---
如需扩展为多页路由（React Router）、接入真实博客 Markdown 或添加 i18n，我可以继续帮你升级。

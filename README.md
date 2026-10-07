# personal-portfolio
Personal portfolio website

## Development

A responsive professional portfolio with editable content, project case studies and a printable resume.

- Node.js 24 LTS (validated with 24.19.0), npm 11.9.0
- Next.js 16.4.0, App Router, TypeScript, Tailwind CSS 4, ESLint
- Application routes live in `src/app`; `@/*` resolves to `src/*`.

Run from the repository root:

```sh
npm ci
npm run dev
```

The development server uses port 3000. Production and static checks:

```sh
npm run build
npm run lint
npx tsc --noEmit
```

Run `npm run start` after a successful build to serve the production output.

In this Codex cloud environment, set `npm_config_cache=/workspace/.cache/npm` before npm commands because the default home cache is not writable. Runtime processes must be started again in new tasks.

## 第一版作品集

首页包括个人介绍、工作经历、项目经历、核心能力、代表作品、教育经历和联系方式。所有个人资料集中在 `src/data/portfolio.ts`，示例内容明确标记为待替换，正式投递前请更新真实信息与成果。

- `src/app/page.tsx`：首页信息架构。
- `src/app/globals.css`：商务视觉、PC/手机响应式与打印样式。
- `src/components/`：导航、标题和打印按钮。
- `src/app/resume/page.tsx`：共用数据的简历页，通过“打印 / 保存为 PDF”下载。
- `src/app/layout.tsx`：中文语言和搜索元信息。

`npm run typecheck` 执行独立 TypeScript 检查。项目详情和作品框架可以展开查看；作品附件等待真实文件，未填充虚构数据。简历目前通过浏览器保存 PDF，后续可替换为正式 PDF 文件下载。

生产构建采用 Next.js 官方 Webpack 模式，避免此云环境中 Turbopack CSS loader 的端口绑定限制。开发服务器仍使用 Turbopack。

## Codex Cloud 预览

`npm run dev` 固定监听 `0.0.0.0:3000`；`npm run start` 采用相同监听配置。云环境的 localhost 只能用于环境内部检查，不能作为用户浏览器链接。浏览器访问需要平台提供的端口 3000 代理 / 转发地址。当前会话未提供端口转发或打开预览的工具，不能通过修改 Next.js 监听地址自动生成外部链接，也不能把内部 HTTP 200 当成外部预览验证通过。

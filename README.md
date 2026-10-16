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

## Career Portfolio V3 — 个人职业作品集

当前网站面向销售、商务拓展、业务运营、项目执行、团队协作及 AI 应用等复合型岗位，不以单一渠道岗位作为主定位。延续已有视觉体系、技术栈与真实资料，本轮在独立 Preview 分支验收，不直接覆盖 Production。

首页顺序：Hero → Key Results → Capability Map → Selected Work → Career Experience → AI & Digital Projects → Business Demo Lab → Independent Projects → Resume → Contact。关于与教育并入职业经历，原有工作方法与成果作为可展开的证据保留。

- `src/data/projects.ts`：统一项目注册表，包含 `id`、`title`、`type`、`description`、`status`、`metrics`、`skills`、`route`、`year`；真实项目的时间和指标直接引用现有案例。未知年份为 `null`，不按当前日期猜测。
- 项目类型：`real-experience`、`applied-ai`、`simulation`、`independent-project`。项目卡片、数字化实践和成果记录使用统一中英文标签；模拟数据不混入真实工作 KPI。
- `selected` 控制代表项目展示；商业 Demo 和独立项目按 `type` 自动归类。增加数字化实践时填写 `practice` 的 Problem / Approach / Tools / Output / What I Learned，并在同一文件的数字化实践列表中排序。
- `capabilityMap` 用稳定项目 ID 关联证据；`careerEvidence` 为三段真实经历提供 Situation / Responsibility / Capability，Action 和 Result 沿用原工作记录。
- `src/components/project-ui.tsx`：项目标签、卡片、数字化实践索引与详情；`src/app/portfolio-v3.css`：新增内容的响应式样式，不改变原简历打印规则。
- `/case-studies/ai-productivity`：沿用旧地址，升级为六项 AI 与数字化实践；保留原工作流、工具分级及已有求职材料说明。
- `/projects/starry-cocktail`：独立项目入口和 Coming Soon 内容框架。只保留已有自主实践及本人给出的品牌规划，不展示未经确认的营业额、客户数、收入或项目年份。

后续新增真实案例、商业 Demo 或独立项目时，先补全项目数据与可访问的路由，再配置相应展示。未提供的原始材料不创建虚假下载入口；`coming-soon` 表示详细案例待补充，不代表已经实现商业结果。

原 `/resume`、`/resume-print`、两份 PDF、证件照、联系方式以及两个 Demo 的数据和交互逻辑继续保留。已有定向简历仍可单独投递，不代表整站职业定位。

## 历史版本：V2 真实求职作品集

李明春的求职定位为业务运营、项目执行、商务协作及渠道与伙伴方向。V2 保留原有米白 / 灰绿视觉与响应式布局，更新三段真实工作经历、三个项目案例、四项工作成果、教育与联系方式。

- `src/data/portfolio.ts`：所有个人资料、业务事实、案例、成果、首页标题和简历精简版内容。
- `src/app/page.tsx`：首页、关键数据、案例背景 / 行动 / 结果及工作成果。
- `src/app/globals.css`：原有视觉体系、真实内容长度适配、响应式和两页 A4 打印样式。
- `src/app/resume/page.tsx`：在线简历，与首页共用统一资料。
- `public/resume-li-mingchun.pdf`：由在线简历打印生成的中文两页 A4 PDF，供首页及在线简历直接下载。
- `src/components/header.tsx`：桌面与移动端锚点导航。
- `src/app/layout.tsx`：姓名与真实求职内容的页面元信息。

`npm run typecheck` 执行独立 TypeScript 检查。简历支持浏览器打印保存 PDF；打印时隐藏操作按钮，工作经历与项目按两页 A4 排版，使用支持中文的系统字体回退。PDF 下载文件是版本化的静态文件：后续更新资料后，须从 `/resume` 重新打印为 A4 PDF（关闭浏览器页眉页脚），替换 `public/resume-li-mingchun.pdf`，保证在线简历与下载文件一致。

案例与经历保留“参与”“约”“累计接触预算量级”等事实限定。未提供入学年份和微信，不展示这些字段；工作成果没有虚构附件下载入口。

生产构建采用 Next.js 官方 Webpack 模式，避免此云环境中 Turbopack CSS loader 的端口绑定限制。开发服务器仍使用 Turbopack。

## Codex Cloud 预览

`npm run dev` 固定监听 `0.0.0.0:3000`；`npm run start` 采用相同监听配置。云环境的 localhost 只能用于环境内部检查，不能作为用户浏览器链接。浏览器访问需要平台提供的端口 3000 代理 / 转发地址。当前会话未提供端口转发或打开预览的工具，不能通过修改 Next.js 监听地址自动生成外部链接，也不能把内部 HTTP 200 当成外部预览验证通过。

## Career Portfolio V2 — 职业能力作品集

本次升级沿用 Next.js / App Router 和米白、灰绿商务风格，不新增运行依赖。

- `src/data/career.ts`：新版 Hero、关键成果、四个案例、AI 工作流、工具使用层级、岗位迁移和 Why Me。
- `src/data/portfolio.ts`：原有真实资料及综合简历数据，保留不变。
- `src/data/resume-print.ts`：原有华为云伙伴支持定向 A4 简历数据，保留不变。
- `src/app/page.tsx`、`src/app/career.css`：新版首页及作用于 `.career-site` 的样式，不改变原简历的打印规则。
- `src/app/case-studies/[slug]/page.tsx`：静态生成四个案例页面，按背景、职责、问题、行动、结果、复盘及能力迁移阅读。
- `src/components/career-ui.tsx`：共享页头页尾、案例卡片和 AI 工作流。
- `src/app/demo/sales-pipeline/`、`src/components/sales-pipeline.tsx`、`src/data/sales-pipeline.ts`：前端销售流程模拟，包含阶段筛选、搜索、阶段修改、联动指标、漏斗及跟进建议。
- `src/app/layout.tsx`、`src/app/sitemap.ts`、`src/app/robots.ts`：SEO、Open Graph、Twitter 分享、站点地图及爬虫配置。分享图片使用已有真实证件照。

新增业务页面：

- `/case-studies/activity-execution`
- `/case-studies/sales-team`
- `/case-studies/store-operations`
- `/case-studies/ai-productivity`
- `/demo/sales-pipeline`

已有 `/resume`（综合经历，两页 A4）与 `/resume-print`（华为云伙伴支持定向，一页 A4）及两份 PDF 均继续可用，本次没有修改其正文或静态文件。

真实口径：直播账号 **3 天约 300 → 500 粉，后续约 580 粉**，不是从 0 增长 500；招聘与带教总数 **5 名，其中 2 名后续表现优秀**；约 60 万元为**累计接触项目预算量级**；约 30 人为**跨公司项目协作团队**，非个人直属团队。本人已在本次升级中再次确认直播起点。

Sales Pipeline Demo 的全部公司、联系人、金额和跟进时间均为模拟。概率按阶段固定为 10%、25%、50%、75%、100%；Open Pipeline 和 Weighted Pipeline 排除 Won，Won Value 单独展示。Lead → Won Conversion 是当前 Won 数量除以全量记录；阶段分布是当前互斥数量，Stage Progression 保留进入过的最远阶段，回退不抹去累计历程。筛选只影响表格和当前建议，不改变全量指标。修改只保留在当前页面，不接后端、不存储客户数据、不调用 AI API。Channel Partner Growth 使用独立的虚构伙伴池，胜率为 Won / (Won + Lost)，历史激活与当前活跃分开展示。

后续可补充（不影响当前运行）：可公开的 SOP 原始文档、活动方案或工作记录、AI 研究与人工修订前后示例、工具熟练程度的进一步说明。未提供的材料不生成虚假下载地址，也不新增未经确认的效率收益。

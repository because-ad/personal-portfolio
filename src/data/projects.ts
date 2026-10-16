import { caseStudies } from "./career";
import { huaweiResume } from "./resume-print";
import { starryCocktail } from "./starry-cocktail";

export const projectTypes = {
  "real-experience": {
    english: "REAL EXPERIENCE",
    label: "真实经历",
    description: "真实工作职责、行动与本人确认的结果。",
  },
  "applied-ai": {
    english: "APPLIED AI",
    label: "AI应用",
    description: "AI 辅助实际任务，内容选择与最终验收由我负责。",
  },
  simulation: {
    english: "SIMULATION",
    label: "模拟项目",
    description: "商业流程模拟；企业、客户、伙伴与业绩数据均为虚构。",
  },
  "independent-project": {
    english: "INDEPENDENT PROJECT",
    label: "独立项目",
    description: "自主规划与推进的个人项目，不等同于受雇工作经历。",
  },
} as const;
export type ProjectType = keyof typeof projectTypes;
export const projectStatuses = {
  available: "可查看",
  ongoing: "持续实践",
  "coming-soon": "Coming Soon / 内容待补充",
} as const;
export type DigitalPractice = {
  problem: string;
  approach: string;
  tools: readonly string[];
  output: string;
  learning: string;
  evidence: string;
  evidenceRoute?: string;
};
export type PortfolioProject = {
  id: string;
  title: string;
  subtitle?: string;
  categoryLabel?: string;
  ctaLabel?: string;
  type: ProjectType;
  description: string;
  status: keyof typeof projectStatuses;
  metrics: readonly { value: string; label: string }[];
  skills: readonly string[];
  route: string;
  /** 未确认具体年份时留空，不用当前年份推断经历时间。 */
  year: string | null;
  organization?: string;
  selected?: boolean;
  caseSlug?: string;
  practice?: DigitalPractice;
  recordedPractice?: string;
  nextContent?: readonly string[];
};

function existingCase(slug: string) {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Missing source case: ${slug}`);
  return study;
}
const activities = existingCase("activity-execution");
const sales = existingCase("sales-team");
const store = existingCase("store-operations");
const ai = existingCase("ai-productivity");

/** 首页、AI实践页、商业实验室和独立项目统一从这里读取，不复制真实数据。 */
export const projects: readonly PortfolioProject[] = [
  {
    id: "activity-execution",
    title: "活动策划与项目执行",
    type: "real-experience",
    description: activities.summary,
    status: "available",
    metrics: activities.metrics,
    skills: activities.tags,
    route: "/case-studies/activity-execution",
    year: activities.period,
    organization: activities.organization,
    selected: true,
    caseSlug: activities.slug,
  },
  {
    id: "sales-team",
    title: "销售与团队管理",
    type: "real-experience",
    description: sales.summary,
    status: "available",
    metrics: sales.metrics,
    skills: sales.tags,
    route: "/case-studies/sales-team",
    year: sales.period,
    organization: sales.organization,
    selected: true,
    caseSlug: sales.slug,
  },
  {
    id: "store-operations",
    title: "电竞门店运营体系",
    type: "real-experience",
    description: store.summary,
    status: "available",
    metrics: store.metrics,
    skills: store.tags,
    route: "/case-studies/store-operations",
    year: store.period,
    organization: store.organization,
    selected: true,
    caseSlug: store.slug,
  },
  {
    id: "ai-productivity",
    title: "AI Productivity",
    subtitle: "AI与数字化实践",
    type: "applied-ai",
    description:
      "围绕 SOP、研究、网站和业务模拟，将问题拆解、AI协作与人工验收连接起来。",
    status: "ongoing",
    metrics: ai.metrics,
    skills: ["业务研究", "结构化表达", "人工验收"],
    route: "/case-studies/ai-productivity",
    year: null,
    selected: true,
    caseSlug: ai.slug,
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline Demo",
    type: "simulation",
    description: "用虚构客户展示销售阶段、金额口径、跟进判断与下一步行动。",
    status: "available",
    metrics: [],
    skills: ["Sales", "Pipeline", "Simulation"],
    route: "/demo/sales-pipeline",
    year: null,
    selected: true,
    practice: {
      problem: "如何把从线索到成交的跟进过程表达为可以检查和操作的业务界面？",
      approach:
        "定义阶段、模拟数据与金额口径，使用 Codex 协作实现筛选、详情、阶段调整和本地建议，再核查计算与交互。",
      tools: ["Codex", "Next.js", "TypeScript"],
      output:
        "可操作的 Sales Pipeline Demo；包含当前分布、阶段历程、开放与加权金额。",
      learning:
        "客户当前阶段与累计进入阶段是两种数量口径；开放金额、成交额和转化率也要分别说明。",
      evidence:
        "Demo Data / 模拟数据；不是我的真实销售业绩，不连接真实 AI API。",
      evidenceRoute: "/demo/sales-pipeline",
    },
  },
  {
    id: "channel-partner-growth",
    title: "B2B Channel Partner Growth",
    type: "simulation",
    description: "从伙伴招募、筛选、赋能到商机协同，模拟完整渠道伙伴生命周期。",
    status: "available",
    metrics: [],
    skills: ["Simulation", "Channel", "Partner", "B2B"],
    route: "/demo/channel-partner-growth",
    year: null,
    selected: true,
    practice: {
      problem: "如何解释伙伴筛选、资源投入和业务进展之间的关系？",
      approach:
        "建立虚构伙伴池，定义评分、分层、阶段与时间风险规则；与 Codex 协作实现看板、详情和可解释的下一步建议。",
      tools: ["ChatGPT", "Codex", "TypeScript"],
      output:
        "渠道伙伴增长模拟案例，包含评分贡献、生命周期、激活里程碑、风险与执行字段。",
      learning:
        "历史激活与当前活跃不是同一集合；评分和建议需要说明依据、时间条件与验收标准。",
      evidence:
        "Simulation / 模拟项目；所有伙伴和业绩数据虚构，不代表真实渠道从业经历。",
      evidenceRoute: "/demo/channel-partner-growth",
    },
  },
  {
    id: "newcomer-sop",
    title: "新人 SOP",
    type: "applied-ai",
    description: "把经验带教整理为教学、练习、考核与达标要求。",
    status: "available",
    metrics: [],
    skills: ["SOP", "新人培训", "人工校验"],
    route: "/case-studies/ai-productivity#newcomer-sop",
    year: null,
    practice: {
      problem: "新人培训依赖经验传递，教学顺序和标准不统一。",
      approach:
        "整理流程、拆解三天任务与考核标准，结合门店实际要求人工校验，再用于新人带教。",
      tools: ["ChatGPT", "人工业务校验"],
      output: "三天新人试岗 SOP，覆盖教学、练习、考核与达标标准。",
      learning:
        "AI可以帮助整理结构；训练要求是否适用，需要在实际带教和反馈中判断。",
      evidence:
        "已用于新人带教；新人平均适应周期由约 7 天缩短至约 3 天。这是整体流程实践的结果，不是 AI 单独带来的收益。",
      evidenceRoute: "/case-studies/store-operations",
    },
  },
  {
    id: "business-research",
    title: "商业研究",
    type: "applied-ai",
    description: "围绕公司、行业和业务模型整理有来源的信息。",
    status: "ongoing",
    metrics: [],
    skills: ["行业研究", "业务框架", "信息核验"],
    route: "/case-studies/ai-productivity#business-research",
    year: null,
    practice: {
      problem: "面对陌生公司和行业，需要建立基本业务理解，区分事实与推测。",
      approach:
        "用问题树梳理客户、产品与业务模式，借助 AI 整理资料，再检查来源、适用条件和待验证的问题。",
      tools: ["ChatGPT", "Gemini", "Grok"],
      output: "行业与公司研究材料、业务框架和后续核查问题。",
      learning:
        "结构清楚不等于结论正确。研究材料应保留来源和不确定性，不能把生成内容当作事实。",
      evidence:
        "属于个人学习与业务准备；暂未提供公开原始附件，不展示未经确认的效率或收入数据。",
    },
  },
  {
    id: "role-research",
    title: "岗位研究",
    type: "applied-ai",
    description: "将岗位要求拆成职责、所需能力和个人证据。",
    status: "ongoing",
    metrics: [],
    skills: ["JD拆解", "能力匹配", "面试准备"],
    route: "/case-studies/ai-productivity#role-research",
    year: null,
    practice: {
      problem: "需要快速理解不同岗位的具体职责，避免只根据岗位名称判断匹配。",
      approach:
        "拆解 JD、整理业务场景，逐项匹配已有经历与待补能力，形成问题树和面试准备材料，并复核真实数据。",
      tools: ["ChatGPT", "Gemini", "Grok"],
      output: "岗位研究材料、能力证据清单、简历表达和面试准备内容。",
      learning:
        "岗位适配需要说明哪些已经做过、哪些能够迁移、哪些仍需学习，不能把研究写成从业经历。",
      evidence: "用于个人求职准备；不虚构岗位任职、项目责任或量化效率结果。",
    },
  },
  {
    id: "career-portfolio",
    title: "Portfolio 网站",
    type: "applied-ai",
    description: "将分散经历整理为可查看、可验证、可继续扩展的职业作品集。",
    status: "ongoing",
    metrics: [],
    skills: ["需求定义", "信息架构", "Codex协作", "人工验收"],
    route: "/case-studies/ai-productivity#career-portfolio",
    year: null,
    practice: {
      problem: "分散的经历和资料需要转成可查看过程、行动与结果的个人作品集。",
      approach:
        "定义目标与信息架构，集中管理真实内容，借助 Codex 协作开发；人工核对资料，并验收页面、交互和下载文件。",
      tools: ["ChatGPT", "Codex", "Next.js", "TypeScript"],
      output: "当前 Career Portfolio、案例页面、在线简历与可运行的业务模拟。",
      learning:
        "AI协作开发仍需要清晰需求、事实核对和实际验证；页面能运行与业务表述可信同样重要。",
      evidence:
        "当前网站、案例和简历可直接查看；未宣称独立完成所有底层开发或精通全部工具。",
      evidenceRoute: "/",
    },
  },
  {
    id: "starry-cocktail",
    title: starryCocktail.english,
    subtitle: starryCocktail.name,
    type: "independent-project",
    categoryLabel: starryCocktail.type,
    ctaLabel: "查看项目",
    description: starryCocktail.description,
    status: "available",
    metrics: [],
    skills: ["Brand", "Product", "Pricing", "Operations", "Content"],
    route: "/projects/starry-cocktail",
    year: null,
    recordedPractice: huaweiResume.project.bullets[0],
  },
];

export function projectById(id: string) {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
}
export const selectedProjects = projects.filter((project) => project.selected);
export const businessDemos = projects.filter(
  (project) => project.type === "simulation",
);
export const independentProjects = projects.filter(
  (project) => project.type === "independent-project",
);
export const digitalProjects = [
  "newcomer-sop",
  "business-research",
  "role-research",
  "career-portfolio",
  "sales-pipeline",
  "channel-partner-growth",
].map((id) => {
  const project = projectById(id);
  if (!project.practice)
    throw new Error(`Digital project lacks practice: ${id}`);
  return { ...project, practice: project.practice };
});

export const capabilityMap = [
  {
    id: "sales",
    title: "销售执行",
    evidence: "武汉拓优课程销售，一线接触用户、判断需求并推进成交。",
    projectIds: ["sales-team"],
    skills: ["客户沟通", "销售话术", "成交跟进"],
  },
  {
    id: "team",
    title: "团队管理",
    evidence: "带领约 10 人地推团队，进行人员分区、目标拆解、现场监督与复盘。",
    projectIds: ["sales-team"],
    skills: ["任务分工", "执行监督", "团队协作"],
  },
  {
    id: "execution",
    title: "项目执行",
    evidence: "参与数十场活动项目，协调人员、物料与时间，跟进交付节点。",
    projectIds: ["activity-execution"],
    skills: ["任务拆解", "节点推进", "现场执行"],
  },
  {
    id: "coordination",
    title: "现场协调",
    evidence: "参与景区、开业与商业活动，在场地限制和现场变化中协调资源。",
    projectIds: ["activity-execution"],
    skills: ["多方沟通", "资源安排", "变化应对"],
  },
  {
    id: "sop",
    title: "SOP设计",
    evidence: "参与电竞门店三天试岗 SOP，将教学、练习与考核要求写成标准。",
    projectIds: ["store-operations", "newcomer-sop"],
    skills: ["流程拆解", "考核标准", "人工校验"],
  },
  {
    id: "training",
    title: "招聘培训",
    evidence: "实际参与完成 5 名员工招聘与带教，其中 2 名后续表现优秀。",
    projectIds: ["store-operations"],
    skills: ["招聘筛选", "新人带教", "表现反馈"],
  },
  {
    id: "operations",
    title: "运营管理",
    evidence: "参与电竞门店服务流程、巡场防盗、收机规范与新人硬件识别。",
    projectIds: ["store-operations"],
    skills: ["服务标准", "流程检查", "日常运营"],
  },
  {
    id: "ai",
    title: "AI应用",
    evidence:
      "将 AI 用于 SOP、行业与岗位研究、Portfolio 开发，输出经人工复核。",
    projectIds: ["newcomer-sop", "business-research", "career-portfolio"],
    skills: ["信息整理", "结构化表达", "事实核查"],
  },
  {
    id: "digital",
    title: "数字化能力",
    evidence:
      "与 Codex 协作完成网站及两个业务 Demo，将业务规则转为可操作界面。",
    projectIds: [
      "career-portfolio",
      "sales-pipeline",
      "channel-partner-growth",
    ],
    skills: ["需求定义", "规则表达", "交互验收"],
  },
] as const;

export const careerEvidence = {
  heima: {
    situation: "新人带教依赖口头经验，日常服务需要统一执行要求。",
    responsibility:
      "参与门店运营、招聘带教、流程建设及直播，不扩大为门店经营负责人。",
    capability: "流程设计、招聘培训、服务运营与结果跟踪。",
    projectId: "store-operations",
  },
  xinchuang: {
    situation: "活动现场涉及客户、供应商、人员、物料与场地变化。",
    responsibility: "参与活动策划与现场执行，独立完成部分开业活动和生日宴。",
    capability: "任务拆解、资源协调、节点推进与现场判断。",
    projectId: "activity-execution",
  },
  tuoyou: {
    situation: "线下课程销售需要根据客户反馈调整表达与团队执行方式。",
    responsibility:
      "从个人销售到带领约 10 人地推团队，负责人员分区与执行监督。",
    capability: "需求判断、销售执行、目标拆解与团队协作。",
    projectId: "sales-team",
  },
} as const;

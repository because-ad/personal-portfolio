import { portfolio } from "./portfolio";

/** 新作品集的求职表达；原简历资料独立保留，不自动改写已确认的 PDF。 */
export const career = {
  siteUrl: "https://personal-portfolio-one-inky-35.vercel.app",
  title: "李明春 | Business Development · Operations · AI-Native",
  description:
    "李明春个人职业作品集，展示业务拓展、项目执行、门店运营、团队管理及 AI 应用相关经历。",
  subtitle: "业务增长 · BD · 运营 · 项目执行",
  secondary: "AI 原生工作能力",
  english:
    "Business Development / Operations / Project Execution / AI-Native Productivity",
  intro:
    "具备活动项目、销售推广、团队管理、门店运营和新人培训等一线业务经验，能够从业务目标出发完成任务拆解、流程设计与执行落地，并持续探索 AI 工具在业务、运营与效率提升中的实际应用。",
  metrics: [
    {
      value: "数十场",
      label: "参与活动项目",
      note: "开业、生日宴、景区及团建等",
    },
    {
      value: "约 30 人",
      label: "最大跨公司协作规模",
      note: "单项目团队协作，非直属团队人数",
    },
    {
      value: "约 60 万元",
      label: "累计接触项目预算量级",
      note: "参与项目口径，非个人收入或销售额",
    },
    {
      value: "约 10 人",
      label: "地推销售团队规模",
      note: "参与团队执行管理与现场监督",
    },
  ],
  workflow: [
    {
      english: "Business Problem",
      title: "明确业务问题",
      detail: "先确定目标、使用场景与约束。",
    },
    {
      english: "Research",
      title: "研究信息",
      detail: "整理资料，核对来源与事实。",
    },
    {
      english: "Breakdown",
      title: "拆解任务",
      detail: "把目标拆成可交付的小任务。",
    },
    {
      english: "AI Collaboration",
      title: "与 AI 协作",
      detail: "给出背景、标准与反馈。",
    },
    {
      english: "Execution",
      title: "实际执行",
      detail: "把输出应用到具体工作中。",
    },
    {
      english: "Review",
      title: "人工复核",
      detail: "检查事实、可用性与执行结果。",
    },
    {
      english: "Output",
      title: "沉淀交付",
      detail: "整理成文档、流程或可运行项目。",
    },
  ],
  toolGroups: [
    {
      label: "Core Tools",
      title: "主要协作工具",
      tools: ["ChatGPT", "Codex"],
      note: "用于研究、结构化表达及本网站开发；输出由我复核。",
    },
    {
      label: "Working Knowledge",
      title: "按任务使用",
      tools: ["Gemini", "Grok", "Canva", "飞书"],
      note: "辅助信息整理、方案表达与工作协作。",
    },
    {
      label: "Exploring",
      title: "持续学习",
      tools: ["Midjourney", "即梦", "ComfyUI"],
      note: "了解视觉生成工作流，不将所有工具标为精通。",
    },
  ],
  aiApplications: [
    {
      title: "新人 SOP",
      action: "辅助整理教学内容、练习任务与考核标准，再结合门店实际流程修订。",
      output: "三天试岗流程",
      kind: "业务应用",
    },
    {
      title: "商业与岗位研究",
      action:
        "梳理行业背景、岗位职责与伙伴业务逻辑，核查来源并持续学习陌生领域。",
      output: "研究与学习材料",
      kind: "学习应用",
    },
    {
      title: "简历与内容结构化",
      action: "整理真实经历、筛选数字证据，优化求职材料与项目方案的表达结构。",
      output: "在线简历与求职 PDF",
      kind: "可查看交付",
    },
    {
      title: "本 Portfolio 网站",
      action:
        "使用 Codex 完成页面开发、交互实现和检查，将需求推进为可运行网站。",
      output: "当前职业作品集",
      kind: "可查看交付",
    },
  ],
  roles: [
    {
      title: "Business Development",
      label: "业务拓展",
      evidence: "销售实践 + 客户沟通 + 项目执行",
      transfer: "从需求判断、关系沟通与行动跟进切入，持续学习行业和业务模式。",
      case: "sales-team",
    },
    {
      title: "ToB Sales",
      label: "ToB 销售",
      evidence: "一线成交 + 话术调整 + 目标管理",
      transfer:
        "将销售过程意识迁移到线索判断与跟进管理；企业销售经验仍需积累。",
      case: "sales-team",
    },
    {
      title: "Channel & Partners",
      label: "渠道 / 伙伴业务",
      evidence: "多方协同 + 培训 + 标准化",
      transfer: "将资源协调和带教经验用于伙伴协作、流程执行与赋能支持。",
      case: "store-operations",
    },
    {
      title: "Business Operations",
      label: "业务运营",
      evidence: "门店运营 + SOP + 结果跟踪",
      transfer: "梳理重复流程、统一执行标准，并用实际反馈优化工作。",
      case: "store-operations",
    },
    {
      title: "Project Operations",
      label: "项目运营",
      evidence: "现场执行 + 节点管理 + 物料协同",
      transfer: "围绕交付目标拆任务、协调人员资源，跟进现场变化。",
      case: "activity-execution",
    },
    {
      title: "Commercial Development",
      label: "商务拓展",
      evidence: "需求理解 + 沟通协调 + 快速学习",
      transfer: "把客户需求转成行动计划，借助 AI 研究提高准备质量。",
      case: "ai-productivity",
    },
  ],
  whyMe: [
    {
      title: "一线业务经验",
      proof:
        "做过 99 元课程销售、活动执行和门店服务，了解任务落到现场后的具体问题。",
      case: "sales-team",
    },
    {
      title: "执行与交付",
      proof: "独立完成 5 场开业活动及 3 场生日宴，也参与复杂景区项目现场交付。",
      case: "activity-execution",
    },
    {
      title: "团队协作",
      proof:
        "参与约 10 人销售团队管理及约 30 人跨公司协作，能在团队中推进任务。",
      case: "sales-team",
    },
    {
      title: "流程标准化",
      proof: "参与搭建三天试岗 SOP，新人平均适应周期由约 7 天缩短至约 3 天。",
      case: "store-operations",
    },
    {
      title: "AI 原生工作方式",
      proof:
        "把 AI 用于研究、SOP、求职材料和网站开发，以可使用的输出检验结果。",
      case: "ai-productivity",
    },
    {
      title: "陌生领域学习",
      proof:
        "自主研究并搭建鸡尾酒经营方案，完成产品、定价、设备与出品流程设计。",
      case: "ai-productivity",
    },
  ],
} as const;

export type CaseSection = {
  title: string;
  english: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};
export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  category: string;
  organization: string;
  period: string;
  summary: string;
  scope: string;
  tags: readonly string[];
  metrics: readonly { value: string; label: string }[];
  sections: readonly CaseSection[];
};

const event = portfolio.projects.find((p) => p.id === "event-delivery")!;
const sales = portfolio.projects.find((p) => p.id === "sales-team")!;
const sop = portfolio.projects.find((p) => p.id === "onboarding")!;
const heima = portfolio.jobs.find((j) => j.id === "heima")!;
const xinchuang = portfolio.jobs.find((j) => j.id === "xinchuang")!;
const tuoyou = portfolio.jobs.find((j) => j.id === "tuoyou")!;

/** 直播数字以既有本人确认口径为准：约 300 → 500 → 580，非从 0 涨粉 500。 */
export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "activity-execution",
    number: "01",
    title: "活动策划与项目执行",
    category: "PROJECT EXECUTION",
    organization: "湖北心创文化传媒",
    period: "2025.05 — 2025.11",
    summary: "从客户需求、人员与物料，到复杂活动现场的协调交付。",
    scope:
      "参与项目策划与执行；独立完成部分开业活动和生日宴，不代表对所有项目的总负责人职责。",
    tags: ["现场协调", "多方协作", "节点与物料管理"],
    metrics: [
      { value: "数十场", label: "参与活动项目" },
      { value: "5 场 / 3 场", label: "独立完成开业活动 / 生日宴" },
      { value: "约 30 人", label: "最大跨公司协作团队" },
      { value: "约 60 万元", label: "累计接触项目预算量级" },
    ],
    sections: [
      {
        title: "项目背景",
        english: "BACKGROUND",
        paragraphs: [
          "活动类型覆盖婚礼、生日宴、开业、景区、团建及商业活动。参与百洞峡、森灵欢乐世界、槐荫船说、舞林风暴等项目，部分项目涉及数百人规模现场。",
          ...event.background,
        ],
      },
      {
        title: "我的职责",
        english: "MY ROLE",
        paragraphs: [xinchuang.summary],
        bullets: [
          "参与客户需求沟通、方案策划、人员与供应商协调。",
          "独立完成 5 场开业活动及 3 场生日宴项目。",
          "参与现场搭建、设备与物料调配以及项目关键节点跟进。",
        ],
      },
      {
        title: "面临的问题",
        english: "CHALLENGE",
        paragraphs: [
          "多方同时参与，人员、物料、设备和时间需要相互配合；场地限制与现场变化会影响原有安排。",
          "百洞峡项目有洞内物料搬运和搭建等特殊现场条件，需要结合场地实际安排执行。",
        ],
      },
      {
        title: "我的行动",
        english: "ACTION",
        paragraphs: [],
        bullets: event.action,
      },
      {
        title: "最终结果",
        english: "RESULT",
        paragraphs: [
          "参与数十场项目，独立完成 5 场开业活动及 3 场生日宴。单项目跨公司团队协作约 30 人，累计接触项目预算量级约 60 万元。",
          event.result[0],
          "上述预算是参与项目的累计接触量级，不是我个人管理的预算、收入或销售业绩。",
        ],
      },
      {
        title: "我从项目中学到什么",
        english: "REFLECTION",
        paragraphs: [
          event.result[1],
          "现场执行需要先判断关键节点和约束，再调整人员、物料与执行顺序。",
        ],
      },
      {
        title: "可以迁移到什么能力",
        english: "TRANSFERABLE SKILLS",
        paragraphs: [
          "项目运营中的任务拆解与节点跟进；商务或伙伴协作中的需求理解、多方沟通与资源协调；面对变化时的优先级判断。",
        ],
      },
    ],
  },
  {
    slug: "sales-team",
    number: "02",
    title: "从个人成交到团队执行",
    category: "SALES & TEAM EXECUTION",
    organization: "武汉拓优 · 大学兼职",
    period: "2023 — 2024",
    summary: "在 99 元课程销售中，把一线反馈转化为约 10 人团队的执行方法。",
    scope:
      "大学期间兼职课程销售；从个人销售逐步参与团队执行管理，不等同于企业 ToB 销售经历。",
    tags: ["需求判断", "销售转化", "团队执行"],
    metrics: [
      { value: "2 小时 / 10 单", label: "个人销售阶段最高成交" },
      { value: "99 元", label: "课程单价" },
      { value: "约 10 人", label: "参与管理的销售团队" },
      { value: "约 2700 元", label: "团队单次最高业绩" },
    ],
    sections: [
      {
        title: "项目背景",
        english: "BACKGROUND",
        paragraphs: sales.background,
      },
      {
        title: "我的职责",
        english: "MY ROLE",
        paragraphs: [tuoyou.summary],
        bullets: [
          "一线接触用户、判断需求与推进成交。",
          "参与人员分区、销售话术调整、目标分配、过程监督与团队复盘。",
        ],
      },
      {
        title: "面临的问题",
        english: "CHALLENGE",
        paragraphs: [
          "个人方法需要转成团队能够理解和执行的方法。成员表达与区域执行存在差异，需要结合成交情况不断调整。",
        ],
      },
      {
        title: "我的行动",
        english: "ACTION",
        paragraphs: [
          "围绕用户接触 → 需求判断 → 销售话术 → 异议处理 → 成交 → 团队复制理解销售过程。",
        ],
        bullets: sales.action,
      },
      {
        title: "最终结果",
        english: "RESULT",
        paragraphs: [
          ...sales.result,
          "以上为个人阶段最高记录及团队单次最高表现，不代表日均或长期稳定业绩。",
        ],
      },
      {
        title: "我从项目中学到什么",
        english: "REFLECTION",
        paragraphs: [
          tuoyou.points[3],
          "成交反馈可以帮助检查开场、需求判断和推进方式；团队管理还需要关注方法是否真正被执行。",
        ],
      },
      {
        title: "可以迁移到什么能力",
        english: "TRANSFERABLE SKILLS",
        paragraphs: [
          "BD / 销售岗位的需求沟通、目标拆解与过程跟进；业务运营的执行监督和反馈优化。企业销售周期、决策链及行业知识需要在后续实践中继续积累。",
        ],
      },
    ],
  },
  {
    slug: "store-operations",
    number: "03",
    title: "电竞门店运营与新人培训体系",
    category: "OPERATIONS & STANDARDIZATION",
    organization: "黑马电竞",
    period: "2026.05 — 至今",
    summary: "把经验带教拆成三天试岗 SOP，让服务、训练和考核有共同标准。",
    scope:
      "实际参与门店运营、招聘与带教、流程建设及直播；不扩大为门店经营负责人。",
    tags: ["三天 SOP", "招聘与培训", "服务流程"],
    metrics: heima.highlights.map((m) => ({ value: m.value, label: m.note })),
    sections: [
      { title: "项目背景", english: "BACKGROUND", paragraphs: sop.background },
      {
        title: "我的职责",
        english: "MY ROLE",
        paragraphs: [heima.summary],
        bullets: [
          "参与新员工面试、带教、试岗 SOP 设计与服务流程标准化。",
          "参与设备与区域认知、硬件识别、巡场防盗和收机卫生规范。",
          "参与门店直播引流。",
        ],
      },
      {
        title: "面临的问题",
        english: "CHALLENGE",
        paragraphs: [
          "口头带教容易出现教学顺序、要求和判断标准不一致的问题，新员工缺少清楚的每日学习与考核目标。",
        ],
      },
      {
        title: "我的行动",
        english: "ACTION",
        paragraphs: [
          "将教学、练习、考核与达标要求拆到每天，辅助新人逐步独立完成服务。",
        ],
        bullets: sop.action,
      },
      {
        title: "最终结果",
        english: "RESULT",
        paragraphs: [
          ...sop.result,
          heima.points[2],
          heima.points[3],
          "粉丝数字为账号规模变化，不等同于新增 500 粉，也不代表销售转化或收入。",
        ],
      },
      {
        title: "我从项目中学到什么",
        english: "REFLECTION",
        paragraphs: [
          "标准化不仅是写一份文档，还需要把要求变成可以练习、检查与反馈的具体任务。招聘后的实际带教和表现反馈同样重要。",
        ],
      },
      {
        title: "可以迁移到什么能力",
        english: "TRANSFERABLE SKILLS",
        paragraphs: [
          "运营岗位的流程梳理、服务标准与结果跟踪；伙伴支持中的培训、赋能材料整理和执行检查；团队协作中的统一标准与过程管理。",
        ],
      },
    ],
  },
  {
    slug: "ai-productivity",
    number: "04",
    title: "让 AI 参与实际工作与交付",
    category: "AI-NATIVE PRODUCTIVITY",
    organization: "个人工作实践",
    period: "持续实践",
    summary:
      "从业务问题出发，用 AI 辅助研究、拆解与表达，再通过人工复核推进可用输出。",
    scope:
      "展示个人工具使用与工作方法，不宣称开发 AI 模型、精通所有工具或未经测量的效率提升。",
    tags: ["业务研究", "内容结构化", "Codex 实际开发"],
    metrics: [
      { value: "SOP", label: "新人训练与考核结构" },
      { value: "Portfolio", label: "当前可运行网站" },
      { value: "PDF", label: "真实求职材料" },
    ],
    sections: [
      {
        title: "项目背景",
        english: "BACKGROUND",
        paragraphs: [
          "不同业务任务都需要整理信息、形成结构和推进交付。AI 可以辅助这些环节，但事实判断、内容选择与最终结果仍需要人工负责。",
        ],
      },
      {
        title: "我的职责",
        english: "MY ROLE",
        paragraphs: [
          "我提出工作目标和约束，提供真实业务背景，检查 AI 输出，并把内容应用到 SOP、项目方案、求职材料及网站中。",
        ],
      },
      {
        title: "面临的问题",
        english: "CHALLENGE",
        paragraphs: [
          "通用回答不一定符合真实场景，工具可能生成错误事实。需要不断补充上下文、明确标准，并核对输出是否可用。",
        ],
      },
      {
        title: "我的行动",
        english: "ACTION",
        paragraphs: [],
        bullets: career.aiApplications.map((a) => `${a.title}：${a.action}`),
      },
      {
        title: "最终结果",
        english: "RESULT",
        paragraphs: [
          "产出并持续优化新人试岗 SOP、简历与求职 PDF，使用 Codex 开发本个人 Portfolio 网站。当前网站和简历可直接查看。",
          "商业研究、岗位研究、陌生行业学习和项目方案设计属于持续应用方向；不展示未确认的效率百分比或业务收益。",
        ],
      },
      {
        title: "我从项目中学到什么",
        english: "REFLECTION",
        paragraphs: [
          "AI 的价值取决于问题是否清楚、输入是否真实，以及输出是否经过验证。完成一项可用交付，比列出工具名称更能说明工作能力。",
        ],
      },
      {
        title: "可以迁移到什么能力",
        english: "TRANSFERABLE SKILLS",
        paragraphs: [
          "业务与行业研究、资料结构化、SOP 与培训材料整理、方案表达、岗位学习及小型业务 Demo 实现。AI 是我的工作杠杆，职业目标仍然是业务、运营与项目执行。",
        ],
      },
    ],
  },
];

export const careerNavigation = [
  { href: "/#projects", label: "项目案例" },
  { href: "/#experience", label: "职业经历" },
  { href: "/#ai", label: "AI 能力" },
  { href: "/#lab", label: "业务 Demo" },
  { href: "/#roles", label: "岗位方向" },
];

/** 工作成果与案例按稳定 ID 关联，调整展示顺序不会改变链接。 */
export const workCaseSlugs: Record<string, string> = {
  sop: "store-operations",
  events: "activity-execution",
  sales: "sales-team",
  ai: "ai-productivity",
};

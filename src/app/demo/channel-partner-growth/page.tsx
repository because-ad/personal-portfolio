import type { Metadata } from "next";
import Link from "next/link";
import { CareerShell } from "@/components/career-ui";
import { ChannelPartnerDemo } from "@/components/channel-partner-demo";
import {
  enablementBarriers,
  enablementSupport,
  partnerCase,
  partnerDashboard,
  partnerGrowthSteps,
  partnerLifecycle,
  partnerMoney,
  partnerRisks,
  partnerTiers,
  partnerTypes,
  qualificationDimensions,
  simulatedPartners,
} from "@/data/channel-partners";
import "../../career.css";
import "./channel-partner.css";

export const metadata: Metadata = {
  title: "B2B Channel Partner Growth · 渠道伙伴增长模拟项目",
  description:
    "用 18 家虚构伙伴展示筛选、分层、培训、激活与商机协同的完整模拟框架，不代表真实渠道从业经历。",
  alternates: { canonical: "/demo/channel-partner-growth" },
  openGraph: {
    title: "B2B Channel Partner Growth Case | Simulation",
    description: "独立模拟商业案例，企业、伙伴、商机和业绩数据全部虚构。",
    url: "/demo/channel-partner-growth",
  },
};

const stats = partnerDashboard(simulatedPartners);
const summary = [
  {
    english: "Business Problem",
    label: "业务问题",
    text: "直营资源有限，如何通过合适伙伴扩大深圳及华南市场覆盖，并形成可推进的商机？",
  },
  {
    english: "Framework",
    label: "解决框架",
    text: "寻找 → 筛选 → 入驻 → 培训 → 激活 → 商机协同 → 评估 → 增长 / 维持 / 退出。",
  },
  {
    english: "Key Metrics",
    label: "关键指标 · 模拟",
    text: `${stats.total} 家虚构伙伴 · ${stats.activated} 家曾激活 · ${stats.openOpportunities} 个未关闭商机 · ${partnerMoney(stats.pipeline)} 开放金额。`,
  },
  {
    english: "Decision Logic",
    label: "决策逻辑",
    text: "先判断匹配与投入，再按能力和阶段安排支持；低活跃先核查原因，资源跟随有效机会与推进节点。",
  },
  {
    english: "What I Learned",
    label: "我的理解",
    text: "签约不是终点。伙伴管理需要把客户资源、销售能力和协作意愿转化为首个机会，再通过复盘找到可复制的场景。",
  },
] as const;

export default function ChannelPartnerGrowthPage() {
  return (
    <CareerShell>
      <main id="main" className="container partner-page">
        <nav className="career-breadcrumb" aria-label="面包屑">
          <Link href="/">首页</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#lab">Business Demo Lab</Link>
          <span aria-hidden="true">/</span>
          <span>Channel Partner Growth</span>
        </nav>
        <header className="partner-hero">
          <p className="eyebrow">
            BUSINESS DEMO LAB / 02 · SIMULATION CASE / 模拟商业项目
          </p>
          <h1>{partnerCase.title}</h1>
          <p className="partner-chinese-title">{partnerCase.chinese}</p>
          <p>{partnerCase.subtitle}</p>
          <div className="partner-hero-actions">
            <span className="demo-badge">Simulation / 模拟项目</span>
            <a className="text-link" href="#case-summary">
              快速阅读 Case Summary ↓
            </a>
            <a className="text-link" href="#partner-dashboard">
              查看模拟伙伴池 ↓
            </a>
          </div>
          <p className="partner-disclosure">
            企业、伙伴、负责人、商机、金额与活动记录均为虚构。不代表我曾在云厂商或渠道岗位任职；不使用真实客户或伙伴信息。
          </p>
        </header>

        <section
          id="case-summary"
          className="partner-summary"
          aria-labelledby="case-summary-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">INTERVIEW VIEW</p>
              <h2 id="case-summary-heading">Case Summary / 一屏读懂</h2>
            </div>
            <span className="demo-badge">Simulation / 模拟项目</span>
          </div>
          <dl>
            {summary.map((item) => (
              <div key={item.english}>
                <dt>
                  <span lang="en">{item.english}</span>
                  <span>{item.label}</span>
                </dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="partner-section"
          aria-labelledby="partner-scenario-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">BUSINESS CONTEXT</p>
              <h2 id="partner-scenario-heading">覆盖市场，也要控制投入。</h2>
            </div>
          </div>
          <p className="partner-scenario">{partnerCase.scenario}</p>
          <ul className="partner-goals">
            {partnerCase.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
          <h3>Partner Lifecycle / 完整伙伴生命周期</h3>
          <ol className="partner-lifecycle" aria-label="伙伴生命周期流程图">
            {partnerLifecycle.map((step, index) => (
              <li key={step.english}>
                <span className="partner-step-number">0{index + 1}</span>
                <strong>{step.label}</strong>
                <span lang="en">{step.english}</span>
                <p>{step.action}</p>
                {index < partnerLifecycle.length - 1 && (
                  <span className="partner-flow-arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <ChannelPartnerDemo />

        <section
          className="partner-section"
          aria-labelledby="partner-types-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">PARTNER TYPES</p>
              <h2 id="partner-types-heading">不同伙伴，提供不同价值。</h2>
            </div>
          </div>
          <p className="partner-note">
            伙伴类型决定招募时核查什么，也决定后续采用什么支持方式。
          </p>
          <div className="partner-type-grid">
            {partnerTypes.map((type, index) => (
              <article key={type.id}>
                <p className="eyebrow">
                  0{index + 1} / {type.english}
                </p>
                <h3>{type.label}</h3>
                <p>{type.description}</p>
                <dl>
                  <div>
                    <dt>筛选重点</dt>
                    <dd>{type.qualification}</dd>
                  </div>
                  <div>
                    <dt>支持方式</dt>
                    <dd>{type.enablement}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section
          className="partner-section"
          id="qualification"
          aria-labelledby="partner-score-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">PARTNER QUALIFICATION SCORE</p>
              <h2 id="partner-score-heading">六个维度，明确评分依据。</h2>
            </div>
            <span className="demo-badge">模拟标准 / 非企业内部标准</span>
          </div>
          <p className="partner-formula">
            总分 100 = Σ（维度评分 ÷ 5 × 权重）。各维度按 0—5 分模拟评估，0
            为未具备 / 无依据，5 为强匹配；总分保留一位小数。
          </p>
          <div className="partner-weight-grid">
            {qualificationDimensions.map((dimension) => (
              <article key={dimension.id}>
                <div>
                  <h3>{dimension.label}</h3>
                  <strong>
                    {dimension.weight}
                    <small> / 100</small>
                  </strong>
                </div>
                <p lang="en">{dimension.english}</p>
                <p>{dimension.evidence}</p>
              </article>
            ))}
          </div>
          <p className="partner-note">
            评分需要证据支撑。本页的评分输入也是虚构值，用于演示判断方法；真实合作还需访谈、能力核查与阶段验证。
          </p>
        </section>

        <section
          className="partner-section"
          aria-labelledby="partner-tier-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">PARTNER TIERS</p>
              <h2 id="partner-tier-heading">分层，用于决定资源投入。</h2>
            </div>
          </div>
          <p className="partner-note">
            先应用低活跃条件，再判断战略、成长和培育层；高分不自动代表高优先级。分层随模拟活动、投入与商机状态重新计算。
          </p>
          <div className="partner-tier-grid">
            {partnerTiers.map((tier) => (
              <article key={tier.id}>
                <p className="eyebrow">{tier.english}</p>
                <h3>{tier.label}</h3>
                <p>{tier.rule}</p>
                <p className="partner-tier-resource">
                  资源安排：{tier.resource}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="partner-section"
          aria-labelledby="partner-enablement-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">PARTNER ENABLEMENT</p>
              <h2 id="partner-enablement-heading">先识别阻碍，再提供支持。</h2>
            </div>
          </div>
          <p className="partner-note">
            伙伴未优先销售某产品，可能与理解、利润、材料、售前或客户来源有关。支持应回应具体阻碍，并有可检查的输出。
          </p>
          <ul className="partner-barriers" aria-label="常见合作阻碍">
            {enablementBarriers.map((barrier) => (
              <li key={barrier}>{barrier}</li>
            ))}
          </ul>
          <div className="partner-support-grid">
            {enablementSupport.map((support) => (
              <article key={support.english}>
                <p className="eyebrow">{support.english}</p>
                <h3>{support.label}</h3>
                <p>{support.action}</p>
                <small>检查输出：{support.output}</small>
              </article>
            ))}
          </div>
        </section>

        <section
          className="partner-section partner-growth"
          aria-labelledby="partner-growth-heading"
        >
          <p className="eyebrow">HOW I WOULD GROW A PARTNER</p>
          <h2 id="partner-growth-heading">找到合适伙伴，推动其产生业务。</h2>
          <p>
            这是我在模拟情境中采用的推进顺序：先判断投入价值，再识别共同目标客户、协同首单，并复核哪些条件可以复制。
          </p>
          <ol>
            {partnerGrowthSteps.map((step, index) => (
              <li key={step}>
                <span>Step {index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="partner-section"
          aria-labelledby="partner-risk-heading"
        >
          <div className="partner-section-head">
            <div>
              <p className="eyebrow">PARTNER RISK / 模拟规则</p>
              <h2 id="partner-risk-heading">识别停滞，也解释下一步。</h2>
            </div>
          </div>
          <p className="partner-note">
            详情中的 Risk 由下列规则计算；多个风险可以同时出现。Next Action
            按低活跃、候选核查、培训、首个机会、停滞、依赖、首单复盘的顺序选择优先动作。
          </p>
          <div className="partner-risk-grid">
            {partnerRisks.map((risk) => (
              <article key={risk.id}>
                <p className="eyebrow">{risk.english}</p>
                <h3>{risk.label}</h3>
                <p>识别：{risk.rule}。</p>
                <p>处理：{risk.handling}</p>
              </article>
            ))}
          </div>
        </section>

        <aside
          className="partner-final-disclaimer"
          aria-label="个人说明与模拟数据声明"
        >
          <span className="demo-badge">Simulation / 模拟项目</span>
          <p>{partnerCase.disclaimer}</p>
        </aside>
        <div className="case-next">
          <Link className="button secondary" href="/#lab">
            ← 返回 Business Demo Lab
          </Link>
          <a className="text-link" href="#case-summary">
            返回 Case Summary ↑
          </a>
        </div>
      </main>
    </CareerShell>
  );
}

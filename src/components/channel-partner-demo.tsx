"use client";

import { useRef, useState } from "react";
import {
  isActivatedPartner,
  partnerActivityLabel,
  partnerDashboard,
  partnerMoney,
  partnerNextAction,
  partnerOpenOpportunities,
  partnerPipeline,
  partnerStageLabel,
  partnerTier,
  partnerTierInfo,
  partnerTiers,
  partnerTypeInfo,
  partnerTypes,
  qualificationDimensions,
  qualificationScore,
  risksForPartner,
  simulatedPartners,
} from "@/data/channel-partners";

const stats = partnerDashboard(simulatedPartners);
const dashboardMetrics = [
  {
    english: "Total Partners",
    label: "伙伴总数",
    value: stats.total,
    definition: "完整模拟伙伴池，含候选及退出伙伴。",
  },
  {
    english: "Active Partners",
    label: "活跃伙伴",
    value: stats.active,
    definition: "已签约、未退出，且最近 14 天内有活动。",
  },
  {
    english: "Strategic Partners",
    label: "战略伙伴",
    value: stats.strategic,
    definition: "符合下方战略层条件，低活跃规则优先。",
  },
  {
    english: "Activated Partners",
    label: "已激活伙伴",
    value: stats.activated,
    definition: "已签约且曾产生首个有效商机，含已关闭记录及后续退出。",
  },
  {
    english: "Partner Opportunities",
    label: "伙伴商机数",
    value: stats.opportunities,
    definition: `${stats.openOpportunities} 个开放 + ${stats.won} 个成交 + ${stats.closed - stats.won} 个未成交；含两种来源。`,
  },
  {
    english: "Open Pipeline",
    label: "开放商机金额",
    value: partnerMoney(stats.pipeline),
    definition: "全部未关闭商机金额之和；排除 Won / Lost，不等于收入。",
  },
  {
    english: "Partner-Sourced Pipeline",
    label: "伙伴自主来源金额",
    value: partnerMoney(stats.partnerSourced),
    definition: "Open Pipeline 中由伙伴自主产生的部分，排除厂商分配。",
  },
  {
    english: "Partner Win Rate",
    label: "已关闭商机胜率",
    value: stats.winRate === null ? "—" : `${stats.winRate.toFixed(1)}%`,
    definition: `Won ÷ (Won + Lost) = ${stats.won} ÷ ${stats.closed}；未关闭商机不进分母。`,
  },
] as const;

export function ChannelPartnerDemo() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [tier, setTier] = useState("all");
  const [selectedId, setSelectedId] = useState(simulatedPartners[0].id);
  const profileHeading = useRef<HTMLHeadingElement>(null);
  const visiblePartners = simulatedPartners.filter(
    (partner) =>
      (type === "all" || partner.type === type) &&
      (tier === "all" || partnerTier(partner) === tier) &&
      `${partner.company} ${partner.region} ${partner.industry}`
        .toLocaleLowerCase()
        .includes(query.trim().toLocaleLowerCase()),
  );
  const selected =
    visiblePartners.find((partner) => partner.id === selectedId) ??
    visiblePartners[0];
  const action = selected ? partnerNextAction(selected) : null;
  const risks = selected ? risksForPartner(selected) : [];

  function selectPartner(id: string) {
    setSelectedId(id);
    // The heading stays mounted when selecting a row; keyboard users reach the updated profile.
    profileHeading.current?.focus({ preventScroll: true });
    profileHeading.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }

  function resetFilters() {
    setQuery("");
    setType("all");
    setTier("all");
    setSelectedId(simulatedPartners[0].id);
  }

  return (
    <>
      <section
        className="partner-section"
        id="partner-dashboard"
        aria-labelledby="partner-dashboard-heading"
      >
        <div className="partner-section-head">
          <div>
            <p className="eyebrow">PARTNER DASHBOARD</p>
            <h2 id="partner-dashboard-heading">资源投入，要看业务进展。</h2>
          </div>
          <span className="demo-badge">Demo Data / 模拟数据</span>
        </div>
        <p className="partner-note">
          以下为完整伙伴池的静态模拟快照。筛选只改变列表，不改变全局指标；所有数量、金额、活动时间和评分均为虚构。
        </p>
        <dl className="partner-metric-grid">
          {dashboardMetrics.map((metric) => (
            <div key={metric.english} data-metric={metric.english}>
              <dt>
                <span lang="en">{metric.english}</span>
                <span>{metric.label}</span>
              </dt>
              <dd>{metric.value}</dd>
              <p>{metric.definition}</p>
            </div>
          ))}
        </dl>
        <div className="partner-activation">
          <h3>Activation Metrics / 签约 ≠ 激活</h3>
          <p>
            已签约 <strong>{stats.signed}</strong> 家，曾产生首个有效商机{" "}
            <strong>{stats.activated}</strong>{" "}
            家。已激活是历史里程碑；活跃是近期活动状态，两者不互相替代。
          </p>
          <dl className="partner-activation-grid">
            <div>
              <dt>Training Completed / 完成培训</dt>
              <dd>{stats.training} 家</dd>
              <small>已签约且培训完成度 100%</small>
            </div>
            <div>
              <dt>First Opportunity / 首个商机</dt>
              <dd>{stats.activated} 家</dd>
              <small>已签约且至少有一个有效模拟商机</small>
            </div>
            <div>
              <dt>First Proposal / 首个方案</dt>
              <dd>{stats.firstProposal} 家</dd>
              <small>已签约且记录中已发送过方案</small>
            </div>
            <div>
              <dt>First Deal / 首单成交</dt>
              <dd>{stats.firstDeal} 家</dd>
              <small>已签约且至少一个商机 Won</small>
            </div>
            <div>
              <dt>Active Pipeline / 活跃商机金额</dt>
              <dd>{partnerMoney(stats.activePipeline)}</dd>
              <small>未关闭且最近 21 天内有推进；为开放金额的子集</small>
            </div>
            <div>
              <dt>Days Since Last Activity</dt>
              <dd>逐伙伴查看</dd>
              <small>模拟快照距最近活动天数；详情中显示</small>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="partner-section"
        id="partner-pool"
        aria-labelledby="partner-pool-heading"
      >
        <div className="partner-section-head">
          <div>
            <p className="eyebrow">SIMULATED PARTNER POOL</p>
            <h2 id="partner-pool-heading">18 家虚构伙伴，分别判断。</h2>
          </div>
          <span className="demo-badge">Demo Data / 模拟数据</span>
        </div>
        <div className="partner-filters">
          <label>
            搜索伙伴、地区或行业
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：制造业"
            />
          </label>
          <label>
            伙伴类型
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="all">全部类型</option>
              {partnerTypes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            伙伴分层
            <select
              value={tier}
              onChange={(event) => setTier(event.target.value)}
            >
              <option value="all">全部分层</option>
              {partnerTiers.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <button
            className="button secondary"
            type="button"
            onClick={resetFilters}
          >
            重置筛选
          </button>
        </div>
        <p className="partner-note" role="status">
          显示 {visiblePartners.length} / {simulatedPartners.length}{" "}
          家模拟伙伴。点击企业名称查看能力评分、风险、商机记录和下一步建议。小屏可横向滚动表格。
        </p>
        <div
          className="partner-table-scroll"
          role="region"
          aria-label="模拟伙伴列表，可横向滚动"
          tabIndex={0}
        >
          <table className="partner-table">
            <caption className="sr-only">虚构伙伴列表，全部为模拟数据</caption>
            <thead>
              <tr>
                {[
                  "Company / 伙伴",
                  "Type / 类型",
                  "Region / 地区",
                  "Industry / 行业",
                  "Score / 评分",
                  "Tier / 分层",
                  "Stage / 阶段",
                  "Owner / 负责人",
                  "Next Action / 下一步",
                ].map((label) => (
                  <th key={label} scope="col">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visiblePartners.map((partner) => (
                <tr
                  key={partner.id}
                  data-selected={selected?.id === partner.id}
                >
                  <td>
                    <button
                      className="partner-company-button"
                      type="button"
                      aria-pressed={selected?.id === partner.id}
                      aria-controls="partner-profile"
                      onClick={() => selectPartner(partner.id)}
                    >
                      {partner.company}
                      <span>查看详情 ↗</span>
                    </button>
                  </td>
                  <td>{partnerTypeInfo(partner.type).label}</td>
                  <td>{partner.region}</td>
                  <td>{partner.industry}</td>
                  <td>
                    <strong>{qualificationScore(partner)}</strong> / 100
                  </td>
                  <td>{partnerTierInfo(partnerTier(partner)).label}</td>
                  <td>{partnerStageLabel(partner.stage)}</td>
                  <td>{partner.owner}</td>
                  <td>{partnerNextAction(partner).short}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {visiblePartners.length === 0 && (
            <p className="partner-empty">
              没有匹配的模拟伙伴。请调整条件，或重置筛选。
            </p>
          )}
        </div>
        {selected && action && (
          <article
            id="partner-profile"
            className="partner-profile"
            aria-labelledby="partner-profile-heading"
          >
            <div className="partner-section-head">
              <div>
                <p className="eyebrow">PARTNER PROFILE / 模拟伙伴详情</p>
                <h3
                  id="partner-profile-heading"
                  ref={profileHeading}
                  tabIndex={-1}
                >
                  {selected.company}
                </h3>
              </div>
              <span className="demo-badge">Simulation / 模拟项目</span>
            </div>
            <dl className="partner-profile-grid">
              <div>
                <dt>Partner Type / 类型</dt>
                <dd>
                  {partnerTypeInfo(selected.type).english}
                  <span>{partnerTypeInfo(selected.type).label}</span>
                </dd>
              </div>
              <div>
                <dt>Region / 地区</dt>
                <dd>{selected.region}</dd>
              </div>
              <div>
                <dt>Industry Focus / 行业</dt>
                <dd>{selected.industry}</dd>
              </div>
              <div>
                <dt>Qualification Score / 评分</dt>
                <dd>
                  <strong>{qualificationScore(selected)} / 100</strong>
                </dd>
              </div>
              <div>
                <dt>Tier / 分层</dt>
                <dd>
                  {partnerTierInfo(partnerTier(selected)).english}
                  <span>{partnerTierInfo(partnerTier(selected)).label}</span>
                </dd>
              </div>
              <div>
                <dt>Current Stage / 阶段</dt>
                <dd>{partnerStageLabel(selected.stage)}</dd>
              </div>
              <div>
                <dt>Training Status / 培训</dt>
                <dd>
                  {selected.trainingPercent}%
                  <span>
                    {selected.trainingPercent === 100
                      ? "已完成模拟培训"
                      : "模拟培训待完成"}
                  </span>
                </dd>
              </div>
              <div>
                <dt>Active Opportunities</dt>
                <dd>
                  {partnerOpenOpportunities(selected).length} 个
                  <span>未关闭模拟商机</span>
                </dd>
              </div>
              <div>
                <dt>Pipeline Value / 开放金额</dt>
                <dd>{partnerMoney(partnerPipeline(selected))}</dd>
              </div>
              <div>
                <dt>Last Activity / 最近活动</dt>
                <dd>{partnerActivityLabel(selected.daysSinceActivity)}</dd>
              </div>
              <div>
                <dt>Owner / 模拟负责人</dt>
                <dd>{selected.owner}</dd>
              </div>
              <div>
                <dt>Activation / 激活记录</dt>
                <dd>
                  {isActivatedPartner(selected)
                    ? "曾产生首个有效商机"
                    : "尚未产生首个有效商机"}
                  <span>{selected.signed ? "已模拟签约" : "尚未模拟签约"}</span>
                </dd>
              </div>
            </dl>
            <details className="partner-score-detail">
              <summary>查看六维评分依据与加权结果（0—5 分模拟评估）</summary>
              <dl className="partner-score-grid">
                {qualificationDimensions.map((dimension) => (
                  <div key={dimension.id}>
                    <dt>
                      {dimension.english}
                      <span>{dimension.label}</span>
                    </dt>
                    <dd>
                      <strong>{selected.ratings[dimension.id]} / 5</strong>
                      <span>
                        权重 {dimension.weight} →{" "}
                        {(selected.ratings[dimension.id] / 5) *
                          dimension.weight}{" "}
                        分
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
            <div className="partner-decision-grid">
              <div className="partner-risk-panel">
                <h4>Risk / 当前模拟风险</h4>
                {risks.length > 0 ? (
                  <ul>
                    {risks.map((risk) => (
                      <li key={risk.id}>
                        <strong>{risk.label}</strong>
                        <p>
                          {risk.rule}。{risk.handling}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>当前未触发已定义风险规则，仍需按节点跟进。</p>
                )}
              </div>
              <div className="partner-action-panel">
                <h4>Next Action / 下一步</h4>
                <p>{action.action}</p>
                <h4>Why this action?</h4>
                <p>{action.why}</p>
                <small>
                  根据本页模拟规则生成建议；不连接 AI API，不代表真实企业决策。
                </small>
              </div>
            </div>
            <details className="partner-opportunity-detail">
              <summary>
                核查模拟商机记录与金额（{selected.opportunities.length} 条）
              </summary>
              <p className="partner-note">
                有效商机在本模拟中表示已经判断需求匹配，并有下一步计划；不等于成交承诺。所有商机记录均为虚构。
              </p>
              {selected.opportunities.length > 0 ? (
                <ul>
                  {selected.opportunities.map((opportunity) => (
                    <li key={opportunity.id}>
                      <strong>
                        {opportunity.id} · {partnerMoney(opportunity.value)}
                      </strong>
                      <span>
                        {opportunity.status === "open"
                          ? "Open / 未关闭"
                          : opportunity.status === "won"
                            ? "Won / 已成交"
                            : "Lost / 未成交"}{" "}
                        ·{" "}
                        {opportunity.source === "partner"
                          ? "伙伴自主来源"
                          : "厂商分配"}{" "}
                        ·{" "}
                        {opportunity.proposalSent
                          ? "已发送方案"
                          : "尚未发送方案"}
                      </span>
                      <span>
                        {opportunity.status === "open"
                          ? `${opportunity.daysSinceProgress} 天前有推进（模拟）`
                          : "已关闭，不计入开放金额"}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>暂无模拟商机记录。</p>
              )}
            </details>
          </article>
        )}
      </section>
    </>
  );
}

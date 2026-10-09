"use client";

import { useState } from "react";
import {
  demoLeads,
  stages,
  nextAction,
  stageInfo,
  pipelineMetrics,
  money,
  followUpLabel,
  type Stage,
} from "@/data/sales-pipeline";

export function SalesPipeline() {
  const [leads, setLeads] = useState(() =>
    demoLeads.map((lead) => ({ ...lead })),
  );
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Stage | "all">("all");
  const [selected, setSelected] = useState(demoLeads[0].id);
  const [announcement, setAnnouncement] = useState("");
  const metrics = pipelineMetrics(leads);
  const visible = leads.filter(
    (lead) =>
      (filter === "all" || lead.stage === filter) &&
      `${lead.company} ${lead.contact} ${lead.source} ${lead.owner}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const current = visible.find((lead) => lead.id === selected) ?? visible[0];
  function updateStage(id: string, stage: Stage) {
    const lead = leads.find((item) => item.id === id)!;
    setLeads((items) =>
      items.map((item) => (item.id === id ? { ...item, stage } : item)),
    );
    setAnnouncement(
      `${lead.company}已更新为${stageInfo(stage).chinese}，全量指标与下一步建议已重新计算。`,
    );
  }
  function reset() {
    setLeads(demoLeads.map((lead) => ({ ...lead })));
    setQuery("");
    setFilter("all");
    setSelected(demoLeads[0].id);
    setAnnouncement("已重置模拟数据。");
  }

  return (
    <div className="pipeline-app">
      <div className="pipeline-notice">
        <span className="demo-badge">Demo Data / 模拟数据</span>
        <p>
          所有公司、联系人、金额、概率与跟进安排均为模拟。仅展示业务流程理解，不代表实际客户或本人业绩。修改只保留在当前页面，刷新后恢复。
        </p>
      </div>
      <div className="pipeline-overview">
        <h2>
          Dashboard <span>全量模拟记录</span>
        </h2>
        <button className="button secondary" type="button" onClick={reset}>
          重置演示
        </button>
      </div>
      <div className="pipeline-stage-grid" aria-label="按当前阶段筛选">
        {stages.map((stage, i) => (
          <button
            type="button"
            key={stage.id}
            aria-pressed={filter === stage.id}
            onClick={() =>
              setFilter((value) => (value === stage.id ? "all" : stage.id))
            }
          >
            <span>{stage.label}</span>
            <strong>{metrics.counts[i]}</strong>
            <small>{stage.chinese}</small>
          </button>
        ))}
      </div>
      <dl className="pipeline-kpis">
        <div>
          <dt>Pipeline Value</dt>
          <dd data-testid="pipeline-value">{money(metrics.pipelineValue)}</dd>
          <p>未成交记录的估算金额之和</p>
        </div>
        <div>
          <dt>Weighted Pipeline</dt>
          <dd data-testid="weighted-value">{money(metrics.weightedValue)}</dd>
          <p>未成交金额 × 所在阶段的模拟概率</p>
        </div>
        <div>
          <dt>Conversion Rate</dt>
          <dd data-testid="conversion-rate">
            {metrics.conversionRate.toFixed(1)}%
          </dd>
          <p>已成交记录 ÷ 全部模拟记录</p>
        </div>
        <div>
          <dt>Next Follow-ups</dt>
          <dd data-testid="follow-up-count">{metrics.followUps.length}</dd>
          <p>演示未来 2 天内的未成交跟进</p>
        </div>
      </dl>
      <div className="pipeline-analysis-grid">
        <section className="pipeline-panel">
          <h2>销售漏斗</h2>
          <p className="pipeline-caption">
            累计到达各阶段的数量，按当前阶段推算；并非真实历史转化记录。
          </p>
          <ol className="pipeline-funnel">
            {stages.map((stage, i) => (
              <li key={stage.id}>
                <div>
                  <span>{stage.label}</span>
                  <strong>{metrics.cumulative[i]}</strong>
                </div>
                <div className="funnel-track">
                  <span
                    style={{
                      width: `${leads.length ? (metrics.cumulative[i] / leads.length) * 100 : 0}%`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="pipeline-panel">
          <h2>近期跟进</h2>
          <p className="pipeline-caption">
            时间相对演示日计算，与真实日程无关。
          </p>
          <ul className="pipeline-followups">
            {metrics.followUps.map((lead) => (
              <li key={lead.id}>
                <button
                  type="button"
                  onClick={() => {
                    setFilter("all");
                    setQuery("");
                    setSelected(lead.id);
                  }}
                >
                  <strong>{lead.company}</strong>
                  <span>
                    {followUpLabel(lead.followUpDays)} ·{" "}
                    {nextAction[lead.stage].short}
                  </span>
                </button>
              </li>
            ))}
            {metrics.followUps.length === 0 && (
              <li>当前没有待跟进的模拟记录。</li>
            )}
          </ul>
        </section>
      </div>
      <section className="pipeline-records" aria-labelledby="records-heading">
        <div className="pipeline-record-heading">
          <div>
            <h2 id="records-heading">模拟客户与跟进记录</h2>
            <p className="pipeline-caption">
              改变阶段，观察概率、金额与建议如何联动。筛选不改变上方全量指标。
            </p>
          </div>
          <div className="pipeline-filters">
            <label>
              搜索模拟记录
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="公司、来源或负责人"
              />
            </label>
            <label>
              阶段
              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value as Stage | "all")
                }
              >
                <option value="all">全部阶段</option>
                {stages.map((stage) => (
                  <option key={stage.id} value={stage.id}>
                    {stage.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <p className="pipeline-table-hint" id="table-hint">
          手机上可横向滑动表格。点击公司查看对应建议。
        </p>
        <div
          className="pipeline-table-scroll"
          role="region"
          aria-label="模拟销售记录表格，可横向滚动"
          aria-describedby="table-hint"
          tabIndex={0}
        >
          <table>
            <caption className="sr-only">
              全部为模拟数据；当前显示 {visible.length} 条。
            </caption>
            <thead>
              <tr>
                {[
                  "Company / 公司",
                  "Contact / 联系人",
                  "Source / 来源",
                  "Stage / 阶段",
                  "Deal Value / 金额",
                  "Probability / 概率",
                  "Next Action / 下一步",
                  "Owner / 负责人",
                ].map((label) => (
                  <th key={label} scope="col">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((lead) => (
                <tr key={lead.id} data-selected={lead.id === current?.id}>
                  <th scope="row">
                    <button
                      className="pipeline-company-button"
                      type="button"
                      aria-pressed={lead.id === current?.id}
                      onClick={() => setSelected(lead.id)}
                    >
                      {lead.company}
                    </button>
                  </th>
                  <td>{lead.contact}</td>
                  <td>{lead.source}</td>
                  <td>
                    <select
                      aria-label={`${lead.company}阶段`}
                      value={lead.stage}
                      onChange={(event) =>
                        updateStage(lead.id, event.target.value as Stage)
                      }
                    >
                      {stages.map((stage) => (
                        <option value={stage.id} key={stage.id}>
                          {stage.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{money(lead.value)}</td>
                  <td>{stageInfo(lead.stage).probability}%</td>
                  <td>{nextAction[lead.stage].short}</td>
                  <td>{lead.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {visible.length === 0 && (
            <p className="pipeline-empty">
              没有匹配的模拟记录，请调整搜索或阶段筛选。
            </p>
          )}
        </div>
      </section>
      <section className="pipeline-advice" aria-labelledby="advice-heading">
        <div>
          <p className="eyebrow">AI NEXT ACTION / 功能演示</p>
          <h2 id="advice-heading">下一步行动建议</h2>
          <p className="pipeline-caption">
            使用本地阶段规则展示，不调用 AI API，也不分析真实客户。
          </p>
        </div>
        <div aria-live="polite">
          {current ? (
            <>
              <h3>{current.company}</h3>
              <p>{nextAction[current.stage].advice}</p>
              <small>{nextAction[current.stage].reason}</small>
            </>
          ) : (
            <p>请选择或搜索一条模拟记录。</p>
          )}
        </div>
      </section>
      <p className="pipeline-status" role="status">
        {announcement}
      </p>
      <details className="career-details">
        <summary>
          查看计算口径与业务理解 <span aria-hidden="true">＋</span>
        </summary>
        <p>
          Lead → Qualification → Opportunity → Proposal → Closing。Demo
          用五个简化阶段表达需求判断、商机推进与成交交接，不包含复杂 CRM
          权限、真实历史转化、合同或收入确认。
        </p>
        <p>
          概率为固定演示值：10%、25%、50%、75%、100%。Pipeline 及 Weighted
          Pipeline 排除已成交记录，成交率为当前已成交数量 /
          全量记录数。漏斗数量采用当前阶段顺序累计推算，不能据此推断真实流失率。
        </p>
      </details>
    </div>
  );
}

/** 纯前端演示；公司、人员、金额、概率与日期全部为虚构模拟值。 */
export const stages = [
  {
    id: "lead",
    label: "Leads",
    chinese: "潜在线索",
    probability: 10,
    rule: "进入潜在客户池。",
  },
  {
    id: "qualified",
    label: "Qualified",
    chinese: "基本条件已判断",
    probability: 25,
    rule: "完成基本需求、预算、决策链或时间窗口判断。",
  },
  {
    id: "opportunity",
    label: "Opportunities",
    chinese: "明确商机",
    probability: 50,
    rule: "出现明确业务机会。",
  },
  {
    id: "proposal",
    label: "Proposal",
    chinese: "方案与报价",
    probability: 75,
    rule: "进入方案或报价阶段。",
  },
  {
    id: "won",
    label: "Won",
    chinese: "已成交",
    probability: 100,
    rule: "完成成交，转入交接与服务跟进。",
  },
] as const;
export type Stage = (typeof stages)[number]["id"];
export type DemoLead = {
  id: string;
  company: string;
  contact: string;
  source: string;
  stage: Stage;
  value: number;
  followUpDays: number;
  lastContactDays: number;
  decisionMaker: string;
  owner: string;
};

const decisionMakers: Record<Stage, string> = {
  lead: "尚未确认（模拟）",
  qualified: "模拟业务联系人；预算审批人待确认",
  opportunity: "模拟业务负责人；采购审批节点待确认",
  proposal: "模拟采购负责人及预算审批人",
  won: "模拟采购负责人；已完成审批",
};

/** 18 家通用虚构企业；当前阶段分布 6 / 5 / 4 / 2 / 1。 */
const records: readonly [string, Stage, number, number, number, string][] = [
  ["模拟科技企业 A", "opportunity", 60000, 1, 2, "行业活动"],
  ["模拟制造企业 B", "proposal", 90000, 0, 8, "伙伴推荐"],
  ["模拟电子企业 C", "qualified", 40000, 2, 3, "主动拓展"],
  ["模拟商贸企业 D", "lead", 30000, 3, 1, "线上咨询"],
  ["模拟服务企业 E", "won", 50000, 7, 2, "渠道转介"],
  ["模拟设备企业 F", "lead", 20000, 1, 4, "行业活动"],
  ["模拟物流企业 G", "lead", 25000, 4, 5, "线上咨询"],
  ["模拟零售企业 H", "lead", 35000, 3, 2, "主动拓展"],
  ["模拟设计企业 I", "lead", 15000, 5, 10, "行业活动"],
  ["模拟教育企业 J", "lead", 45000, 4, 1, "渠道转介"],
  ["模拟食品企业 K", "qualified", 55000, 1, 4, "伙伴推荐"],
  ["模拟包装企业 L", "qualified", 70000, 3, 2, "线上咨询"],
  ["模拟咨询企业 M", "qualified", 30000, 2, 9, "行业活动"],
  ["模拟贸易企业 N", "qualified", 65000, 4, 3, "主动拓展"],
  ["模拟软件企业 O", "opportunity", 80000, 0, 1, "伙伴推荐"],
  ["模拟工程企业 P", "opportunity", 100000, 3, 11, "渠道转介"],
  ["模拟运营企业 Q", "opportunity", 45000, 2, 4, "线上咨询"],
  ["模拟材料企业 R", "proposal", 120000, 1, 3, "伙伴推荐"],
];
export const demoLeads: readonly DemoLead[] = records.map(
  ([company, stage, value, followUpDays, lastContactDays, source], index) => ({
    id: `demo-${String(index + 1).padStart(2, "0")}`,
    company,
    contact: `模拟联系人 ${String.fromCharCode(65 + index)}`,
    source: `演示：${source}`,
    stage,
    value,
    followUpDays,
    lastContactDays,
    decisionMaker: decisionMakers[stage],
    owner: index % 2 === 0 ? "演示负责人 A" : "演示负责人 B",
  }),
);

export const nextAction: Record<
  Stage,
  { short: string; advice: string; reason: string }
> = {
  lead: {
    short: "确认需求与联系人",
    advice:
      "联系有效业务联系人，确认场景、基本需求与时间窗口，再判断是否值得继续投入。",
    reason: "线索尚未完成基本判断，先补齐信息，避免过早投入方案制作。",
  },
  qualified: {
    short: "核查决策链与预算",
    advice: "安排需求访谈，核查关键决策人、预算审批节点和采购时间。",
    reason:
      "已有基本需求判断，但决策链与预算审批尚不完整；先核查购买条件再推进商机。",
  },
  opportunity: {
    short: "确认决策人与采购节点",
    advice: "跟进业务负责人，确认关键决策人、预算审批节点及方案评估时间。",
    reason:
      "已出现明确业务机会，但采购审批节点仍待确认；继续推进方案前，应优先核查决策链与预算。",
  },
  proposal: {
    short: "确认方案反馈与阻碍",
    advice: "收集方案与报价反馈，记录异议、审批进展和下一次沟通安排。",
    reason:
      "方案已进入评估阶段，需要判断阻碍来自方案匹配、价格还是采购流程，才能安排下一步。",
  },
  won: {
    short: "交接与服务跟进",
    advice: "核对约定范围、交付联系人和支持安排，完成销售到服务的交接。",
    reason:
      "模拟成交已完成，重点转为交付与服务；这条记录不再计入未成交 Pipeline。",
  },
};
export function stageInfo(stage: Stage) {
  return stages.find((item) => item.id === stage)!;
}
export function isStalled(lead: DemoLead) {
  return lead.stage !== "won" && lead.lastContactDays >= 7;
}
export function actionForLead(lead: DemoLead) {
  const action = nextAction[lead.stage];
  return isStalled(lead)
    ? {
        short: "重新确认推进意愿",
        advice: `先重新确认客户的需求与推进时间，再执行：${action.short}。`,
        reason: `模拟记录距上次联系已 ${lead.lastContactDays} 天，按本地规则提示停滞风险；先核查机会是否仍有效，避免沿用过时的推进计划。`,
      }
    : action;
}
export function pipelineMetrics(leads: readonly DemoLead[]) {
  const open = leads.filter((lead) => lead.stage !== "won");
  const won = leads.filter((lead) => lead.stage === "won");
  return {
    pipelineValue: open.reduce((sum, lead) => sum + lead.value, 0),
    weightedValue: open.reduce(
      (sum, lead) =>
        sum + (lead.value * stageInfo(lead.stage).probability) / 100,
      0,
    ),
    conversionRate: leads.length ? (won.length / leads.length) * 100 : 0,
    followUps: open
      .filter((lead) => lead.followUpDays <= 2)
      .sort((a, b) => a.followUpDays - b.followUpDays),
    counts: stages.map(
      (stage) => leads.filter((lead) => lead.stage === stage.id).length,
    ),
    cumulative: stages.map(
      (_, i) =>
        leads.filter(
          (lead) => stages.findIndex((stage) => stage.id === lead.stage) >= i,
        ).length,
    ),
  };
}
export const money = (value: number) =>
  `¥${value.toLocaleString("zh-CN", { maximumFractionDigits: 0 })}`;
export const followUpLabel = (days: number) =>
  days === 0 ? "演示今日" : `演示 ${days} 天后`;
export const lastContactLabel = (days: number) =>
  days === 0 ? "演示今日" : `演示 ${days} 天前`;

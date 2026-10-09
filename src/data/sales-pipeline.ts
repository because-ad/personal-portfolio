/** 仅用于前端业务流程演示；所有公司、联系人、金额和跟进安排均为模拟。 */
export const stages = [
  { id: "lead", label: "Leads", chinese: "新线索", probability: 10 },
  {
    id: "qualified",
    label: "Qualified Leads",
    chinese: "已判断需求",
    probability: 25,
  },
  {
    id: "opportunity",
    label: "Opportunities",
    chinese: "商机",
    probability: 50,
  },
  { id: "proposal", label: "Proposal", chinese: "方案提案", probability: 75 },
  { id: "won", label: "Won", chinese: "已成交", probability: 100 },
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
  owner: string;
};
export const demoLeads: readonly DemoLead[] = [
  {
    id: "demo-01",
    company: "深圳某科技有限公司",
    contact: "模拟联系人 A",
    source: "演示：行业活动",
    stage: "opportunity",
    value: 60000,
    followUpDays: 1,
    owner: "演示负责人 A",
  },
  {
    id: "demo-02",
    company: "广州某制造企业",
    contact: "模拟联系人 B",
    source: "演示：伙伴推荐",
    stage: "proposal",
    value: 90000,
    followUpDays: 0,
    owner: "演示负责人 A",
  },
  {
    id: "demo-03",
    company: "东莞某电子公司",
    contact: "模拟联系人 C",
    source: "演示：主动拓展",
    stage: "qualified",
    value: 40000,
    followUpDays: 2,
    owner: "演示负责人 B",
  },
  {
    id: "demo-04",
    company: "佛山某商贸企业",
    contact: "模拟联系人 D",
    source: "演示：线上咨询",
    stage: "lead",
    value: 30000,
    followUpDays: 3,
    owner: "演示负责人 B",
  },
  {
    id: "demo-05",
    company: "深圳某服务公司",
    contact: "模拟联系人 E",
    source: "演示：渠道转介",
    stage: "won",
    value: 50000,
    followUpDays: 7,
    owner: "演示负责人 A",
  },
  {
    id: "demo-06",
    company: "惠州某设备企业",
    contact: "模拟联系人 F",
    source: "演示：行业活动",
    stage: "lead",
    value: 20000,
    followUpDays: 1,
    owner: "演示负责人 B",
  },
];

export const nextAction: Record<
  Stage,
  { short: string; advice: string; reason: string }
> = {
  lead: {
    short: "确认需求与联系人",
    advice:
      "先确认客户的实际需求、业务场景和有效联系人，再判断是否进入需求评估。",
    reason: "当前为新线索，优先补齐需求信息。",
  },
  qualified: {
    short: "预约需求访谈",
    advice:
      "建议进一步确认预算范围、决策链与时间计划，安排需求访谈后再进入商机阶段。",
    reason: "需求已有初步判断，下一步核查购买条件。",
  },
  opportunity: {
    short: "跟进决策人与预算",
    advice:
      "模拟情境：客户已完成产品演示，建议 48 小时内跟进决策人并确认预算周期。",
    reason: "按商机阶段展示建议，产品演示情境为模拟设定。",
  },
  proposal: {
    short: "确认方案反馈",
    advice:
      "建议确认方案反馈、报价范围和采购流程，记录阻碍成交的问题与下一次沟通安排。",
    reason: "提案阶段重点检查方案与购买条件是否匹配。",
  },
  won: {
    short: "交接与服务跟进",
    advice:
      "模拟成交后转入交付交接与服务跟进，核对约定范围、联系人和后续支持安排。",
    reason: "已成交记录不再计入未成交 Pipeline。",
  },
};

export function stageInfo(stage: Stage) {
  return stages.find((item) => item.id === stage)!;
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

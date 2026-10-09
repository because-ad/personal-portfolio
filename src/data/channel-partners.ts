/** 独立渠道业务模拟模型。所有企业、伙伴、联系人、商机、日期和金额均为虚构。 */
export const partnerCase = {
  title: "B2B Channel Partner Growth Case",
  chinese: "ToB 渠道伙伴增长模拟项目",
  subtitle: "从伙伴招募、筛选、赋能到商机协同，模拟完整渠道伙伴生命周期。",
  scenario:
    "模拟一家 B2B 云服务 / 企业软件厂商，希望在深圳及华南市场扩大销售覆盖。直营销售资源有限，需要建立伙伴体系，兼顾客户覆盖、交付能力与资源投入效率。",
  disclaimer:
    "该项目为我在研究 ToB、渠道及伙伴业务过程中制作的模拟案例，用于展示业务理解、问题拆解和结构化思考能力。所有企业、伙伴、Pipeline与业绩数据均为虚构模拟数据，不代表真实从业经历。",
  goals: [
    "寻找与筛选合适伙伴",
    "判断资源投入优先级",
    "帮助伙伴理解产品与客户",
    "推动首个有效商机",
    "协同推进项目与首单",
    "激励高潜伙伴",
    "复核长期无产出伙伴，决定维持或退出",
  ],
} as const;

export const partnerTypes = [
  {
    id: "reseller",
    english: "Reseller",
    label: "经销伙伴",
    description: "有现成客户资源，以产品销售与转售为主。",
    qualification: "重点核查客户匹配、销售能力和合作投入。",
    enablement: "提供目标客户画像、销售材料与报价支持。",
  },
  {
    id: "service",
    english: "Service Partner",
    label: "服务伙伴",
    description: "提供部署、实施、运维和技术服务。",
    qualification: "重点核查交付能力、服务覆盖与客户基础。",
    enablement: "提供部署训练、实施规范与技术支持路径。",
  },
  {
    id: "solution",
    english: "Solution Partner",
    label: "解决方案伙伴",
    description: "将厂商产品与自身行业方案结合。",
    qualification: "重点核查行业匹配、方案能力与商机潜力。",
    enablement: "共同梳理行业场景，制作联合方案与案例。",
  },
  {
    id: "technology",
    english: "ISV / Technology Partner",
    label: "软件 / 技术伙伴",
    description: "通过产品集成形成联合解决方案。",
    qualification: "重点核查集成能力、产品互补性与投入计划。",
    enablement: "提供集成文档、测试环境与联合验证支持。",
  },
] as const;
export type PartnerType = (typeof partnerTypes)[number]["id"];

export const qualificationDimensions = [
  {
    id: "customerBase",
    english: "Customer Base",
    label: "客户基础",
    weight: 20,
    evidence: "是否有可接触的目标客户群，而不是只看客户数量。",
  },
  {
    id: "industryFit",
    english: "Industry Fit",
    label: "行业匹配",
    weight: 20,
    evidence: "客户场景是否与产品价值和目标行业匹配。",
  },
  {
    id: "salesCapability",
    english: "Sales Capability",
    label: "销售能力",
    weight: 20,
    evidence: "能否识别需求、组织沟通并持续推进机会。",
  },
  {
    id: "technicalCapability",
    english: "Technical Capability",
    label: "技术能力",
    weight: 15,
    evidence: "能否完成方案、部署或集成所需的技术协作。",
  },
  {
    id: "commitment",
    english: "Commitment",
    label: "投入意愿",
    weight: 15,
    evidence: "是否安排负责人、时间和具体合作动作。",
  },
  {
    id: "opportunityPotential",
    english: "Opportunity Potential",
    label: "商机潜力",
    weight: 10,
    evidence: "是否存在可核查的潜在场景与推进计划。",
  },
] as const;
export type QualificationDimension =
  (typeof qualificationDimensions)[number]["id"];
export type PartnerRatings = Record<QualificationDimension, number>;

export const partnerLifecycle = [
  {
    english: "Partner Sourcing",
    label: "伙伴寻找",
    action: "通过行业与区域资源寻找候选伙伴。",
  },
  {
    english: "Qualification",
    label: "伙伴筛选",
    action: "核查客户、能力、匹配度与投入意愿。",
  },
  {
    english: "Onboarding",
    label: "签约 / 入驻",
    action: "明确合作范围、负责人及流程。",
  },
  {
    english: "Enablement",
    label: "培训赋能",
    action: "让伙伴知道卖什么、卖给谁、如何推进。",
  },
  {
    english: "Activation",
    label: "伙伴激活",
    action: "以首个有效商机检验合作是否开始运转。",
  },
  {
    english: "Opportunity Co-selling",
    label: "商机协同",
    action: "协调方案、售前与双方销售推进。",
  },
  {
    english: "Performance Review",
    label: "业绩评估",
    action: "复核活跃度、商机质量和资源投入。",
  },
  {
    english: "Grow / Maintain / Exit",
    label: "增长 / 维持 / 淘汰",
    action: "扩大高潜合作，维持合适支持，审慎退出。",
  },
] as const;
export const partnerStages = [
  { id: "sourcing", label: "伙伴寻找" },
  { id: "qualification", label: "伙伴筛选" },
  { id: "onboarding", label: "签约 / 入驻" },
  { id: "enablement", label: "培训赋能" },
  { id: "activation", label: "伙伴激活" },
  { id: "coselling", label: "商机协同" },
  { id: "review", label: "业绩评估" },
  { id: "grow", label: "增长" },
  { id: "maintain", label: "维持" },
  { id: "exit", label: "退出" },
] as const;
export type PartnerStage = (typeof partnerStages)[number]["id"];
export const partnerTiers = [
  {
    id: "strategic",
    english: "Strategic",
    label: "战略伙伴",
    rule: "评分 ≥ 80、投入意愿 ≥ 4，且当前有未关闭模拟商机。",
    resource: "优先安排行业方案、联合营销与售前协同，按机会进展复核投入。",
  },
  {
    id: "growth",
    english: "Growth",
    label: "成长伙伴",
    rule: "未达到战略条件，评分 ≥ 65 且投入意愿 ≥ 3。",
    resource: "围绕目标客户与首单计划提供培训和机会识别支持。",
  },
  {
    id: "developing",
    english: "Developing",
    label: "培育伙伴",
    rule: "不满足前两层，但仍有一定资源或合作意愿。",
    resource: "以基础培训、小范围客户验证和阶段检查控制投入。",
  },
  {
    id: "inactive",
    english: "Inactive",
    label: "低活跃伙伴",
    rule: "超过 30 天无活动，或投入意愿 ≤ 1，或处于退出阶段；优先适用。",
    resource: "先核查合作意愿与停滞原因，设置恢复观察期，再决定维持或退出。",
  },
] as const;
export type PartnerTier = (typeof partnerTiers)[number]["id"];

export type PartnerOpportunity = {
  id: string;
  value: number;
  status: "open" | "won" | "lost";
  source: "partner" | "vendor";
  daysSinceProgress: number;
  proposalSent: boolean;
};
export type SimulatedPartner = {
  id: string;
  company: string;
  type: PartnerType;
  region: string;
  industry: string;
  ratings: PartnerRatings;
  stage: PartnerStage;
  signed: boolean;
  trainingPercent: number;
  daysSinceActivity: number;
  owner: string;
  opportunities: readonly PartnerOpportunity[];
};
type PartnerSeed = readonly [
  company: string,
  type: PartnerType,
  region: string,
  industry: string,
  ratings: readonly [number, number, number, number, number, number],
  stage: PartnerStage,
  signed: boolean,
  trainingPercent: number,
  daysSinceActivity: number,
];
const seeds: readonly PartnerSeed[] = [
  [
    "深圳某数字企业 A（模拟）",
    "solution",
    "深圳",
    "制造业",
    [4, 5, 4, 3, 4, 4],
    "activation",
    true,
    40,
    4,
  ],
  [
    "广州某服务企业 B（模拟）",
    "service",
    "广州",
    "企业服务",
    [4, 4, 4, 5, 5, 4],
    "grow",
    true,
    100,
    2,
  ],
  [
    "东莞某智能企业 C（模拟）",
    "reseller",
    "东莞",
    "制造业",
    [5, 4, 5, 3, 5, 5],
    "coselling",
    true,
    100,
    3,
  ],
  [
    "佛山某信息企业 D（模拟）",
    "technology",
    "佛山",
    "零售业",
    [3, 4, 3, 5, 4, 4],
    "coselling",
    true,
    100,
    6,
  ],
  [
    "深圳某软件企业 E（模拟）",
    "technology",
    "深圳",
    "企业服务",
    [4, 5, 3, 5, 4, 5],
    "grow",
    true,
    100,
    1,
  ],
  [
    "广州某商贸企业 F（模拟）",
    "reseller",
    "广州",
    "零售业",
    [4, 4, 4, 2, 4, 3],
    "enablement",
    true,
    60,
    10,
  ],
  [
    "东莞某技术企业 G（模拟）",
    "service",
    "东莞",
    "制造业",
    [3, 4, 3, 4, 3, 4],
    "activation",
    true,
    100,
    7,
  ],
  [
    "佛山某方案企业 H（模拟）",
    "solution",
    "佛山",
    "物流业",
    [3, 3, 3, 4, 4, 3],
    "review",
    true,
    100,
    8,
  ],
  [
    "惠州某设备企业 I（模拟）",
    "reseller",
    "惠州",
    "制造业",
    [3, 3, 3, 2, 3, 3],
    "onboarding",
    true,
    20,
    12,
  ],
  [
    "珠海某系统企业 J（模拟）",
    "service",
    "珠海",
    "企业服务",
    [2, 3, 2, 3, 3, 2],
    "enablement",
    true,
    50,
    18,
  ],
  [
    "深圳某咨询企业 K（模拟）",
    "solution",
    "深圳",
    "零售业",
    [3, 2, 3, 2, 2, 2],
    "qualification",
    false,
    0,
    6,
  ],
  [
    "广州某数字企业 L（模拟）",
    "technology",
    "广州",
    "物流业",
    [2, 3, 2, 4, 3, 2],
    "qualification",
    false,
    0,
    9,
  ],
  [
    "中山某渠道企业 M（模拟）",
    "reseller",
    "中山",
    "零售业",
    [4, 4, 3, 2, 3, 4],
    "maintain",
    true,
    100,
    45,
  ],
  [
    "惠州某服务企业 N（模拟）",
    "service",
    "惠州",
    "制造业",
    [3, 3, 2, 3, 1, 2],
    "review",
    true,
    60,
    35,
  ],
  [
    "东莞某集成企业 O（模拟）",
    "technology",
    "东莞",
    "物流业",
    [2, 3, 2, 4, 1, 2],
    "exit",
    true,
    100,
    60,
  ],
  [
    "佛山某商务企业 P（模拟）",
    "reseller",
    "佛山",
    "企业服务",
    [3, 3, 3, 2, 3, 2],
    "sourcing",
    false,
    0,
    5,
  ],
  [
    "珠海某行业企业 Q（模拟）",
    "solution",
    "珠海",
    "零售业",
    [4, 4, 3, 4, 4, 4],
    "review",
    true,
    100,
    5,
  ],
  [
    "中山某实施企业 R（模拟）",
    "service",
    "中山",
    "物流业",
    [3, 4, 3, 4, 4, 3],
    "maintain",
    true,
    100,
    16,
  ],
];
const opportunitySeeds: Readonly<
  Record<
    number,
    readonly [
      number,
      PartnerOpportunity["status"],
      PartnerOpportunity["source"],
      number,
      boolean,
    ][]
  >
> = {
  0: [
    [90000, "open", "partner", 4, true],
    [60000, "open", "vendor", 6, false],
  ],
  1: [
    [120000, "open", "partner", 2, true],
    [80000, "won", "partner", 0, true],
  ],
  2: [
    [150000, "open", "partner", 3, true],
    [100000, "won", "partner", 0, true],
    [70000, "lost", "partner", 0, true],
  ],
  3: [
    [110000, "open", "vendor", 6, true],
    [50000, "open", "vendor", 24, false],
  ],
  4: [
    [180000, "open", "partner", 1, true],
    [90000, "won", "partner", 0, true],
  ],
  6: [[45000, "open", "partner", 7, false]],
  7: [
    [75000, "open", "vendor", 29, true],
    [40000, "lost", "partner", 0, true],
  ],
  12: [[55000, "open", "partner", 45, false]],
  13: [[35000, "lost", "vendor", 0, true]],
  14: [[25000, "lost", "partner", 0, true]],
  16: [
    [95000, "open", "partner", 5, true],
    [65000, "won", "partner", 0, true],
  ],
  17: [
    [70000, "open", "vendor", 22, true],
    [50000, "won", "partner", 0, true],
  ],
};
export const simulatedPartners: readonly SimulatedPartner[] = seeds.map(
  (seed, index) => {
    const [
      company,
      type,
      region,
      industry,
      scores,
      stage,
      signed,
      trainingPercent,
      daysSinceActivity,
    ] = seed;
    const ratings = Object.fromEntries(
      qualificationDimensions.map((dimension, i) => [dimension.id, scores[i]]),
    ) as PartnerRatings;
    return {
      id: `partner-${String(index + 1).padStart(2, "0")}`,
      company,
      type,
      region,
      industry,
      ratings,
      stage,
      signed,
      trainingPercent,
      daysSinceActivity,
      owner: `模拟负责人 ${["A", "B", "C"][index % 3]}`,
      opportunities: (opportunitySeeds[index] ?? []).map(
        ([value, status, source, daysSinceProgress, proposalSent], i) => ({
          id: `p${index + 1}-o${i + 1}`,
          value,
          status,
          source,
          daysSinceProgress,
          proposalSent,
        }),
      ),
    };
  },
);

export function qualificationScore(partner: SimulatedPartner) {
  return (
    Math.round(
      qualificationDimensions.reduce(
        (sum, dimension) =>
          sum + (partner.ratings[dimension.id] / 5) * dimension.weight,
        0,
      ) * 10,
    ) / 10
  );
}
export function partnerOpenOpportunities(partner: SimulatedPartner) {
  return partner.opportunities.filter(
    (opportunity) => opportunity.status === "open",
  );
}
export function partnerPipeline(partner: SimulatedPartner) {
  return partnerOpenOpportunities(partner).reduce(
    (sum, opportunity) => sum + opportunity.value,
    0,
  );
}
export function partnerTier(partner: SimulatedPartner): PartnerTier {
  if (
    partner.daysSinceActivity > 30 ||
    partner.ratings.commitment <= 1 ||
    partner.stage === "exit"
  )
    return "inactive";
  const score = qualificationScore(partner);
  if (
    score >= 80 &&
    partner.ratings.commitment >= 4 &&
    partnerOpenOpportunities(partner).length > 0
  )
    return "strategic";
  if (score >= 65 && partner.ratings.commitment >= 3) return "growth";
  return "developing";
}
export const partnerTypeInfo = (type: PartnerType) =>
  partnerTypes.find((item) => item.id === type)!;
export const partnerTierInfo = (tier: PartnerTier) =>
  partnerTiers.find((item) => item.id === tier)!;
export const partnerStageLabel = (stage: PartnerStage) =>
  partnerStages.find((item) => item.id === stage)!.label;
export const isActivePartner = (partner: SimulatedPartner) =>
  partner.signed && partner.stage !== "exit" && partner.daysSinceActivity <= 14;
export const isActivatedPartner = (partner: SimulatedPartner) =>
  partner.signed && partner.opportunities.length > 0;

export const partnerRisks = [
  {
    id: "noActivity",
    english: "No Activity",
    label: "长期无活动",
    rule: "超过 30 天没有模拟活动",
    handling: "核查合作意愿与障碍，约定恢复动作和观察期限。",
  },
  {
    id: "noOpportunities",
    english: "No Opportunities",
    label: "没有商机",
    rule: "已签约但未产生首个模拟商机",
    handling: "与伙伴识别目标客户，安排小范围联合需求访谈。",
  },
  {
    id: "lowCommitment",
    english: "Low Commitment",
    label: "投入意愿低",
    rule: "投入意愿评分 ≤ 2 / 5",
    handling: "确认负责人、时间与产品优先级，暂缓扩大资源投入。",
  },
  {
    id: "trainingIncomplete",
    english: "Training Incomplete",
    label: "培训未完成",
    rule: "已签约且培训完成度低于 100%",
    handling: "按伙伴类型补齐产品、销售或行业方案培训。",
  },
  {
    id: "pipelineStalled",
    english: "Pipeline Stalled",
    label: "商机停滞",
    rule: "未关闭商机超过 21 天无推进",
    handling: "核查客户需求、决策链与方案阻碍，确认下一次推进节点。",
  },
  {
    id: "highDependency",
    english: "High Dependency",
    label: "过度依赖厂商",
    rule: "厂商分配的开放金额占比 ≥ 70%",
    handling: "帮助伙伴建立自主获客与需求识别动作，逐步减少依赖。",
  },
] as const;
export function risksForPartner(partner: SimulatedPartner) {
  const open = partnerOpenOpportunities(partner);
  const value = partnerPipeline(partner);
  const vendorValue = open
    .filter((opportunity) => opportunity.source === "vendor")
    .reduce((sum, opportunity) => sum + opportunity.value, 0);
  const flags = {
    noActivity: partner.daysSinceActivity > 30,
    noOpportunities: partner.signed && partner.opportunities.length === 0,
    lowCommitment: partner.ratings.commitment <= 2,
    trainingIncomplete: partner.signed && partner.trainingPercent < 100,
    pipelineStalled: open.some(
      (opportunity) => opportunity.daysSinceProgress > 21,
    ),
    highDependency: value > 0 && vendorValue / value >= 0.7,
  };
  return partnerRisks.filter((risk) => flags[risk.id]);
}
export function partnerNextAction(partner: SimulatedPartner) {
  if (partnerTier(partner) === "inactive")
    return {
      short: "复核合作意愿与恢复计划",
      action:
        "联系模拟负责人，核查长期无活动或低投入原因，约定恢复动作与观察期；退出伙伴先核对交接安排。",
      why: "低活跃可能来自优先级或合作条件变化。先确认是否仍值得投入，再决定恢复、维持或退出，避免直接按标签淘汰。",
    };
  if (!partner.signed)
    return {
      short: "核查匹配与合作投入",
      action: `核查${partner.industry}客户结构、目标场景与负责人投入，补齐评分依据后再决定是否入驻。`,
      why: "候选伙伴尚未签约，评分只是模拟判断工具。先核查双方能否共同服务目标客户，比直接安排大量培训更合适。",
    };
  if (partner.trainingPercent < 100)
    return {
      short: "补齐行业方案与销售培训",
      action: `围绕${partner.industry}安排${partnerTypeInfo(partner.type).label}适用的产品 / 方案培训，与伙伴选择 2—3 个模拟目标客户场景进行联合机会识别。`,
      why: `伙伴已有${partner.industry}方向资源，但培训完成度仅 ${partner.trainingPercent}%。先帮助其理解产品与客户匹配关系，再要求扩大商机报备，更有利于形成有效机会。`,
    };
  if (partner.opportunities.length === 0)
    return {
      short: "共同识别首个有效商机",
      action:
        "从现有客户结构中筛选匹配场景，安排联合需求访谈，记录联系人、场景与下一步推进计划。",
      why: "签约和完成培训还不等于激活。以首个经过需求判断的模拟商机检验合作是否真正运转。",
    };
  if (risksForPartner(partner).some((risk) => risk.id === "pipelineStalled"))
    return {
      short: "复核停滞商机与决策节点",
      action:
        "核查长期未推进的模拟机会，确认需求、决策人、方案阻碍与时间窗口，并约定下一次沟通。",
      why: "伙伴仍有商机，但开放金额不等于可成交收入。先确认停滞机会是否有效，再安排售前或营销资源。",
    };
  if (risksForPartner(partner).some((risk) => risk.id === "highDependency"))
    return {
      short: "建立伙伴自主机会识别动作",
      action:
        "共同梳理目标客户画像，安排伙伴自主客户访谈，复核自主来源与厂商分配商机的占比。",
      why: "开放金额主要来自厂商分配，当前合作对厂商获客依赖较高。支持伙伴建立自主获客能力，比持续分配线索更有利于可持续增长。",
    };
  if (partner.opportunities.some((opportunity) => opportunity.status === "won"))
    return {
      short: "复盘首单并复制行业场景",
      action:
        "复盘模拟成交的需求、方案和推进条件，整理可复制的场景，再与伙伴筛选下一批匹配客户。",
      why: "已有模拟首单，可以从实际推进条件中找出可复用方法。复制场景仍需要核查新客户条件，不能直接假定相同成交结果。",
    };
  return {
    short: "联合推进现有商机",
    action:
      "按模拟客户需求与推进节点协调双方销售和售前支持，确认方案反馈及下一次行动。",
    why: "伙伴已经产生模拟商机，重点应转为机会质量与协同推进。资源投入随节点和反馈调整，而不是只看报备数量。",
  };
}
export function partnerDashboard(partners: readonly SimulatedPartner[]) {
  const opportunities = partners.flatMap((partner) => partner.opportunities);
  const open = opportunities.filter(
    (opportunity) => opportunity.status === "open",
  );
  const closed = opportunities.filter(
    (opportunity) => opportunity.status !== "open",
  );
  const won = opportunities.filter(
    (opportunity) => opportunity.status === "won",
  );
  return {
    total: partners.length,
    active: partners.filter(isActivePartner).length,
    strategic: partners.filter(
      (partner) => partnerTier(partner) === "strategic",
    ).length,
    activated: partners.filter(isActivatedPartner).length,
    opportunities: opportunities.length,
    openOpportunities: open.length,
    closed: closed.length,
    won: won.length,
    pipeline: open.reduce((sum, opportunity) => sum + opportunity.value, 0),
    activePipeline: open
      .filter((opportunity) => opportunity.daysSinceProgress <= 21)
      .reduce((sum, opportunity) => sum + opportunity.value, 0),
    partnerSourced: open
      .filter((opportunity) => opportunity.source === "partner")
      .reduce((sum, opportunity) => sum + opportunity.value, 0),
    winRate: closed.length ? (won.length / closed.length) * 100 : null,
    signed: partners.filter((partner) => partner.signed).length,
    training: partners.filter(
      (partner) => partner.signed && partner.trainingPercent === 100,
    ).length,
    firstProposal: partners.filter(
      (partner) =>
        partner.signed &&
        partner.opportunities.some((opportunity) => opportunity.proposalSent),
    ).length,
    firstDeal: partners.filter(
      (partner) =>
        partner.signed &&
        partner.opportunities.some(
          (opportunity) => opportunity.status === "won",
        ),
    ).length,
  };
}
export const partnerMoney = (value: number) =>
  `¥${value.toLocaleString("zh-CN")}`;
export const partnerActivityLabel = (days: number) =>
  days === 0 ? "演示今日" : `演示 ${days} 天前`;

export const enablementSupport = [
  {
    english: "Product Training",
    label: "产品培训",
    action: "讲清产品价值、适用条件与边界。",
    output: "产品理解与目标场景判断",
  },
  {
    english: "Sales Training",
    label: "销售培训",
    action: "提供需求访谈、异议处理与报价练习。",
    output: "可使用的销售话术与材料",
  },
  {
    english: "Solution Training",
    label: "解决方案培训",
    action: "将产品映射到伙伴行业客户的问题。",
    output: "行业场景与联合方案",
  },
  {
    english: "Lead Sharing",
    label: "商机共享",
    action: "约定线索分配、反馈和报备规则。",
    output: "有归属与跟进计划的机会",
  },
  {
    english: "Joint Marketing",
    label: "联合营销",
    action: "围绕目标客户共同安排活动与内容。",
    output: "明确客群、分工和后续跟进",
  },
  {
    english: "Pre-sales Support",
    label: "售前支持",
    action: "提供需求确认、方案与技术答疑协作。",
    output: "可评估的方案与推进节点",
  },
  {
    english: "MDF / Incentive",
    label: "市场与激励支持",
    action: "按目标、预算和核验条件设计模拟支持。",
    output: "有使用条件与复核方式的投入",
  },
] as const;
export const enablementBarriers = [
  "不理解产品",
  "不知道卖给谁",
  "利润空间不够",
  "缺少销售材料",
  "缺售前支持",
  "没有商机",
  "产品优先级不高",
] as const;
export const partnerGrowthSteps = [
  "判断伙伴是否值得投入",
  "理解伙伴的客户结构",
  "找到双方共同目标客户",
  "完成产品 / 销售赋能",
  "寻找首个商机",
  "联合推进首单",
  "复盘并复制",
] as const;

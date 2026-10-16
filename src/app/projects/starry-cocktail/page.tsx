import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CareerShell } from "@/components/career-ui";
import { ProjectBadge } from "@/components/project-ui";
import {
  StarryBoothSketch,
  StarryLockup,
  StarryVisualSystem,
} from "@/components/starry-visuals";
import { projectById } from "@/data/projects";
import {
  starryCocktail as s,
  starryMenuCount,
  starryPriceLadder,
} from "@/data/starry-cocktail";
import "../../career.css";
import "../../portfolio-v3.css";
import "./starry-cocktail.css";

const project = projectById("starry-cocktail");
export const metadata: Metadata = {
  title: { absolute: s.seo.title },
  description: s.seo.description,
  alternates: { canonical: project.route },
  openGraph: {
    title: s.seo.title,
    description: s.seo.description,
    url: project.route,
  },
};

function CaseSection({
  id,
  english,
  title,
  children,
}: {
  id: string;
  english: string;
  title: string;
  children: ReactNode;
}) {
  const number = String(
    s.navigation.findIndex((item) => item.id === id) + 1,
  ).padStart(2, "0");
  return (
    <section
      id={id}
      className="starry-section"
      aria-labelledby={`${id}-heading`}
    >
      <p className="eyebrow">
        {number} / {english}
      </p>
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </section>
  );
}
function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="starry-tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function StarryCocktailPage() {
  return (
    <CareerShell>
      <main id="main" className="container starry-page">
        <nav className="career-breadcrumb" aria-label="面包屑">
          <Link href="/">首页</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#independent">独立项目</Link>
          <span aria-hidden="true">/</span>
          <span>{s.english}</span>
        </nav>
        <header className="starry-hero">
          <div>
            <ProjectBadge type={project.type} />
            <p className="starry-project-kind">{s.type}</p>
            <h1>
              <span lang="en">{s.english}</span>
              {s.name}
            </h1>
            <p className="starry-subtitle">{s.subtitle}</p>
            <p className="starry-positioning">{s.positioning}</p>
            <p className="starry-lead">{s.description}</p>
            <p className="starry-scope">
              个人独立推进的真实项目。本案例展示方案、设计方向与产品实验，项目产出不等同于已经验证的商业结果。
            </p>
            <div className="actions">
              <a className="button primary" href="#outputs">
                先看项目产出 ↓
              </a>
              <a className="button secondary" href="#visual-system">
                查看视觉与摊位方案 ↓
              </a>
            </div>
          </div>
          <figure className="starry-brand-cover">
            <StarryLockup />
            <figcaption>Design Concept / 设计方案 · 非实物照片</figcaption>
          </figure>
        </header>
        <dl className="starry-key-facts">
          <div>
            <dt>产品结构规划</dt>
            <dd>{starryMenuCount} 款</dd>
            <p>菜单数量，不是销量或订单数</p>
          </div>
          <div>
            <dt>菜单价格梯度</dt>
            <dd>{starryPriceLadder.length} 档</dd>
            <p>{starryPriceLadder.map((tier) => tier.price).join(" / ")} 元</p>
          </div>
          <div>
            <dt>方案覆盖</dt>
            <dd>摊位 + 活动</dd>
            <p>移动零售与活动服务的场景设计</p>
          </div>
        </dl>
        <div className="starry-reading-grid">
          <details className="starry-toc" open>
            <summary>项目阅读目录</summary>
            <nav aria-label="星光鸡尾酒案例目录">
              {s.navigation.map((item, index) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </a>
              ))}
            </nav>
          </details>
          <div className="starry-reading-body">
            <CaseSection
              id="background"
              english="PROJECT BACKGROUND"
              title="从低启动成本的移动方案开始。"
            >
              <p>{s.background}</p>
              <Tags items={s.goals} />
              <details className="starry-record-note">
                <summary>此前已记录的自主实践</summary>
                <p>{project.recordedPractice}</p>
              </details>
            </CaseSection>
            <CaseSection
              id="brand"
              english="BRAND POSITIONING"
              title="黑金、简洁，适合夜间的品牌识别。"
            >
              <Tags items={s.brand.keywords} />
              <p>{s.brand.intention}</p>
              <div className="starry-brand-rules">
                <div>
                  <h3>视觉语言</h3>
                  <ul>
                    {s.brand.palette.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Logo核心元素</h3>
                  <ul>
                    {s.brand.logoElements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CaseSection>
            <CaseSection
              id="visual-system"
              english="VISUAL SYSTEM"
              title="把同一套识别，放到不同物料上。"
            >
              <p className="starry-note">{s.visualNote}</p>
              <StarryVisualSystem />
            </CaseSection>
            <CaseSection
              id="booth"
              english="MOBILE BOOTH DESIGN"
              title="移动、搭建与操作，要一起考虑。"
            >
              <figure className="starry-booth-figure">
                <span className="starry-concept-label">
                  Design Concept / 设计方案
                </span>
                <StarryBoothSketch />
                <figcaption>
                  正面结构示意，非实物照片；尺寸来自本人提供的方案。
                </figcaption>
              </figure>
              <dl className="starry-specifications">
                {s.booth.map((item) => (
                  <div key={item.item}>
                    <dt>{item.item}</dt>
                    <dd>{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </CaseSection>
            <CaseSection
              id="pricing"
              english="PRODUCT STRATEGY"
              title="价格梯度承担不同的产品任务。"
            >
              <p>
                最低价产品用于降低首次尝试门槛；中间价格作为主销量区间规划，更高价格提供更高酒精度或更复杂体验。这里说明设计思路，不把规划写成已经验证的销量表现。
              </p>
              <div className="starry-price-strategy">
                {starryPriceLadder.map((tier) => (
                  <article key={tier.price}>
                    <p className="starry-price-value">
                      ¥{tier.price}
                      <span>{tier.count} 款规划</span>
                    </p>
                    <h3>{tier.purpose}</h3>
                    <p>{tier.explanation}</p>
                  </article>
                ))}
              </div>
            </CaseSection>
            <CaseSection
              id="menu"
              english="MENU ARCHITECTURE"
              title="菜单控制选择难度，也控制出品复杂度。"
            >
              <p>
                菜单不只是列产品。通过多档价格让顾客快速形成预算预期，并同时考虑产品差异、酒精度与原料组合。
              </p>
              <ol className="starry-price-ladder" aria-label="菜单价格梯度">
                {starryPriceLadder.map((tier) => (
                  <li key={tier.price}>
                    <strong>¥{tier.price}</strong>
                    <span>{tier.count} 款</span>
                  </li>
                ))}
              </ol>
              <Tags items={s.menuFocus} />
              <p className="starry-note">
                16
                款是产品结构规划。当前未提供完整品名、每款配方与成品图，页面不补造正式菜单，也不将实验产品标为畅销款。
              </p>
            </CaseSection>
            <CaseSection
              id="ingredients"
              english="INGREDIENT SYSTEM"
              title="复用有限原料，减少低频库存。"
            >
              <p>{s.ingredientThinking}</p>
              <div className="starry-ingredient-grid">
                {s.ingredients.map((group) => (
                  <article key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="starry-ingredient-exclusions">
                <strong>项目限制</strong>
                <Tags items={s.ingredientExclusions} />
              </div>
            </CaseSection>
            <CaseSection
              id="recipes"
              english="PRODUCT DEVELOPMENT EXAMPLE"
              title="从具体配方里，检查产品取舍。"
            >
              <Tags items={s.recipeBalance} />
              <div className="starry-recipe-grid">
                {s.recipes.map((recipe) => (
                  <article key={recipe.title}>
                    <span className="starry-status-tag">{recipe.state}</span>
                    <h3>{recipe.title}</h3>
                    <dl>
                      {recipe.ingredients.map((ingredient) => (
                        <div key={ingredient.name}>
                          <dt>{ingredient.name}</dt>
                          <dd>{ingredient.ml} ml</dd>
                        </div>
                      ))}
                    </dl>
                    <p>配方开发 / 测试记录，不代表最终标准化商品或畅销结果。</p>
                  </article>
                ))}
              </div>
            </CaseSection>
            <CaseSection
              id="experiment"
              english="R&D EXPERIMENT"
              title={s.experiment.title}
            >
              <span className="starry-status-tag">
                产品实验 / 非最终标准商品
              </span>
              <p>{s.experiment.note}</p>
              <h3>实验目标</h3>
              <Tags items={s.experiment.goals} />
              <h3>使用过的组合</h3>
              <Tags items={s.experiment.combination} />
            </CaseSection>
            <CaseSection
              id="event-service"
              english="EVENT SERVICE"
              title="从摊位零售，延伸到活动服务方案。"
            >
              <Tags items={s.event.scenes} />
              <div className="starry-event-plan">
                <div>
                  <p className="eyebrow">SERVICE CONCEPT / 服务方案</p>
                  <p className="starry-event-price">
                    约 {s.event.servicePrice} 元
                    <span> / {s.event.cups} 杯</span>
                  </p>
                  <p>{s.event.setup}</p>
                </div>
                <p>{s.event.note}</p>
              </div>
            </CaseSection>
            <CaseSection
              id="content"
              english="CONTENT & MARKETING"
              title="通过真实制作过程，表达产品与品牌。"
            >
              <p>
                平台方向：<strong>{s.content.platform}</strong>。
                {s.content.intention}
              </p>
              <Tags items={s.content.formats} />
              <ol className="starry-content-script" aria-label="内容脚本思路">
                {s.content.script.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <p className="starry-note">
                活动现场与饮品实拍尚未提供，不用生成照片替代真实现场，也不展示未经确认的发布、流量或获客结果。
              </p>
            </CaseSection>
            <CaseSection
              id="business-thinking"
              english="BUSINESS THINKING"
              title="把方案选择，放回经营约束里。"
            >
              <div className="starry-thinking-grid">
                {s.businessThinking.map((item, index) => (
                  <article key={item.title}>
                    <span className="work-number">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.action}</p>
                    <small>{item.boundary}</small>
                  </article>
                ))}
              </div>
            </CaseSection>
            <CaseSection
              id="ai-collaboration"
              english="AI COLLABORATION"
              title="AI辅助迭代，判断仍由人工负责。"
            >
              <p>{s.ai.description}</p>
              <div className="starry-ai-grid">
                <div>
                  <h3>AI参与的工作</h3>
                  <ul>
                    {s.ai.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>人工决定与核查</h3>
                  <ul>
                    {s.ai.humanDecisions.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                  <p className="starry-note">
                    以方案是否适用为判断标准，不宣称未经测量的效率提升比例。
                  </p>
                </div>
              </div>
            </CaseSection>
            <CaseSection
              id="outputs"
              english="PROJECT OUTPUTS"
              title="用具体产出，说明推进到了哪里。"
            >
              <p>
                以下是已经形成的定位、方案与实验记录，不以未经确认的经营数据证明项目价值。
              </p>
              <div className="starry-output-list">
                {s.outputs.map((output) => (
                  <article key={output.title}>
                    <h3>{output.title}</h3>
                    <p>{output.detail}</p>
                  </article>
                ))}
              </div>
            </CaseSection>
            <CaseSection
              id="capability-evidence"
              english="CAPABILITIES DEMONSTRATED"
              title="能力，连接到本项目的具体证据。"
            >
              <div className="starry-capability-grid">
                {s.capabilities.map((capability) => (
                  <article key={capability.english}>
                    <p className="eyebrow">{capability.english}</p>
                    <h3>{capability.title}</h3>
                    <p>{capability.evidence}</p>
                    <a className="text-link" href={`#${capability.anchor}`}>
                      查看项目证据 ↑
                    </a>
                  </article>
                ))}
              </div>
            </CaseSection>
            <CaseSection
              id="summary"
              english="WHAT THIS PROJECT SHOWS"
              title="从模糊想法，到能推进的具体方案。"
            >
              <p className="starry-summary">{s.summary}</p>
              <ol className="starry-summary-flow">
                {s.process.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <p>
                它展示的是个人从0到1拆解问题、组织产品与物料、形成方案并推进执行的能力。未提供的商业结果不作推断，设计稿与产品实验继续保留清楚的状态边界。
              </p>
            </CaseSection>
          </div>
        </div>
        <footer className="case-next">
          <Link className="button secondary" href="/#independent">
            ← 返回独立项目
          </Link>
          <Link className="text-link" href="/#projects">
            查看其他项目作品 ↗
          </Link>
          <Link className="text-link" href="/#contact">
            联系我 ↗
          </Link>
        </footer>
      </main>
    </CareerShell>
  );
}

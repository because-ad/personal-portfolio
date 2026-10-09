import Link from "next/link";
import type { Metadata } from "next";
import { portfolio as p } from "@/data/portfolio";
import {
  career,
  careerJobs,
  careerSkills,
  caseStudies,
  workCaseSlugs,
} from "@/data/career";
import { huaweiResume } from "@/data/resume-print";
import {
  CareerShell,
  CaseCard,
  AiWorkflow,
  AiApplications,
  AiTools,
} from "@/components/career-ui";
import { SectionHeading } from "@/components/section-heading";
import { ResultText } from "@/components/result-text";
import "./career.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <CareerShell>
      <main id="main">
        <section id="home" className="hero container career-hero">
          <div className="hero-copy">
            <p className="availability">
              <span />
              {p.status} · {p.location}
            </p>
            <p className="eyebrow">CAREER PORTFOLIO / 李明春</p>
            <h1>{p.name}</h1>
            <p className="career-positioning">
              {career.subtitle}
              <br />
              <span>{career.secondary}</span>
            </p>
            <p className="career-english" lang="en">
              {career.english}
            </p>
            <p className="hero-intro">{career.intro}</p>
            <div className="actions">
              <a className="button primary" href="#projects">
                查看项目案例 ↗
              </a>
              <Link className="button secondary" href="/resume">
                查看简历 ↗
              </Link>
            </div>
            <div className="hero-secondary">
              <a href="#ai">AI 能力 ↗</a>
              <a href="#contact">联系我 ↗</a>
              <span>
                {p.location} · {p.travel}
              </span>
            </div>
          </div>
          <aside className="career-hero-note" aria-label="职业能力主线">
            <p className="eyebrow">EXPERIENCE INTO CAPABILITY</p>
            <h2>
              从一线实践，
              <br />
              积累可迁移的能力。
            </h2>
            <ol>
              {[
                { title: "销售", text: "理解需求与成交过程" },
                { title: "项目", text: "协调资源，推进现场交付" },
                { title: "运营", text: "把服务流程整理成 SOP" },
              ].map((item, index) => (
                <li key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="hero-note-bottom">业务是方向，AI 是工作杠杆。</p>
          </aside>
        </section>

        <section
          className="container career-results"
          aria-labelledby="results-heading"
        >
          <p className="eyebrow" id="results-heading">
            KEY RESULTS / 有语境的工作结果
          </p>
          <dl className="career-metrics">
            {career.metrics.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
                <p>{stat.note}</p>
              </div>
            ))}
          </dl>
        </section>

        <section id="projects" className="section project-section">
          <div className="container">
            <SectionHeading
              number="01"
              english="SELECTED CASE STUDIES"
              title="做过什么，如何推进，结果怎样。"
              description="四个案例，沿着实际职责、行动和结果展开。"
            />
            <div className="career-case-grid">
              {caseStudies.map((study) => (
                <CaseCard study={study} key={study.slug} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeading
            number="02"
            english="CAREER TIMELINE"
            title="跨行业实践，持续积累业务能力。"
            description="销售 → 项目执行 → 团队协作 → 运营与标准化"
          />
          <div className="career-timeline">
            {[...careerJobs].reverse().map((job) => (
              <article className="career-timeline-entry" key={job.id}>
                <div className="career-period">
                  <span className="timeline-dot" />
                  {job.period}
                </div>
                <div>
                  <p className="eyebrow">{job.context}</p>
                  <h3>
                    {job.company}
                    <span>{job.role}</span>
                  </h3>
                  <p className="body-copy">{job.summary}</p>
                  <div className="tags job-highlights">
                    {job.highlights.map((m) => (
                      <span key={m.value}>
                        <strong>{m.value}</strong>
                        <small>{m.note}</small>
                      </span>
                    ))}
                  </div>
                  <details className="career-details">
                    <summary>
                      职责与工作记录 <span aria-hidden="true">＋</span>
                    </summary>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>
                          <ResultText text={point} />
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="ai" className="section career-tint">
          <div className="container">
            <SectionHeading
              number="03"
              english="AI-NATIVE PRODUCTIVITY"
              title="AI 是工作杠杆，输出要能实际使用。"
              description="明确问题、协作产出、人工复核、推进交付。"
            />
            <AiApplications />
            <AiWorkflow />
            <AiTools />
            <div className="section-end-link">
              <Link className="text-link" href="/case-studies/ai-productivity">
                查看 AI 工作方式与可查看交付 ↗
              </Link>
            </div>
          </div>
        </section>

        <section id="lab" className="section container">
          <SectionHeading
            number="04"
            english="BUSINESS DEMO LAB"
            title="把业务理解，做成可以操作的 Demo。"
          />
          <article className="career-lab-card">
            <div>
              <span className="demo-badge">Demo Data / 模拟数据</span>
              <h3>Sales Pipeline Demo</h3>
              <p>
                用模拟客户展示从线索判断到成交的跟进过程，理解阶段、机会金额与下一步行动之间的关系。
              </p>
              <Link className="button primary" href="/demo/sales-pipeline">
                体验销售流程 Demo ↗
              </Link>
            </div>
            <ol className="lab-stages" aria-label="销售流程">
              {[
                "Lead / 线索",
                "Qualification / 判断",
                "Opportunity / 商机",
                "Proposal / 提案",
                "Closing / 成交",
              ].map((stage) => (
                <li key={stage}>{stage}</li>
              ))}
            </ol>
          </article>
        </section>

        <section id="roles" className="section container">
          <SectionHeading
            number="05"
            english="TARGET ROLES"
            title="我正在关注的岗位方向。"
            description="已有经验如何迁移，以及下一步需要积累什么。"
          />
          <div className="career-role-grid">
            {career.roles.map((role) => (
              <article key={role.title}>
                <p className="eyebrow">{role.title}</p>
                <h3>{role.label}</h3>
                <p className="role-evidence">{role.evidence}</p>
                <p>{role.transfer}</p>
                <Link className="text-link" href={`/case-studies/${role.case}`}>
                  查看相关实践 ↗
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="why-me" className="section career-tint">
          <div className="container">
            <SectionHeading
              number="06"
              english="WHY ME"
              title="用实践说明优势。"
            />
            <div className="career-why-grid">
              {career.whyMe.map((item, index) => (
                <article key={item.title}>
                  <span className="work-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>
                    <ResultText text={item.proof} />
                  </p>
                  <Link
                    className="text-link"
                    href={`/case-studies/${item.case}`}
                  >
                    相关证据 ↗
                  </Link>
                </article>
              ))}
            </div>
            <details id="skills" className="career-details">
              <summary>
                已有能力与办公工具 <span aria-hidden="true">＋</span>
              </summary>
              <div className="career-skill-grid">
                {careerSkills.map((skill) => (
                  <article key={skill.id}>
                    <h3>{skill.title}</h3>
                    <p>{skill.keywords.join(" · ")}</p>
                    {skill.evidence.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                    {"detail" in skill && <p>{skill.detail}</p>}
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section id="work" className="section container">
          <SectionHeading
            number="07"
            english="REPRESENTATIVE WORK"
            title="工作方法与实际交付。"
            description="工作记录链接至案例；未提供原始附件的内容不虚设下载。"
          />
          <div className="work-cards">
            {p.works.map((work, index) => (
              <article className="work-card" key={work.id}>
                <span className="work-number">0{index + 1}</span>
                <h3>{work.title}</h3>
                <p>{work.summary}</p>
                <div className="tags">
                  {work.keywords.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="text-link"
                  href={`/case-studies/${workCaseSlugs[work.id]}`}
                >
                  查看工作过程与结果 ↗
                </Link>
              </article>
            ))}
          </div>
          <article className="career-independent">
            <p className="eyebrow">INDEPENDENT PRACTICE</p>
            <h3>{huaweiResume.project.title}</h3>
            <p>{huaweiResume.project.bullets[0]}</p>
          </article>
        </section>

        <section id="about" className="section container">
          <SectionHeading
            number="08"
            english="ABOUT & EDUCATION"
            title="关于我与学习背景。"
          />
          <div className="career-about-grid">
            <div>
              <p className="large-copy">{p.aboutSummary}</p>
              <p className="body-copy">{career.aboutExperience}</p>
              <details className="career-details">
                <summary>
                  更多个人经历 <span aria-hidden="true">＋</span>
                </summary>
                {p.about
                  .filter((_, i) => i !== 1)
                  .map((text) => (
                    <p key={text}>{text}</p>
                  ))}
              </details>
            </div>
            <article id="education">
              <p className="eyebrow">EDUCATION</p>
              <h3>{p.education.school}</h3>
              <p>
                {p.education.major} · {p.education.degree} ·{" "}
                {p.education.graduation}
              </p>
              <p className="body-copy">{p.education.detail}</p>
            </article>
          </div>
        </section>

        <section id="resume" className="section container">
          <SectionHeading
            number="09"
            english="RESUME"
            title="查看与下载正式简历。"
          />
          <div className="career-resume-grid">
            <article>
              <p className="eyebrow">ONE-PAGE A4 / 定向投递</p>
              <h3>云服务伙伴支持专员简历</h3>
              <p>一页 A4，精炼工作经历与关键数据，适合打印和岗位定向投递。</p>
              <div className="actions">
                <Link className="button secondary" href="/resume-print">
                  在线查看 ↗
                </Link>
                <a
                  className="button primary"
                  href={huaweiResume.pdf.href}
                  download={huaweiResume.pdf.filename}
                >
                  下载 PDF ↓
                </a>
              </div>
            </article>
            <article>
              <p className="eyebrow">FULL RESUME / 完整经历</p>
              <h3>综合求职简历</h3>
              <p>
                保留已有完整在线简历及两页 A4
                PDF，方便阅读更完整的项目和能力记录。
              </p>
              <div className="actions">
                <Link className="button secondary" href="/resume">
                  在线查看 ↗
                </Link>
                <a
                  className="button secondary"
                  href={p.pdf.href}
                  download={p.pdf.filename}
                >
                  下载 PDF ↓
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <p className="eyebrow">10 / CONTACT</p>
            <div className="contact-top">
              <h2>
                有合适的业务机会，
                <br />
                欢迎联系。
              </h2>
              <div>
                <p>
                  如果您认为我的经历适合业务拓展、ToB
                  销售、渠道伙伴、运营或项目相关岗位，欢迎与我沟通。
                </p>
                <a className="button light" href={`mailto:${p.email}`}>
                  邮件联系 ↗
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <div>
                <small>EMAIL</small>
                <a href={`mailto:${p.email}`}>{p.email}</a>
              </div>
              <div>
                <small>电话</small>
                <a href={`tel:${p.phone}`}>{p.phone}</a>
              </div>
              <div>
                <small>工作意向</small>
                <span>
                  {p.location} · {p.travel}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </CareerShell>
  );
}

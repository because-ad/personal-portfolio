import Link from "next/link";
import type { Metadata } from "next";
import { portfolio as p } from "@/data/portfolio";
import { career, careerJobs, careerSkills, workCaseSlugs } from "@/data/career";
import {
  businessDemos,
  capabilityMap,
  careerEvidence,
  independentProjects,
  projectById,
  projectTypes,
  selectedProjects,
} from "@/data/projects";
import { huaweiResume } from "@/data/resume-print";
import { CareerShell } from "@/components/career-ui";
import {
  DigitalProjectIndex,
  ProjectBadge,
  ProjectCard,
} from "@/components/project-ui";
import { SectionHeading } from "@/components/section-heading";
import { ResultText } from "@/components/result-text";
import "./career.css";
import "./portfolio-v3.css";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <CareerShell>
      <main id="main" className="portfolio-home">
        <section id="home" className="hero container career-hero">
          <div className="hero-copy">
            <p className="availability">
              <span />
              {p.status} · {p.location}
            </p>
            <p className="eyebrow">01 / 李明春 CAREER PORTFOLIO</p>
            <h1>{p.name}</h1>
            <p className="portfolio-identity">{career.identity}</p>
            <p className="career-positioning">{career.subtitle}</p>
            <p className="career-english" lang="en">
              {career.english}
            </p>
            <p className="hero-intro">{career.intro}</p>
            <p className="career-tagline">{career.tagline}</p>
            <div className="actions">
              <a className="button primary" href="#projects">
                查看项目作品 ↗
              </a>
              <Link className="button secondary" href="/resume">
                查看综合简历 ↗
              </Link>
            </div>
            <div className="hero-secondary">
              <a href="#capabilities">能力与证据 ↗</a>
              <a href="#independent">独立项目 ↗</a>
              <span>
                {p.location} · {p.travel}
              </span>
            </div>
          </div>
          <aside className="career-hero-note" aria-label="职业能力主线">
            <p className="eyebrow">EXPERIENCE INTO CAPABILITY</p>
            <h2>从一线销售、项目执行和门店运营中，形成可复用的业务方法。</h2>
            <ol>
              {[
                { title: "销售", text: "理解需求与成交过程" },
                { title: "项目", text: "协调资源，推进现场交付" },
                { title: "运营", text: "把服务经验整理成 SOP" },
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
            <p className="hero-note-bottom">
              以一线实践为基础，持续学习业务与数字化工作方法。
            </p>
          </aside>
        </section>

        <section
          id="results"
          className="container career-results"
          aria-labelledby="results-heading"
        >
          <h2 className="eyebrow" id="results-heading">
            02 / KEY RESULTS · 真实工作结果
          </h2>
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

        <section id="capabilities" className="section container">
          <SectionHeading
            number="03"
            english="CAPABILITY MAP"
            title="能力，从做过的事情中看。"
            description="每一项能力都连接具体工作或作品，区分真实实践与模拟表达。"
          />
          <div className="capability-map">
            {capabilityMap.map((capability, index) => (
              <article key={capability.id}>
                <span className="work-number">0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>
                  <ResultText text={capability.evidence} />
                </p>
                <ul className="capability-evidence-links">
                  {capability.projectIds.map((id) => {
                    const project = projectById(id);
                    return (
                      <li key={id}>
                        <Link href={project.route}>
                          {project.title} ↗
                          <small>{projectTypes[project.type].label}</small>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
          <details id="skills" className="career-details">
            <summary>
              更多能力证据与办公工具 <span aria-hidden="true">＋</span>
            </summary>
            <div className="career-skill-grid">
              {careerSkills.map((skill) => (
                <article key={skill.id}>
                  <h3>{skill.title}</h3>
                  <p>{skill.keywords.join(" · ")}</p>
                  {skill.evidence.map((text) => (
                    <p key={text}>
                      <ResultText text={text} />
                    </p>
                  ))}
                  {"detail" in skill && <p>{skill.detail}</p>}
                </article>
              ))}
            </div>
          </details>
          <details id="why-me" className="career-details">
            <summary>
              工作方式与实践依据 <span aria-hidden="true">＋</span>
            </summary>
            <div className="career-why-grid">
              {career.whyMe.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>
                    <ResultText text={item.proof} />
                  </p>
                  <Link
                    className="text-link"
                    href={
                      item.title === "陌生领域学习"
                        ? "/projects/starry-cocktail"
                        : `/case-studies/${item.case}`
                    }
                  >
                    查看相关实践 ↗
                  </Link>
                </article>
              ))}
            </div>
          </details>
        </section>

        <section id="projects" className="section project-section">
          <div className="container">
            <SectionHeading
              number="04"
              english="SELECTED WORK"
              title="代表项目，分清类型再看结果。"
              description="真实工作、AI应用与商业模拟分别标注，独立项目在下方单独展示。"
            />
            <div className="project-type-key" aria-label="项目类型说明">
              {Object.entries(projectTypes).map(([type, category]) => (
                <div key={type}>
                  <ProjectBadge type={type as keyof typeof projectTypes} />
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
            <div className="career-case-grid selected-work-grid">
              {selectedProjects.map((project, index) => (
                <ProjectCard
                  project={project}
                  number={`0${index + 1}`}
                  key={project.id}
                />
              ))}
            </div>
            <details id="work" className="career-details">
              <summary>
                工作方法与已有交付记录 <span aria-hidden="true">＋</span>
              </summary>
              <div className="work-cards">
                {p.works.map((work) => (
                  <article className="work-card" key={work.id}>
                    <ProjectBadge
                      type={projectById(workCaseSlugs[work.id]).type}
                    />
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
              <p className="body-copy">
                已有工作记录链接至案例；未提供原始附件的内容不虚设下载。
              </p>
            </details>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeading
            number="05"
            english="CAREER EXPERIENCE"
            title="跨行业实践，沿着行动与结果阅读。"
            description="Situation · Responsibility · Action · Result · Capability"
          />
          <div className="career-timeline">
            {[...careerJobs].reverse().map((job) => {
              const evidence =
                careerEvidence[job.id as keyof typeof careerEvidence];
              return (
                <article
                  className="career-timeline-entry"
                  key={job.id}
                  data-career-job={job.id}
                >
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
                    <dl className="career-job-model">
                      <div>
                        <dt>Situation / 背景</dt>
                        <dd>{evidence.situation}</dd>
                      </div>
                      <div>
                        <dt>Responsibility / 职责</dt>
                        <dd>{evidence.responsibility}</dd>
                      </div>
                      <div>
                        <dt>Action / 行动</dt>
                        <dd>
                          <p>{job.summary}</p>
                          <details className="career-details">
                            <summary>
                              展开行动与工作记录{" "}
                              <span aria-hidden="true">＋</span>
                            </summary>
                            <ul>
                              {job.points.map((point) => (
                                <li key={point}>
                                  <ResultText text={point} />
                                </li>
                              ))}
                            </ul>
                          </details>
                        </dd>
                      </div>
                      <div>
                        <dt>Result / 结果</dt>
                        <dd>
                          <div className="tags job-highlights">
                            {job.highlights.map((metric) => (
                              <span key={metric.value}>
                                <strong>{metric.value}</strong>
                                <small>{metric.note}</small>
                              </span>
                            ))}
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt>Capability / 能力</dt>
                        <dd>
                          {evidence.capability}
                          <Link
                            className="text-link"
                            href={projectById(evidence.projectId).route}
                          >
                            完整案例与职责范围 ↗
                          </Link>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
          <aside
            id="about"
            className="portfolio-about"
            aria-labelledby="about-heading"
          >
            <div>
              <p className="eyebrow">ABOUT ME</p>
              <h3 id="about-heading">职业早期，在不同场景中积累方法。</h3>
              {career.about.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <details className="career-details">
                <summary>
                  已有经历概述 <span aria-hidden="true">＋</span>
                </summary>
                <p>{career.aboutExperience}</p>
              </details>
            </div>
            <div id="education">
              <p className="eyebrow">EDUCATION</p>
              <h3>{p.education.school}</h3>
              <p>
                {p.education.major} · {p.education.degree} ·{" "}
                {p.education.graduation}
              </p>
              <p>{career.educationNote}</p>
            </div>
          </aside>
        </section>

        <section id="ai" className="section career-tint">
          <div className="container">
            <SectionHeading
              number="06"
              english="AI & DIGITAL PROJECTS"
              title="AI与数字化实践"
              description="AI 是工作杠杆，输出要能实际使用。先看问题与交付，再看辅助工具。"
            />
            <DigitalProjectIndex />
            <div className="section-end-link">
              <Link className="text-link" href="/case-studies/ai-productivity">
                查看 Problem、Approach、Tools、Output 与复盘 ↗
              </Link>
            </div>
          </div>
        </section>

        <section id="lab" className="section container">
          <SectionHeading
            number="07"
            english="BUSINESS DEMO LAB"
            title="把业务理解，做成可以操作的 Demo。"
            description="用于验证我对不同业务流程的理解、拆解和数字化表达能力。"
          />
          <p className="business-lab-disclosure">
            <ProjectBadge type="simulation" /> Simulation /
            模拟项目；所有企业、客户、伙伴及业绩数据均为虚构模拟数据，不代表真实从业经历。
          </p>
          <div className="business-demo-grid">
            {businessDemos.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                number={`0${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="independent" className="section career-tint">
          <div className="container">
            <SectionHeading
              number="08"
              english="INDEPENDENT PROJECTS"
              title="独立项目，从想法推进到方案。"
              description="单独记录自主项目与长期实践，具体案例材料逐步补充。"
            />
            <div className="independent-project-grid">
              {independentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section container">
          <SectionHeading
            number="09"
            english="RESUME"
            title="查看与下载正式简历。"
            description="综合经历优先阅读，已有岗位定向版本单独保留。"
          />
          <div className="career-resume-grid">
            <article>
              <p className="eyebrow">FULL RESUME / 完整经历</p>
              <h3>综合求职简历</h3>
              <p>
                保留完整在线简历与两页 A4 PDF，查看真实工作、项目与能力记录。
              </p>
              <div className="actions">
                <Link className="button secondary" href="/resume">
                  在线查看 ↗
                </Link>
                <a
                  className="button primary"
                  href={p.pdf.href}
                  download={p.pdf.filename}
                >
                  下载 PDF ↓
                </a>
              </div>
            </article>
            <article>
              <p className="eyebrow">ONE-PAGE A4 / 已有定向版本</p>
              <h3>云服务伙伴支持专员简历</h3>
              <p>保留原有一页 A4 简历及 PDF，供特定岗位投递使用。</p>
              <div className="actions">
                <Link className="button secondary" href="/resume-print">
                  在线查看 ↗
                </Link>
                <a
                  className="button secondary"
                  href={huaweiResume.pdf.href}
                  download={huaweiResume.pdf.filename}
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
                <p>{career.contactIntro}</p>
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

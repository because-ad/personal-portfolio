import Link from "next/link";
import { portfolio as p, sections } from "@/data/portfolio";
import { Header } from "@/components/header";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">跳到主要内容</a>
      <Header name={p.name} />
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="availability"><span />{p.status}</p>
            <p className="eyebrow hero-label">{p.heroLabel}</p>
            <h1>{p.title[0]}<br /><span>{p.title[1]}</span></h1>
            <p className="hero-role">{p.subtitle}</p>
            <div className="hero-intro">
              {p.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="actions">
              <a className="button primary" href="#projects">查看项目案例 <span>↗</span></a>
              <Link className="button secondary" href="/resume">查看在线简历 <span>↗</span></Link>
            </div>
            <p className="hero-location"><span>⌖</span> {p.location}<span className="divider">/</span>{p.travel}</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-top"><span>IDEAS INTO IMPACT</span><span>↗</span></div>
            <div className="art-grid">
              <div className="shape shape-one" /><div className="shape shape-two" />
              <div className="shape shape-three" /><div className="shape shape-four" />
            </div>
            <div className="art-bottom"><span>连接 · 推进 · 创造价值</span><span>01 — 03</span></div>
            <div className="art-note">有想法，也有行动。</div>
          </div>
        </section>

        <div className="container">
          <div className="principles" aria-label="工作经历关键数据">
            {p.stats.map(stat => (
              <div key={stat.label}>
                <span className="stat-number">{stat.value}</span>
                <h3>{stat.label}</h3>
                {"note" in stat && <p>{stat.note}</p>}
              </div>
            ))}
          </div>
        </div>

        <section id="about" className="section container">
          <SectionHeading {...sections.about} />
          <div className="about-grid">
            <p className="large-copy">{p.aboutLead}</p>
            <div>
              <div className="body-copy">{p.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              <div className="tags">{p.values.map(value => <span key={value}>{value}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHeading {...sections.experience} />
          <div className="timeline">
            {p.jobs.map(job => (
              <article className="job" key={job.id}>
                <div className="job-date"><span className="timeline-dot" />{job.period}<small>{job.context}</small></div>
                <div>
                  <h3>{job.role}</h3><p className="company">{job.company}</p>
                  <p className="job-summary">{job.summary}</p>
                  <div className="tags job-highlights">{job.highlights.map(item => <span key={item}>{item}</span>)}</div>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section project-section">
          <div className="container">
            <SectionHeading {...sections.projects} />
            <div className="projects">
              {p.projects.map((project, index) => (
                <article className="project-card" key={project.id}>
                  <div className={`project-visual visual-${index}`} aria-hidden="true">
                    <span className="visual-caption">{project.category} / 0{index + 1}</span>
                    <div className="partner-diagram"><span>{project.visual[0]}</span><b>↔</b><span>{project.visual[1]}</span></div>
                    <span className="visual-bottom">{project.artifact}</span>
                  </div>
                  <div className="project-content">
                    <p className="eyebrow">CASE STUDY / 0{index + 1}</p>
                    <h3>{project.title}</h3><p>{project.summary}</p>
                    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-outcome"><strong>{project.outcome}</strong><small>{project.outcomeLabel}</small></div>
                    <details>
                      <summary>查看项目详情 <span className="details-symbol" aria-hidden="true">＋</span></summary>
                      <div className="case-detail">
                        <h4>背景 <small>BACKGROUND</small></h4>
                        {project.background.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                        <h4>行动 <small>ACTION</small></h4>
                        <ul>{project.action.map(action => <li key={action}>{action}</li>)}</ul>
                        <h4>结果 <small>RESULT</small></h4>
                        {project.result.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeading {...sections.skills} />
          <div className="skills-grid">
            {p.skills.map(skill => (
              <article key={skill.id}>
                <span className="skill-icon" aria-hidden="true">{skill.icon}</span><h3>{skill.title}</h3>
                <p>{skill.keywords.join(" · ")}</p>
                <div className="skill-evidence">{skill.evidence.map(item => <p key={item}>{item}</p>)}</div>
                {"detail" in skill && <small>{skill.detail}</small>}
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section container">
          <SectionHeading {...sections.work} />
          <div className="work-list">
            {p.works.map((work, index) => (
              <details key={work.id} open>
                <summary>
                  <span className="work-number">0{index + 1}</span>
                  <div><h3>{work.title}</h3><p>{work.summary}</p></div>
                  <span className="work-type">{work.type}</span><span className="work-open details-symbol" aria-hidden="true">＋</span>
                </summary>
                <div className="work-detail"><dl><div><dt>我的行动</dt><dd>{work.action}</dd></div><div><dt>结果</dt><dd>{work.result}</dd></div></dl></div>
              </details>
            ))}
          </div>
        </section>

        <section id="education" className="section container">
          <SectionHeading {...sections.education} />
          <div className="education">
            <span className="education-icon" aria-hidden="true">▥</span>
            <div><h3>{p.education.school}</h3><p>{p.education.major} · {p.education.degree}</p><p className="muted">{p.education.detail}</p></div>
            <span>{p.education.graduation}</span>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <p className="eyebrow">{sections.contact.number} / {sections.contact.english}</p>
            <div className="contact-top">
              <h2>{sections.contact.title[0]}<br />{sections.contact.title[1]}</h2>
              <div>
                {p.contact.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                <a className="button light" href={`mailto:${p.email}`}>邮件联系 <span>↗</span></a>
              </div>
            </div>
            <div className="contact-bottom">
              <div><small>EMAIL</small><a href={`mailto:${p.email}`}>{p.email}</a></div>
              <div><small>电话</small><a href={`tel:${p.phone}`}>{p.phone}</a></div>
              <div className="contact-resume-links">
                <Link className="resume-link" href="/resume">查看在线简历 ↗</Link>
                <a className="resume-link" href={p.pdf.href} download={p.pdf.filename}>下载 PDF 简历 ↓</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer"><span>© {p.copyrightYear} {p.name} · Personal Portfolio</span><span>认真做事，持续成长。</span><a href="#home">回到顶部 ↑</a></footer>
    </>
  );
}

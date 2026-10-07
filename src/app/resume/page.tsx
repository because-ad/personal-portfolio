import type { Metadata } from "next";
import Link from "next/link";
import { portfolio as p } from "@/data/portfolio";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = { title: `${p.name} · 在线简历` };

export default function Resume() {
  return (
    <main className="container resume-page">
      <div className="resume-controls no-print">
        <Link href="/" className="button secondary">← 返回作品集</Link>
        <div className="resume-download-controls">
          <a className="button secondary" href={p.pdf.href} download={p.pdf.filename}>下载 PDF 简历 ↓</a>
          <PrintButton />
        </div>
      </div>
      <div className="resume-first-page">
        <header className="resume-heading">
          <h1>{p.name}</h1><p className="resume-positioning">{p.positioning}</p>
          <p>{p.location}｜{p.travel}</p>
          <p className="resume-contact"><a href={`tel:${p.phone}`}>{p.phone}</a><a href={`mailto:${p.email}`}>{p.email}</a></p>
        </header>
        <section>
          <h2>个人概述</h2>
          {p.resume.summary.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section>
          <h2>工作经历</h2>
          {p.jobs.map(job => (
            <article className="resume-job" key={job.id}>
              <div className="resume-entry-heading"><h3>{job.company} · {job.role}</h3><span>{job.period}</span></div>
              <p className="resume-context">{job.context}</p>
              <ul>{job.resumePoints.map(point => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </section>
      </div>
      <div className="resume-second-page">
        <section>
          <h2>项目经历</h2>
          {p.projects.map(project => (
            <article className="resume-project" key={project.id}>
              <h3>{project.title}</h3>
              {project.resume.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </section>
        <section>
          <h2>教育经历</h2>
          <div className="resume-entry-heading"><h3>{p.education.school}</h3><span>{p.education.graduation}</span></div>
          <p>{p.education.major} · {p.education.degree}</p>
        </section>
        <section>
          <h2>技能与工具</h2>
          <p><strong>业务技能：</strong>{p.resume.businessSkills.join(" · ")}</p>
          <p><strong>办公工具：</strong>{p.resume.officeTools.join(" · ")}</p>
          <p><strong>AI 工具：</strong>{p.resume.aiTools.join(" · ")}</p>
        </section>
      </div>
    </main>
  );
}

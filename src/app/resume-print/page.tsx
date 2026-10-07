import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { huaweiResume as resume } from "@/data/resume-print";
import "./print.css";

export const metadata: Metadata = {
  title: { absolute: "李明春｜华为云服务伙伴支持专员定向简历" },
  description: "李明春应聘云服务伙伴支持专员的正式 A4 中文简历。",
};

function Evidence({ text }: { text: string }) {
  return text.split(/(数十场|数百人|(?:约\s*)?\d+\s*(?:万元|小时|天|名|人|场|单|个|元|粉))/g)
    .map((part, index) => index % 2 === 1 ? <strong key={index}>{part}</strong> : part);
}

export default function ResumePrint() {
  return (
    <main className="huawei-resume">
      <nav className="huawei-resume-controls no-print" aria-label="简历操作">
        <Link href="/" className="button secondary">← 返回作品集</Link>
        <a className="button secondary" href={resume.pdf.href} download={resume.pdf.filename}>下载 PDF ↓</a>
        <PrintButton />
      </nav>
      <article className="huawei-resume-sheet" aria-label="华为云服务伙伴支持专员定向简历">
        <header className="huawei-resume-heading">
          <h1>{resume.name}</h1>
          <p className="huawei-resume-target">{resume.target}</p>
          <p className="huawei-resume-positioning">{resume.positioning}</p>
          <p className="huawei-resume-contact">
            <span>{resume.city}</span><span aria-hidden="true">｜</span>
            <a href={`tel:${resume.phone}`}>{resume.phone}</a><span aria-hidden="true">｜</span>
            <a href={`mailto:${resume.email}`}>{resume.email}</a>
          </p>
        </header>
        <section aria-labelledby="huawei-summary">
          <h2 id="huawei-summary">个人概述</h2>
          <p>{resume.summary}</p>
        </section>
        <section aria-labelledby="huawei-experience">
          <h2 id="huawei-experience">工作经历</h2>
          {resume.jobs.map(job => (
            <div className="huawei-resume-job" key={job.id}>
              <div className="huawei-resume-entry">
                <h3>{job.company}<span>｜{job.role}</span></h3>
                <time>{job.period}</time>
              </div>
              <ul>{job.bullets.map(bullet => <li key={bullet}><Evidence text={bullet} /></li>)}</ul>
            </div>
          ))}
        </section>
        <section aria-labelledby="huawei-project">
          <h2 id="huawei-project">自主项目实践</h2>
          <h3>{resume.project.title}</h3>
          <ul>{resume.project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        </section>
        <section aria-labelledby="huawei-capabilities">
          <h2 id="huawei-capabilities">核心能力</h2>
          <p className="huawei-resume-capabilities">{resume.capabilities.join("｜")}</p>
        </section>
        <section aria-labelledby="huawei-education">
          <h2 id="huawei-education">教育经历</h2>
          <p><strong>{resume.education.school}</strong><span className="huawei-resume-qualification">{resume.education.qualification}</span></p>
        </section>
        <section aria-labelledby="huawei-tools">
          <h2 id="huawei-tools">办公与 AI 工具</h2><p>{resume.tools}</p>
        </section>
        <section aria-labelledby="huawei-preparation">
          <h2 id="huawei-preparation">岗位知识准备</h2><p>{resume.preparation}</p>
        </section>
      </article>
    </main>
  );
}

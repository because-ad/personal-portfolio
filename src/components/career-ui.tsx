import Link from "next/link";
import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import { career, careerNavigation, type CaseStudy } from "@/data/career";
import { Header } from "./header";

export function CareerShell({ children }: { children: ReactNode }) {
  return (
    <div className="career-site">
      <a href="#main" className="skip-link">
        跳到主要内容
      </a>
      <Header
        name={portfolio.name}
        items={careerNavigation}
        mobileItems={[
          ...careerNavigation,
          { href: "/#about", label: "关于与教育" },
          { href: "/#contact", label: "联系我" },
        ]}
      />
      {children}
      <footer className="container footer">
        <span>
          © {portfolio.copyrightYear} {portfolio.name} · Career Portfolio
        </span>
        <Link href="/resume">在线简历</Link>
        <Link href="/#home">回到首页 ↑</Link>
      </footer>
    </div>
  );
}

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="career-case-card">
      <p className="eyebrow">
        {study.number} / {study.category}
      </p>
      <p className="case-context">
        {study.organization} · {study.period}
      </p>
      <h3>
        <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
      </h3>
      <p className="case-summary">{study.summary}</p>
      <dl className="case-card-metrics">
        {study.metrics.map((m) => (
          <div key={m.label}>
            <dt>{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>
      <div className="tags">
        {study.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <Link
        className="text-link"
        href={`/case-studies/${study.slug}`}
        aria-label={`查看${study.title}案例`}
      >
        背景、行动与结果 <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

export function AiWorkflow() {
  return (
    <ol className="career-workflow" aria-label="AI 辅助工作流程">
      {career.workflow.map((step, index) => (
        <li key={step.english}>
          <span className="workflow-index">0{index + 1}</span>
          <h3>{step.title}</h3>
          <small lang="en">{step.english}</small>
          <p>{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export function AiApplications() {
  return (
    <div className="ai-application-grid">
      {career.aiApplications.map((application, index) => (
        <article key={application.title}>
          <small>
            0{index + 1} / {application.kind}
          </small>
          <h3>{application.title}</h3>
          <dl className="ai-case-fields">
            <div>
              <dt>Business Problem / 业务问题</dt>
              <dd>{application.problem}</dd>
            </div>
            <div>
              <dt>AI Collaboration / 协作与校验</dt>
              <dd>{application.collaboration}</dd>
            </div>
            <div>
              <dt>Output / 实际输出</dt>
              <dd>{application.output}</dd>
            </div>
          </dl>
          <p className="ai-evidence">{application.evidence}</p>
          {application.href && (
            <Link className="text-link" href={application.href}>
              查看实际交付 ↗
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

export function AiTools() {
  return (
    <div className="career-tool-grid">
      {career.toolGroups.map((group) => (
        <article key={group.label}>
          <p className="eyebrow">{group.label}</p>
          <p className="tool-names">{group.tools.join(" / ")}</p>
          <p>{group.note}</p>
        </article>
      ))}
    </div>
  );
}

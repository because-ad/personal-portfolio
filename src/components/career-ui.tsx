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
          { href: "/#resume", label: "简历下载" },
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
        {study.metrics.slice(0, 2).map((m) => (
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

import Link from "next/link";
import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import { career, careerNavigation } from "@/data/career";
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
          { href: "/#independent", label: "独立项目" },
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

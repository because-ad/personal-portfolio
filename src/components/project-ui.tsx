import Link from "next/link";
import {
  digitalProjects,
  projectStatuses,
  projectTypes,
  type PortfolioProject,
  type ProjectType,
} from "@/data/projects";
import { ResultText } from "./result-text";

export function ProjectBadge({ type }: { type: ProjectType }) {
  const category = projectTypes[type];
  return (
    <span className={`project-type project-type-${type}`}>
      {category.english}
      <span aria-hidden="true"> / </span>
      {category.label}
    </span>
  );
}

export function ProjectCard({
  project,
  number,
}: {
  project: PortfolioProject;
  number?: string;
}) {
  return (
    <article
      className="career-case-card portfolio-project-card"
      data-project={project.id}
      data-project-type={project.type}
    >
      <div className="project-card-heading">
        {number && <span className="work-number">{number}</span>}
        <ProjectBadge type={project.type} />
      </div>
      {project.categoryLabel && (
        <p className="project-category-label">{project.categoryLabel}</p>
      )}
      <p className="case-context">
        {project.organization && `${project.organization} · `}
        {project.year ?? projectStatuses[project.status]}
      </p>
      <h3>
        <Link href={project.route}>{project.title}</Link>
        {project.subtitle && (
          <span className="project-subtitle">{project.subtitle}</span>
        )}
      </h3>
      <p className="case-summary">{project.description}</p>
      {project.type === "simulation" && (
        <p className="project-data-note">
          Demo Data / 模拟数据，不代表真实业绩或从业经历。
        </p>
      )}
      {project.status === "coming-soon" && (
        <p className="project-status">Coming Soon / 详细案例待补充</p>
      )}
      {project.metrics.length > 0 && (
        <dl className="case-card-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="tags">
        {project.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <Link
        className="text-link"
        href={project.route}
        aria-label={`查看${project.title}${project.status === "coming-soon" ? "项目框架" : "项目"}`}
      >
        {project.ctaLabel ??
          (project.status === "coming-soon"
            ? "查看项目框架"
            : project.type === "simulation"
              ? "查看模拟项目"
              : "查看项目与证据")}{" "}
        ↗
      </Link>
    </article>
  );
}

export function DigitalProjectIndex() {
  return (
    <div className="digital-project-index">
      {digitalProjects.map((project, index) => (
        <article key={project.id}>
          <span className="work-number">0{index + 1}</span>
          <div>
            <ProjectBadge type={project.type} />
            <h3>
              <Link href={`/case-studies/ai-productivity#${project.id}`}>
                {project.title}
              </Link>
            </h3>
            <p>{project.practice.output}</p>
          </div>
          <Link
            className="text-link"
            href={`/case-studies/ai-productivity#${project.id}`}
            aria-label={`查看${project.title}的实践过程`}
          >
            过程与输出 ↗
          </Link>
        </article>
      ))}
    </div>
  );
}

export function DigitalProjectDetails() {
  return (
    <div className="digital-project-details">
      {digitalProjects.map((project, index) => (
        <article
          id={project.id}
          key={project.id}
          data-practice-type={project.type}
        >
          <div className="project-card-heading">
            <span className="work-number">0{index + 1}</span>
            <ProjectBadge type={project.type} />
          </div>
          <h3>{project.title}</h3>
          <dl className="digital-practice-fields">
            <div>
              <dt>Problem / 问题</dt>
              <dd>{project.practice.problem}</dd>
            </div>
            <div>
              <dt>Approach / 方法</dt>
              <dd>{project.practice.approach}</dd>
            </div>
            <div>
              <dt>Tools / 辅助工具</dt>
              <dd>{project.practice.tools.join(" / ")}</dd>
            </div>
            <div>
              <dt>Output / 输出</dt>
              <dd>{project.practice.output}</dd>
            </div>
            <div>
              <dt>What I Learned / 复盘</dt>
              <dd>{project.practice.learning}</dd>
            </div>
          </dl>
          <p className="digital-practice-evidence">
            <ResultText text={project.practice.evidence} />
          </p>
          {project.practice.evidenceRoute && (
            <Link className="text-link" href={project.practice.evidenceRoute}>
              {project.type === "simulation"
                ? "体验模拟项目"
                : "查看已有交付与工作证据"}{" "}
              ↗
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

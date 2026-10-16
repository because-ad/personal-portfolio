import type { Metadata } from "next";
import Link from "next/link";
import { CareerShell } from "@/components/career-ui";
import { ProjectBadge } from "@/components/project-ui";
import { projectById } from "@/data/projects";
import "../../career.css";
import "../../portfolio-v3.css";

const project = projectById("starry-cocktail");
export const metadata: Metadata = {
  title: "STARRY COCKTAIL · 星光鸡尾酒",
  description:
    "星光鸡尾酒独立项目入口，品牌、产品、定价、运营与内容材料待补充。",
  alternates: { canonical: project.route },
};

export default function StarryCocktailPage() {
  return (
    <CareerShell>
      <main id="main" className="container independent-project-page">
        <nav className="career-breadcrumb" aria-label="面包屑">
          <Link href="/">首页</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#independent">独立项目</Link>
          <span aria-hidden="true">/</span>
          <span>STARRY COCKTAIL</span>
        </nav>
        <header className="case-page-heading">
          <p className="eyebrow">INDEPENDENT BUSINESS PROJECT</p>
          <ProjectBadge type={project.type} />
          <h1>{project.title}</h1>
          <p className="independent-chinese-title">{project.subtitle}</p>
          <p className="case-lead">{project.description}</p>
          <p className="project-status">Coming Soon / 详细案例待补充</p>
          <div className="tags">
            {project.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </header>
        <section
          className="independent-record"
          aria-labelledby="independent-record-heading"
        >
          <p className="eyebrow">RECORDED PRACTICE</p>
          <h2 id="independent-record-heading">已记录的自主实践</h2>
          <p>{project.recordedPractice}</p>
          <p className="independent-disclosure">
            当前为项目入口和内容框架。这里不展示未经确认的销售额、客户数或收入，也不将规划材料写成已经实现的商业结果。
          </p>
        </section>
        <section
          className="independent-next-content"
          aria-labelledby="independent-next-heading"
        >
          <p className="eyebrow">CONTENT TO FOLLOW</p>
          <h2 id="independent-next-heading">后续补充的案例材料</h2>
          <ol>
            {project.nextContent?.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <small>待补充 / Coming Soon</small>
              </li>
            ))}
          </ol>
        </section>
        <div className="case-next">
          <Link className="button secondary" href="/#independent">
            ← 返回独立项目
          </Link>
          <Link className="text-link" href="/#projects">
            查看已有代表项目 ↗
          </Link>
        </div>
      </main>
    </CareerShell>
  );
}

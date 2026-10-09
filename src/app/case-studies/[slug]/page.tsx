import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/career";
import { CareerShell, AiWorkflow } from "@/components/career-ui";
import { ResultText } from "@/components/result-text";
import "../../career.css";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((s) => s.slug === slug);
  if (!item) notFound();
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: `${item.title} | 李明春`,
      description: item.summary,
      url: `/case-studies/${slug}`,
      images: [
        {
          url: "/resume-li-mingchun-photo.png",
          width: 1086,
          height: 1448,
          alt: "李明春",
        },
      ],
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];
  return (
    <CareerShell>
      <main id="main" className="container career-case-page">
        <nav className="career-breadcrumb" aria-label="面包屑">
          <Link href="/">首页</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#projects">项目案例</Link>
          <span aria-hidden="true">/</span>
          <span>{study.title}</span>
        </nav>
        <header className="case-page-heading">
          <p className="eyebrow">
            CASE STUDY {study.number} / {study.category}
          </p>
          <h1>{study.title}</h1>
          <p className="case-lead">{study.summary}</p>
          <p className="case-context">
            {study.organization} · {study.period}
          </p>
          <div className="tags">
            {study.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>
        <dl className="career-metrics case-page-metrics">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <p className="case-scope">
          <strong>职责范围：</strong>
          {study.scope}
        </p>
        <div className="case-reading-grid">
          <nav className="case-toc" aria-label="案例目录">
            <p className="eyebrow">READING GUIDE</p>
            {study.sections.map((section, i) => (
              <a href={`#part-${i + 1}`} key={section.title}>
                <span>0{i + 1}</span>
                {section.title}
              </a>
            ))}
          </nav>
          <div className="case-reading-body">
            {study.sections.map((section, i) => (
              <section id={`part-${i + 1}`} key={section.title}>
                <p className="eyebrow">
                  0{i + 1} / {section.english}
                </p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((text) => (
                  <p key={text}>
                    <ResultText text={text} />
                  </p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((text) => (
                      <li key={text}>
                        <ResultText text={text} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
        {slug === "ai-productivity" && (
          <section className="case-ai-workflow">
            <h2>从问题到交付的工作流</h2>
            <AiWorkflow />
            <div className="actions">
              <Link className="button secondary" href="/resume-print">
                查看求职材料 ↗
              </Link>
              <Link className="button secondary" href="/demo/sales-pipeline">
                查看业务 Demo ↗
              </Link>
            </div>
            <p className="case-footnote">
              工具层级与应用方向见 <Link href="/#ai">首页 AI 能力</Link>；本
              Demo 的建议使用本地规则，不连接 AI API。
            </p>
          </section>
        )}
        <footer className="case-next">
          <Link className="button secondary" href="/#projects">
            ← 返回案例列表
          </Link>
          <Link className="text-link" href={`/case-studies/${next.slug}`}>
            下一个案例：{next.title} ↗
          </Link>
          <Link className="text-link" href="/#contact">
            联系我 ↗
          </Link>
        </footer>
      </main>
    </CareerShell>
  );
}

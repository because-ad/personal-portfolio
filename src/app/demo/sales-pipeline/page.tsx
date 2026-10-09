import type { Metadata } from "next";
import Link from "next/link";
import { CareerShell } from "@/components/career-ui";
import { SalesPipeline } from "@/components/sales-pipeline";
import "../../career.css";
import "./pipeline.css";

export const metadata: Metadata = {
  title: "Sales Pipeline Demo · 模拟销售流程",
  description:
    "使用明确标注的模拟客户，展示线索、需求判断、商机、提案、成交及跟进管理。",
  alternates: { canonical: "/demo/sales-pipeline" },
  openGraph: {
    title: "Sales Pipeline Demo | 李明春",
    description: "模拟数据业务流程演示，非真实客户或业绩。",
    url: "/demo/sales-pipeline",
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

export default function SalesPipelinePage() {
  return (
    <CareerShell>
      <main id="main" className="container pipeline-page">
        <nav className="career-breadcrumb" aria-label="面包屑">
          <Link href="/">首页</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#lab">Business Demo Lab</Link>
          <span aria-hidden="true">/</span>
          <span>Sales Pipeline</span>
        </nav>
        <header className="case-page-heading">
          <p className="eyebrow">BUSINESS DEMO LAB / 01</p>
          <h1>Sales Pipeline Demo</h1>
          <p className="case-lead">
            理解从线索到成交的过程，让每个阶段都有明确的下一步。
          </p>
        </header>
        <SalesPipeline />
        <div className="case-next">
          <Link className="button secondary" href="/#lab">
            ← 返回 Business Demo Lab
          </Link>
          <Link className="text-link" href="/case-studies/sales-team">
            查看真实销售实践 ↗
          </Link>
        </div>
      </main>
    </CareerShell>
  );
}

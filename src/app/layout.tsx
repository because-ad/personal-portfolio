import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "个人作品集 | 运营 · 商务 · 项目执行", template: "%s | 个人作品集" },
  description: "个人求职作品集：工作与项目经历、核心能力、代表作品、教育经历与联系方式。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

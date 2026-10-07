import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: { default: `${portfolio.name} | 业务运营 · 项目执行 · 商务协作`, template: `%s | ${portfolio.name}的作品集` },
  description: portfolio.intro[0],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

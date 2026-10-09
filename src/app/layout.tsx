import type { Metadata } from "next";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import { career } from "@/data/career";

export const metadata: Metadata = {
  metadataBase: new URL(career.siteUrl),
  title: {
    default: career.title,
    template: `%s | ${portfolio.name}的职业作品集`,
  },
  description: career.description,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Career Portfolio V2 — 李明春",
    title: career.title,
    description: career.description,
    url: "/",
    images: [
      {
        url: "/resume-li-mingchun-photo.png",
        width: 1086,
        height: 1448,
        alt: "李明春正式证件照",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: career.title,
    description: career.description,
    images: ["/resume-li-mingchun-photo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

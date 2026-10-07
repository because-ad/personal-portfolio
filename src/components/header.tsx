"use client";
import { useState } from "react";
import { navigation, portfolio } from "@/data/portfolio";
export function Header() {
    const [open, setOpen] = useState(false);
    return <header className="site-header"><div className="container header-inner"><a href="#home" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">m<span>↗</span></span><span>{portfolio.name}<small>PERSONAL PORTFOLIO</small></span></a><nav aria-label="主导航" className="desktop-nav">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><a className="header-contact" href="#contact">聊聊机会 <span>↗</span></a><button className="menu-button" aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? "关闭 ×" : "菜单 ☰"}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="移动端导航">{[...navigation, { href: "#education", label: "教育经历" }, { href: "#contact", label: "联系我" }].map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}</header>;
}

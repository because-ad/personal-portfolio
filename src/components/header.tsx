"use client";

import { useState } from "react";
import { mobileNavigation, navigation } from "@/data/portfolio";

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">m<span>↗</span></span>
          <span>{name}<small>PERSONAL PORTFOLIO</small></span>
        </a>
        <nav aria-label="主导航" className="desktop-nav">
          {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-contact" href="#contact">联系我 <span>↗</span></a>
        <button className="menu-button" aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(value => !value)}>
          {open ? "关闭 ×" : "菜单 ☰"}
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="移动端导航" hidden={!open}>
        {mobileNavigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
    </header>
  );
}

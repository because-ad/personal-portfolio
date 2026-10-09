"use client";

import { useState } from "react";
import Link from "next/link";
import { mobileNavigation, navigation } from "@/data/portfolio";

type NavItem = { href: string; label: string };

export function Header({
  name,
  items,
  mobileItems,
}: {
  name: string;
  items?: readonly NavItem[];
  mobileItems?: readonly NavItem[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="container header-inner">
        <Link href="/#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            m<span>↗</span>
          </span>
          <span>
            {name}
            <small>PERSONAL PORTFOLIO</small>
          </span>
        </Link>
        <nav aria-label="主导航" className="desktop-nav">
          {(items ?? navigation).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/#contact">
          联系我 <span>↗</span>
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "关闭 ×" : "菜单 ☰"}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="移动端导航"
        hidden={!open}
      >
        {(mobileItems ?? mobileNavigation).map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

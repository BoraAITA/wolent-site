"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DOCS_NAV } from "@/lib/constants";

export function DocsSidebar() {
  const [activeId, setActiveId] = useState<string>(DOCS_NAV[0].id);

  useEffect(() => {
    const sections = DOCS_NAV.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
          On this page
        </p>
        <ul className="space-y-1 border-l border-border">
          {DOCS_NAV.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                  activeId === item.id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:border-zinc-600 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {DOCS_NAV.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted hover:border-accent/40 hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

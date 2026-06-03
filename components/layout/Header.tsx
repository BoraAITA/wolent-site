"use client";

import Link from "next/link";
import { useState } from "react";
import { GITHUB_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LogoIcon } from "@/components/icons/FeatureIcons";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon />
          <span className="text-lg font-semibold tracking-tight">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href={GITHUB_URL} variant="ghost" external>
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </Button>
          <Button href="/docs#getting-started" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-muted hover:bg-card md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <Button href={GITHUB_URL} variant="secondary" external>
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Button>
              <Button href="/docs#getting-started" variant="primary">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

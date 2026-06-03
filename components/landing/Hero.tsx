import { GITHUB_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/icons/FeatureIcons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="gradient-hero animate-gradient absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,#09090b_80%)]" />

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open Source · MIT License
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">
            The Headless CMS That Actually Makes Sense
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Open-source, developer-friendly, and beautiful. Build content-driven
          websites without the complexity.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/docs#getting-started" variant="primary" className="px-8 py-3 text-base">
            Get Started
          </Button>
          <Button href={GITHUB_URL} variant="secondary" external className="px-8 py-3 text-base">
            <GitHubIcon />
            View on GitHub
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
          <span className="flex items-center gap-2">
            <CheckIcon />
            Self-hosted
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            REST API
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            Visual builder
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon />
            i18n ready
          </span>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

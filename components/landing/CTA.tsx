import { GITHUB_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/icons/FeatureIcons";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-card px-8 py-16 text-center sm:px-16">
          <div className="gradient-hero absolute inset-0 opacity-50" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to simplify your content?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Join developers who chose a CMS that respects their time. Star us
              on GitHub and get started in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/docs#getting-started" variant="primary" className="px-8 py-3">
                Get Started
              </Button>
              <Button href={GITHUB_URL} variant="secondary" external className="px-8 py-3">
                <GitHubIcon />
                Star on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

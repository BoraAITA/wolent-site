import { FEATURES } from "@/lib/constants";
import { FeatureIcon } from "@/components/icons/FeatureIcons";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Wolent strips away the bloat of traditional CMS platforms while
            keeping the power developers expect.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card-hover"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 ring-1 ring-accent/20 transition-transform group-hover:scale-105">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

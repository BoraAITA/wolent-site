import { HOW_IT_WORKS } from "@/lib/constants";

const stepIllustrations = [
  {
    gradient: "from-emerald-500/20 to-teal-500/10",
    icon: (
      <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
  },
  {
    gradient: "from-green-500/20 to-emerald-500/10",
    icon: (
      <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    gradient: "from-teal-500/20 to-cyan-500/10",
    icon: (
      <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From zero to production-ready API in three simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < HOW_IT_WORKS.length - 1 && (
                <div
                  className="absolute top-16 left-[calc(50%+4rem)] hidden h-0.5 w-[calc(100%-8rem)] bg-gradient-to-r from-accent/50 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div
                className={`mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br ${stepIllustrations[index].gradient} ring-1 ring-border`}
              >
                {stepIllustrations[index].icon}
              </div>
              <div className="mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-zinc-950">
                {item.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

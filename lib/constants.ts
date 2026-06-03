export const SITE_NAME = "Wolent CMS";
export const SITE_URL = "https://wolent.com";
export const SITE_DESCRIPTION =
  "Open-source headless CMS that actually makes sense. Developer-friendly, beautiful, and simple.";
export const GITHUB_URL = "https://github.com/boracomet/wolent-cms";

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Documentation", href: "/docs" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Documentation", href: "/docs" },
  ],
  resources: [
    { label: "GitHub", href: GITHUB_URL, external: true },
    { label: "Getting Started", href: "/docs#getting-started" },
    { label: "API Reference", href: "/docs#api-reference" },
  ],
  company: [
    { label: "wolent.com", href: SITE_URL },
    { label: "Open Source", href: GITHUB_URL, external: true },
  ],
} as const;

export const FEATURES = [
  {
    title: "Visual Content Builder",
    description:
      "Drag & drop fields, no coding required. Design your content structure visually.",
    icon: "layout",
  },
  {
    title: "Smart Relations",
    description:
      "Link content types with simple dropdowns. Build complex data models effortlessly.",
    icon: "link",
  },
  {
    title: "Ready-Made Templates",
    description:
      "Blog, Product, Portfolio presets to get started in minutes, not hours.",
    icon: "template",
  },
  {
    title: "Multi-Language",
    description:
      "Full i18n support with Turkish and English built-in. Add more languages easily.",
    icon: "globe",
  },
  {
    title: "REST API",
    description:
      "Auto-generated API with authentication. Connect any frontend or app.",
    icon: "api",
  },
  {
    title: "Plugin System",
    description:
      "Extend with custom functionality. Build exactly what your project needs.",
    icon: "plugin",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Define Content Types",
    description:
      "Use the visual builder or templates to create your content structure in minutes.",
  },
  {
    step: 2,
    title: "Add Your Content",
    description:
      "Fill in entries through the intuitive admin panel. Relations and media just work.",
  },
  {
    step: 3,
    title: "Fetch via API",
    description:
      "Consume your content from any frontend using the auto-generated REST API.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Open Source",
    price: "Free",
    description: "Self-host on your own infrastructure",
    features: [
      "Full source code access",
      "Unlimited content types",
      "REST API included",
      "Community support",
    ],
    cta: "View on GitHub",
    ctaHref: GITHUB_URL,
    highlighted: false,
  },
  {
    name: "Self-Hosted",
    price: "Free",
    description: "Deploy anywhere you want",
    features: [
      "Docker deployment",
      "Full data ownership",
      "Custom plugins",
      "No vendor lock-in",
    ],
    cta: "Get Started",
    ctaHref: "/docs#getting-started",
    highlighted: true,
  },
  {
    name: "Cloud",
    price: "Soon",
    description: "Managed hosting by the Wolent team",
    features: [
      "Zero DevOps setup",
      "Automatic backups",
      "CDN & SSL included",
      "Priority support",
    ],
    cta: "Join Waitlist",
    ctaHref: GITHUB_URL,
    highlighted: false,
    disabled: true,
  },
] as const;

export const DOCS_NAV = [
  { id: "getting-started", label: "Getting Started" },
  { id: "installation", label: "Installation" },
  { id: "content-types", label: "Content Types" },
  { id: "api-reference", label: "API Reference" },
] as const;

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-zinc-950 hover:bg-accent-hover shadow-lg shadow-accent/20",
  secondary:
    "border border-border bg-card text-foreground hover:bg-card-hover hover:border-zinc-600",
  ghost: "text-muted hover:text-foreground hover:bg-card",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const styles = `${base} ${variantStyles[variant]} ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} aria-disabled={disabled}>
      {children}
    </Link>
  );
}

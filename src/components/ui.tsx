import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  id,
  title,
  sub,
  className = "",
}: {
  id: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 id={id} className="font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-lg text-muted">{sub}</p> : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200";
const variants = {
  primary: "bg-ink text-paper hover:bg-accent-ink",
  secondary: "border border-ink/20 bg-white text-ink hover:border-ink/50",
  light: "bg-paper text-ink hover:bg-white",
};

export function ButtonLink({ href, children, variant = "primary", external, download, className = "" }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Tag({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <li
      className={`rounded-full border px-3 py-1 text-xs font-medium ${
        tone === "dark" ? "border-paper/25 text-paper/85" : "border-ink/15 text-ink/75"
      }`}
    >
      {children}
    </li>
  );
}

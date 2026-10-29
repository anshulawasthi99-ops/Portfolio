"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

export function Header({ resumeAvailable }: { resumeAvailable: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const linkCls = "rounded-md px-1 py-1 text-[15px] text-ink/80 transition-colors hover:text-accent-ink";

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-serif text-2xl tracking-tight" onClick={close} aria-label="Anshul, home">
          {site.wordmark}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className={linkCls}>
              {n.label}
            </Link>
          ))}
          {resumeAvailable && (
            <a href={site.resume.path} target="_blank" rel="noopener noreferrer" className={linkCls}>
              Resume
            </a>
          )}
          <Link
            href="/#contact"
            className="rounded-full bg-ink px-5 py-2 text-[15px] font-medium text-paper transition-colors hover:bg-accent-ink"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={close} className="block border-b border-line/70 py-4 text-lg">
                  {n.label}
                </Link>
              </li>
            ))}
            {resumeAvailable && (
              <li>
                <a
                  href={site.resume.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="block border-b border-line/70 py-4 text-lg"
                >
                  Resume
                </a>
              </li>
            )}
            <li className="py-4">
              <Link
                href="/#contact"
                onClick={close}
                className="inline-flex rounded-full bg-ink px-6 py-3 font-medium text-paper"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

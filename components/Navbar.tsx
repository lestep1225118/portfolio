"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6 pb-0">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm shadow-lg shadow-black/20 px-4 py-2.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-0 hover:opacity-90 transition-opacity shrink-0 min-w-[2rem] min-h-[2rem] items-center justify-center"
          aria-label="Home"
        >
          {logoError ? (
            <span className="text-slate-100 font-semibold text-lg tracking-tight">LS</span>
          ) : (
            <img
              src="/logo.png"
              alt="LS"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-200 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`absolute top-full left-4 right-4 mt-2 md:static md:mt-0 rounded-2xl border border-slate-700/60 bg-slate-900/95 backdrop-blur-sm md:border-0 md:bg-transparent md:rounded-none ${
            mobileOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-1 py-3 md:py-0 px-3 md:px-0 md:gap-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 px-4 md:py-2 md:px-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-slate-100 bg-slate-800/80 md:bg-slate-800/60"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    {
      href: "/about",
      label: "About",
      desc: "Who we are",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      href: "/services",
      label: "Services",
      desc: "What we do",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      href: "/projects",
      label: "Projects",
      desc: "Our work",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
      ),
    },
    {
      href: "/contact",
      label: "Contact Us",
      desc: "Get in touch",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#0a0a14]/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-white/[0.03] backdrop-blur-md border-b border-white/[0.06]"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src="/branding/colored-logo.png"
              alt="VELIQ"
              width={921}
              height={263}
              className="h-7 w-auto brightness-150"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname.startsWith(link.href)
                    ? "text-white font-semibold"
                    : "hover:text-white transition"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/30"
          >
            Get in Touch
          </Link>

          {/* Mobile burger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-all duration-300 hover:bg-white/10"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-visibility ${
          menuOpen ? "visible" : "invisible delay-300"
        }`}
      >
        {/* Backdrop — solid color, no blur for performance */}
        <div
          className={`absolute inset-0 bg-[#0a0a14] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Subtle gradient accent — GPU-accelerated, no blur */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-1/2 top-1/3 -translate-x-1/2 h-[300px] w-[300px] rounded-full transition-opacity duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
          />
          <div
            className={`absolute right-0 bottom-1/4 h-[200px] w-[200px] rounded-full transition-opacity duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }}
          />
        </div>

        {/* Menu content */}
        <div className="relative z-10 flex flex-col h-full pt-24 px-8 pb-10">
          {/* Navigation links */}
          <div className="flex-1 flex flex-col justify-center -mt-10">
            <div className="space-y-2">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ease-out ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  } ${
                    pathname.startsWith(link.href)
                      ? "bg-white/[0.08] border border-purple-500/20"
                      : "hover:bg-white/[0.05]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${50 + i * 40}ms` : "0ms",
                  }}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200 ${
                      pathname.startsWith(link.href)
                        ? "border-purple-500/30 bg-purple-500/10 text-cyan-400"
                        : "border-white/10 bg-white/[0.04] text-slate-500 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/[0.08]"
                    }`}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p
                      className={`text-lg font-semibold transition-colors duration-200 ${
                        pathname.startsWith(link.href)
                          ? "text-white"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </p>
                    <p className="text-xs text-slate-600">{link.desc}</p>
                  </div>
                  {pathname.startsWith(link.href) && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom section: CTA */}
          <div
            className={`space-y-6 transition-all duration-300 ease-out ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "250ms" : "0ms" }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-200 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Social links */}
            <div className="flex items-center justify-center gap-3">
              <a href="https://www.instagram.com/veliq.co" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-500 transition-all duration-200 hover:bg-purple-500/10 hover:text-cyan-400 hover:border-purple-500/30">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.facebook.com/veliq.co/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-500 transition-all duration-200 hover:bg-purple-500/10 hover:text-cyan-400 hover:border-purple-500/30">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/veliq-co" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-500 transition-all duration-200 hover:bg-purple-500/10 hover:text-cyan-400 hover:border-purple-500/30">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>

            <p className="text-center text-xs text-slate-600">
              Your Dedicated Backbone Team
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

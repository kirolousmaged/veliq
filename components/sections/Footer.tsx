"use client";

import Link from "next/link";

const MENU_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Studio",  href: "/studio" },
  { label: "projects",href: "/projects" },
  { label: "Blog",    href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Twitter / X",  href: "https://twitter.com" },
  { label: "Instagram",    href: "https://instagram.com" },
  { label: "Dribbble",     href: "https://dribbble.com" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      className="w-full overflow-hidden flex flex-col justify-between"
      style={{ backgroundColor: "rgb(15,128,84)", minHeight: "100vh" }}
    >
      {/* Top content area */}
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-28 pb-0 flex flex-col md:flex-row gap-12 items-start">

        {/* Left: back to top */}
        <div className="flex flex-col gap-4 shrink-0">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 cursor-pointer transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              fontSize: "13px",
              fontWeight: 600,
              width: "200px",
            }}
          >
            Back to top
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Menu column */}
        <div className="flex flex-col gap-5">
          <span
            className="text-white"
            style={{ fontSize: "13px", fontWeight: 600, opacity: 0.6 }}
          >
            Menu
          </span>
          <ul className="flex flex-col gap-3">
            {MENU_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white hover:opacity-70 transition-opacity"
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media column */}
        <div className="flex flex-col gap-5">
          <span
            className="text-white"
            style={{ fontSize: "13px", fontWeight: 600, opacity: 0.6 }}
          >
            Social Media
          </span>
          <ul className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-70 transition-opacity"
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: huge MATTTER® */}
      <div
        className="w-full px-3 pt-12"
        style={{ lineHeight: 0.82 }}
      >
        <h2
          className="text-white select-none"
          style={{
            fontSize: "17vw",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.82,
          }}
        >
          MATTTER®
        </h2>
      </div>
    </footer>
  );
}

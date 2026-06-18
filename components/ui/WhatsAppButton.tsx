"use client";

const PHONE = "201551164671"; // +20 155 116 4671
const MESSAGE = "Hi VELIQ! I'd like to know more about your services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed z-[60] flex items-center gap-3"
      style={{ bottom: 24, right: 24 }}
    >
      {/* Number label — slides in on hover (desktop) */}
      <span
        className="hidden md:flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ background: "rgba(20,20,20,0.92)", border: "1px solid rgba(255,255,255,0.1)", whiteSpace: "nowrap" }}
      >
        +20 155 116 4671
      </span>

      {/* Icon button */}
      <span
        className="relative flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
        style={{
          width: 58,
          height: 58,
          background: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
          boxShadow: "0 8px 28px rgba(99,102,241,0.5)",
        }}
      >
        {/* Pulsing ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(99,102,241,0.35)", animationDuration: "2.4s" }}
        />
        {/* WhatsApp glyph */}
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" style={{ position: "relative" }} aria-hidden>
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.05 31.32l6.15-1.966A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0z" opacity="0" />
          <path d="M16.004 2.667C8.652 2.667 2.67 8.648 2.67 16c0 2.92.95 5.62 2.56 7.81l-1.677 4.997 5.17-1.653A13.27 13.27 0 0 0 16.004 29.33C23.356 29.33 29.337 23.35 29.337 16S23.356 2.667 16.004 2.667zm7.77 18.84c-.323.91-1.6 1.665-2.62 1.885-.697.148-1.608.267-4.673-1.003-3.92-1.624-6.444-5.607-6.64-5.866-.19-.26-1.586-2.11-1.586-4.025 0-1.915 1.005-2.857 1.36-3.247.293-.323.776-.47 1.24-.47.15 0 .285.008.407.014.357.015.536.036.77.597.293.703 1.003 2.418 1.088 2.594.086.176.143.382.024.617-.11.235-.207.345-.382.53-.176.184-.343.326-.518.524-.16.176-.34.366-.146.7.193.327.86 1.418 1.847 2.297 1.27 1.13 2.34 1.48 2.71 1.636.27.114.59.087.79-.103.252-.243.56-.645.873-1.04.222-.282.503-.317.79-.21.293.103 1.85.873 2.168 1.032.317.16.527.235.604.367.077.132.077.762-.246 1.673z" />
        </svg>
      </span>
    </a>
  );
}

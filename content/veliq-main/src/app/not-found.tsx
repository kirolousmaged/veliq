import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#0a0a14] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[140px] animate-pulse-glow" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[100px] animate-float-slow" />
        <div className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/8 blur-[100px] animate-float" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* 404 number */}
        <div className="animate-fade-in-up">
          <p className="text-[8rem] md:text-[12rem] font-extrabold leading-none bg-gradient-to-b from-white/20 to-white/[0.03] bg-clip-text text-transparent select-none">
            404
          </p>
        </div>

        {/* Message */}
        <div className="animate-fade-in-up delay-200 -mt-6 md:-mt-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0a0a14] shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="animate-fade-in-up delay-600 mt-14 flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/services" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            Services
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/projects" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            Projects
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/blog" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            Blog
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/about" className="text-slate-500 hover:text-indigo-400 transition-colors duration-300">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import AnimatedCounter from "../components/animated-counter";
import AboutAnimations from "../components/about-animations";

export const metadata = {
  title: "About Us",
  description:
    "VELIQ is a global boutique agency specializing in web development, app development, branding, UX, and full-stack digital marketing across Egypt, Saudi Arabia, UAE, and the United States.",
  openGraph: {
    title: "About Us — VELIQ",
    description:
      "VELIQ is a global boutique agency specializing in web development, app development, branding, UX, and full-stack digital marketing.",
    url: "https://veliq.com/about",
  },
  twitter: {
    title: "About Us — VELIQ",
    description:
      "VELIQ is a global boutique agency specializing in web development, app development, branding, UX, and full-stack digital marketing.",
  },
};

const stats = [
  { end: 4, suffix: "", label: "Countries" },
  { end: 30, suffix: "+", label: "Happy Clients" },
  { end: 100, suffix: "%", label: "Satisfaction" },
  { end: 10, suffix: "+", label: "Team Members" },
];

const values = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Speed",
    desc: "We move fast without cutting corners. Every deadline is a promise, not a suggestion.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Accuracy",
    desc: "Every deliverable, every decision, every client interaction is measured against real outcomes.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Transparency",
    desc: "No black boxes. Weekly pulse, monthly strategy, quarterly review. You always know where you stand.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Dedication",
    desc: "Every client gets a dedicated team. Not tasks. Not packages. A team that owns your digital presence.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Intelligence",
    desc: "We educate first, sell second. Every claim connects to a result or a client benefit.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a14.926 14.926 0 01-5.96-5.96M9.63 8.41A6 6 0 012.25 14.2" />
      </svg>
    ),
    title: "Professionalism",
    desc: "Confident, direct, warm. Never arrogant. Never vague. We speak with precision and care.",
  },
];

const problems = [
  {
    problem: "Nothing is connected",
    solution: "Full-channel alignment under one dedicated team: web, social, ads, brand, all moving together.",
  },
  {
    problem: "I don't know what they're doing",
    solution: "Radical transparency through educated reporting. Weekly pulse + monthly strategy + quarterly review.",
  },
  {
    problem: "I can't measure the growth",
    solution: "Outcome-based KPIs tied to real business metrics: bookings, qualified leads, revenue, not vanity numbers.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a14]">
      <AboutAnimations />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px] animate-float-slow" />
          <div className="absolute left-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-cyan-600/8 blur-[80px] animate-float" />
        </div>

        {/* Animated particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="about-particle about-particle-1" />
          <div className="about-particle about-particle-2" />
          <div className="about-particle about-particle-3" />
          <div className="about-particle about-particle-4" />
          <div className="about-particle about-particle-5" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent about-line-glow" />
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              About VELIQ
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Your Dedicated{" "}
              <span className="about-gradient-text">
                Backbone Team
              </span>
            </h1>
          </div>
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Every Channel. One Direction.
            We don&apos;t manage your marketing. We own it with you.
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 animate-fade-in delay-600">
            <div className="about-scroll-indicator mx-auto flex flex-col items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-slate-600">Scroll</span>
              <div className="h-12 w-px bg-gradient-to-b from-purple-500/50 to-transparent about-scroll-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are + Stats ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16">
          <ScrollReveal animation="slide-left" className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              A Global Boutique Agency
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              VELIQ is a global boutique agency operating across Egypt, Saudi Arabia,
              UAE, and the United States, specializing in web development, app
              development, branding, UX, and full-stack digital marketing.
            </p>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              At VELIQ, every client gets a dedicated team. Not tasks. Not packages.
              A team that owns your digital presence, thinks with you, and moves
              with the speed and precision your business deserves.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:mt-0 lg:w-1/2">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} animation="scale" delay={i * 150}>
                <div className="about-stat-card rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30">
                  <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Brand Equation ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[120px] animate-pulse-glow" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal animation="scale">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Equation
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <span className="about-equation-word text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Speed</span>
              <span className="text-2xl md:text-4xl text-white/30 font-light">&times;</span>
              <span className="about-equation-word text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent" style={{ animationDelay: "0.2s" }}>Accuracy</span>
              <span className="text-2xl md:text-4xl text-white/30 font-light">&times;</span>
              <span className="about-equation-word text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent" style={{ animationDelay: "0.4s" }}>Professionalism</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <p className="text-xl font-semibold text-white md:text-2xl about-result-text">= Aligned Growth</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 leading-relaxed">
              This is not a tagline. It is the law VELIQ operates by. Every deliverable, every decision,
              every client interaction is measured against this equation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Why the Name ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/3 top-0 h-[300px] w-[300px] rounded-full bg-cyan-600/6 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Why the Name
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              VELIQ = <span className="text-purple-400">Vel</span>ocity + <span className="text-blue-400">El</span>ite + <span className="text-cyan-400">IQ</span>
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-3">
            <ScrollReveal animation="slide-left">
              <div className="about-name-card group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="about-name-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                  <p className="text-3xl font-extrabold text-purple-400">V</p>
                </div>
                <p className="text-xl font-bold text-white">Velocity</p>
                <p className="mt-2 text-sm text-slate-500">We move with urgency and intent</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="about-name-card group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-blue-500/30 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="about-name-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <p className="text-3xl font-extrabold text-blue-400">E</p>
                </div>
                <p className="text-xl font-bold text-white">Elite</p>
                <p className="mt-2 text-sm text-slate-500">Premium standards, not premium ego</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-right" delay={300}>
              <div className="about-name-card group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-cyan-500/30 hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="about-name-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                  <p className="text-3xl font-extrabold text-cyan-400">IQ</p>
                </div>
                <p className="text-xl font-bold text-white">Intelligence & Precision</p>
                <p className="mt-2 text-sm text-slate-500">Data-driven, measured, deliberate</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Mission & Vision ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[100px] animate-float" />
          <div className="absolute left-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-purple-600/6 blur-[80px] animate-float-slow" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <ScrollReveal animation="slide-left">
              <div className="about-mission-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 md:p-14 h-full transition-all duration-700 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="about-card-shimmer" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 mb-6 transition-all duration-500 hover:scale-110 hover:rotate-6">
                    <svg className="h-7 w-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a14.926 14.926 0 01-5.96-5.96M9.63 8.41A6 6 0 012.25 14.2" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
                    Our Mission
                  </p>
                  <h3 className="mt-3 text-2xl font-bold md:text-3xl leading-tight text-white">
                    Engineering Seamless Brand Experiences
                  </h3>
                  <p className="mt-5 text-base text-slate-400 leading-relaxed">
                    VELIQ exists to engineer seamless brand experiences, combining
                    velocity, intelligence, and creative precision, so that every
                    web, app, design, and marketing channel our clients own moves
                    in one unified direction: forward.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="about-mission-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 md:p-14 h-full transition-all duration-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="about-card-shimmer" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 mb-6 transition-all duration-500 hover:scale-110 hover:-rotate-6">
                    <svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                    Our Vision
                  </p>
                  <h3 className="mt-3 text-2xl font-bold md:text-3xl leading-tight text-white">
                    The Most Trusted Growth Architecture Firm
                  </h3>
                  <p className="mt-5 text-base text-slate-400 leading-relaxed">
                    To become the most trusted growth architecture firm for elite
                    brands across four continents, where every digital touchpoint
                    is a deliberate act of precision.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── The Problem We Solve ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Why We Exist
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              The Problem We Solve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Most growing businesses are stuck between large agencies that treat them
              like a number on a spreadsheet, and freelancers who can&apos;t cover all
              needs under one roof.
            </p>
          </ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-3">
            {problems.map((item, i) => (
              <ScrollReveal key={i} animation={i === 0 ? "slide-left" : i === 2 ? "slide-right" : "fade-up"} delay={i * 150}>
                <div className="about-problem-card group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-bold mb-5 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-red-300/80 italic mb-3">
                    &ldquo;{item.problem}&rdquo;
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 transition-all duration-500 group-hover:via-purple-500/30" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-bold mb-4 transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {item.solution}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Core Values ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-600/6 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What Drives Us
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              The principles behind every decision, every project, and every
              relationship we build.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} animation="fade-up" delay={i * 100} className="h-full">
                <div className="about-value-card group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Promise + CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/12 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-600/8 blur-[100px] animate-float" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="scale">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-6">
              Our Promise
            </p>
            <h2 className="text-4xl font-bold md:text-6xl text-white leading-tight">
              Great businesses{" "}
              <span className="about-gradient-text">
                deserve
              </span>{" "}
              more than average agencies.
            </h2>
            <p className="mt-8 text-2xl font-bold about-gradient-text">
              You deserve more.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <Link
              href="/contact"
              className="about-cta-button group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.05] active:scale-[0.98]"
            >
              Get in Touch
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

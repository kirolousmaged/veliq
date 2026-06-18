import ContactForm from "../contact-form";
import ScrollReveal from "../components/scroll-reveal";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with VELIQ. Let's discuss your next project. Based in Cairo, Egypt.",
  openGraph: {
    title: "Contact Us — VELIQ",
    description:
      "Get in touch with VELIQ. Let's discuss your next project.",
    url: "https://veliq.com/contact",
  },
  twitter: {
    title: "Contact Us — VELIQ",
    description:
      "Get in touch with VELIQ. Let's discuss your next project.",
  },
};

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "admin@veliq.co",
    href: "mailto:admin@veliq.co",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+20 155 116 4671",
    href: "tel:+201551164671",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "Cairo, Egypt",
    href: null,
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/veliq.co",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/veliq.co/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/veliq-co",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px] animate-float-slow" />
          <div className="absolute left-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-cyan-600/8 blur-[80px] animate-float" />
        </div>

        {/* Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="about-particle about-particle-1" />
          <div className="about-particle about-particle-2" />
          <div className="about-particle about-particle-3" />
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
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Let&apos;s Build Something{" "}
              <span className="about-gradient-text">
                Great
              </span>
            </h1>
          </div>
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Info Cards + Form ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-[350px] w-[350px] rounded-full bg-purple-600/6 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal animation="slide-left">
                <h2 className="text-2xl font-bold md:text-3xl text-white">
                  Get in Touch
                </h2>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  Whether you have a question, a project idea, or just want to
                  say hello, we&apos;re here for you.
                </p>
              </ScrollReveal>

              {/* Info cards */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const content = (
                    <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <ScrollReveal key={item.label} animation="slide-left" delay={i * 100}>
                      {item.href ? (
                        <a href={item.href} className="block">
                          {content}
                        </a>
                      ) : (
                        <div>{content}</div>
                      )}
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Social Media */}
              <ScrollReveal animation="fade-up" delay={400}>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={s.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-500 transition-all duration-300 hover:bg-purple-500/10 hover:text-cyan-400 hover:border-purple-500/30 hover:scale-110"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <ScrollReveal animation="slide-right" delay={200}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:border-purple-500/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Fill out the form below and we&apos;ll respond as soon as possible.
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── FAQ ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 100}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-purple-500/20 hover:-translate-y-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    q: "How quickly can you start on my project?",
    a: "Most projects kick off within 1-2 weeks of signing. We'll schedule a discovery call to understand your needs and align on timelines before we begin.",
  },
  {
    q: "What's your typical project timeline?",
    a: "It depends on scope. A marketing campaign might take 2-4 weeks, while a full web application could take 2-4 months. We'll give you a clear timeline during our proposal phase.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "We work with both. Whether you're a startup looking for an MVP or an enterprise needing a complex platform, we tailor our approach to fit your stage and budget.",
  },
  {
    q: "What if I need ongoing support after launch?",
    a: "We offer flexible maintenance and support plans. Many of our clients continue working with us long after launch for updates, optimization, and new features.",
  },
];

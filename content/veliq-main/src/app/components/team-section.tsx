import Link from "next/link";
import ScrollReveal from "./scroll-reveal";
import { teamMembers, type TeamMember } from "./team-data";

function MemberCard({ member, index, showBio }: { member: TeamMember; index: number; showBio: boolean }) {
  return (
    <ScrollReveal animation="fade-up" delay={index * 100}>
      <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-3 sm:p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-indigo-500/30 hover:-translate-y-2">
        {/* Mobile: horizontal row / Desktop: vertical centered */}
        <div className="flex items-center gap-3 sm:flex-col sm:text-center">
          {/* Avatar */}
          <div
            className={`flex-shrink-0 flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}
          >
            <span className="text-sm sm:text-xl font-bold text-white select-none">
              {member.initials}
            </span>
          </div>

          <div className="min-w-0 sm:mt-5">
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 truncate">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio — only shown in full variant, hidden on mobile */}
        {showBio && (
          <p className="hidden sm:block mt-3 text-xs text-slate-600 leading-relaxed text-center group-hover:text-slate-500 transition-colors duration-300">
            {member.bio}
          </p>
        )}

        {/* Social links — hidden on mobile */}
        <div className="hidden sm:flex mt-4 items-center justify-center gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-slate-400 transition-all duration-300 hover:bg-white/15 hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-slate-400 transition-all duration-300 hover:bg-white/15 hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

/** Full team section for the About page — includes bios and heading */
export function TeamFull() {
  return (
    <section className="relative py-14 sm:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[130px]" />
        <div className="absolute left-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-purple-600/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal animation="fade-up" className="text-center mb-8 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            The People Behind VELIQ
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold md:text-4xl text-white">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-500">
            A passionate group of engineers, designers, and strategists committed
            to delivering exceptional digital experiences.
          </p>
        </ScrollReveal>

        <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} showBio />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Compact team preview for the Homepage — no bios, with CTA to About */
export function TeamPreview() {
  return (
    <section className="relative py-14 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal animation="fade-up" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Our Team
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold md:text-4xl text-white">
            The Minds Behind the Magic
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-500">
            Meet the talented people who make it all happen.
          </p>
        </ScrollReveal>

        <div className="mt-8 sm:mt-16 grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} showBio={false} />
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400} className="mt-14 text-center">
          <Link
            href="/about"
            className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-indigo-500/5"
          >
            Learn More About Us &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

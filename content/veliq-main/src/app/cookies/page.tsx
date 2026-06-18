import Link from "next/link";

export const metadata = {
  title: "Cookie Policy",
  description:
    "VELIQ's cookie policy — how we use cookies and similar technologies on our website.",
  openGraph: {
    title: "Cookie Policy — VELIQ",
    description: "How we use cookies and similar technologies on our website.",
    url: "https://veliq.com/cookies",
  },
};

const lastUpdated = "March 15, 2026";

export default function CookiesPage() {
  return (
    <div className="bg-[#0a0a14]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-slate-500 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-10 text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work efficiently, provide a better browsing experience, and give website owners useful information about how their site is being used.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p>We use cookies and similar technologies for the following purposes:</p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-sm font-bold text-white">Essential Cookies</h3>
                  <p className="mt-2 text-sm">
                    Required for the website to function properly. These cannot be disabled. They include cookies for security, session management, and basic site functionality.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-sm font-bold text-white">Analytics Cookies</h3>
                  <p className="mt-2 text-sm">
                    Help us understand how visitors interact with our website by collecting anonymous usage data. We use this information to improve our site&apos;s performance and content. Providers may include Google Analytics.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-sm font-bold text-white">Functional Cookies</h3>
                  <p className="mt-2 text-sm">
                    Remember your preferences and settings (such as language or region) to provide a more personalized experience on return visits.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-sm font-bold text-white">Marketing Cookies</h3>
                  <p className="mt-2 text-sm">
                    Used to track visitors across websites to display relevant advertisements. These cookies may be set by third-party advertising partners.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties that may set cookies include:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li><strong className="text-slate-300">Google Analytics</strong> — for website usage analysis.</li>
                <li><strong className="text-slate-300">Social media platforms</strong> — when you interact with embedded social content or share buttons.</li>
                <li><strong className="text-slate-300">Hosting providers</strong> — for performance monitoring and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. Managing Cookies</h2>
              <p>
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>View what cookies are stored and delete them individually.</li>
                <li>Block third-party cookies.</li>
                <li>Block cookies from specific websites.</li>
                <li>Block all cookies.</li>
                <li>Delete all cookies when you close your browser.</li>
              </ul>
              <p className="mt-3 text-sm">
                Please note that blocking or deleting cookies may impact your experience on our website and limit certain functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Cookie Retention</h2>
              <p>
                Cookies have varying lifespans depending on their purpose:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li><strong className="text-slate-300">Session cookies</strong> are deleted when you close your browser.</li>
                <li><strong className="text-slate-300">Persistent cookies</strong> remain on your device for a set period (typically 30 days to 2 years) or until you delete them manually.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with a revised date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at{" "}
                <a href="mailto:admin@veliq.co" className="text-indigo-400 hover:text-indigo-300 transition">
                  admin@veliq.co
                </a>{" "}
                or visit our{" "}
                <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 transition">
                  Contact page
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

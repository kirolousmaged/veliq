import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "VELIQ's privacy policy — how we collect, use, and protect your personal data.",
  openGraph: {
    title: "Privacy Policy — VELIQ",
    description: "How we collect, use, and protect your personal data.",
    url: "https://veliq.com/privacy",
  },
};

const lastUpdated = "March 15, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-[#0a0a14]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Privacy Policy
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
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly when you use our services, including:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li><strong className="text-slate-300">Contact Information:</strong> Name, email address, phone number, and company name when you fill out our contact form or request a consultation.</li>
                <li><strong className="text-slate-300">Project Information:</strong> Details about your business and project requirements shared during consultations.</li>
                <li><strong className="text-slate-300">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                <li><strong className="text-slate-300">Device Data:</strong> Browser type, operating system, IP address, and device identifiers collected automatically.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>Respond to your inquiries and provide requested services.</li>
                <li>Improve our website, services, and user experience.</li>
                <li>Send project updates and relevant communications you&apos;ve opted into.</li>
                <li>Analyze website traffic and usage patterns to enhance performance.</li>
                <li>Comply with legal obligations and protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. Data Sharing & Third Parties</h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share data with trusted third-party service providers who assist us in operating our website and business, subject to confidentiality agreements. These may include:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>Hosting and infrastructure providers.</li>
                <li>Analytics services (e.g., Google Analytics).</li>
                <li>Communication tools for project management.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal data, including encryption in transit (SSL/TLS), secure server infrastructure, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent for data processing at any time.</li>
                <li>Request a copy of the data we hold about you.</li>
                <li>Object to or restrict certain processing activities.</li>
              </ul>
              <p className="mt-3 text-sm">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:admin@veliq.co" className="text-indigo-400 hover:text-indigo-300 transition">
                  admin@veliq.co
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 16. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

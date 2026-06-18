import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description:
    "VELIQ's terms of service — the rules and guidelines governing the use of our website and services.",
  openGraph: {
    title: "Terms of Service — VELIQ",
    description: "The rules and guidelines governing the use of our website and services.",
    url: "https://veliq.com/terms",
  },
};

const lastUpdated = "March 15, 2026";

export default function TermsPage() {
  return (
    <div className="bg-[#0a0a14]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Terms of Service
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
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the VELIQ website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms constitute a legally binding agreement between you and VELIQ.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
              <p>
                VELIQ provides software development, digital marketing, design, and consulting services. The specific scope, deliverables, timeline, and pricing for any project will be defined in a separate project agreement or proposal. These Terms of Service govern your general use of our website and interactions with our company.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, icons, images, and software — is the property of VELIQ or its content suppliers and is protected by international copyright laws.
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>You may not reproduce, distribute, or create derivative works from our website content without written permission.</li>
                <li>Ownership of project deliverables will be defined in individual project agreements.</li>
                <li>VELIQ retains the right to showcase completed projects in our portfolio unless otherwise agreed.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p>When using our website and services, you agree to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>Provide accurate and truthful information in all forms and communications.</li>
                <li>Not use our website for any unlawful purpose or in violation of any applicable laws.</li>
                <li>Not attempt to gain unauthorized access to our systems or interfere with our website&apos;s operation.</li>
                <li>Not transmit any malicious code, viruses, or harmful data through our website.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">5. Project Agreements</h2>
              <p>
                Specific project terms — including scope, payment schedules, milestones, revision policies, and delivery timelines — will be outlined in separate project proposals or contracts. In the event of a conflict between these Terms of Service and a project agreement, the project agreement shall prevail for matters related to that specific project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">6. Payment Terms</h2>
              <p>
                Payment terms for services will be specified in individual project proposals. Unless otherwise agreed:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                <li>A deposit may be required before work begins.</li>
                <li>Invoices are due within 14 days of issuance.</li>
                <li>Late payments may incur additional fees as outlined in the project agreement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                VELIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim. This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our website at our sole discretion, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties. Project-specific termination terms will be governed by the applicable project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Cairo, Egypt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please reach out at{" "}
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

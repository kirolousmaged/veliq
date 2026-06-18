"use client";

import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";

// metadata must be in a separate server component; omitting here for client page

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen pt-16">
      <section className="section-padding max-w-[1200px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="heading-1 text-white">Let&apos;s talk.</h1>
          <p className="para-32 text-[rgb(201,201,201)] max-w-xl">
            Ready to build something extraordinary? Tell us about your project
            and we&apos;ll be in touch within 24 hours.
          </p>
        </div>

        <form className="flex flex-col gap-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="para-14 text-[rgb(201,201,201)]">Full name</label>
            <input
              type="text"
              placeholder="Your name"
              className="bg-[rgb(20,20,20)] text-white rounded-[12px] px-5 py-4 para-16 outline-none border border-transparent focus:border-[rgb(15,128,84)] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="para-14 text-[rgb(201,201,201)]">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="bg-[rgb(20,20,20)] text-white rounded-[12px] px-5 py-4 para-16 outline-none border border-transparent focus:border-[rgb(15,128,84)] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="para-14 text-[rgb(201,201,201)]">Project brief</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="bg-[rgb(20,20,20)] text-white rounded-[12px] px-5 py-4 para-16 outline-none border border-transparent focus:border-[rgb(15,128,84)] transition-colors resize-none"
            />
          </div>
          <Button label="Send Message" variant="primary" className="self-start" />
        </form>
      </section>
      <Footer />
    </main>
  );
}

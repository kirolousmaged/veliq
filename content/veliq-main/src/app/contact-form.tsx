"use client";

export default function ContactForm() {
  return (
    <form
      className="mt-10 grid gap-5 sm:grid-cols-2 text-left"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Your Name"
        className="rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition"
      />
      <textarea
        rows={4}
        placeholder="Tell us about your project..."
        className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition resize-none"
      />
      <button
        type="submit"
        className="sm:col-span-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a14] shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.98]"
      >
        Send Message
      </button>
    </form>
  );
}

import Link from "next/link";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen pt-16 flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center section-padding gap-8 text-center">
        <span className="para-14 text-[rgb(201,201,201)] uppercase tracking-widest">404</span>
        <h1 className="heading-1 text-white">Not found.</h1>
        <p className="para-18 text-[rgb(201,201,201)] max-w-sm">
          The page you&apos;re looking for has moved or doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[rgb(99,102,241)] text-white px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
        >
          Back to Home →
        </Link>
      </section>
      <Footer />
    </main>
  );
}

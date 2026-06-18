import { notFound } from "next/navigation";
import Footer from "@/components/sections/Footer";

const PAGES: Record<string, { title: string; content: string }> = {
  privacy: {
    title: "Privacy Policy",
    content: "This Privacy Policy describes how Mattter® collects, uses, and protects your personal information when you use our services. We are committed to protecting your privacy and handling your data with transparency.",
  },
  terms: {
    title: "Terms of Service",
    content: "By using Mattter®'s services, you agree to these Terms of Service. Our services are provided 'as is' and we reserve the right to modify these terms at any time with notice.",
  },
};

export async function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <main className="bg-black min-h-screen pt-16">
      <section className="section-padding max-w-[760px] mx-auto flex flex-col gap-10">
        <h1 className="heading-1 text-white">{page.title}.</h1>
        <p className="para-18 text-[rgb(201,201,201)] leading-relaxed">{page.content}</p>
      </section>
      <Footer />
    </main>
  );
}

import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata = {
  title: "Projects — Mattter®",
  description: "View all of our design and development projects.",
};

const PROJECTS = [
  { title: "Ethereal", category: "Brand Identity", year: "2025" },
  { title: "Vixopedia", category: "Web Design", year: "2025" },
  { title: "Forma", category: "UI/UX Design", year: "2024" },
  { title: "Kinetic", category: "Development", year: "2024" },
  { title: "Solaris", category: "Brand Identity", year: "2024" },
  { title: "Praxis", category: "Web Design", year: "2023" },
  { title: "Stratum", category: "Development", year: "2023" },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen pt-16">
      <section className="section-padding max-w-[1200px] mx-auto flex flex-col gap-16">
        <div className="flex items-start gap-3">
          <h1 className="heading-1 text-white">Projects.</h1>
          <span className="para-14 text-[rgb(201,201,201)] mt-4">(07)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <Link
              key={p.title}
              href={`/projects/${p.title.toLowerCase()}`}
              className="group"
            >
              <div className="aspect-[4/3] bg-[rgb(20,20,20)] rounded-[15px] overflow-hidden relative flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10">
                  <span className="para-12 text-[rgb(201,201,201)] uppercase tracking-widest">
                    {p.category}
                  </span>
                  <h2
                    className="text-white mt-1"
                    style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.04em" }}
                  >
                    {p.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

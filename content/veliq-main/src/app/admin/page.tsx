"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Service {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

interface GalleryItem {
  image: string;
  caption: string;
}

interface Project {
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  fullDesc: string;
  gallery: GalleryItem[];
}

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  bg: string;
  content: string[];
}

type Tab = "services" | "projects" | "blogs";

const GRADIENT_OPTIONS = [
  "bg-gradient-to-br from-indigo-400 to-blue-500",
  "bg-gradient-to-br from-sky-400 to-indigo-500",
  "bg-gradient-to-br from-violet-400 to-indigo-600",
  "bg-gradient-to-br from-orange-400 to-rose-500",
  "bg-gradient-to-br from-lime-400 to-green-500",
  "bg-gradient-to-br from-cyan-400 to-blue-500",
  "bg-gradient-to-br from-fuchsia-400 to-pink-500",
  "bg-gradient-to-br from-amber-400 to-orange-500",
  "bg-gradient-to-br from-rose-400 to-red-500",
  "bg-gradient-to-br from-emerald-400 to-teal-500",
  "bg-gradient-to-br from-yellow-400 to-amber-500",
  "bg-gradient-to-br from-pink-400 to-purple-500",
  "bg-gradient-to-br from-teal-400 to-cyan-500",
  "bg-gradient-to-br from-blue-400 to-violet-500",
  "bg-gradient-to-br from-green-400 to-emerald-500",
  "bg-gradient-to-br from-slate-400 to-zinc-600",
  "bg-gradient-to-br from-rose-400 to-fuchsia-500",
  "bg-gradient-to-br from-amber-400 to-yellow-500",
];

const BLOG_CATEGORIES = [
  "Web Development",
  "Mobile Development",
  "SEO",
  "Digital Marketing",
  "Data & Analytics",
  "Brand Strategy",
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("services");
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [savingServices, setSavingServices] = useState(false);
  const [savingProjects, setSavingProjects] = useState(false);
  const [savingBlogs, setSavingBlogs] = useState(false);
  const [message, setMessage] = useState("");
  const [editingProject, setEditingProject] = useState<number | null>(null);
  const [editingBlog, setEditingBlog] = useState<number | null>(null);
  const [seeding, setSeeding] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function seedDatabase() {
    setSeeding(true);
    setMessage("");
    try {
      const res = await fetch("/api/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Database seeded! (${data.counts.services} services, ${data.counts.projects} projects, ${data.counts.blogs} blogs)`);
        const [svc, proj, blg] = await Promise.all([
          fetch("/api/services").then((r) => r.json()),
          fetch("/api/projects").then((r) => r.json()),
          fetch("/api/blogs").then((r) => r.json()),
        ]);
        setServices(svc);
        setProjects(proj);
        setBlogs(blg);
      } else {
        setMessage(`Seed error: ${data.error}`);
      }
    } catch {
      setMessage("Failed to seed database.");
    }
    setSeeding(false);
  }

  useEffect(() => {
    fetch("/api/services")
      .then((r) => r.json())
      .then(setServices);
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects);
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setBlogs(data); });
  }, []);

  // ── Services ──
  function updateService(index: number, field: keyof Service, value: string) {
    setServices((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );
  }

  function addService() {
    setServices((prev) => [
      ...prev,
      { id: prev.length + 1, icon: "⭐", title: "", desc: "" },
    ]);
  }

  function removeService(index: number) {
    setServices((prev) => prev.filter((_, i) => i !== index));
  }

  async function saveServices() {
    setSavingServices(true);
    setMessage("");
    try {
      const res = await fetch("/api/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(services),
      });
      if (!res.ok) {
        const err = await res.json();
        setMessage(`Error: ${err.error}`);
      } else {
        setMessage("Services saved successfully!");
      }
    } catch {
      setMessage("Failed to save. Please try again.");
    }
    setSavingServices(false);
  }

  // ── Image upload ──
  async function uploadImage(file: File): Promise<string | null> {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) return null;
      const data = await res.json();
      return data.url;
    } catch {
      return null;
    }
  }

  async function handleProjectImageUpload(index: number, file: File) {
    const url = await uploadImage(file);
    if (url) {
      setProjects((prev) =>
        prev.map((p, i) => (i === index ? { ...p, image: url } : p))
      );
    } else {
      setMessage("Error: Image upload failed");
    }
  }

  async function handleGalleryImageUpload(projIndex: number, galIndex: number, file: File) {
    const url = await uploadImage(file);
    if (url) {
      setProjects((prev) =>
        prev.map((p, i) => {
          if (i !== projIndex) return p;
          const gallery = p.gallery.map((g, gi) =>
            gi === galIndex ? { ...g, image: url } : g
          );
          return { ...p, gallery };
        })
      );
    } else {
      setMessage("Error: Image upload failed");
    }
  }

  // ── Projects ──
  function updateProject(index: number, field: keyof Project, value: string) {
    setProjects((prev) =>
      prev.map((p, i) => {
        if (i !== index) return p;
        const updated = { ...p, [field]: value };
        if (field === "title") updated.slug = slugify(value);
        return updated;
      })
    );
  }

  function updateGalleryItem(projIndex: number, galIndex: number, field: keyof GalleryItem, value: string) {
    setProjects((prev) =>
      prev.map((p, i) => {
        if (i !== projIndex) return p;
        const gallery = p.gallery.map((g, gi) =>
          gi === galIndex ? { ...g, [field]: value } : g
        );
        return { ...p, gallery };
      })
    );
  }

  function addGalleryItem(projIndex: number) {
    setProjects((prev) =>
      prev.map((p, i) => {
        if (i !== projIndex) return p;
        return {
          ...p,
          gallery: [
            ...p.gallery,
            { image: "", caption: "" },
          ],
        };
      })
    );
  }

  function removeGalleryItem(projIndex: number, galIndex: number) {
    setProjects((prev) =>
      prev.map((p, i) => {
        if (i !== projIndex) return p;
        return { ...p, gallery: p.gallery.filter((_, gi) => gi !== galIndex) };
      })
    );
  }

  function addProject() {
    setProjects((prev) => [
      ...prev,
      {
        slug: "",
        image: "",
        tag: services.length > 0 ? services[0].title : "",
        title: "",
        desc: "",
        fullDesc: "",
        gallery: [],
      },
    ]);
    setEditingProject(projects.length);
  }

  function removeProject(index: number) {
    setProjects((prev) => prev.filter((_, i) => i !== index));
    if (editingProject === index) setEditingProject(null);
  }

  async function saveProjects() {
    setSavingProjects(true);
    setMessage("");
    try {
      const res = await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projects),
      });
      if (!res.ok) {
        const err = await res.json();
        setMessage(`Error: ${err.error}`);
      } else {
        setMessage("Projects saved successfully!");
      }
    } catch {
      setMessage("Failed to save. Please try again.");
    }
    setSavingProjects(false);
  }

  // ── Blogs ──
  function updateBlog(index: number, field: keyof Blog, value: string | string[]) {
    setBlogs((prev) =>
      prev.map((b, i) => {
        if (i !== index) return b;
        const updated = { ...b, [field]: value };
        if (field === "title" && typeof value === "string") {
          updated.slug = slugify(value);
        }
        return updated;
      })
    );
  }

  function updateContentBlock(blogIndex: number, blockIndex: number, value: string) {
    setBlogs((prev) =>
      prev.map((b, i) => {
        if (i !== blogIndex) return b;
        const content = [...b.content];
        content[blockIndex] = value;
        return { ...b, content };
      })
    );
  }

  function addContentBlock(blogIndex: number) {
    setBlogs((prev) =>
      prev.map((b, i) => {
        if (i !== blogIndex) return b;
        return { ...b, content: [...b.content, ""] };
      })
    );
  }

  function removeContentBlock(blogIndex: number, blockIndex: number) {
    setBlogs((prev) =>
      prev.map((b, i) => {
        if (i !== blogIndex) return b;
        return { ...b, content: b.content.filter((_, bi) => bi !== blockIndex) };
      })
    );
  }

  function addBlog() {
    setBlogs((prev) => [
      ...prev,
      {
        slug: "",
        title: "",
        excerpt: "",
        category: BLOG_CATEGORIES[0],
        author: "VELIQ Team",
        date: new Date().toISOString().split("T")[0],
        readTime: "5 min read",
        bg: GRADIENT_OPTIONS[0],
        content: [],
      },
    ]);
    setEditingBlog(blogs.length);
  }

  function removeBlog(index: number) {
    setBlogs((prev) => prev.filter((_, i) => i !== index));
    if (editingBlog === index) setEditingBlog(null);
  }

  async function saveBlogs() {
    setSavingBlogs(true);
    setMessage("");
    try {
      const res = await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogs),
      });
      if (!res.ok) {
        const err = await res.json();
        setMessage(`Error: ${err.error}`);
      } else {
        setMessage("Blog posts saved successfully!");
      }
    } catch {
      setMessage("Failed to save. Please try again.");
    }
    setSavingBlogs(false);
  }

  const serviceTitles = services.map((s) => s.title).filter(Boolean);

  // Shared input classes
  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition";
  const selectClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition appearance-none";

  return (
    <div className="relative min-h-screen bg-[#0a0a14] text-white overflow-hidden">
      {/* Background glowing orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-indigo-600/[0.07] blur-[150px] animate-pulse-glow" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/[0.05] blur-[130px] animate-pulse-glow delay-200" />
        <div className="absolute left-1/2 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[120px] animate-pulse-glow delay-500" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#0a0a14]/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-2xl font-bold tracking-tight text-white">
              VELIQ
            </a>
            <span className="text-sm font-medium text-slate-500 border-l border-white/10 pl-3">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={seedDatabase}
              disabled={seeding}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition font-medium disabled:opacity-50"
            >
              {seeding ? "Seeding..." : "Seed DB"}
            </button>
            <a
              href="/"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              View Site &rarr;
            </a>
            <button
              onClick={handleLogout}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="relative z-10 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 flex gap-0">
          {(["services", "projects", "blogs"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setMessage(""); }}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition capitalize ${
                tab === t
                  ? "border-indigo-500 text-white"
                  : "border-transparent text-slate-500 hover:text-slate-300"
              }`}
            >
              {t === "projects" ? `Projects (${projects.length})` : t === "blogs" ? `Blog (${blogs.length})` : "Services"}
            </button>
          ))}
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        {message && (
          <div
            className={`mb-6 rounded-xl px-4 py-3 text-sm font-medium border backdrop-blur-sm ${
              message.startsWith("Error")
                ? "bg-red-500/10 text-red-400 border-red-500/20"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            }`}
          >
            {message}
          </div>
        )}

        {/* ════════════════ SERVICES TAB ════════════════ */}
        {tab === "services" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white">Manage Services</h1>
                <p className="text-sm text-slate-500 mt-1">Edit the services displayed on the landing page.</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={addService} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition">
                  + Add Service
                </button>
                <button onClick={saveServices} disabled={savingServices} className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition disabled:opacity-50">
                  {savingServices ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/10 transition">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Service {index + 1}</span>
                    <button onClick={() => removeService(index)} className="text-sm text-red-400/70 hover:text-red-400 transition">Remove</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Icon</label>
                      <input type="text" value={service.icon} onChange={(e) => updateService(index, "icon", e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-center text-2xl outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">Title</label>
                      <input type="text" value={service.title} onChange={(e) => updateService(index, "title", e.target.value)} className={inputClass} placeholder="Service title" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Description</label>
                    <textarea value={service.desc} onChange={(e) => updateService(index, "desc", e.target.value)} rows={2} className={`${inputClass} resize-none`} placeholder="Service description" />
                  </div>
                </div>
              ))}
            </div>

            {services.length === 0 && (
              <div className="text-center py-16 text-slate-600">
                <p className="text-lg">No services yet.</p>
                <p className="text-sm mt-1">Click &quot;+ Add Service&quot; to get started.</p>
              </div>
            )}

            {services.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-semibold text-white mb-4">Live Preview</h2>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, i) => (
                      <div key={i} className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xl">{s.icon}</div>
                        <h3 className="text-base font-semibold text-white">{s.title || "Untitled"}</h3>
                        <p className="mt-2 text-sm text-slate-400">{s.desc || "No description"}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* ════════════════ PROJECTS TAB ════════════════ */}
        {tab === "projects" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white">Manage Projects</h1>
                <p className="text-sm text-slate-500 mt-1">Add, edit, or remove projects from your portfolio.</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={addProject} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition">
                  + Add Project
                </button>
                <button onClick={saveProjects} disabled={savingProjects} className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition disabled:opacity-50">
                  {savingProjects ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/10 transition">
                  <div className="flex items-center gap-4 p-5 cursor-pointer hover:bg-white/[0.02] transition" onClick={() => setEditingProject(editingProject === index ? null : index)}>
                    {project.image ? (
                      <img src={project.image} alt="" className="h-12 w-12 rounded-xl shrink-0 object-cover" />
                    ) : (
                      <div className="h-12 w-12 rounded-xl shrink-0 bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-600 text-xs">No img</div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white truncate">{project.title || "Untitled Project"}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{project.tag || "No category"} &middot; {project.gallery.length} gallery items</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={(e) => { e.stopPropagation(); removeProject(index); }} className="text-sm text-red-400/70 hover:text-red-400 transition">Remove</button>
                      <svg className={`h-4 w-4 text-slate-600 transition-transform ${editingProject === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {editingProject === index && (
                    <div className="border-t border-white/[0.06] p-6 space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">Project Title</label>
                          <input type="text" value={project.title} onChange={(e) => updateProject(index, "title", e.target.value)} className={inputClass} placeholder="Project title" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">Service Category (Tag)</label>
                          <select value={project.tag} onChange={(e) => updateProject(index, "tag", e.target.value)} className={selectClass}>
                            <option value="" className="bg-[#0a0a14]">Select a service...</option>
                            {serviceTitles.map((t) => (<option key={t} value={t} className="bg-[#0a0a14]">{t}</option>))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">URL Slug</label>
                        <input type="text" value={project.slug} readOnly className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">Short Description</label>
                        <textarea value={project.desc} onChange={(e) => updateProject(index, "desc", e.target.value)} rows={2} className={`${inputClass} resize-none`} placeholder="Brief project description for cards..." />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">Full Description</label>
                        <textarea value={project.fullDesc} onChange={(e) => updateProject(index, "fullDesc", e.target.value)} rows={5} className={`${inputClass} resize-none`} placeholder="Detailed project description for the project page..." />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-2">Cover Image</label>
                        <div className="flex items-center gap-4">
                          {project.image ? (
                            <img src={project.image} alt="" className="h-20 w-32 rounded-xl object-cover border border-white/10" />
                          ) : (
                            <div className="h-20 w-32 rounded-xl bg-white/[0.04] border border-dashed border-white/15 flex items-center justify-center text-xs text-slate-600">No image</div>
                          )}
                          <label className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition">
                            Upload Image
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleProjectImageUpload(index, f); }} />
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-xs font-medium text-slate-500">Gallery ({project.gallery.length} items)</label>
                          <button onClick={() => addGalleryItem(index)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition">+ Add Image</button>
                        </div>
                        <div className="space-y-3">
                          {project.gallery.map((item, gi) => (
                            <div key={gi} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                              {item.image ? (
                                <img src={item.image} alt="" className="h-10 w-14 rounded-lg shrink-0 object-cover" />
                              ) : (
                                <div className="h-10 w-14 rounded-lg shrink-0 bg-white/[0.04] border border-dashed border-white/10 flex items-center justify-center text-[10px] text-slate-600">No img</div>
                              )}
                              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <label className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.05] px-2 py-1.5 text-xs text-slate-400 hover:text-white transition text-center">
                                  Upload
                                  <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleGalleryImageUpload(index, gi, f); }} />
                                </label>
                                <input type="text" value={item.caption} onChange={(e) => updateGalleryItem(index, gi, "caption", e.target.value)} className="rounded-lg border border-white/10 bg-white/[0.05] px-2 py-1.5 text-xs text-white placeholder-slate-600 outline-none focus:border-indigo-500/50 transition" placeholder="Caption" />
                              </div>
                              <button onClick={() => removeGalleryItem(index, gi)} className="text-xs text-red-400/70 hover:text-red-400 transition shrink-0">&times;</button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/[0.06]">
                        <p className="text-xs font-medium text-slate-600 mb-3">CARD PREVIEW</p>
                        <div className="max-w-xs overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                          {project.image ? (
                            <img src={project.image} alt="" className="h-36 w-full object-cover" />
                          ) : (
                            <div className="h-36 bg-white/[0.04] flex items-center justify-center text-sm text-slate-600">No cover image</div>
                          )}
                          <div className="p-5">
                            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">{project.tag || "Category"}</span>
                            <h3 className="mt-1.5 text-base font-semibold text-white">{project.title || "Untitled"}</h3>
                            <p className="mt-1.5 text-xs text-slate-400">{project.desc || "No description"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {projects.length === 0 && (
              <div className="text-center py-16 text-slate-600">
                <p className="text-lg">No projects yet.</p>
                <p className="text-sm mt-1">Click &quot;+ Add Project&quot; to get started.</p>
              </div>
            )}
          </>
        )}

        {/* ════════════════ BLOGS TAB ════════════════ */}
        {tab === "blogs" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white">Manage Blog Posts</h1>
                <p className="text-sm text-slate-500 mt-1">Create, edit, or remove blog articles.</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={addBlog} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition">
                  + New Post
                </button>
                <button onClick={saveBlogs} disabled={savingBlogs} className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition disabled:opacity-50">
                  {savingBlogs ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {blogs.map((blog, index) => (
                <div key={index} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/10 transition">
                  {/* Blog Header (always visible) */}
                  <div
                    className="flex items-center gap-4 p-5 cursor-pointer hover:bg-white/[0.02] transition"
                    onClick={() => setEditingBlog(editingBlog === index ? null : index)}
                  >
                    <div className={`h-12 w-20 rounded-xl shrink-0 ${blog.bg}`} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white truncate">{blog.title || "Untitled Post"}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {blog.category || "No category"} &middot; {blog.date} &middot; {blog.content.length} blocks
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={(e) => { e.stopPropagation(); removeBlog(index); }} className="text-sm text-red-400/70 hover:text-red-400 transition">Remove</button>
                      <svg className={`h-4 w-4 text-slate-600 transition-transform ${editingBlog === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Editor */}
                  {editingBlog === index && (
                    <div className="border-t border-white/[0.06] p-6 space-y-5">
                      {/* Title */}
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">Post Title</label>
                        <input type="text" value={blog.title} onChange={(e) => updateBlog(index, "title", e.target.value)} className={inputClass} placeholder="Blog post title" />
                      </div>

                      {/* Slug (read-only) */}
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">URL Slug</label>
                        <input type="text" value={blog.slug} readOnly className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-500" />
                      </div>

                      {/* Category, Author, Date, Read Time */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">Category</label>
                          <select value={blog.category} onChange={(e) => updateBlog(index, "category", e.target.value)} className={selectClass}>
                            {BLOG_CATEGORIES.map((c) => (<option key={c} value={c} className="bg-[#0a0a14]">{c}</option>))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">Author</label>
                          <input type="text" value={blog.author} onChange={(e) => updateBlog(index, "author", e.target.value)} className={inputClass} placeholder="Author name" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">Date</label>
                          <input type="date" value={blog.date} onChange={(e) => updateBlog(index, "date", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1.5">Read Time</label>
                          <input type="text" value={blog.readTime} onChange={(e) => updateBlog(index, "readTime", e.target.value)} className={inputClass} placeholder="5 min read" />
                        </div>
                      </div>

                      {/* Excerpt */}
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5">Excerpt</label>
                        <textarea value={blog.excerpt} onChange={(e) => updateBlog(index, "excerpt", e.target.value)} rows={2} className={`${inputClass} resize-none`} placeholder="Short summary shown on blog cards..." />
                      </div>

                      {/* Cover Color */}
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-2">Cover Color</label>
                        <div className="flex flex-wrap gap-2">
                          {GRADIENT_OPTIONS.map((g) => (
                            <button key={g} onClick={() => updateBlog(index, "bg", g)} className={`h-8 w-8 rounded-lg ${g} transition ${blog.bg === g ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#0a0a14]" : "hover:ring-2 hover:ring-white/20 hover:ring-offset-1 hover:ring-offset-[#0a0a14]"}`} />
                          ))}
                        </div>
                      </div>

                      {/* Content Blocks */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="block text-xs font-medium text-slate-500">
                            Content Blocks ({blog.content.length})
                          </label>
                          <button onClick={() => addContentBlock(index)} className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition">
                            + Add Block
                          </button>
                        </div>
                        <p className="text-xs text-slate-600 mb-3">
                          Start a block with <code className="px-1.5 py-0.5 rounded bg-white/[0.06] text-indigo-400">## </code> to make it a heading. Otherwise it renders as a paragraph.
                        </p>
                        <div className="space-y-3">
                          {blog.content.map((block, bi) => (
                            <div key={bi} className="flex gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                                    {block.startsWith("## ") ? "Heading" : "Paragraph"} {bi + 1}
                                  </span>
                                </div>
                                <textarea
                                  value={block}
                                  onChange={(e) => updateContentBlock(index, bi, e.target.value)}
                                  rows={block.startsWith("## ") ? 1 : 3}
                                  className={`${inputClass} resize-none ${block.startsWith("## ") ? "font-semibold" : ""}`}
                                  placeholder={bi === 0 ? "Opening paragraph..." : "Continue writing..."}
                                />
                              </div>
                              <button onClick={() => removeContentBlock(index, bi)} className="mt-6 text-xs text-red-400/70 hover:text-red-400 transition shrink-0">&times;</button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Preview */}
                      <div className="pt-4 border-t border-white/[0.06]">
                        <p className="text-xs font-medium text-slate-600 mb-3">CARD PREVIEW</p>
                        <div className="max-w-sm overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                          <div className={`h-48 ${blog.bg}`} />
                          <div className="p-6">
                            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                              <span className="rounded-full bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                                {blog.category || "Category"}
                              </span>
                              <span className="text-slate-600">{blog.readTime}</span>
                            </div>
                            <h3 className="mt-3 text-lg font-bold text-white leading-snug">
                              {blog.title || "Untitled Post"}
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                              {blog.excerpt || "No excerpt"}
                            </p>
                            <p className="mt-3 text-xs text-slate-600">{blog.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {blogs.length === 0 && (
              <div className="text-center py-16 text-slate-600">
                <p className="text-lg">No blog posts yet.</p>
                <p className="text-sm mt-1">Click &quot;+ New Post&quot; to get started.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

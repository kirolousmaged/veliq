export type Service = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  fullDesc: string;
  highlights: { label: string; value: string }[];
  features: string[];
  process: { step: string; desc: string }[];
  technologies: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    icon: "W",
    title: "Website Development",
    desc: "Web apps, SaaS platforms, and enterprise systems built with modern technologies for performance and scale.",
    fullDesc: "We build high-performance websites and web applications tailored to your business goals. From SaaS platforms and enterprise dashboards to e-commerce stores and marketing sites — our team delivers pixel-perfect, responsive, and lightning-fast web experiences using cutting-edge technologies like Next.js, React, and Node.js.",
    highlights: [
      { label: "Projects Delivered", value: "45+" },
      { label: "Avg. Performance Score", value: "96/100" },
      { label: "Uptime Guarantee", value: "99.9%" },
      { label: "Avg. Load Time", value: "<2s" },
    ],
    features: [
      "Custom web application development",
      "SaaS platform architecture & development",
      "E-commerce solutions with payment integration",
      "Progressive Web Apps (PWA)",
      "API development & third-party integrations",
      "Performance optimization & Core Web Vitals",
    ],
    process: [
      { step: "Discovery", desc: "We analyze your requirements, target audience, and business objectives to define the project scope." },
      { step: "Design", desc: "Our designers create wireframes and high-fidelity prototypes that align with your brand identity." },
      { step: "Development", desc: "We build your application using modern frameworks with clean, maintainable code and thorough testing." },
      { step: "Launch & Support", desc: "We deploy, monitor, and provide ongoing maintenance to keep your platform running at peak performance." },
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Tailwind CSS", "GraphQL"],
  },
  {
    slug: "website-support",
    icon: "S",
    title: "Website Support",
    desc: "Ongoing maintenance, updates, and monitoring to keep your website fast, secure, and always live.",
    fullDesc: "We provide comprehensive website support and maintenance services so you can focus on running your business. From security updates and performance monitoring to content changes and feature additions — our team is your dedicated technical partner after launch.",
    highlights: [
      { label: "Avg. Response Time", value: "<4h" },
      { label: "Uptime Monitored", value: "99.9%" },
      { label: "Sites Maintained", value: "50+" },
      { label: "Satisfaction Rate", value: "100%" },
    ],
    features: [
      "Monthly software & plugin updates",
      "Security monitoring & threat response",
      "Performance optimization & Core Web Vitals",
      "Content updates & copywriting revisions",
      "Bug fixes & cross-browser testing",
      "Monthly analytics & performance reports",
    ],
    process: [
      { step: "Onboard", desc: "We audit your current site, set up monitoring, and document all configurations and access." },
      { step: "Maintain", desc: "We run monthly update cycles, security scans, and proactive performance checks." },
      { step: "Report", desc: "You receive a monthly report covering uptime, performance metrics, and completed tasks." },
      { step: "Evolve", desc: "We handle change requests and improvements as your business grows and needs shift." },
    ],
    technologies: ["WordPress", "Vercel", "Cloudflare", "Google PageSpeed", "Uptime Robot", "Sentry", "Hotjar", "Google Analytics"],
  },
  {
    slug: "seo",
    icon: "E",
    title: "SEO",
    desc: "Research-driven SEO strategies that boost your visibility, drive organic traffic, and convert visitors.",
    fullDesc: "We help businesses dominate search engine results with comprehensive SEO strategies. From technical audits and on-page optimization to content strategy and link building, we implement data-driven SEO that delivers measurable results.",
    highlights: [
      { label: "Avg. Traffic Increase", value: "280%" },
      { label: "Keywords Ranked", value: "1,200+" },
      { label: "Featured Snippets Won", value: "85+" },
      { label: "Client Retention", value: "95%" },
    ],
    features: [
      "Technical SEO audits & implementation",
      "On-page optimization & content strategy",
      "Local SEO & Google Business Profile",
      "E-commerce SEO & product optimization",
      "Schema markup & structured data",
      "Link building & digital PR",
    ],
    process: [
      { step: "Audit", desc: "We perform a comprehensive analysis of your site's technical health, content, and competitive landscape." },
      { step: "Strategy", desc: "We develop a prioritized roadmap targeting the highest-impact opportunities for your business." },
      { step: "Execute", desc: "Our team implements technical fixes, optimizes content, and builds high-quality backlinks." },
      { step: "Measure & Refine", desc: "We track rankings, traffic, and conversions to continuously refine and improve results." },
    ],
    technologies: ["Google Search Console", "Ahrefs", "Screaming Frog", "Schema.org", "Google Analytics", "Semrush", "Core Web Vitals", "PageSpeed"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

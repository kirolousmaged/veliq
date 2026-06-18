import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local manually
const envPath = resolve(process.cwd(), ".env.local");
const envContent = readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
}

const services = [
  {
    id: 1,
    slug: "website-development",
    icon: "website-development",
    title: "Website Development",
    desc: "Custom-built websites engineered for performance, conversion, and growth. No templates. No shortcuts.",
    fullDesc:
      "We design and build websites that work as hard as you do. Every site is custom-engineered from the ground up, combining clean code, fast load times, and conversion-focused design. Whether you need a corporate site, an e-commerce platform, or a complex web application, we deliver solutions that look exceptional and perform even better.",
    color: "purple",
    bg: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
    highlights: [
      { label: "Avg. Load Time", value: "<2s" },
      { label: "Mobile-First", value: "100%" },
      { label: "SEO Score", value: "95+" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      "Custom UI/UX design tailored to your brand identity and target audience",
      "Responsive, mobile-first development that looks perfect on every device",
      "Performance-optimized code with sub-2-second load times",
      "CMS integration for easy content management without developer dependency",
      "E-commerce solutions with secure payment processing and inventory management",
      "API integrations connecting your website to CRM, analytics, and marketing tools",
      "Accessibility compliance (WCAG) ensuring your site is usable by everyone",
      "Analytics setup and conversion tracking from day one",
      "SSL security, GDPR compliance, and data protection built in",
    ],
    process: [
      {
        step: "Discovery",
        desc: "We audit your current digital presence, understand your business goals, and define measurable KPIs for the project.",
      },
      {
        step: "Design",
        desc: "Wire-framing and high-fidelity mockups reviewed with you. No surprises. Every screen approved before a single line of code.",
      },
      {
        step: "Development",
        desc: "Clean, modular code built with modern frameworks. Weekly demos so you see progress in real time.",
      },
      {
        step: "Launch & Optimize",
        desc: "Rigorous QA, performance testing, and SEO setup before going live. Post-launch monitoring and iteration based on real data.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
      "Figma",
      "WordPress",
      "Shopify",
      "Webflow",
      "Stripe",
      "Fawaterak",
      "سلة",
      "GitHub",
      "Zid",
      "Tabby",
      "Moyasar",
      "Mollie",
      "Klarna",
      "Contentful",
    ],
  },
  {
    id: 2,
    slug: "website-support",
    icon: "website-support",
    title: "Website Support",
    desc: "Ongoing maintenance, updates, and optimization to keep your website running at peak performance. Always.",
    fullDesc:
      "Your website is not a set-it-and-forget-it asset. It needs continuous attention to stay secure, fast, and effective. Our Website Support service gives you a dedicated team that monitors, maintains, and improves your site on an ongoing basis. Think of us as your in-house web team, without the overhead.",
    color: "blue",
    bg: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    highlights: [
      { label: "Response Time", value: "<12h" },
      { label: "Uptime Guarantee", value: "99.9%" },
      { label: "Security Patches", value: "24/7" },
      { label: "Monthly Reports", value: "Yes" },
    ],
    features: [
      "24/7 uptime monitoring with instant alerts and rapid incident response",
      "Regular security updates, patches, and vulnerability scanning",
      "Performance optimization: speed audits, caching, and image compression",
      "Content updates and page edits without waiting for a developer queue",
      "Monthly analytics reports with actionable insights and recommendations",
      "Plugin and dependency updates to prevent compatibility issues",
      "Database backups and disaster recovery planning",
      "Cross-browser and cross-device testing after every update",
      "Priority support with a dedicated account manager",
    ],
    process: [
      {
        step: "Audit",
        desc: "We conduct a full health check of your website: performance, security, SEO, and code quality. Every issue is documented.",
      },
      {
        step: "Plan",
        desc: "Based on the audit, we create a prioritized maintenance roadmap. Critical fixes first, then ongoing improvements.",
      },
      {
        step: "Execute",
        desc: "Our team handles updates, fixes, and optimizations on a weekly cycle. You approve changes before they go live.",
      },
      {
        step: "Report",
        desc: "Monthly performance reports with uptime stats, speed metrics, security status, and recommendations for the next cycle.",
      },
    ],
    technologies: [
      "Cloudflare",
      "Vercel",
      "AWS",
      "Google Analytics",
      "Sentry",
      "Lighthouse",
      "WordPress",
      "Next.js",
      "cPanel",
      "Git",
    ],
  },
  {
    id: 3,
    slug: "seo",
    icon: "seo",
    title: "Search Engine Optimization",
    desc: "Data-driven search engine optimization that brings qualified traffic to your business. Real rankings, real results.",
    fullDesc:
      "SEO is not about gaming algorithms. It is about making your business visible to the people actively searching for what you offer. We build SEO strategies grounded in data, focused on outcomes, and measured by revenue impact. From technical foundations to content strategy and local SEO, we cover every angle to get your site ranking where it belongs.",
    color: "cyan",
    bg: "bg-gradient-to-br from-cyan-600/20 to-purple-600/20",
    highlights: [
      { label: "Avg. Traffic Lift", value: "3x" },
      { label: "Keywords Ranked", value: "200+" },
      { label: "Technical Score", value: "95+" },
      { label: "ROI Tracked", value: "Yes" },
    ],
    features: [
      "Comprehensive technical SEO audit: crawlability, indexation, site structure, and speed",
      "Keyword research and competitive analysis to find high-intent, high-value opportunities",
      "On-page optimization: meta tags, headings, internal linking, and schema markup",
      "Content strategy and creation aligned with search intent and your brand voice",
      "Local SEO setup: Google Business Profile, citations, and location-based targeting",
      "Link building through quality outreach and digital PR, not spammy shortcuts",
      "Core Web Vitals optimization for better rankings and user experience",
      "Monthly ranking reports with traffic, conversion, and revenue attribution",
      "Competitor monitoring and strategy adjustments based on market changes",
    ],
    process: [
      {
        step: "Audit & Research",
        desc: "Full technical and content audit of your site. Competitor analysis. Keyword opportunity mapping tied to business goals.",
      },
      {
        step: "Strategy",
        desc: "A custom SEO roadmap with prioritized actions, timelines, and projected impact. No generic playbooks.",
      },
      {
        step: "Implementation",
        desc: "Technical fixes, on-page optimization, content creation, and link building executed by our team. You stay informed at every step.",
      },
      {
        step: "Measure & Scale",
        desc: "Monthly reports with rankings, traffic, and conversion data. Strategy refined each month based on what the data tells us.",
      },
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics",
      "Ahrefs",
      "Semrush",
      "Screaming Frog",
      "Schema.org",
      "Google Business Profile",
      "Lighthouse",
      "PageSpeed Insights",
      "Cloudflare",
    ],
  },
  {
    id: 4,
    slug: "mobile-development",
    icon: "mobile-development",
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps built for performance, usability, and business impact. iOS and Android.",
    fullDesc:
      "We build mobile applications that people actually want to use. From concept to App Store, our team designs and develops native and cross-platform apps that combine beautiful interfaces with rock-solid performance. Every app is built around your users' needs and your business objectives, not the other way around.",
    color: "blue",
    bg: "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
    highlights: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "App Store Rating", value: "4.8+" },
      { label: "Crash-Free Rate", value: "99.5%" },
      { label: "Launch Time", value: "8-12 wks" },
    ],
    features: [
      "Native iOS and Android development for maximum performance and platform integration",
      "Cross-platform development with React Native and Flutter for faster time-to-market",
      "UI/UX design optimized for mobile interactions, gestures, and accessibility",
      "Offline-first architecture so your app works reliably even without connectivity",
      "Push notifications, in-app messaging, and user engagement features",
      "Secure authentication with biometrics, OAuth, and multi-factor support",
      "API development and backend integration with your existing systems",
      "App Store and Google Play submission, optimization, and compliance",
      "Post-launch analytics, crash monitoring, and iterative improvement",
    ],
    process: [
      {
        step: "Discovery & Strategy",
        desc: "Define user personas, core features, and technical requirements. Map the MVP scope to get to market fast without cutting quality.",
      },
      {
        step: "Design & Prototype",
        desc: "Interactive prototypes tested with real users before development begins. Every screen, every flow, every interaction validated.",
      },
      {
        step: "Development & Testing",
        desc: "Agile sprints with bi-weekly demos. Continuous testing on real devices. Performance and security baked in from the start.",
      },
      {
        step: "Launch & Grow",
        desc: "App Store submission, launch strategy, and post-launch monitoring. Ongoing updates based on user feedback and analytics data.",
      },
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "TypeScript",
      "Firebase",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Figma",
      "TestFlight",
      "Fastlane",
    ],
  },
];

async function seed() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    console.error("DATABASE_URL or POSTGRES_URL not set in .env.local");
    process.exit(1);
  }

  const sql = neon(url);

  await sql`
    CREATE TABLE IF NOT EXISTS collections (
      name TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '[]'::jsonb,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    INSERT INTO collections (name, data, updated_at)
    VALUES ('services', ${JSON.stringify(services)}::jsonb, NOW())
    ON CONFLICT (name)
    DO UPDATE SET data = ${JSON.stringify(services)}::jsonb, updated_at = NOW()
  `;

  console.log(`Seeded ${services.length} services: ${services.map(s => s.title).join(", ")}`);
}

seed().catch(console.error);

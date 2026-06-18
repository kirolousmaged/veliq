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
    slug: "mobile-development",
    icon: "M",
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps that deliver smooth, intuitive experiences on every device.",
    fullDesc: "We create mobile applications that users love. Whether you need a native iOS/Android app or a cross-platform solution, our team delivers polished, high-performance apps with intuitive interfaces, offline capabilities, and seamless backend integrations.",
    highlights: [
      { label: "Apps Launched", value: "30+" },
      { label: "Combined Downloads", value: "500K+" },
      { label: "Avg. Store Rating", value: "4.8★" },
      { label: "Platforms", value: "iOS & Android" },
    ],
    features: [
      "Native iOS & Android development",
      "Cross-platform apps with React Native & Flutter",
      "UI/UX design for mobile interfaces",
      "Push notifications & real-time features",
      "Offline-first architecture",
      "App Store optimization & submission",
    ],
    process: [
      { step: "Strategy", desc: "We define your app's core value proposition, user personas, and feature roadmap." },
      { step: "Prototype", desc: "Interactive prototypes let you test the user experience before a single line of code is written." },
      { step: "Build", desc: "Our engineers develop your app with a focus on performance, security, and scalability." },
      { step: "Launch & Iterate", desc: "We handle app store submission, gather user feedback, and continuously improve the experience." },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs", "GraphQL", "Redux"],
  },
  {
    slug: "seo-setup",
    icon: "S",
    title: "SEO Setup",
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
  {
    slug: "digital-marketing",
    icon: "D",
    title: "Digital Marketing",
    desc: "PPC, social media, and content strategies that drive qualified traffic and measurable ROI.",
    fullDesc: "We craft data-driven marketing campaigns that connect your brand with the right audience at the right time. From paid advertising and social media to content marketing and email automation, our full-funnel approach ensures every marketing dollar works harder.",
    highlights: [
      { label: "Avg. ROAS", value: "4.8x" },
      { label: "Campaigns Managed", value: "200+" },
      { label: "Ad Spend Managed", value: "$5M+" },
      { label: "Leads Generated", value: "50K+" },
    ],
    features: [
      "Pay-per-click advertising (Google, Meta, TikTok)",
      "Social media marketing & management",
      "Content marketing & copywriting",
      "Email marketing & automation",
      "Conversion rate optimization (CRO)",
      "Marketing analytics & attribution",
    ],
    process: [
      { step: "Research", desc: "We study your market, competitors, and audience to identify the best channels and messaging." },
      { step: "Plan", desc: "We create a multi-channel marketing plan with clear KPIs, budgets, and timelines." },
      { step: "Launch", desc: "We execute campaigns with compelling creative, precise targeting, and rigorous A/B testing." },
      { step: "Optimize", desc: "We analyze performance data daily to optimize spend, improve ROAS, and scale winning campaigns." },
    ],
    technologies: ["Google Ads", "Meta Ads", "TikTok Ads", "HubSpot", "Mailchimp", "Google Analytics", "Hotjar", "Zapier"],
  },
  {
    slug: "data-analytics",
    icon: "A",
    title: "Data & Analytics",
    desc: "Turn raw data into actionable insights with dashboards, reporting, and predictive analytics.",
    fullDesc: "We help businesses unlock the power of their data. Our team builds custom analytics platforms, real-time dashboards, and predictive models that turn raw data into strategic decisions — making complex data accessible and actionable for every stakeholder.",
    highlights: [
      { label: "Data Points Processed", value: "1B+" },
      { label: "Dashboards Built", value: "75+" },
      { label: "Avg. Decision Speed", value: "3x faster" },
      { label: "Cost Savings Delivered", value: "$2M+" },
    ],
    features: [
      "Custom analytics dashboard development",
      "Data pipeline & ETL architecture",
      "Business intelligence & reporting",
      "Predictive analytics & ML models",
      "Marketing attribution & ROI analysis",
      "Real-time monitoring & alerting",
    ],
    process: [
      { step: "Assess", desc: "We audit your data sources, infrastructure, and analytics maturity to identify gaps." },
      { step: "Architect", desc: "We design a scalable data architecture that unifies your data and supports your business goals." },
      { step: "Build", desc: "We develop pipelines, dashboards, and models using best-in-class tools and frameworks." },
      { step: "Empower", desc: "We train your team so you can make data-driven decisions independently long after we're done." },
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "Apache Spark", "BigQuery", "dbt", "Snowflake"],
  },
  {
    slug: "brand-strategy",
    icon: "B",
    title: "Brand Strategy",
    desc: "Build a compelling brand identity and go-to-market strategy that resonates with your target audience.",
    fullDesc: "We help businesses define who they are and how they show up in the world. From startups finding their voice to established companies repositioning for growth, our brand strategists craft identities that resonate, differentiate, and endure.",
    highlights: [
      { label: "Brands Launched", value: "25+" },
      { label: "Avg. Revenue Lift", value: "120%" },
      { label: "Brand Audits", value: "50+" },
      { label: "Industries Served", value: "15+" },
    ],
    features: [
      "Brand identity & visual design systems",
      "Brand positioning & messaging frameworks",
      "Market research & competitive analysis",
      "Brand architecture for multi-brand companies",
      "Go-to-market strategy & launch planning",
      "Brand guidelines & asset libraries",
    ],
    process: [
      { step: "Discover", desc: "We immerse ourselves in your business, industry, audience, and competitive landscape." },
      { step: "Define", desc: "We craft your brand positioning, personality, messaging framework, and value proposition." },
      { step: "Design", desc: "We create your visual identity system — logo, colors, typography, and brand assets." },
      { step: "Deliver", desc: "We produce comprehensive brand guidelines and support your team through implementation." },
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Miro", "Notion", "Brandwatch", "SurveyMonkey", "Canva", "InVision"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Real project content sourced from the Mattter® template CMS (Projects collection).
// Image fields "image1", "image2" and the gallery are shared placeholder assets
// across all projects in the source template, so they're defined once below.

export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  preview: string;
  problemHeading: string;
  problemBody: string;
  solutionHeading: string;
  solutionBody: string;
  image1: string;
  image2: string;
  gallery: string[];
};

const SHARED_IMAGE_1 = "https://framerusercontent.com/images/2Qh9eAFoBqCEd8nMElKvxwik.png";
const SHARED_IMAGE_2 = "https://framerusercontent.com/images/dnqyaHifcSkTXY7tJV8dRhmN4s.png";
const SHARED_GALLERY = [
  "https://framerusercontent.com/images/38Q7SfUj8cODnwWGuPx1KVkNajI.png",
  "https://framerusercontent.com/images/Qpl7yATIp6rN9XXJRiwAUZpxdRg.png",
  "https://framerusercontent.com/images/z7uBX03kXtjDZDYu5DZGH8ZNhU.png",
];

export const PROJECTS: Project[] = [
  {
    slug: "ethereal",
    title: "Ethereal",
    category: "Web design",
    client: "Aether Scents",
    year: "2024",
    description: "A sensory digital experience for a luxury perfume brand, blending motion and minimalism.",
    preview: "https://framerusercontent.com/images/4g3mQfVzCiTON8DoN1D8WGnNa3c.png",
    problemHeading: "Selling a physical scent through a digital screen is one of the hardest challenges in e-commerce, and the old site wasn't working.",
    problemBody: "Aether's previous site relied on static product grids that failed to convey the emotion, depth, and luxury of their fragrance notes. This lack of sensory engagement resulted in high bounce rates, as customers couldn't “feel” the product through the screen.",
    solutionHeading: "We created a sensory digital experience that translates scent into sight, using motion to evoke the feeling of the fragrance.",
    solutionBody: "By utilizing fluid WebGL distortions and large-scale video backgrounds, we simulated the texture of smoke and liquid on the screen. We stripped away traditional e-commerce clutter, allowing the visual storytelling to take center stage, increasing conversion rates by 40%.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
  {
    slug: "pulse",
    title: "Pulse",
    category: "UI/UX Design",
    client: "MediTech Solutions",
    year: "2025",
    description: "A high-speed medical dashboard redesigned for clarity, helping doctors make faster, safer decisions.",
    preview: "https://framerusercontent.com/images/1JtVtYwgwzXvmSxwKH7TDNE7FY.png",
    problemHeading: "In a high-stakes hospital environment, speed saves lives, and the previous dashboard was dangerously slow to navigate.",
    problemBody: "The interface was cluttered with redundant menus, tiny text, and poor hierarchy. Doctors were forced to spend valuable minutes clicking through layers of the system just to find basic patient charts, leading to frustration and increasing the risk of critical errors.",
    solutionHeading: "We conducted a “mobile-first” overhaul focused entirely on speed, readability, and rapid data access for medical professionals.",
    solutionBody: "We replaced the complex menu structure with a swipe-based interaction model. We implemented a strict color-coded card system to highlight critical patient alerts instantly. This design reduced average task completion time by two hours daily per doctor.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
  {
    slug: "canvas",
    title: "Canvas",
    category: "Web design",
    client: "Modern Art Museum",
    year: "2026",
    description: "A minimalist digital gallery that strips back the noise and lets the artwork speak for itself.",
    preview: "https://framerusercontent.com/images/Q26teNCQ5tcfHqhCyHT2yf5dP8.png",
    problemHeading: "The Museum's digital presence was competing with its own exhibitions, distracting users from the artwork they came to see.",
    problemBody: "The previous website utilized a heavy, colorful palette and decorative elements that fought for attention. The user interface was cluttered and “loud,” making the actual art pieces feel secondary and cheapening the gallery experience.",
    solutionHeading: "We adopted a brutalist design approach, stripping the palette back to strictly black and white to let the art breathe.",
    solutionBody: "We designed a rigorous grid system that treats the website itself as a gallery wall, using generous whitespace to frame each piece. Navigation elements were hidden until needed to reduce cognitive load, resulting in a 200% increase in online ticket sales.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
  {
    slug: "nexus",
    title: "Nexus",
    category: "Development",
    client: "Global Corp",
    year: "2026",
    description: "A unified web platform consolidating five sites into one, built for speed and editorial control.",
    preview: "https://framerusercontent.com/images/ylSzx9EHuLrS33To9Be1lZxUd3w.png",
    problemHeading: "Global Corp was suffering from serious data fragmentation, managing five different websites for various internal departments.",
    problemBody: "Each department had its own login, hosting plan, and design language. This logistical nightmare made content updates slow, expensive, and inconsistent across the brand. The marketing team couldn't move fast enough to keep up with company news.",
    solutionHeading: "We unified all five distinct sites into a single, powerful Framer project using advanced CMS architecture and filtering.",
    solutionBody: "We built a master database that allows the team to simply “tag” content by department, automatically populating the correct pages without manual input. This streamlined their workflow, reduced hosting costs by 50%, and increased update speed by 10x.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
  {
    slug: "summit",
    title: "Summit",
    category: "SEO",
    client: "Alpine Gear",
    year: "2025",
    description: "A full-scale SEO overhaul that took Alpine Gear from page four to the top spot on Google.",
    preview: "https://framerusercontent.com/images/trWfQOfehjZNffakJfa3LkFoNI.png",
    problemHeading: "Despite manufacturing superior outdoor equipment, Alpine Gear was invisible online, buried on Page 4 of Google search results.",
    problemBody: "Their site suffered from significant technical debt, slow load times, and a confusing URL structure. Search engines couldn't crawl the site effectively, meaning they were losing thousands of potential customers to inferior competitors with better SEO.",
    solutionHeading: "We executed a technical “Hub and Spoke” SEO strategy combined with a complete restructuring of the site's code.",
    solutionBody: "We rebuilt the site architecture to link all related product pages to high-authority guide content. Simultaneously, we optimized Core Web Vitals to ensure the site passed Google's strict UX metrics, propelling them to the #1 rank for 12 primary keywords.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
  {
    slug: "vault",
    title: "Vault",
    category: "UI/UX Design",
    client: "Crypto Secure",
    year: "2026",
    description: "A trust-first crypto wallet experience that guides users through complexity with calm, clear design.",
    preview: "https://framerusercontent.com/images/Vt9Ui0gskAyE2bvE7k8mxALgRg.png",
    problemHeading: "Cryptocurrency wallets suffer from a massive trust barrier, and new users found the onboarding process intimidating and confusing.",
    problemBody: "The abundance of technical jargon, private keys, and security warnings upfront was causing a high drop-off rate during signup. Users didn't feel safe; they felt overwhelmed by the complexity of the technology.",
    solutionHeading: "We designed a “Progressive Disclosure” onboarding flow to build trust gradually, prioritizing human language over technical jargon.",
    solutionBody: "Instead of overwhelming the user immediately, we introduced security steps one by one. We utilized calming blues and soft, rounded geometry to make the app feel safe. This increased user retention by 65% and earned a 4.9-star rating.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
  {
    slug: "velocity",
    title: "Velocity",
    category: "Development",
    client: "Turbo Logistics",
    year: "2025",
    description: "A blazing-fast Framer rebuild for a logistics brand, loading in 0.4 seconds with live tracking data.",
    preview: "https://framerusercontent.com/images/kcwYwENYU8F6xjobmnhX5BfLFOQ.png",
    problemHeading: "Velocity's legacy WordPress site was costing them business due to slow load times and frequent crashes during peak traffic.",
    problemBody: "In the fast-paced logistics industry, reliability is everything. The old site took over 6 seconds to load and lacked the ability to display real-time tracking data, forcing clients to call customer support instead of checking online.",
    solutionHeading: "We migrated their entire infrastructure to Framer's React-based environment to ensure enterprise-grade speed and stability.",
    solutionBody: "We wrote custom code overrides to fetch live shipping data from their API directly onto the landing page without slowing down the experience. The new site loads in 0.4 seconds and has eliminated maintenance costs entirely.",
    image1: SHARED_IMAGE_1,
    image2: SHARED_IMAGE_2,
    gallery: SHARED_GALLERY,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getOtherProjects(slug: string, count = 4): Project[] {
  const start = PROJECTS.findIndex((p) => p.slug === slug);
  const ordered = [...PROJECTS.slice(start + 1), ...PROJECTS.slice(0, start + 1)];
  return ordered.filter((p) => p.slug !== slug).slice(0, count);
}

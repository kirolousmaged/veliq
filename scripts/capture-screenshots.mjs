/**
 * One-time script: captures a 1440×900 desktop screenshot of each project
 * website and saves it to /public/uploads/[slug]-screen.jpg
 *
 * Run:  node scripts/capture-screenshots.mjs
 */
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR   = path.join(__dirname, "..", "public", "uploads");

const PROJECTS = [
  { slug: "alfa-transport",  url: "https://www.alfatransport.sa" },
  { slug: "yamin-estate",   url: "https://www.yamin.estate" },
  { slug: "saudi-hayat",    url: "https://www.saudihayat.com" },
  { slug: "fanous-clinic",  url: "https://www.fanousclinic.com" },
  { slug: "initio",          url: "https://www.initio.sa" },
  { slug: "redbone-gym",    url: "https://www.redbonegym.com" },
  { slug: "crewhub-studio", url: "https://crewhubstudio.com" },
  { slug: "captain-maged",  url: "https://captainmagedcm.com" },
  { slug: "coach-batool",   url: "https://www.coachbatool.com" },
  { slug: "coach-shiko",    url: "https://www.coachmohamedroshdy.com" },
  { slug: "bedouin-trails", url: "https://bedouintrails.com" },
  { slug: "window-adv",     url: "https://windowadv.com" },
];

async function main() {
  // Use installed Edge instead of downloading Chromium headless shell
  const browser = await chromium.launch({ channel: "msedge" });
  const page    = await browser.newPage();

  await page.setViewportSize({ width: 1440, height: 900 });

  for (const { slug, url } of PROJECTS) {
    const outPath = path.join(OUT_DIR, `${slug}-screen.jpg`);
    console.log(`📸  ${slug}  →  ${url}`);

    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
      // Wait a beat for lazy-loaded images / animations to settle
      await page.waitForTimeout(1500);

      await page.screenshot({
        path: outPath,
        type: "jpeg",
        quality: 90,
        clip: { x: 0, y: 0, width: 1440, height: 900 },
      });
      console.log(`   ✓  saved  ${outPath}`);
    } catch (err) {
      console.warn(`   ✗  failed (${err.message}) — skipping`);
    }
  }

  await browser.close();
  console.log("\nDone. Update PROJECTS.preview paths to [slug]-screen.jpg");
}

main().catch((e) => { console.error(e); process.exit(1); });

import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { resolve } from "path";

const envContent = readFileSync(resolve(process.cwd(), ".env.local"), "utf-8");
for (const line of envContent.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
}

async function check() {
  const sql = neon(process.env.DATABASE_URL || process.env.POSTGRES_URL!);
  const rows = await sql`SELECT data FROM collections WHERE name = 'services'`;
  const services = rows[0].data as any[];
  console.log(`Total services: ${services.length}`);
  services.forEach((s: any) => console.log(`  ${s.id}. ${s.slug} — ${s.title}`));
}

check();

import { neon } from "@neondatabase/serverless";

function getSQL() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL or POSTGRES_URL environment variable is not set. " +
        "Create a Neon Postgres database in Vercel Storage and pull env vars."
    );
  }
  return neon(url);
}

// ── Initialize tables ──

export async function initDB() {
  const sql = getSQL();
  await sql`
    CREATE TABLE IF NOT EXISTS collections (
      name TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '[]'::jsonb,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

// ── Generic getters / setters ──

export async function getCollection<T>(name: string): Promise<T[]> {
  const sql = getSQL();

  // Ensure table exists
  await sql`
    CREATE TABLE IF NOT EXISTS collections (
      name TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '[]'::jsonb,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  const rows = await sql`SELECT data FROM collections WHERE name = ${name}`;
  if (rows.length === 0) return [];
  return rows[0].data as T[];
}

export async function setCollection<T>(name: string, data: T[]): Promise<void> {
  const sql = getSQL();
  await sql`
    INSERT INTO collections (name, data, updated_at)
    VALUES (${name}, ${JSON.stringify(data)}::jsonb, NOW())
    ON CONFLICT (name)
    DO UPDATE SET data = ${JSON.stringify(data)}::jsonb, updated_at = NOW()
  `;
}

// ── Typed helpers ──

export async function getServices() {
  return getCollection("services");
}

export async function setServices(data: unknown[]) {
  return setCollection("services", data);
}

export async function getProjects() {
  return getCollection("projects");
}

export async function setProjects(data: unknown[]) {
  return setCollection("projects", data);
}

export async function getBlogs() {
  return getCollection("blogs");
}

export async function setBlogs(data: unknown[]) {
  return setCollection("blogs", data);
}

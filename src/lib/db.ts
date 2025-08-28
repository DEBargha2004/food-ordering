import { Pool } from "pg";
import { env } from "./env";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 20,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
});

export const db = drizzle({
  client: pool,
});

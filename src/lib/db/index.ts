import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

// Gunakan koneksi global yang sudah ada jika ada, jika tidak buat baru.
// Ini mencegah error "too many connections" saat Next.js hot-reload di development.
const client = globalForDb.conn ?? postgres(connectionString, { prepare: false });

if (process.env.NODE_ENV !== "production") {
  globalForDb.conn = client;
}

export const db = drizzle(client, { schema });

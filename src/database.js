import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();

export const pool = createPool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    uri: process.env.DATABASE_URL
  });
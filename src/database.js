import pg from 'pg';
const { Pool } = pg;

import { config } from "dotenv";
config();

export const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  });


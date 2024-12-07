import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from './schema';


const sql = neon(
    "postgresql://neondb_owner:qS4VcrZ0XFzI@ep-orange-bird-a5npy8sw.us-east-2.aws.neon.tech/waste-manage?sslmode=require"
);

export const db = drizzle(sql, {schema});
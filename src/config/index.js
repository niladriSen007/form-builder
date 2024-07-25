import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

const sql = neon('postgresql://neondb_owner:wPFNv4iC2pGL@ep-fragrant-wind-a5qeuolt-pooler.us-east-2.aws.neon.tech/new-form-builder?sslmode=require')
export const drizzleDb = drizzle(sql, { schema })

/* const result = await db.select().from(); */

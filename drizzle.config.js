import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./src/config/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:wPFNv4iC2pGL@ep-fragrant-wind-a5qeuolt-pooler.us-east-2.aws.neon.tech/new-form-builder?sslmode=require'
  }
});

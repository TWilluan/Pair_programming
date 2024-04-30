import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString : "postgres://postgres:dev-finder@localhost:5432/postgres",
  },
  verbose: true,
  strict: true,
})
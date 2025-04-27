import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Declare exports
let pool: any;
let db: any;

// In local development, use mock database
if (process.env.NODE_ENV === 'development' && !process.env.USE_REAL_DB) {
  console.log('Using mock database for local development');
  
  // Mock database client
  class MockClient {
    async query() {
      return { rows: [] };
    }
  }

  pool = new MockClient();

  // Create a mock drizzle database interface
  db = {
    query: async () => [],
    select: () => ({
      from: () => ({
        where: () => ({
          get: async () => null,
          all: async () => [],
        }),
        all: async () => [],
      }),
    }),
    insert: () => ({
      values: () => ({
        returning: () => ({
          get: async () => ({}),
        }),
      }),
    }),
    delete: () => ({
      where: () => ({
        returning: () => ({
          get: async () => ({}),
        }),
      }),
    }),
    update: () => ({
      set: () => ({
        where: () => ({
          returning: () => ({
            get: async () => ({}),
          }),
        }),
      }),
    }),
  };
} else {
  // For production or if real DB is requested
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  }

  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle({ client: pool, schema });
}

// Export the variables
export { pool, db };
// This is a mock database for local development
import * as schema from "@shared/schema";

// Mock database client
class MockClient {
  async query() {
    return { rows: [] };
  }
}

export const pool = new MockClient();

// Create a mock drizzle database interface
export const db = {
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
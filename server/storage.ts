import { 
  users, 
  contactSubmissions, 
  volunteerApplications,
  type User, 
  type InsertUser, 
  type ContactSubmission, 
  type InsertContact,
  type VolunteerApplication,
  type InsertVolunteer
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  insertContactSubmission(data: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  insertVolunteerApplication(data: InsertVolunteer): Promise<VolunteerApplication>;
  getVolunteerApplications(): Promise<VolunteerApplication[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async insertContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values({
        ...data,
        createdAt: new Date()
      })
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  async insertVolunteerApplication(data: InsertVolunteer): Promise<VolunteerApplication> {
    const [application] = await db
      .insert(volunteerApplications)
      .values({
        ...data,
        createdAt: new Date()
      })
      .returning();
    return application;
  }

  async getVolunteerApplications(): Promise<VolunteerApplication[]> {
    return await db.select().from(volunteerApplications);
  }
}

export const storage = new DatabaseStorage();

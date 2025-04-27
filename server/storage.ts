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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private volunteers: Map<number, VolunteerApplication>;
  userCurrentId: number;
  contactCurrentId: number;
  volunteerCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.volunteers = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.volunteerCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async insertContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const createdAt = new Date();
    const submission: ContactSubmission = { 
      ...data, 
      id, 
      createdAt 
    };
    this.contacts.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }

  async insertVolunteerApplication(data: InsertVolunteer): Promise<VolunteerApplication> {
    const id = this.volunteerCurrentId++;
    const createdAt = new Date();
    const application: VolunteerApplication = { 
      ...data, 
      id, 
      createdAt 
    };
    this.volunteers.set(id, application);
    return application;
  }

  async getVolunteerApplications(): Promise<VolunteerApplication[]> {
    return Array.from(this.volunteers.values());
  }
}

export const storage = new MemStorage();

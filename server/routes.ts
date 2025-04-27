import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertVolunteerSchema, 
  type InsertContact, 
  type InsertVolunteer 
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const result = await storage.insertContactSubmission(contactData);
      
      res.status(201).json({
        status: "success",
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        status: "error",
        message: "Failed to submit contact form"
      });
    }
  });

  // Volunteer application endpoint
  app.post("/api/volunteer", async (req, res) => {
    try {
      const volunteerData = insertVolunteerSchema.parse(req.body);
      const result = await storage.insertVolunteerApplication(volunteerData);
      
      res.status(201).json({
        status: "success",
        message: "Volunteer application submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        status: "error",
        message: "Failed to submit volunteer application"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

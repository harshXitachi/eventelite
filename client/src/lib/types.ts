// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  message: string;
}

// Volunteer form types
export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience?: string;
}

// API response types
export interface ApiResponse<T> {
  status: "success" | "error";
  message: string;
  data?: T;
}

import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  duration: string;
  priceFrom: string;
}

export interface Doctor {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  education: string[];
  languages: string[];
  rating: number;
  reviews: number;
  initials: string;
  accent: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  treatment: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface BookingFormData {
  doctorId: string;
  treatmentId: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

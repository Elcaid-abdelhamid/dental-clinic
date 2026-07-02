import {
  Sparkles,
  Sun,
  Anchor,
  AlignCenter,
  Baby,
  Smile,
  Activity,
  Siren,
} from "lucide-react";
import type { Service, Doctor, Testimonial, FAQItem } from "@/types";

export const clinicInfo = {
  name: "Brightline Dental",
  tagline: "Precision dentistry, delivered with warmth.",
  phone: "+212 522 45 67 89",
  whatsapp: "+212 661 23 45 67",
  email: "hello@brightlinedental.com",
  address: "12 Boulevard Zerktouni, Casablanca 20100, Morocco",
  hours: "Mon–Sat: 9:00 AM – 7:00 PM",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.789!2d-7.6298!3d33.5898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
};

export const services: Service[] = [
  {
    slug: "dental-cleaning",
    title: "Dental Cleaning",
    description: "Professional plaque and tartar removal for a healthier, brighter smile.",
    longDescription:
      "Our hygienists use ultrasonic scaling and polishing to remove plaque buildup, prevent gum disease, and keep your enamel strong. Recommended every 6 months for optimal oral health.",
    icon: Sparkles,
    duration: "30–45 min",
    priceFrom: "300 MAD",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Advanced LED whitening treatment for up to 8 shades brighter in one visit.",
    longDescription:
      "Using medical-grade peroxide gel activated by LED light, our in-clinic whitening removes years of staining from coffee, tea, and tobacco safely and comfortably.",
    icon: Sun,
    duration: "60 min",
    priceFrom: "1,200 MAD",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacement with titanium implant technology.",
    longDescription:
      "We place biocompatible titanium implants topped with custom porcelain crowns, restoring full chewing function and a seamless smile that lasts a lifetime with proper care.",
    icon: Anchor,
    duration: "90 min / session",
    priceFrom: "6,500 MAD",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    description: "Invisible aligners and traditional braces to straighten teeth at any age.",
    longDescription:
      "From clear aligners to ceramic braces, our orthodontic plans are tailored with 3D digital scanning for precise, predictable results and fewer in-chair adjustments.",
    icon: AlignCenter,
    duration: "45 min / visit",
    priceFrom: "8,900 MAD",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle, friendly dental care designed specifically for children.",
    longDescription:
      "Our pediatric specialists create a calm, playful environment so kids build positive dental habits early, with preventive sealants, fluoride treatments, and cavity checks.",
    icon: Baby,
    duration: "30 min",
    priceFrom: "250 MAD",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers crafted for your ideal aesthetic.",
    longDescription:
      "We combine porcelain veneers, composite bonding, and gum contouring to design a smile makeover unique to your facial features, using digital smile preview technology.",
    icon: Smile,
    duration: "Varies",
    priceFrom: "2,800 MAD",
  },
  {
    slug: "root-canal",
    title: "Root Canal",
    description: "Pain-free treatment to save infected teeth using rotary endodontics.",
    longDescription:
      "Rotary instruments and digital imaging let us clean and seal infected root canals with minimal discomfort, preserving your natural tooth and relieving pain fast.",
    icon: Activity,
    duration: "60–75 min",
    priceFrom: "1,500 MAD",
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    description: "Same-day appointments for dental trauma, severe pain, and urgent repairs.",
    longDescription:
      "Sudden toothache, a chipped tooth, or a lost filling? Our emergency line is monitored during opening hours with same-day slots reserved for urgent cases.",
    icon: Siren,
    duration: "On demand",
    priceFrom: "400 MAD",
  },
];

export const doctors: Doctor[] = [
  {
    slug: "dr-amina-benjelloun",
    name: "Dr. Amina Benjelloun",
    role: "Founder & Lead Dentist",
    specialty: "Cosmetic & General Dentistry",
    bio: "Dr. Benjelloun founded Brightline Dental in 2014 after specializing in aesthetic dentistry in Lyon. She has led over 4,000 smile transformations.",
    experience: "14 years",
    education: ["DDS, Université Hassan II Casablanca", "Aesthetic Dentistry Certificate, Lyon"],
    languages: ["Arabic", "French", "English"],
    rating: 4.9,
    reviews: 312,
    initials: "AB",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    slug: "dr-youssef-idrissi",
    name: "Dr. Youssef Idrissi",
    role: "Implant & Oral Surgery Specialist",
    specialty: "Dental Implants & Oral Surgery",
    bio: "Dr. Idrissi trained in maxillofacial surgery and focuses on complex implant cases, bone grafting, and full-arch restorations.",
    experience: "11 years",
    education: ["DDS, Université Mohammed V Rabat", "Oral Surgery Fellowship, Madrid"],
    languages: ["Arabic", "French", "Spanish"],
    rating: 4.8,
    reviews: 198,
    initials: "YI",
    accent: "from-cyan-500 to-teal-400",
  },
  {
    slug: "dr-salma-hannouni",
    name: "Dr. Salma Hannouni",
    role: "Orthodontist",
    specialty: "Orthodontics & Invisible Aligners",
    bio: "Dr. Hannouni specializes in clear aligner therapy and digital orthodontic planning for both teens and adults.",
    experience: "9 years",
    education: ["DDS, Université Hassan II Casablanca", "Orthodontics MSc, Paris Descartes"],
    languages: ["Arabic", "French", "English"],
    rating: 5.0,
    reviews: 156,
    initials: "SH",
    accent: "from-blue-500 to-sky-400",
  },
  {
    slug: "dr-karim-fassi",
    name: "Dr. Karim Fassi",
    role: "Pediatric Dentist",
    specialty: "Pediatric & Preventive Dentistry",
    bio: "Dr. Fassi has dedicated his career to making dental visits stress-free for children, with a gentle, playful approach.",
    experience: "8 years",
    education: ["DDS, Université Hassan II Casablanca", "Pediatric Dentistry Diploma, Casablanca"],
    languages: ["Arabic", "French"],
    rating: 4.9,
    reviews: 141,
    initials: "KF",
    accent: "from-teal-500 to-cyan-400",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sara M.",
    role: "Patient since 2021",
    content:
      "The whitening treatment gave me visible results after one session, and the team explained every step before starting. Booking online was effortless.",
    rating: 5,
    initials: "SM",
    treatment: "Teeth Whitening",
  },
  {
    name: "Omar T.",
    role: "Implant patient",
    content:
      "I was nervous about implants, but Dr. Idrissi walked me through the whole process and the recovery was far smoother than I expected.",
    rating: 5,
    initials: "OT",
    treatment: "Dental Implants",
  },
  {
    name: "Nadia R.",
    role: "Parent of two",
    content:
      "My kids actually look forward to their checkups now. Dr. Fassi has a real gift for making dental visits fun instead of scary.",
    rating: 5,
    initials: "NR",
    treatment: "Pediatric Dentistry",
  },
  {
    name: "Hicham B.",
    role: "Orthodontics patient",
    content:
      "Clear aligners from Brightline straightened my teeth in under a year. The digital scan preview showing my future smile sold me instantly.",
    rating: 4,
    initials: "HB",
    treatment: "Orthodontics",
  },
  {
    name: "Leila K.",
    role: "Emergency visit",
    content:
      "Chipped a tooth on a Friday evening and got a same-day appointment. Fast, professional, and painless — exactly what I needed.",
    rating: 5,
    initials: "LK",
    treatment: "Emergency Care",
  },
];

export const faqs: FAQItem[] = [
  {
    category: "Booking",
    question: "How do I book an appointment online?",
    answer:
      "Use the Book Appointment button, choose your treatment and preferred dentist, pick an available slot on the calendar, and confirm your details. You'll receive an instant confirmation by email and SMS.",
  },
  {
    category: "Booking",
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel up to 24 hours before your appointment through the confirmation link sent to your email, or by calling the clinic directly.",
  },
  {
    category: "Payments",
    question: "Do you accept health insurance?",
    answer:
      "We work with most major Moroccan insurance providers (CNOPS, CNSS-AMO, and private insurers). Bring your insurance card and we'll handle the claim paperwork for you.",
  },
  {
    category: "Payments",
    question: "What payment methods are available?",
    answer:
      "We accept cash, credit/debit cards, and installment plans for treatments over 3,000 MAD such as implants and orthodontics.",
  },
  {
    category: "Treatments",
    question: "Is teeth whitening safe for enamel?",
    answer:
      "Yes. Our in-clinic whitening uses controlled, dentist-supervised concentrations that are clinically tested to protect enamel while lightening stains effectively.",
  },
  {
    category: "Treatments",
    question: "How long do dental implants last?",
    answer:
      "With good oral hygiene and regular checkups, dental implants typically last 15–25 years, and the titanium post itself can last a lifetime.",
  },
  {
    category: "Clinic",
    question: "Do you handle dental emergencies outside opening hours?",
    answer:
      "Our emergency line is monitored during clinic hours (9 AM–7 PM). For after-hours emergencies, our AI assistant can guide you through first-aid steps and flag urgent cases for the next morning.",
  },
  {
    category: "Clinic",
    question: "Is the clinic suitable for young children?",
    answer:
      "Absolutely. Our pediatric wing is designed specifically for children, with a dedicated play area and a specialist trained in gentle, child-friendly care.",
  },
];

export const stats = [
  { label: "Years of Experience", value: "14+" },
  { label: "Patients Treated", value: "12,400+" },
  { label: "Certified Specialists", value: "8" },
  { label: "Google Rating", value: "4.9/5" },
];

export const whyChooseUs = [
  {
    title: "Experienced Doctors",
    description: "Our specialists average over a decade of clinical experience across every discipline.",
  },
  {
    title: "Modern Equipment",
    description: "3D scanning, digital X-rays, and rotary endodontics for precise, comfortable treatment.",
  },
  {
    title: "Affordable Prices",
    description: "Transparent pricing with flexible installment plans on major treatments.",
  },
  {
    title: "Emergency Support",
    description: "Same-day emergency slots reserved daily for urgent dental trauma or pain.",
  },
  {
    title: "AI Assistant Available 24/7",
    description: "Get instant answers, triage guidance, and booking help any time — day or night.",
  },
];

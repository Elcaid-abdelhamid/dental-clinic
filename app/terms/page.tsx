import type { Metadata } from "next";
import { clinicInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Brightline Dental's website and booking services.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body:
      "By accessing this website or booking an appointment through it, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the site.",
  },
  {
    title: "2. Appointments and bookings",
    body:
      "Appointments booked online are subject to confirmation. We reserve the right to reschedule appointments due to clinical emergencies, and will notify you as early as possible. Please arrive on time; late arrivals may require rescheduling.",
  },
  {
    title: "3. Cancellations",
    body:
      "Appointments may be cancelled or rescheduled free of charge up to 24 hours in advance. Repeated no-shows without notice may result in a request for prepayment for future bookings.",
  },
  {
    title: "4. AI assistant disclaimer",
    body:
      "Our AI assistant provides general information and booking support only. It does not replace professional dental diagnosis or treatment advice. For medical concerns, always consult a licensed dentist directly.",
  },
  {
    title: "5. Fees and payment",
    body:
      "Treatment prices listed on this website are starting estimates and may vary based on individual diagnosis. A detailed quote will always be provided and confirmed before treatment begins.",
  },
  {
    title: "6. Website use",
    body:
      "Content on this website — including text, images, and branding — is the property of Brightline Dental and may not be reproduced without written permission.",
  },
  {
    title: "7. Limitation of liability",
    body:
      "While we strive for accuracy, Brightline Dental is not liable for any indirect damages arising from reliance on general information published on this website.",
  },
  {
    title: "8. Governing law",
    body:
      "These terms are governed by the laws of the Kingdom of Morocco. Any disputes shall be subject to the exclusive jurisdiction of the courts of Casablanca.",
  },
];

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective date: January 1, 2026</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Please read these terms carefully before using the Brightline Dental website or
          booking system.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-sm font-semibold">Questions about these terms?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {clinicInfo.email} · {clinicInfo.phone} · {clinicInfo.address}
          </p>
        </div>
      </div>
    </section>
  );
}

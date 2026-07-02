import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { LocationSection } from "@/components/location-section";
import { clinicInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Brightline Dental — call, email, or send us a message and our team will respond within one business day.",
};

const infoCards = [
  { icon: Phone, title: "Call us", value: clinicInfo.phone },
  { icon: Mail, title: "Email us", value: clinicInfo.email },
  { icon: MapPin, title: "Visit us", value: clinicInfo.address },
  { icon: Clock, title: "Working hours", value: clinicInfo.hours },
];

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              We&apos;d love to <span className="text-gradient">hear from you</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Questions about a treatment, insurance, or your upcoming visit? Reach out any way
              that&apos;s convenient.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { DoctorsSection } from "@/components/doctors-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { LocationSection } from "@/components/location-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { ContactForm } from "@/components/contact-form";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Brightline Dental is a premium dental clinic in Casablanca offering cleanings, whitening, implants, orthodontics, and 24/7 AI-assisted booking.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <DoctorsSection />
      <TestimonialsSection />

      <section className="section">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Can&apos;t find your answer? Chat with our AI assistant or reach out directly.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <LocationSection />

      <section className="section bg-muted/30">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get in <span className="text-gradient">touch</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have a question before booking? Send us a message and we&apos;ll respond within one
              business day.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

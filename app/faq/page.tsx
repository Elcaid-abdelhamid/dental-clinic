import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking, payments, treatments, and clinic policies at Brightline Dental.",
};

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Still have questions? Our AI assistant is available 24/7, or reach out via the
            contact page.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <FAQAccordion items={faqs} showCategories />
        </div>
      </div>
    </section>
  );
}

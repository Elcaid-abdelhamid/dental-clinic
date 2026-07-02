import type { Metadata } from "next";
import { clinicInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Brightline Dental collects, uses, and protects your personal and medical information.",
};

const sections = [
  {
    title: "1. Information we collect",
    body:
      "When you book an appointment, contact us, or chat with our AI assistant, we collect information such as your name, email address, phone number, date of birth, and relevant medical or dental history necessary to provide safe treatment.",
  },
  {
    title: "2. How we use your information",
    body:
      "We use your information to schedule and manage appointments, communicate treatment plans, process payments and insurance claims, send appointment reminders, and improve our services through the AI assistant and booking system.",
  },
  {
    title: "3. AI assistant and automated tools",
    body:
      "Our AI assistant may process the messages you send to help answer questions or assist with booking. Conversations may be reviewed to improve accuracy and service quality. Do not share sensitive medical details you are not comfortable disclosing through chat.",
  },
  {
    title: "4. Data sharing",
    body:
      "We do not sell your personal data. Information may be shared with insurance providers for claims processing, and with trusted service providers (such as scheduling, payment, or communication platforms) strictly to operate the clinic.",
  },
  {
    title: "5. Data security",
    body:
      "We apply industry-standard safeguards, including encrypted storage and restricted staff access, to protect your medical and personal records from unauthorized access.",
  },
  {
    title: "6. Your rights",
    body:
      "You may request access to, correction of, or deletion of your personal data at any time by contacting us using the details below, subject to applicable medical record retention laws.",
  },
  {
    title: "7. Cookies",
    body:
      "Our website uses essential cookies to remember your preferences (such as dark mode) and analytics cookies to understand how visitors use our site, helping us improve the experience.",
  },
  {
    title: "8. Changes to this policy",
    body:
      "We may update this Privacy Policy from time to time. Material changes will be reflected with a new effective date at the top of this page.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective date: January 1, 2026</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Brightline Dental (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to
          protecting your personal and medical information. This policy explains what we
          collect, how we use it, and the choices available to you.
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
          <h2 className="text-sm font-semibold">Contact us about privacy</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {clinicInfo.email} · {clinicInfo.phone} · {clinicInfo.address}
          </p>
        </div>
      </div>
    </section>
  );
}

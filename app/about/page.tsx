import type { Metadata } from "next";
import { HeartPulse, Microscope, Users2, Target } from "lucide-react";
import { stats } from "@/lib/data";
import { DoctorsSection } from "@/components/doctors-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Brightline Dental's story, mission, and the values that guide our patient-first approach to dentistry in Casablanca.",
};

const values = [
  {
    icon: HeartPulse,
    title: "Patient-first care",
    description: "Every treatment plan starts with listening — your comfort and goals shape our recommendations.",
  },
  {
    icon: Microscope,
    title: "Clinical precision",
    description: "We invest in digital scanning, rotary endodontics, and continuous training to raise the standard of care.",
  },
  {
    icon: Users2,
    title: "Genuine relationships",
    description: "Many of our patients have been with us for over a decade — trust is built one honest conversation at a time.",
  },
  {
    icon: Target,
    title: "Transparent pricing",
    description: "No surprises. You'll always know the cost and reasoning behind a recommendation before we proceed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section bg-dot-grid">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built around <span className="text-gradient">people</span>, not just teeth.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 2014 by Dr. Amina Benjelloun, Brightline Dental began as a two-chair
              practice with a simple idea: dental care should feel calm, transparent, and
              genuinely personal. Today we&apos;re a team of specialists treating over 12,000 patients
              a year — without losing that original, personal touch.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <p className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-400 text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DoctorsSection />
    </>
  );
}

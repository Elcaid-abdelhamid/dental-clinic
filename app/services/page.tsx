import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Brightline Dental's full range of treatments: cleanings, whitening, implants, orthodontics, pediatric and cosmetic dentistry, root canals, and emergency care.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our <span className="text-gradient">services</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From preventive care to complete smile makeovers, every treatment is delivered with
            modern equipment and a specialist&apos;s precision.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-400 text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.longDescription}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" /> {service.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Wallet className="h-3.5 w-3.5 text-primary" /> From {service.priceFrom}
                  </span>
                </div>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link href={`/appointment?treatment=${service.slug}`}>
                  Book <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

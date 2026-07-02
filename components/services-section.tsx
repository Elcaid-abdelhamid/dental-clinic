"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive care, <span className="text-gradient">all in one place</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From routine cleanings to full smile makeovers, our specialists cover every stage
              of your dental journey.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/services">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

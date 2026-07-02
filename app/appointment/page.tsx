import type { Metadata } from "next";
import { BookingCalendar } from "@/components/booking-calendar";
import { ShieldCheck, Clock3, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your dental appointment online in a few clicks — choose your treatment, dentist, and preferred time slot.",
};

export default async function AppointmentPage({
  searchParams,
}: {
  searchParams: Promise<{ doctor?: string; treatment?: string }>;
}) {
  const params = await searchParams;
  return (
    <section className="section bg-dot-grid">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Book your <span className="text-gradient">appointment</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Choose a treatment, pick a time that works for you, and we&apos;ll confirm instantly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Instant confirmation
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" /> Free rescheduling
            </span>
            <span className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-primary" /> Prefer to chat? Use the AI assistant
            </span>
          </div>
        </div>

        <div className="mt-16">
          <BookingCalendar initialDoctor={params.doctor} />
        </div>
      </div>
    </section>
  );
}

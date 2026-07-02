import type { Metadata } from "next";
import { DoctorCard } from "@/components/doctor-card";
import { doctors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet Brightline Dental's board-certified specialists across general, cosmetic, implant, orthodontic, and pediatric dentistry.",
};

export default function DoctorsPage() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Meet our <span className="text-gradient">specialists</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every dentist at Brightline is board-certified, continuously trained, and hand-picked
            for both clinical skill and genuine patient care.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

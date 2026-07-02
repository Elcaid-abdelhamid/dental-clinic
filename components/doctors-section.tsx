import { DoctorCard } from "@/components/doctor-card";
import { doctors } from "@/lib/data";

export function DoctorsSection() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our <span className="text-gradient">dentists</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Board-certified specialists dedicated to precise, compassionate care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

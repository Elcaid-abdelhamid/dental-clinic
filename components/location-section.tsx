import { MapPin, Clock, Phone } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export function LocationSection() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find us in <span className="text-gradient">Casablanca</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conveniently located with parking available on site.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Brightline Dental location map"
              src={clinicInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: MapPin, title: "Address", value: clinicInfo.address },
              { icon: Clock, title: "Opening Hours", value: clinicInfo.hours },
              { icon: Phone, title: "Phone", value: clinicInfo.phone },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

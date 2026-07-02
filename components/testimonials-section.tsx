import { Testimonial } from "@/components/testimonial";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by <span className="text-gradient">our patients</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from real patients across Casablanca.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <Testimonial key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial as TestimonialType } from "@/types";

export function Testimonial({ testimonial, index = 0 }: { testimonial: TestimonialType; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
    >
      <Quote className="h-6 w-6 text-primary/30" />
      <div className="mt-3 flex text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-3.5 w-3.5 ${i < testimonial.rating ? "fill-current" : "opacity-20"}`} />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
        &quot;{testimonial.content}&quot;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-xs font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
        </div>
      </div>
    </motion.div>
  );
}

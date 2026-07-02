"use client";

import { motion } from "framer-motion";
import { Star, GraduationCap, Languages } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@/types";

export function DoctorCard({ doctor, index = 0 }: { doctor: Doctor; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-premium"
    >
      <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${doctor.accent}`}>
        <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/40 bg-white/20 text-2xl font-bold text-white backdrop-blur-sm">
          {doctor.initials}
        </span>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {doctor.rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-semibold text-foreground">{doctor.name}</h3>
        <p className="text-sm font-medium text-primary">{doctor.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>

        <div className="mt-4 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-3.5 w-3.5 text-primary" />
            {doctor.education[0]}
          </div>
          <div className="flex items-center gap-2">
            <Languages className="h-3.5 w-3.5 text-primary" />
            {doctor.languages.join(", ")}
          </div>
        </div>

        <Button asChild size="sm" className="mt-5">
          <Link href={`/appointment?doctor=${doctor.slug}`}>Book with {doctor.name.split(" ")[1]}</Link>
        </Button>
      </div>
    </motion.div>
  );
}

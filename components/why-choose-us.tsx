"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, Wallet, Siren, Bot } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const icons = [GraduationCap, Cpu, Wallet, Siren, Bot];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why patients choose <span className="text-gradient">Brightline</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every detail of your visit is designed around comfort, precision, and trust.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-premium lg:[&:nth-child(5)]:sm:col-span-2 lg:[&:nth-child(5)]:lg:col-span-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-cyan-400 text-white shadow-premium transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareText, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dot-grid">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl animate-blob" />
        <div className="absolute top-32 -right-20 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="container-tight relative grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge variant="success" className="mb-6">
            <ShieldCheck className="h-3.5 w-3.5" /> Trusted by 12,400+ patients
          </Badge>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Precision dentistry,
            <br />
            <span className="text-gradient">delivered with warmth.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Modern equipment, board-certified specialists, and a genuinely calming experience —
            book your visit in under a minute or ask our AI assistant anything, anytime.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/appointment">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link href="/appointment">
                <MessageSquareText className="h-4 w-4" /> Chat with AI Assistant
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["AB", "YI", "SH", "KF"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-sky-500 to-cyan-400 text-xs font-semibold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9</span>
              <span className="text-muted-foreground">Google Reviews</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-float">
            <HeroIllustration />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass absolute -left-6 top-8 rounded-2xl px-4 py-3 shadow-premium"
          >
            <p className="text-xs text-muted-foreground">Next available</p>
            <p className="text-sm font-semibold text-foreground">Today, 4:30 PM</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass absolute -right-4 bottom-10 rounded-2xl px-4 py-3 shadow-premium"
          >
            <p className="text-xs text-muted-foreground">AI Assistant</p>
            <p className="text-sm font-semibold text-foreground">Online now</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="h-auto w-full drop-shadow-2xl" role="img" aria-label="Illustration of a healthy tooth being cared for">
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="210" r="190" fill="url(#heroGrad)" opacity="0.12" />
      <circle cx="210" cy="210" r="140" fill="url(#heroGrad)" opacity="0.14" />
      <path
        d="M210 90c-28 0-46 20-64 20-16 0-26-10-40-10-14 0-22 14-22 34 0 56 32 150 62 176 12 10 20 4 24-12 5-20 12-40 40-40s35 20 40 40c4 16 12 22 24 12 30-26 62-120 62-176 0-20-8-34-22-34-14 0-24 10-40 10-18 0-36-20-64-20Z"
        fill="url(#toothGrad)"
        stroke="#0891b2"
        strokeWidth="3"
      />
      <circle cx="150" cy="150" r="10" fill="#67e8f9" opacity="0.7" />
      <circle cx="270" cy="130" r="6" fill="#0ea5e9" opacity="0.6" />
      <path d="M150 260c10 14 25 22 60 22s50-8 60-22" stroke="#0891b2" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

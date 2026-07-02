"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Check,
  Stethoscope,
  User,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useBookingForm } from "@/hooks/use-booking-form";
import { doctors, services } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";
import type { TimeSlot } from "@/types";

const steps = [
  { id: 1, label: "Treatment", icon: Stethoscope },
  { id: 2, label: "Date & Time", icon: CalendarDays },
  { id: 3, label: "Your Info", icon: User },
  { id: 4, label: "Confirm", icon: CheckCircle2 },
];

function generateSlots(seed: number): TimeSlot[] {
  const times = ["09:00", "09:30", "10:00", "10:30", "11:30", "13:00", "14:00", "14:30", "15:30", "16:00", "17:00", "17:30"];
  return times.map((time, i) => ({ time, available: (i + seed) % 3 !== 0 }));
}

function getNextDays(count: number): Date[] {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export function BookingCalendar({ initialDoctor }: { initialDoctor?: string }) {
  const { step, data, update, next, back, submit, confirmed, setConfirmed, reset } = useBookingForm();
  const [dayOffset, setDayOffset] = React.useState(0);
  const days = React.useMemo(() => getNextDays(14).slice(dayOffset, dayOffset + 7), [dayOffset]);

  React.useEffect(() => {
    if (initialDoctor) update("doctorId", initialDoctor);
  }, [initialDoctor]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectedDate = React.useMemo(() => (data.date ? new Date(data.date) : null), [data.date]);
  const slots = React.useMemo(
    () => generateSlots(selectedDate ? selectedDate.getDate() : 0),
    [selectedDate]
  );

  const selectedDoctor = doctors.find((d) => d.slug === data.doctorId);
  const selectedTreatment = services.find((s) => s.slug === data.treatmentId);

  const canProceedStep1 = !!data.treatmentId && !!data.doctorId;
  const canProceedStep2 = !!data.date && !!data.time;
  const canProceedStep3 = !!data.fullName && !!data.email && !!data.phone;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Stepper */}
      <div className="mb-10 flex items-center justify-between">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const active = step === s.id;
          const done = step > s.id;
          return (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                    done && "border-primary bg-primary text-primary-foreground",
                    active && !done && "border-primary text-primary bg-primary/10",
                    !active && !done && "border-border text-muted-foreground"
                  )}
                >
                  {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span className={cn("hidden text-xs font-medium sm:block", active ? "text-primary" : "text-muted-foreground")}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn("mx-2 h-0.5 flex-1 rounded-full transition-colors", done ? "bg-primary" : "bg-border")} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <h3 className="text-lg font-semibold">Select a treatment</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => update("treatmentId", s.slug)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border p-4 text-left transition-all focus-ring",
                      data.treatmentId === s.slug ? "border-primary bg-primary/5 shadow-glow" : "border-border hover:border-primary/40"
                    )}
                  >
                    <s.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{s.title}</p>
                      <p className="text-xs text-muted-foreground">From {s.priceFrom}</p>
                    </div>
                  </button>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-semibold">Choose your dentist</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {doctors.map((d) => (
                  <button
                    key={d.slug}
                    onClick={() => update("doctorId", d.slug)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border p-4 text-left transition-all focus-ring",
                      data.doctorId === d.slug ? "border-primary bg-primary/5 shadow-glow" : "border-border hover:border-primary/40"
                    )}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${d.accent} text-xs font-semibold text-white`}>
                      {d.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.specialty}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button onClick={next} disabled={!canProceedStep1}>
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <h3 className="text-lg font-semibold">Pick a date</h3>
              <div className="mt-4 flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => setDayOffset((v) => Math.max(v - 7, 0))} aria-label="Previous week">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="grid flex-1 grid-cols-7 gap-2">
                  {days.map((day) => {
                    const iso = day.toISOString().slice(0, 10);
                    const selected = data.date === iso;
                    return (
                      <button
                        key={iso}
                        onClick={() => update("date", iso)}
                        className={cn(
                          "flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition-all focus-ring",
                          selected ? "border-primary bg-primary text-primary-foreground shadow-glow" : "border-border hover:border-primary/40"
                        )}
                      >
                        <span className="text-[10px] uppercase opacity-70">{formatDate(day).split(" ")[0]}</span>
                        <span className="text-sm font-semibold">{day.getDate()}</span>
                      </button>
                    );
                  })}
                </div>
                <Button variant="outline" size="icon" onClick={() => setDayOffset((v) => Math.min(v + 7, 7))} aria-label="Next week">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {data.date && (
                <>
                  <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold">
                    <Clock className="h-4 w-4 text-primary" /> Available slots
                  </h3>
                  <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {slots.map((slot) => (
                      <button
                        key={slot.time}
                        disabled={!slot.available}
                        onClick={() => update("time", slot.time)}
                        className={cn(
                          "rounded-xl border px-3 py-2.5 text-sm font-medium transition-all focus-ring",
                          !slot.available && "cursor-not-allowed border-border/50 text-muted-foreground/40 line-through",
                          slot.available && data.time === slot.time && "border-primary bg-primary text-primary-foreground shadow-glow",
                          slot.available && data.time !== slot.time && "border-border hover:border-primary/40"
                        )}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={back}>
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button onClick={next} disabled={!canProceedStep2}>
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <h3 className="text-lg font-semibold">Your information</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input id="fullName" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Yasmine El Amrani" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+212 6XX XXX XXX" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Textarea id="notes" value={data.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Anything we should know before your visit?" />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={back}>
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={() => {
                    next();
                  }}
                  disabled={!canProceedStep3}
                >
                  Review <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <h3 className="text-lg font-semibold">Review & confirm</h3>
              <dl className="mt-5 divide-y divide-border rounded-xl border border-border">
                {[
                  ["Treatment", selectedTreatment?.title ?? "—"],
                  ["Dentist", selectedDoctor?.name ?? "—"],
                  ["Date", selectedDate ? formatDate(selectedDate) : "—"],
                  ["Time", data.time || "—"],
                  ["Name", data.fullName],
                  ["Email", data.email],
                  ["Phone", data.phone],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between px-5 py-3 text-sm">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={back}>
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
                <Button onClick={submit}>
                  Confirm Appointment <Check className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Dialog open={confirmed} onOpenChange={(open) => { if (!open) { setConfirmed(false); reset(); } }}>
        <DialogContent>
          <div className="flex flex-col items-center py-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <DialogHeader className="mt-5 items-center text-center">
              <DialogTitle>Appointment confirmed!</DialogTitle>
              <DialogDescription>
                A confirmation has been sent to {data.email || "your email"}. We look forward to seeing
                you{selectedDate ? ` on ${formatDate(selectedDate)}` : ""}{data.time ? ` at ${data.time}` : ""}.
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-6 w-full" onClick={() => { setConfirmed(false); reset(); }}>
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

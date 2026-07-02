"use client";

import * as React from "react";
import type { BookingFormData } from "@/types";

const initialData: BookingFormData = {
  doctorId: "",
  treatmentId: "",
  date: "",
  time: "",
  fullName: "",
  email: "",
  phone: "",
  notes: "",
};

export function useBookingForm() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState<BookingFormData>(initialData);
  const [confirmed, setConfirmed] = React.useState(false);

  const totalSteps = 4;

  function update<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, totalSteps));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function reset() {
    setData(initialData);
    setStep(1);
    setConfirmed(false);
  }

  function submit() {
    // TODO: send to backend / Supabase / n8n / Google Calendar webhook
    setConfirmed(true);
  }

  return { step, setStep, totalSteps, data, update, next, back, reset, submit, confirmed, setConfirmed };
}

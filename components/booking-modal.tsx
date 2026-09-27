"use client";
// components/booking-modal.tsx

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useBookingModal } from "@/context/booking-modal-context";
import { doctors, clinicInfo } from "@/lib/data";

const timeSlots = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM", "6:00 PM"];

// Clinic's WhatsApp number (with country code, no + or spaces)
const CLINIC_WHATSAPP = "919579744727";

export function BookingModal() {
  const { isOpen, selectedDoctorId, closeModal } = useBookingModal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    message: "",
  });

  // Pre-select doctor if opened from a specific doctor card
  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, doctor: selectedDoctorId || "" }));
    }
  }, [isOpen, selectedDoctorId]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const selectedDoctorName = doctors.find((d) => d.id === form.doctor)?.name || "No preference";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello ${clinicInfo.name}, I'd like to book an appointment.

*Name:* ${form.name}
*Phone:* ${form.phone}
*Preferred Date:* ${form.date}
*Preferred Time:* ${form.time || "Any"}
*Doctor:* ${selectedDoctorName}
${form.message ? `*Message:* ${form.message}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", date: "", time: "", doctor: "", message: "" });
      closeModal();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />

      {/* Modal — bottom sheet on mobile, centered card on desktop */}
      <div
        className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl
                   max-h-[92vh] overflow-y-auto animate-slide-up sm:animate-fade-in"
      >
        {/* Drag handle (mobile only) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <span className="w-10 h-1.5 rounded-full bg-border" />
        </div>

        {/* Close button */}
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        <div className="px-6 sm:px-8 pt-3 sm:pt-8 pb-8">

          {submitted ? (
            /* ── Success State ── */
            <div className="flex flex-col items-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Opening WhatsApp…</h3>
              <p className="text-sm text-muted-foreground">
                Just hit send on WhatsApp to confirm your appointment request.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-3 bg-primary/10 text-primary">
                  Book Appointment
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Schedule Your Visit
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fill in your details — we&apos;ll confirm over WhatsApp instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text" required value={form.name} onChange={set("name")}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Phone Number *</label>
                    <input
                      type="tel" required value={form.phone} onChange={set("phone")}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Preferred Date *</label>
                    <input
                      type="date" required value={form.date} onChange={set("date")}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Select Doctor *</label>
                    <select
                      required value={form.doctor} onChange={set("doctor")}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    >
                      <option value="">Choose a doctor</option>
                      {doctors.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-2">Preferred Time</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, time: slot }))}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                          form.time === slot
                            ? "text-white border-transparent"
                            : "text-foreground/70 border-input bg-background hover:border-primary/40"
                        }`}
                        style={form.time === slot ? { background: "hsl(210,74%,40%)" } : undefined}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Message (Optional)</label>
                  <textarea
                    rows={3} value={form.message} onChange={set("message")}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                    placeholder="Any specific concern or request..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white rounded-xl shadow-blue-soft hover:shadow-blue-md hover:opacity-95 active:scale-[0.99] transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, hsl(210,74%,40%) 0%, hsl(151,56%,42%) 100%)" }}
                >
                  <Send className="w-4 h-4" />
                  Confirm via WhatsApp
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
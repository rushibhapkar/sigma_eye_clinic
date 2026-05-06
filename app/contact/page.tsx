"use client";
// app/contact/page.tsx

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { clinicInfo } from "@/lib/data";

const contactCards = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: clinicInfo.address,
    sub: null,
    href: `https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`,
    hrefLabel: "Get directions",
    accent: "hsl(210,74%,40%)",
    accentLight: "hsl(210,80%,97%)",
    accentMid: "hsl(210,75%,93%)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: clinicInfo.phone,
    sub: `Emergency: ${clinicInfo.emergency}`,
    href: `tel:${clinicInfo.phone}`,
    hrefLabel: "Call now",
    accent: "hsl(151,56%,42%)",
    accentLight: "hsl(151,70%,97%)",
    accentMid: "hsl(151,65%,92%)",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: clinicInfo.email,
    sub: "We reply within 24 hours",
    href: `mailto:${clinicInfo.email}`,
    hrefLabel: "Send email",
    accent: "hsl(210,74%,40%)",
    accentLight: "hsl(210,80%,97%)",
    accentMid: "hsl(210,75%,93%)",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: `Mon–Fri: ${clinicInfo.hours.weekdays}`,
    sub: `Sat: ${clinicInfo.hours.saturday} · Sun: ${clinicInfo.hours.sunday}`,
    href: null,
    hrefLabel: null,
    accent: "hsl(151,56%,42%)",
    accentLight: "hsl(151,70%,97%)",
    accentMid: "hsl(151,65%,92%)",
  },
];

const serviceOptions = [
  { group: "Eye Care", options: ["Comprehensive Eye Exam", "Cataract Surgery", "LASIK & Refractive Surgery", "Glaucoma Management", "Diabetic Eye Care", "Pediatric Ophthalmology"] },
  { group: "Maternity & Women's Health", options: ["Prenatal Care", "Normal & Cesarean Delivery", "High-Risk Pregnancy", "Fertility & IVF Consultation", "Gynecological Services", "Vaccination & Immunization"] },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("success");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setFormState("idle"), 5000);
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((p) => ({ ...p, [k]: e.target.value }));

  return (
    <main className="bg-background">

      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(26,110,181,0.10) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(62,200,138,0.10) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, #1A6EB5 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-border rounded-full" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-8 h-[2px] bg-border rounded-full" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 badge-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            We&apos;re Here to{" "}
            <span className="italic font-normal text-primary" style={{ fontFamily: "Georgia, serif" }}>
              Help You
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Book an appointment, ask a question, or just say hello — our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ══ CONTACT CARDS ══ */}
      <section className="relative -mt-8 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="group relative bg-card border border-border rounded-[var(--radius)] p-5 overflow-hidden shadow-blue-soft hover:shadow-blue-md hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[var(--radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: card.accent }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: card.accentMid }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.accent }} />
                </div>

                <p className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                  {card.label}
                </p>
                <p className="text-sm font-semibold text-foreground leading-snug mb-1 line-clamp-2">
                  {card.value}
                </p>
                {card.sub && (
                  <p className="text-xs text-muted-foreground mb-2">{card.sub}</p>
                )}
                {card.href && (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold mt-1 transition-all hover:gap-2"
                    style={{ color: card.accent }}
                  >
                    {card.hrefLabel}
                    {card.href.startsWith("http")
                      ? <ExternalLink className="w-3 h-3" />
                      : <ArrowRight className="w-3 h-3" />}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ FORM + MAP ══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ── Form (3 cols) ── */}
            <div className="lg:col-span-3 animate-fade-in-up animation-delay-100">
              <div className="relative bg-card border border-border rounded-[var(--radius)] p-7 sm:p-8 shadow-blue-soft overflow-hidden">

                {/* Decorative orb */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(26,110,181,0.07) 0%, transparent 70%)" }} />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-4 bg-primary/10 text-primary">
                    Book Appointment
                  </span>
                  <h2 className="text-2xl font-bold text-foreground mb-1">Send Us a Message</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill in the details below and we&apos;ll confirm your slot within 24 hours.
                  </p>

                  {formState === "success" && (
                    <div className="mb-6 p-4 rounded-xl border flex items-start gap-3 animate-fade-in"
                      style={{ background: "hsl(151,70%,97%)", borderColor: "hsl(151,40%,80%)" }}>
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "hsl(151,56%,42%)" }} />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "hsl(151,58%,28%)" }}>
                          Request submitted!
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "hsl(151,40%,40%)" }}>
                          Our team will call you back to confirm your appointment.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide">Full Name *</label>
                        <input
                          type="text" required value={formData.name} onChange={set("name")}
                          className="w-full h-11 px-4 rounded-xl border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide">Phone Number *</label>
                        <input
                          type="tel" required value={formData.phone} onChange={set("phone")}
                          className="w-full h-11 px-4 rounded-xl border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide">Email Address</label>
                      <input
                        type="email" value={formData.email} onChange={set("email")}
                        className="w-full h-11 px-4 rounded-xl border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide">Service Required *</label>
                      <select
                        required value={formData.service} onChange={set("service")}
                        className="w-full h-11 px-4 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((g) => (
                          <optgroup key={g.group} label={g.group}>
                            {g.options.map((o) => (
                              <option key={o} value={o.toLowerCase().replace(/ /g, "-")}>{o}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide">Message (Optional)</label>
                      <textarea
                        rows={4} value={formData.message} onChange={set("message")}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                        placeholder="Describe your concern or preferred appointment time..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl shadow-blue-soft hover:shadow-blue-md hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                      style={{ background: "linear-gradient(135deg, hsl(210,74%,40%) 0%, hsl(151,56%,42%) 100%)" }}
                    >
                      <Send className="w-4 h-4" />
                      Submit Appointment Request
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* ── Right col (2 cols): hours detail + map ── */}
            <div className="lg:col-span-2 flex flex-col gap-6 animate-fade-in-up animation-delay-200">

              {/* Hours card */}
              <div className="bg-card-dark rounded-[var(--radius)] p-6 relative overflow-hidden">
                <span className="absolute -right-8 -top-8 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "rgba(255,255,255,0.04)" }} />
                <span className="absolute right-8 -bottom-10 w-24 h-24 rounded-full pointer-events-none"
                  style={{ background: "rgba(62,200,138,0.10)" }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(62,200,138,0.15)" }}>
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-white font-semibold text-sm">Clinic Hours</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Mon – Fri", time: clinicInfo.hours.weekdays },
                      { day: "Saturday", time: clinicInfo.hours.saturday },
                      { day: "Sunday", time: clinicInfo.hours.sunday },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                        <span className="text-white/60 text-xs">{h.day}</span>
                        <span className="text-white text-xs font-semibold">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">24/7 Emergency</p>
                      <a href={`tel:${clinicInfo.emergency}`} className="text-white text-xs font-semibold hover:text-accent transition-colors">
                        {clinicInfo.emergency}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map card */}
              <div className="flex-1 bg-card border border-border rounded-[var(--radius)] overflow-hidden shadow-blue-soft min-h-[200px]">
                <div className="h-full flex flex-col items-center justify-center p-6 text-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-blue-soft"
                    style={{ background: "hsl(210,80%,97%)" }}>
                    <MapPin className="w-7 h-7" style={{ color: "hsl(210,74%,40%)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{clinicInfo.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{clinicInfo.address}</p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white rounded-full transition-all hover:opacity-90 hover:scale-[1.03] shadow-sm"
                    style={{ background: "hsl(210,74%,40%)" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
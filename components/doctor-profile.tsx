"use client";
// components/doctor-profile.tsx
//components\doctor-profile.tsx

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  Building2,
  CheckCircle2,
  GraduationCap,
  Stethoscope,
} from "lucide-react";
import { clinicInfo } from "@/lib/data";
import type { Doctor, Lang } from "@/lib/data";

// Clinic reception WhatsApp (country code, no + or spaces)
const CLINIC_WHATSAPP = "919579744727";

const languages: { key: Lang; label: string }[] = [
  { key: "en", label: "English" },
  { key: "hi", label: "हिन्दी" },
  { key: "mr", label: "मराठी" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.71 14.15c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.61-.6-2.83-1.22-4.68-4.06-4.82-4.25-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.27-.28.58-.35.77-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 1.99.9 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="bg-card border border-border rounded-[var(--radius)] p-5 sm:p-6 shadow-blue-soft">
      <div className="flex items-center gap-2.5 mb-4">
        {icon}
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const [lang, setLang] = useState<Lang>("en");

  const bookingMessage = `Hello ${clinicInfo.name}, I'd like to book an appointment with ${doctor.name}. Please share the available slots.`;
  const bookingUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(bookingMessage)}`;

  const iconWrap = (child: React.ReactNode) => (
    <span
      className="w-8 h-8 rounded-lg flex items-center justify-center"
      style={{ background: doctor.accentLight, color: doctor.accent }}
    >
      {child}
    </span>
  );

  return (
    <main className="bg-background min-h-screen pt-28 sm:pt-32 pb-28 lg:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to our doctors
        </Link>

        {/* ── Header card ── */}
        <div className="bg-card border border-border rounded-[var(--radius)] p-5 sm:p-7 shadow-blue-soft mb-6">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 items-center sm:items-start text-center sm:text-left">

            <div
              className="relative shrink-0 w-40 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden"
              style={{ background: doctor.accentLight, boxShadow: "0 12px 32px rgba(26,110,181,0.18)" }}
            >
              <Image
                src={doctor.image}
                alt={`Photo of ${doctor.name}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 160px, 176px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ background: doctor.accentLight, color: doctor.accent }}
              >
                {doctor.specialty}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-1.5">
                {doctor.name}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-1">{doctor.role}</p>
              <p className="text-sm font-semibold mb-4" style={{ color: doctor.accent }}>
                {doctor.qualification}
              </p>

              {doctor.yearsLabel && (
                <p className="inline-flex items-center gap-2 text-sm text-foreground/80 mb-5">
                  <Award className="w-4 h-4" style={{ color: doctor.accent }} />
                  {doctor.yearsLabel}
                </p>
              )}

              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                <a
                  href={doctor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${doctor.name} on Instagram`}
                  className="inline-flex max-w-full items-center gap-3 p-2 pr-4 rounded-2xl border border-border bg-white text-left hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-sm font-semibold text-foreground truncate">
                      @{doctor.instagramHandle}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      <strong className="font-semibold text-foreground/80">{doctor.instagramFollowers}</strong> followers,{" "}
                      <strong className="font-semibold text-foreground/80">{doctor.instagramPosts}</strong> posts
                    </span>
                  </span>
                  <span
                    className="hidden sm:inline-block shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full text-white"
                    style={{ background: doctor.accent }}
                  >
                    Follow
                  </span>
                </a>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                  style={{ background: doctor.accent }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content grid ── */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* Left: About + Expertise */}
          <div className="lg:col-span-2 space-y-6">

            <Card title="About the doctor" icon={iconWrap(<Stethoscope className="w-4 h-4" />)}>
              {/* Language switcher */}
              <div role="tablist" aria-label="Choose language" className="inline-flex p-1 rounded-full bg-muted mb-5">
                {languages.map((l) => (
                  <button
                    key={l.key}
                    role="tab"
                    aria-selected={lang === l.key}
                    onClick={() => setLang(l.key)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      lang === l.key ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={lang === l.key ? { color: doctor.accent } : undefined}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <div lang={lang} className="space-y-4">
                {doctor.about[lang].map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-foreground/80 leading-7 sm:leading-8">
                    {para}
                  </p>
                ))}
              </div>
            </Card>

            <Card title="Areas of expertise" icon={iconWrap(<CheckCircle2 className="w-4 h-4" />)}>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {doctor.expertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-snug">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: doctor.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Right: Education + Associations */}
          <div className="space-y-6">

            <Card title="Education & training" icon={iconWrap(<GraduationCap className="w-4 h-4" />)}>
              <ol className="relative border-l border-border ml-1.5 space-y-5">
                {doctor.education.map((e) => (
                  <li key={e.title} className="pl-5 relative">
                    <span
                      className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
                      style={{ background: doctor.accent }}
                    />
                    <p className="text-sm font-semibold text-foreground leading-snug">{e.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{e.place}</p>
                  </li>
                ))}
              </ol>
            </Card>

            <Card title="Associated with" icon={iconWrap(<Building2 className="w-4 h-4" />)}>
              <ul className="space-y-4">
                {doctor.associations.map((a) => (
                  <li key={a.place}>
                    <p className="text-sm font-semibold text-foreground leading-snug">{a.place}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{a.role}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* ── Sticky booking bar (mobile & tablet) ──
          pr-20 keeps the button clear of the floating WhatsApp/Instagram/YouTube icons */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-border pl-4 pr-20 py-3 flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-muted-foreground leading-none mb-1">Consult with</p>
          <p className="text-sm font-semibold text-foreground truncate">{doctor.name}</p>
        </div>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white shadow-sm active:scale-[0.97] transition-transform"
          style={{ background: doctor.accent }}
        >
          <WhatsAppIcon className="w-4 h-4" />
          Book
        </a>
      </div>
    </main>
  );
}
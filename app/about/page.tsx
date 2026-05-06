"use client";
// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Stethoscope,
  Eye,
} from "lucide-react";
import { doctors, clinicInfo } from "@/lib/data";

const clinicStats = [
  { value: "22+", label: "Years Active" },
  { value: "18k+", label: "Patients Served" },
  { value: "97%", label: "Satisfaction" },
  { value: "2", label: "Specialities" },
];

const doctorMeta: Record<
  string,
  {
    availableDays: string;
    floor: string;
    rating: number;
    specialtyIcon: React.ReactNode;
    heroBg: string;
    accentBadgeClass: string;
    btnBg: string;
    tags: string[];
    floatLabel: string;
  }
> = {
  d1: {
    availableDays: "Mon – Sat, 9am – 6pm",
    floor: "Clinic A, 1st Floor",
    rating: 4.9,
    specialtyIcon: <Eye className="w-3.5 h-3.5" />,
    heroBg: "from-[hsl(210,80%,97%)] via-[hsl(210,70%,93%)] to-[hsl(210,60%,88%)]",
    accentBadgeClass: "bg-[hsl(210,75%,93%)] text-[hsl(210,74%,32%)]",
    btnBg: "hsl(210,74%,40%)",
    tags: ["Cataract Surgery", "LASIK / SMILE", "Retinal Care", "Glaucoma"],
    floatLabel: "Ophthalmology",
  },
  d2: {
    availableDays: "Tue – Sun, 10am – 7pm",
    floor: "Clinic B, Ground Floor",
    rating: 4.9,
    specialtyIcon: <Stethoscope className="w-3.5 h-3.5" />,
    heroBg: "from-[hsl(151,70%,97%)] via-[hsl(151,60%,92%)] to-[hsl(151,50%,86%)]",
    accentBadgeClass: "bg-[hsl(151,65%,92%)] text-[hsl(151,58%,28%)]",
    btnBg: "hsl(151,56%,42%)",
    tags: ["High-Risk Pregnancy", "Laparoscopy", "IVF Consultation", "Gynecology"],
    floatLabel: "OB-GYN",
  },
};

export function AboutPage() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,110,181,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(62,200,138,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1A6EB5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-14 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-10 h-[2px] bg-border rounded-full" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-10 h-[2px] bg-border rounded-full" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 badge-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-3">
            Expert Care for{" "}
            <span className="italic text-primary font-normal" style={{ fontFamily: "Georgia, serif" }}>
              Vision & Motherhood
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            {clinicInfo.name} brings together two dedicated specialists under one roof — delivering
            world-class eye care and compassionate maternity services.
          </p>
        </div>

        {/* ── Clinic Banner ── */}
        <div className="relative rounded-[var(--radius)] overflow-hidden mb-10 animate-fade-in-up animation-delay-100 shadow-blue-md">
          <div className="bg-card-dark px-6 py-7 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <span
              className="absolute -right-16 -top-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.04)" }}
            />
            <span
              className="absolute right-24 -bottom-20 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "rgba(62,200,138,0.10)" }}
            />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-1">
                {clinicInfo.tagline}
              </p>
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug mb-2">
                {clinicInfo.name}
              </h3>
              <div className="flex flex-wrap gap-4 text-white/60 text-xs">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {clinicInfo.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  Weekdays {clinicInfo.hours.weekdays}
                </span>
              </div>
            </div>
            <div className="relative z-10 flex gap-5 sm:gap-8 shrink-0 flex-wrap">
              {clinicStats.map((s, i) => (
                <div key={s.label} className="flex items-stretch gap-5 sm:gap-8">
                  {i !== 0 && <div className="w-px self-stretch bg-white/10" />}
                  <div className="text-center">
                    <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "Georgia, serif" }}>
                      {s.value}
                    </p>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Doctor Cards — Nuvica hero style ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {doctors.map((doc, idx) => {
            const meta = doctorMeta[doc.id];
            if (!meta) return null;

            return (
              <div
                key={doc.id}
                className="group relative bg-card border border-border rounded-[var(--radius)] overflow-hidden shadow-blue-soft hover:shadow-blue-md hover:-translate-y-1 transition-all duration-300 ease-out animate-fade-in-up"
                style={{ animationDelay: `${200 + idx * 150}ms` }}
              >

                {/* ══ HERO PHOTO ZONE ══ */}
                <div className={`relative bg-gradient-to-b ${meta.heroBg} overflow-hidden`}>

                  {/* Soft radial glow behind figure */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(255,255,255,0.6) 0%, transparent 65%)",
                    }}
                  />

                  {/* Floating badge — specialty (top-left) */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 border border-white shadow-sm backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: meta.btnBg }} />
                    <span className="text-[11px] font-semibold text-foreground leading-none">
                      {meta.floatLabel}
                    </span>
                  </div>

                  {/* Floating badge — experience (top-right) */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 border border-white shadow-sm backdrop-blur-sm">
                    <Award className="w-3 h-3 shrink-0" style={{ color: meta.btnBg }} />
                    <span className="text-[11px] font-semibold text-foreground leading-none">
                      {doc.experience}
                    </span>
                  </div>

                  {/* ── Big doctor photo ── */}
                  <div className="flex justify-center items-end pt-10 px-6 pb-0">
                    <div
                      className="relative transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-y-2"
                      style={{ width: "clamp(160px, 55%, 220px)", aspectRatio: "3/4" }}
                    >
                      <Image
                        src={doc.image}
                        alt={`Photo of ${doc.name}`}
                        fill
                        priority={idx === 0}
                        className="object-cover object-top rounded-2xl"
                        style={{ boxShadow: "0 20px 56px rgba(26,110,181,0.22)" }}
                        sizes="(max-width: 640px) 55vw, 220px"
                      />
                      {/* Verified badge on photo */}
                      <span className="absolute -bottom-2.5 -right-2.5 w-8 h-8 rounded-full bg-accent border-[2.5px] border-white flex items-center justify-center shadow z-10">
                        <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>

                  {/* Star rating strip inside hero bg */}
                  <div className="flex items-center justify-center gap-1.5 pt-4 pb-3">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5"
                          fill={i < Math.round(meta.rating) ? "hsl(151,56%,52%)" : "transparent"}
                          stroke="hsl(151,56%,52%)"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-foreground/60">{meta.rating}</span>
                  </div>
                </div>

                {/* ══ INFO ZONE ══ */}
                <div className="px-5 pt-4 pb-5">

                  {/* Name */}
                  <p
                    className="text-[11px] font-semibold tracking-wider uppercase mb-0.5"
                    style={{ color: meta.btnBg }}
                  >
                    {doc.qualification}
                  </p>
                  <h4 className="text-foreground text-xl font-bold leading-tight mb-1">{doc.name}</h4>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{doc.bio}</p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {meta.tags.map((tag) => (
                      <span key={tag} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${meta.accentBadgeClass}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-border mb-4" />

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{meta.availableDays}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{meta.floor}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white transition-all duration-200 hover:scale-[1.04] hover:opacity-90 active:scale-[0.97] shadow-sm"
                      style={{ background: meta.btnBg }}
                    >
                      Book
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center animate-fade-in-up animation-delay-500">
          <p className="text-sm text-muted-foreground mb-3">
            Have questions? Our team is available {clinicInfo.hours.weekdays} on weekdays.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline underline-offset-4 transition-colors"
          >
            Contact us to book an appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;
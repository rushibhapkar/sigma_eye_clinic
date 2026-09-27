"use client";
// components/services-overview.tsx

import Link from "next/link";
import {
  Eye,
  Heart,
  ChevronRight,
  CheckCircle2,
  Scan,
  Microscope,
  ShieldCheck,
  Baby,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { eyeServices, maternityServices } from "@/lib/data";
import Image from "next/image";
const categories = [
  {
    key: "eye",
    label: "Eye Care",
    tagline: "See the world clearly",
    description:
      "Advanced diagnostics and surgical expertise — from routine exams to complex retinal and refractive procedures.",
    icon: Eye,
    image: "/sigma_eye_clinic/assets/lab.jpeg",
    href: "/services#eye",
    linkText: "View All Eye Services",
    accent: "hsl(210,74%,40%)",
    accentLight: "hsl(210,80%,97%)",
    accentMid: "hsl(210,75%,93%)",
    badgeBg: "bg-[hsl(210,75%,93%)] text-[hsl(210,74%,32%)]",
    gradientFrom: "from-[hsl(210,80%,97%)]",
    gradientTo: "to-[hsl(210,60%,91%)]",
    borderColor: "border-[hsl(210,60%,85%)]",
    services: eyeServices.slice(0, 4),
  },
  {
    key: "maternity",
    label: "Maternity Care",
    tagline: "Every new beginning matters",
    description:
      "Compassionate women's health from conception through delivery — with specialists dedicated to safe, joyful motherhood.",
    icon: Heart,
    image: null,
    href: "/services#maternity",
    linkText: "View All Maternity Services",
    accent: "hsl(151,56%,42%)",
    accentLight: "hsl(151,70%,97%)",
    accentMid: "hsl(151,65%,92%)",
    badgeBg: "bg-[hsl(151,65%,92%)] text-[hsl(151,58%,28%)]",
    gradientFrom: "from-[hsl(151,70%,97%)]",
    gradientTo: "to-[hsl(151,50%,90%)]",
    borderColor: "border-[hsl(151,40%,83%)]",
    services: maternityServices.slice(0, 4),
  },
];

export function ServicesOverview() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">

      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1A6EB5 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-border rounded-full" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-8 h-[2px] bg-border rounded-full" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-primary/10 text-primary">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Comprehensive Care{" "}
            <span className="italic font-normal text-primary" style={{ fontFamily: "Georgia, serif" }}>
              Under One Roof
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Two specialist clinics. One trusted address. World-class treatment for your eyes and your family's health.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
             <div
  key={cat.key}
  className={`
    group relative rounded-2xl overflow-hidden border ${cat.borderColor}
    bg-white
    shadow-blue-soft hover:shadow-blue-md
    hover:-translate-y-1.5 transition-all duration-300 ease-out
    animate-fade-in-up
  `}
  style={{ animationDelay: `${100 + idx * 150}ms` }}
>

  {/* ── Full image (or gradient fallback) ── */}
  <div className="relative h-64 sm:h-72">
    {cat.image ? (
      <Image
        src={cat.image}
        alt={cat.label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    ) : (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${cat.accent}, ${cat.accentMid})` }}
      >
        <Icon className="w-16 h-16 text-white/90" />
      </div>
    )}

    {/* Very light overlay — just enough for badge contrast, lab stays fully visible */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom, rgba(13,59,110,0.20) 0%, transparent 35%, transparent 100%)",
      }}
    />

    {/* Tagline badge — top left */}
    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-white/95 shadow-sm" style={{ color: cat.accent }}>
      <Icon className="w-3.5 h-3.5" />
      {cat.tagline}
    </span>
  </div>

  {/* ── Light content panel ── */}
  <div className={`relative px-7 sm:px-8 pb-6 pt-5 bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo}`}>
    <h3 className="text-2xl font-bold text-foreground mb-1.5">{cat.label}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.description}</p>

    {/* Service list — 2-col grid */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
      {cat.services.map((s) => (
        <li key={s.id} className="flex items-center gap-2 text-sm text-foreground/80">
          <span
            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: cat.accentMid }}
          >
            <CheckCircle2 className="w-3 h-3" style={{ color: cat.accent }} />
          </span>
          {s.title}
        </li>
      ))}
    </ul>

    {/* Divider */}
    <div className="h-px bg-black/5 mb-4" />

    {/* CTA */}
    <Link
      href={cat.href}
      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
      style={{ color: cat.accent }}
    >
      {cat.linkText}
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
        style={{ background: cat.accentMid }}
      >
        <ChevronRight className="w-3.5 h-3.5" style={{ color: cat.accent }} />
      </span>
    </Link>
  </div>
</div>
            );
          })}
        </div>

        {/* ── Bottom strip ── */}
        <div className="mt-10 text-center animate-fade-in-up animation-delay-400">
          <p className="text-sm text-muted-foreground">
            Need help choosing the right service?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline underline-offset-4">
              Talk to our team →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
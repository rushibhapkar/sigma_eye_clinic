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

const categories = [
  {
    key: "eye",
    label: "Eye Care",
    tagline: "See the world clearly",
    description:
      "Advanced diagnostics and surgical expertise — from routine exams to complex retinal and refractive procedures.",
    icon: Eye,
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
                  group relative rounded-[var(--radius)] border ${cat.borderColor}
                  overflow-hidden bg-gradient-to-br ${cat.gradientFrom} ${cat.gradientTo}
                  shadow-blue-soft hover:shadow-blue-md
                  hover:-translate-y-1.5 transition-all duration-300 ease-out
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${100 + idx * 150}ms` }}
              >

                {/* Decorative circle — top right */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none opacity-40"
                  style={{ background: cat.accentMid }}
                />

                {/* Diagonal accent bar — bottom left */}
                <div
                  className="absolute bottom-0 left-0 w-1.5 h-full rounded-r-full opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:w-2"
                  style={{ background: cat.accent }}
                />

                <div className="relative z-10 p-7 sm:p-8">

                  {/* Top row: icon + label pill */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: cat.accent }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ${cat.badgeBg}`}>
                      {cat.tagline}
                    </span>
                  </div>

                  {/* Title + description */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cat.description}</p>

                  {/* Service list — 2-col grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-7">
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
                  <div className="h-px bg-black/5 mb-5" />

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
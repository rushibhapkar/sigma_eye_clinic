"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Phone, CircleCheck as CheckCircle2, Eye, Heart, Shield, Award } from "lucide-react";
import { clinicInfo, stats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-hero-gradient">

      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,110,181,0.10) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(62,200,138,0.10) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(26,110,181,0.04) 0%, transparent 70%)" }} />

        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #1A6EB5 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-6 sm:space-y-8">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in"
              style={{
                background: "rgba(26,110,181,0.08)",
                border: "1px solid rgba(26,110,181,0.18)",
                color: "#1A6EB5",
                animationDelay: "0ms"
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#3EC88A" }} />
                <span className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#3EC88A" }} />
              </span>
              Trusted Healthcare Since 2004
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.08] tracking-tight"
                style={{ color: "#0D3B6E" }}>
                Where{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, #1A6EB5 0%, #4E96D6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Vision
                </span>
                <br />
                Meets New{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3EC88A 0%, #2D9E6C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Beginnings
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-lg animate-fade-in-up"
              style={{ color: "#5A7FA8", animationDelay: "200ms" }}
            >
              Expert eye care and compassionate maternity services under one roof.
              State-of-the-art technology, 20+ years of trust, and a team that
              genuinely cares about your health.
            </p>

            {/* Feature Pills */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              {[
                { icon: Eye,    label: "Eye Specialist"    },
                { icon: Heart,  label: "Maternity Care"    },
                { icon: Shield, label: "NABH Accredited"   },
                { icon: Award,  label: "Award Winning"     },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "#fff",
                    border: "1px solid #C8DEFA",
                    color: "#1A6EB5",
                    boxShadow: "0 2px 8px rgba(26,110,181,0.08)"
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #1A6EB5 0%, #0C4070 100%)",
                  boxShadow: "0 8px 28px rgba(26,110,181,0.35)"
                }}
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${clinicInfo.phone}`}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1.5px solid #C8DEFA",
                  color: "#1A6EB5",
                  boxShadow: "0 4px 16px rgba(26,110,181,0.10)"
                }}
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>

            {/* Social Proof */}
            <div
              className="flex items-center gap-4 sm:gap-6 pt-2 animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex -space-x-2.5">
                {["A", "B", "C", "D", "E"].map((letter, i) => (
                  <div
                    key={letter}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #D6EAFB, #B8D8F5)"
                        : "linear-gradient(135deg, #D1F5E4, #A4EAC9)",
                      color: i % 2 === 0 ? "#1A6EB5" : "#2D9E6C",
                      zIndex: 5 - i
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold ml-1" style={{ color: "#0D3B6E" }}>4.9</span>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: "#5A7FA8" }}>
                  Trusted by <strong style={{ color: "#1A6EB5" }}>50,000+</strong> patients
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="relative hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>

            {/* Main image card */}
            <div
              className="relative w-[440px] h-[560px] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 32px 80px rgba(13,59,110,0.22)" }}
            >
              <Image
                src="https://images.pexels.com/photos/5752311/pexels-photo-5752311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern eye clinic facility"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,59,110,0.35) 0%, transparent 55%)" }} />

              {/* Bottom overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="backdrop-blur-md rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)"
                  }}
                >
                  <p className="text-white text-sm font-semibold mb-2">Today's Availability</p>
                  <div className="flex gap-2 flex-wrap">
                    {["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"].map((time) => (
                      <span
                        key={time}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                        style={{ background: "rgba(62,200,138,0.75)" }}
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — Years */}
            <div
              className="absolute -left-12 top-1/3 rounded-2xl p-4 animate-float"
              style={{
                background: "#fff",
                boxShadow: "0 12px 40px rgba(26,110,181,0.18)",
                border: "1px solid #EBF4FF"
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1A6EB5, #0C4070)" }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0D3B6E" }}>20+ Years</p>
                  <p className="text-xs" style={{ color: "#5A7FA8" }}>of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating card — Rating */}
            <div
              className="absolute -right-10 top-16 rounded-2xl p-4 animate-float animation-delay-300"
              style={{
                background: "#fff",
                boxShadow: "0 12px 40px rgba(26,110,181,0.18)",
                border: "1px solid #EBF4FF"
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3EC88A, #2D9E6C)" }}
                >
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0D3B6E" }}>4.9 / 5</p>
                  <p className="text-xs" style={{ color: "#5A7FA8" }}>Patient Rating</p>
                </div>
              </div>
            </div>

            {/* Floating card — Patients */}
            <div
              className="absolute -right-8 bottom-24 rounded-2xl p-4 animate-float animation-delay-600"
              style={{
                background: "#fff",
                boxShadow: "0 12px 40px rgba(26,110,181,0.18)",
                border: "1px solid #EBF4FF"
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #4E96D6, #1A6EB5)" }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0D3B6E" }}>50,000+</p>
                  <p className="text-xs" style={{ color: "#5A7FA8" }}>Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
              style={{ border: "1.5px dashed rgba(26,110,181,0.15)" }}
            />
            <div
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full"
              style={{ border: "1.5px dashed rgba(62,200,138,0.10)" }}
            />
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          {[
            { value: "20+",    label: "Years Experience", icon: Award,   color: "#1A6EB5" },
            { value: "50K+",   label: "Patients Served",  icon: Heart,   color: "#3EC88A" },
            { value: "15+",    label: "Specialists",       icon: Shield,  color: "#1A6EB5" },
            { value: "4.9★",   label: "Google Rating",     icon: Star,    color: "#3EC88A" },
          ].map(({ value, label, icon: Icon, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-md"
              style={{
                background: "#fff",
                border: "1px solid #EBF4FF",
                boxShadow: "0 4px 20px rgba(26,110,181,0.08)"
              }}
            >
              <div
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color }} />
              </div>
              <div className="min-w-0">
                <p className="text-lg sm:text-2xl font-bold truncate" style={{ color: "#0D3B6E" }}>{value}</p>
                <p className="text-xs font-medium truncate" style={{ color: "#5A7FA8" }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
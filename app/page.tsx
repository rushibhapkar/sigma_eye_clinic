"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Phone, ChevronRight, CircleCheck as CheckCircle2, Quote, Eye, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  clinicInfo,
  eyeServices,
  maternityServices,
  whyChooseUs,
  stats,
  testimonials,
} from "@/lib/data";
import { HeroSection } from "@/components/heros"; 
import AboutPage from "@/app/about/page";
import { ServicesOverview } from "@/components/servicesOverview";
import { WhyChooseUs } from "@/components/whyChooseUs";
import { VideoStoriesSection } from "@/components/video-stories";
const phoneNumbers = [
  { label: "Appointment", number: "9975893339", display: "+91 99758 93339" },
  { label: "Reception", number: "9579744727", display: "+91 95797 44727" },
  { label: "Helpline", number: "9881956427", display: "+91 98819 56427" },
];


function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/70 font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from families who trusted us with their care.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Google Review CTA strip ── */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-5 sm:p-6 rounded-2xl border border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Loved your experience with us?</p>
                <p className="text-xs text-muted-foreground">Share it on Google — it helps other families find us.</p>
              </div>
            </div>
            <a
              href="https://www.google.com/search?kgmid=/g/11s5x8wddh&hl=en-IN&q=Sigma+Eye+and+Mother+Care+Clinic&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m1/4&kgs=eb967691a703cf92&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m1/4"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.03] shadow-sm"
              style={{ background: "linear-gradient(135deg, hsl(210,74%,40%) 0%, hsl(151,56%,42%) 100%)" }}
            >
              <Star className="w-4 h-4 fill-white" />
              Write a Google Review
            </a>
          </div>
        </ScrollReveal>

        {/* ── Featured Testimonial with real photo ── */}
        {/* ── Featured Testimonial with real photo ── */}
        <ScrollReveal>
          <div className="mb-12 rounded-2xl overflow-hidden border border-border/50 shadow-blue-soft bg-muted/20">
            <div className="grid sm:grid-cols-5">

              {/* Photo */}
              <div className="relative sm:col-span-2 h-64 sm:h-auto min-h-[260px]">
                <Image
                  src="/sigma_eye_clinic/assets/img1.jpeg"
                  alt="Happy patient testimonial"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote content */}
              <div className="sm:col-span-3 p-7 sm:p-10 flex flex-col justify-center">
                <Quote className="w-9 h-9 text-primary/25 mb-4" />
                <p className="text-base sm:text-lg text-foreground leading-relaxed mb-5 font-medium">
                  "The care and attention I received here gave me back my confidence.
                  The doctors explained everything clearly and the whole team made me
                  feel comfortable throughout my treatment."
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* 
                <div>
                  <p className="text-sm font-semibold text-foreground">Patient Name</p>
                  <p className="text-xs text-muted-foreground">Cataract Surgery</p>
                </div> 
                */}
              </div>

            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100}>
              <div className="p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {t.text}
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-border/50 pt-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.service}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-accent p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Whether you need an eye consultation or maternity care, our team
                is here to help. Schedule your appointment today.
              </p>
              <div className="flex flex-col items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-200 group"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="w-full">
                  <p className="text-white/70 text-sm mb-3">Or call us directly</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {phoneNumbers.map((item) => (
                      <a
                        key={item.number}
                        href={`tel:${item.number}`}
                        className="flex items-center gap-3 px-3.5 py-3 text-left text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] text-white/70 leading-tight">{item.label}</span>
                          <span className="block text-sm font-semibold leading-tight whitespace-nowrap">{item.display}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection  />
      <AboutPage/>
        <VideoStoriesSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
    

      <CTASection />
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CircleCheck as CheckCircle2, Eye, Heart, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { eyeServices, maternityServices, clinicInfo } from "@/lib/data";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Comprehensive Eye &amp;
                <br />
                <span className="text-primary">Maternity Services</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From routine eye exams to complex maternity care, our
                specialists deliver personalized treatment with cutting-edge
                technology.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Eye Care Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Eye Care Services
                </h2>
                <p className="text-muted-foreground">
                  Advanced diagnostics and surgical expertise
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eyeServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div className="group p-6 rounded-xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Services */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Maternity &amp; Women&apos;s Health
                </h2>
                <p className="text-muted-foreground">
                  Compassionate care from conception to delivery and beyond
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maternityServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <div className="group p-6 rounded-xl bg-white border border-border/50 hover:border-accent/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your Care Journey
              </h2>
              <p className="text-muted-foreground text-lg">
                We make healthcare simple and stress-free with a clear,
                patient-friendly process.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Book Appointment",
                desc: "Schedule online or call us directly. Our team will confirm your slot within minutes.",
              },
              {
                step: "02",
                title: "Consultation",
                desc: "Meet with our specialist for a thorough evaluation and personalized treatment plan.",
              },
              {
                step: "03",
                title: "Treatment",
                desc: "Receive expert care using advanced technology in our modern, comfortable facilities.",
              },
              {
                step: "04",
                title: "Follow-Up",
                desc: "We ensure your recovery is on track with scheduled follow-ups and ongoing support.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="relative p-6 rounded-xl bg-muted/30 border border-border/50 text-center">
                  <span className="text-5xl font-bold text-primary/10 absolute top-2 right-4">
                    {item.step}
                  </span>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-accent p-8 sm:p-12 lg:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Need a Consultation?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Our specialists are ready to help. Book an appointment today
                  and take the first step towards better health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`tel:${clinicInfo.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-200"
                  >
                    Call {clinicInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

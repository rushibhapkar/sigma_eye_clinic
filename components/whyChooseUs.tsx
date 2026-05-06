"use client";
// components/why-choose-us.tsx

import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-muted/30">

      {/* bg dot grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1A6EB5 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-xl mx-auto mb-14 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-border rounded-full" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-8 h-[2px] bg-border rounded-full" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-primary/10 text-primary">
            Why Arogyam
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Why Families{" "}
            <span className="italic font-normal text-primary" style={{ fontFamily: "Georgia, serif" }}>
              Trust Us
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Medical expertise meets genuine compassion — here's what sets Arogyam apart.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white border border-border/60 rounded-[var(--radius)] p-6 overflow-hidden hover:border-primary/20 hover:shadow-blue-soft hover:-translate-y-1 transition-all duration-300 ease-out animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Hover gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[var(--radius)]" />

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Index number — decorative */}
              <span className="absolute top-4 right-4 text-[11px] font-bold text-border/80 tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
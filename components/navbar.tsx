"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Eye, Baby, ChevronDown, Sparkles } from "lucide-react";
import { navLinks, clinicInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Magnetic hover indicator for desktop nav
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setHoveredLink(href);
    const el = e.currentTarget;
    const navEl = navRef.current;
    if (!navEl) return;
    const navRect = navEl.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  };

  const handleNavLeave = () => {
    setHoveredLink(null);
    setIndicatorStyle((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#C8DEFA]/60 shadow-[0_4px_24px_rgba(26,110,181,0.08)]"
            : "bg-transparent"
        )}
      >
        {/* Top accent bar — thin blue line, only when transparent */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#1A6EB5] to-transparent transition-opacity duration-500",
            scrolled ? "opacity-0" : "opacity-40"
          )}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              {/* Icon cluster */}
              <div className="relative w-11 h-11 shrink-0">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1A6EB5] to-[#0D3B6E] shadow-[0_4px_14px_rgba(26,110,181,0.35)] group-hover:shadow-[0_6px_20px_rgba(26,110,181,0.5)] transition-all duration-300 group-hover:scale-105" />
                {/* Shine overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                {/* Icons */}
                <Eye className="absolute left-[7px] top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                <Baby className="absolute right-[6px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#3EC88A]" />
              </div>

              {/* Text */}
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-bold tracking-tight text-[#0D3B6E] group-hover:text-[#1A6EB5] transition-colors duration-200">
                  Sigma
                </span>
                <span className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-[#5A7FA8] mt-0.5">
                  Eye & Mother Care
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center relative"
              onMouseLeave={handleNavLeave}
            >
              {/* Gliding background pill */}
              <div
                className="absolute h-8 rounded-lg bg-[#EBF4FF] transition-all duration-200 ease-out pointer-events-none"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: indicatorStyle.opacity,
                }}
              />

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={(e) => handleLinkHover(e, link.href)}
                    className={cn(
                      "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap",
                      isActive
                        ? "text-[#1A6EB5]"
                        : "text-[#5A7FA8] hover:text-[#0D3B6E]"
                    )}
                  >
                    {link.label}
                    {/* Active dot */}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1A6EB5]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href={`tel:${clinicInfo.phone}`}
                className="group flex items-center gap-2 text-sm font-medium text-[#5A7FA8] hover:text-[#1A6EB5] transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#EBF4FF] group-hover:bg-[#D6EAFB] transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-[#1A6EB5]" />
                </span>
                <span className="hidden xl:block">{clinicInfo.phone}</span>
              </a>

              {/* Divider */}
              <div className="w-px h-5 bg-[#C8DEFA]" />

              {/* Book button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_6px_20px_rgba(26,110,181,0.4)] active:scale-[0.97]"
              >
                {/* Button BG */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#1A6EB5] to-[#0D3B6E]" />
                {/* Hover shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <Sparkles className="relative w-3.5 h-3.5 text-[#3EC88A]" />
                <span className="relative">Book Appointment</span>
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-xl text-[#0D3B6E] hover:bg-[#EBF4FF] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "absolute transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                )}
              >
                <X className="w-5 h-5" />
              </span>
              <span
                className={cn(
                  "absolute transition-all duration-300",
                  isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                )}
              >
                <Menu className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {/* Backdrop — starts below the navbar (top-16 = 64px) */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 bg-[#0D3B6E]/20 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer — slides in from right, starts below the navbar */}
      <div
        className={cn(
          "fixed right-0 bottom-0 top-16 z-40 w-[min(320px,85vw)] lg:hidden",
          "bg-white border-l border-[#C8DEFA]/60 shadow-[-8px_0_40px_rgba(26,110,181,0.12)]",
          "flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ animationDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#EBF4FF] text-[#1A6EB5]"
                      : "text-[#4A6F8C] hover:bg-[#F5F9FE] hover:text-[#0D3B6E]"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A6EB5]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-5 border-t border-[#EBF4FF] space-y-3 bg-[#F5F9FE]">
          <a
            href={`tel:${clinicInfo.phone}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#C8DEFA] text-sm font-medium text-[#1A6EB5] hover:bg-[#EBF4FF] transition-colors duration-200"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#EBF4FF]">
              <Phone className="w-3.5 h-3.5 text-[#1A6EB5]" />
            </span>
            {clinicInfo.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="relative flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(26,110,181,0.35)] active:scale-[0.98] transition-transform"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#1A6EB5] to-[#0D3B6E]" />
            <Sparkles className="relative w-3.5 h-3.5 text-[#3EC88A]" />
            <span className="relative">Book Appointment</span>
          </Link>
        </div>
      </div>
    </>
  );
}
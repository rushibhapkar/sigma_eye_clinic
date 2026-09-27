"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Eye, Baby, ChevronDown, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
// Array of 3 clinic phone numbers with descriptive labels
const PHONE_NUMBERS = [
  { label: "Appointment", number: "9975893339", display: "+91 99758 93339" },
  { label: "Reception", number: "9579744727", display: "+91 95797 44727" },
  { label: "Helpline", number: "9881956427", display: "+91 98819 56427" },
];
const LOGO_SRC = "/sigma_eye_clinic/assets/logo.png";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setPhoneMenuOpen(false);
  }, [pathname]);

  // Close phone dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneRef.current && !phoneRef.current.contains(event.target as Node)) {
        setPhoneMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
<Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
      {/* Logo Container */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={LOGO_SRC}
          alt="Sigma Eye & Mother Care Logo"
          fill
          sizes="(max-width: 640px) 40px, 44px"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      <div className="flex items-center leading-none whitespace-nowrap overflow-hidden">
        <span className="text-[15px] sm:text-[17px] font-bold tracking-tight text-[#0D3B6E] group-hover:text-[#1A6EB5] transition-colors duration-200">
          Sigma Eye & Mother Care
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
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1A6EB5]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA & Interactive Phone Dropdown ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Dropdown Container */}
              <div className="relative" ref={phoneRef}>
                <button
                  onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
                  onMouseEnter={() => setPhoneMenuOpen(true)}
                  className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-[#C8DEFA]/60 bg-white/60 hover:bg-[#EBF4FF] hover:border-[#1A6EB5]/30 transition-all duration-200 text-sm font-medium text-[#0D3B6E]"
                  aria-expanded={phoneMenuOpen}
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#1A6EB5] text-white shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5A7FA8] -mb-0.5">
                      Contact Us
                    </span>
                    <span className="text-xs font-bold text-[#0D3B6E]">
                      +91 99758 93339
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-[#5A7FA8] transition-transform duration-200 ml-0.5",
                      phoneMenuOpen && "rotate-180 text-[#1A6EB5]"
                    )}
                  />
                </button>

                {/* Popover Card */}
                {phoneMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-[0_12px_32px_rgba(26,110,181,0.15)] border border-[#C8DEFA]/80 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-2 py-1.5 mb-1 border-b border-[#EBF4FF]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5A7FA8]">
                        Quick Helpline & Support
                      </p>
                    </div>
                    <div className="space-y-1">
                      {PHONE_NUMBERS.map((item, idx) => (
                        <a
                          key={idx}
                          href={`tel:${item.number}`}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-[#EBF4FF] transition-colors group/item"
                        >
                          <div>
                            <p className="text-[11px] font-medium text-[#5A7FA8]">
                              {item.label}
                            </p>
                            <p className="text-sm font-bold text-[#0D3B6E] group-hover/item:text-[#1A6EB5] transition-colors">
                              {item.display}
                            </p>
                          </div>
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A6EB5]/10 text-[#1A6EB5] group-hover/item:bg-[#1A6EB5] group-hover/item:text-white transition-colors">
                            <Phone className="w-3 h-3" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-[#C8DEFA]" />

              {/* Book Appointment Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_6px_20px_rgba(26,110,181,0.4)] active:scale-[0.97]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#1A6EB5] to-[#0D3B6E]" />
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
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 bg-[#0D3B6E]/20 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer — slides in from right */}
      <div
        className={cn(
          "fixed right-0 bottom-0 top-16 z-40 w-[min(320px,85vw)] lg:hidden",
          "bg-white border-l border-[#C8DEFA]/60 shadow-[-8px_0_40px_rgba(26,110,181,0.12)]",
          "flex flex-col transition-transform duration-300 ease-out",
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

        {/* Drawer footer with all 3 phone numbers */}
        <div className="px-4 py-5 border-t border-[#EBF4FF] space-y-3 bg-[#F5F9FE]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5A7FA8] px-1">
            Direct Helpline Lines
          </p>
          <div className="space-y-2">
            {PHONE_NUMBERS.map((item, idx) => (
              <a
                key={idx}
                href={`tel:${item.number}`}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white border border-[#C8DEFA] text-sm font-medium text-[#1A6EB5] hover:bg-[#EBF4FF] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#EBF4FF]">
                    <Phone className="w-3 h-3 text-[#1A6EB5]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#5A7FA8] leading-tight">
                      {item.label}
                    </span>
                    <span className="text-xs font-bold text-[#0D3B6E]">
                      {item.display}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="relative flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(26,110,181,0.35)] active:scale-[0.98] transition-transform mt-2"
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
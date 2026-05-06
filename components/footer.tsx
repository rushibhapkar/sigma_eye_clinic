import Link from "next/link";
import { Eye, Baby, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { clinicInfo, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent">
                <Eye className="w-5 h-5 text-white absolute -left-0.5 top-1/2 -translate-y-1/2" />
                <Baby className="w-4 h-4 text-white absolute right-0.5 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Sigma
                </span>
                <span className="text-[10px] font-medium text-white/50 leading-none tracking-wider uppercase">
Eye & Mother Care                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              {clinicInfo.tagline}. Providing trusted eye care and compassionate
              maternity services for over two decades.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                "Eye Examinations",
                "Cataract Surgery",
                "LASIK Treatment",
                "Prenatal Care",
                "Delivery Services",
                "Fertility Consultation",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">{clinicInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-white/60 space-y-0.5">
                  <p>Mon-Fri: {clinicInfo.hours.weekdays}</p>
                  <p>Sat: {clinicInfo.hours.saturday}</p>
                  <p>Sun: {clinicInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {clinicInfo.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed with care for better health outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}

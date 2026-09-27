"use client";
// components/floating-social.tsx

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919579744727",
    bg: "#25D366",
    hasPulse: true, // Highlights primary CTA
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-[22px] sm:h-[22px]">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.71 14.15c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.61-.6-2.83-1.22-4.68-4.06-4.82-4.25-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.27-.28.58-.35.77-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 1.99.9 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sigmaeyeandmothercareclinic/reels",
    bg: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-[22px] sm:h-[22px]">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@Dr.SagarAghadate",
    bg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-[22px] sm:h-[22px]">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.4V8.6L15.8 12Z" />
      </svg>
    ),
  },
];

export function FloatingSocial() {
  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-6 z-50 flex flex-col gap-3 p-1.5 rounded-full bg-white/30 dark:bg-black/20 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-xl">
      {socialLinks.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          style={{ background: s.bg }}
        >
          {/* Animated Pulse Ring (for WhatsApp lead magnet) */}
          {s.hasPulse && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-35 pointer-events-none"
              style={{ background: s.bg }}
            />
          )}

          {s.icon}

          {/* Enhanced Tooltip with Smooth Slide-Fade */}
          <span className="hidden sm:flex items-center absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap shadow-lg backdrop-blur-sm border border-white/10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
            {s.name}
            {/* Tooltip Arrow */}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900/90" />
          </span>
        </a>
      ))}
    </div>
  );
}
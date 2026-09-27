"use client";

import { useState, useEffect } from "react";
import { Play, Instagram, Youtube, X } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

// Base assets path
const ASSETS_PATH = "/sigma_eye_clinic/assets";

interface VideoItem {
  id: string;
  type: "local" | "youtube";
  title: string;
  subtitle: string;
  thumbnail: string;
  mediaSrc: string;
}

// 6 Videos Structured List
const REEL_VIDEOS: VideoItem[] = [
  {
    id: "diabetes-reel",
    type: "local",
    title: "Diabetes & Its Effects on Eyes",
    subtitle: "How high blood sugar impacts vision",
    thumbnail: `${ASSETS_PATH}/reel-diabetes-thumbnail.jpg`,
    mediaSrc: `${ASSETS_PATH}/reel-diabetes.mp4`,
  },
  {
    id: "cvs-reel",
    type: "local",
    title: "Computer Vision Syndrome",
    subtitle: "Common. Ignored. Treatable.",
    thumbnail: `${ASSETS_PATH}/reel-cvs-thumbnail.jpg`,
    mediaSrc: `${ASSETS_PATH}/reel-cvs.mp4`,
  },
  {
    id: "glaucoma-reel",
    type: "local",
    title: "काचबिंदू (Glaucoma)",
    subtitle: "कायमस्वरूपी दृष्टीहानीचा धोका - वेळेवर निदान हाच उपाय 👁️",
    thumbnail: `${ASSETS_PATH}/reel-glaucoma-thumbnail.jpg`,
    mediaSrc: `${ASSETS_PATH}/reel-glaucoma.mp4`,
  },
  {
    id: "cataract-reel",
    type: "local",
    title: "मोतीबिंदू (Cataract) Operation",
    subtitle: "ऑपरेशन कधी करायचं? तुमच्या सर्व शंकांचे निरसन 🤔",
    thumbnail: `${ASSETS_PATH}/reel-cataract-thumbnail.jpg`,
    mediaSrc: `${ASSETS_PATH}/reel-cataract.mp4`,
  },
  {
    id: "youtube-short",
    type: "youtube",
    title: "How Diabetes Affects Your Eyes",
    subtitle: "Watch full explanation on YouTube",
    thumbnail: `${ASSETS_PATH}/youtube-thumbnail.png`,
    mediaSrc: "https://www.youtube.com/embed/mBdTOsAZYa8?autoplay=1",
  },
  {
    id: "patient-story-reel",
    type: "local",
    title: "A Patient's Journey to Clear Vision",
    subtitle: "Watch Real Testimonial",
    thumbnail: `${ASSETS_PATH}/testimonial.jpg`,
    mediaSrc: `${ASSETS_PATH}/patient-story.mp4`,
  },
];

interface VideoCardProps {
  video: VideoItem;
  onOpenModal: () => void;
}

function VideoCard({ video, onOpenModal }: VideoCardProps) {
  return (
    <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col w-full">
      {/* 4:5 Aspect Ratio Card for Compact Grid Display */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-black">
        {/* Platform Badge */}
        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10 flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-[11px] font-medium">
          {video.type === "local" ? (
            <>
              <Instagram className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pink-400" />
              <span className="hidden xs:inline">Instagram</span>
            </>
          ) : (
            <>
              <Youtube className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" />
              <span className="hidden xs:inline">YouTube</span>
            </>
          )}
        </div>

        {/* Thumbnail Button to Trigger Modal */}
        <button
          onClick={onOpenModal}
          className="relative w-full h-full block focus:outline-none cursor-pointer text-left"
          aria-label={`Play ${video.title}`}
        >
          {/* Thumbnail Image */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300" />

          {/* Interactive Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-slate-900/90 text-primary shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 backdrop-blur-sm">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
              <span className="absolute inset-0 rounded-full border border-white/60 animate-ping opacity-20 group-hover:opacity-0" />
            </span>
          </div>

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3.5 z-10">
            <h3 className="text-white text-xs sm:text-base font-bold leading-tight line-clamp-1">
              {video.title}
            </h3>
            <p className="text-slate-300 text-[10px] sm:text-xs mt-0.5 font-normal line-clamp-1">
              {video.subtitle}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export function VideoStoriesSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-2.5">
              Patient Stories & Educational Reels
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-2 sm:mb-3">
              Watch & Learn
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">
              Explore quick insights into common eye conditions, preventative care, and patient experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Mobile Grid, 3-Column Desktop Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 items-stretch justify-center max-w-6xl mx-auto">
          {REEL_VIDEOS.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 50}>
              <VideoCard video={video} onOpenModal={() => setActiveVideo(video)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── POPUP MODAL VIEW ── */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          {/* Overlay click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setActiveVideo(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-900/50">
              <div className="flex items-center gap-2 pr-2 overflow-hidden">
                {activeVideo.type === "local" ? (
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                ) : (
                  <Youtube className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span className="text-xs sm:text-sm font-semibold text-white truncate">
                  {activeVideo.title}
                </span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player in 9:16 vertical ratio */}
            <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
              {activeVideo.type === "local" ? (
                <video
                  src={activeVideo.mediaSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={activeVideo.mediaSrc}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                />
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-slate-900/80 border-t border-slate-800/80">
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {activeVideo.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
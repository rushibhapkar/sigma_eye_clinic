import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingSocial } from "@/components/floating-social";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Sigma Eye and Mother Care Clinic | Trusted Healthcare Excellence",
  description:
    "Expert eye care and compassionate mother care services. Specializing in cataract surgery, LASIK, prenatal care, and delivery. Book your appointment at Sigma Clinic today.",
  icons: {
    icon: "/sigma_eye_clinic/assets/logo.png",
    shortcut: "/sigma_eye_clinic/assets/logo.png",
    apple: "/sigma_eye_clinic/assets/logo.png",
  },
  openGraph: {
    title: "Sigma Eye and Mother Care Clinic",
    description:
      "Where Vision Meets New Beginnings. Expert eye care and compassionate maternity services under one roof.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <FloatingSocial />
        <Footer />
      </body>
    </html>
  );
}
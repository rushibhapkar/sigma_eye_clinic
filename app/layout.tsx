import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Arogyam Eye & Maternity Clinic | Trusted Healthcare Since 2004",
  description:
    "Expert eye care and compassionate maternity services. Cataract surgery, LASIK, prenatal care, delivery, and more. Book your appointment today.",
  openGraph: {
    title: "Arogyam Eye & Maternity Clinic",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}

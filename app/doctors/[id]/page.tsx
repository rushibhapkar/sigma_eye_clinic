// app/doctors/[id]/page.tsx
//app\doctors\[id]\page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { doctors, clinicInfo } from "@/lib/data";
import { DoctorProfile } from "../../../components/doctor-profile";
// `params` is a Promise in Next 15 and a plain object in Next 14;
// `await` handles both.
type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return doctors.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const doc = doctors.find((d) => d.id === id);
  if (!doc) return {};

  return {
    title: `${doc.name} - ${doc.specialty} in Keshav Nagar, Pune | ${clinicInfo.name}`,
    description: `${doc.name} (${doc.qualification}), ${doc.role} at ${clinicInfo.name}, Keshav Nagar, Pune. Know about experience, expertise and book an appointment.`,
    openGraph: {
      title: `${doc.name} - ${doc.specialty}`,
      description: doc.bio,
      images: [doc.image],
    },
  };
}

export default async function DoctorPage({ params }: Props) {
  const { id } = await params;
  const doc = doctors.find((d) => d.id === id);
  if (!doc) notFound();

  // Structured data helps Google show the doctor in search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doc.name,
    medicalSpecialty: doc.specialty,
    description: doc.bio,
    image: doc.image,
    sameAs: [doc.instagram],
    worksFor: { "@type": "MedicalClinic", name: clinicInfo.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoctorProfile doctor={doc} />
    </>
  );
}
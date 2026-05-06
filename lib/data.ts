import {
  Eye,
  Baby,
  Stethoscope,
  Microscope,
  Heart,
  Syringe,
  Scan,
  ShieldCheck,
  Award,
  Phone,
  MapPin,
  Mail,
  Activity,
  CheckCircle,
  Glasses,
  Users,
  Clock,
  Star,
  ChevronRight
} from "lucide-react";
import dr1 from "@/assets/dr1.jpeg";
import dr2 from "@/assets/dr2.jpeg";
export const clinicInfo = {
  name: "Sigma Eye and Mother Care Clinic",
  tagline: "Leading Eye & Maternity Hospital - Bringing Brightness in Your Life",
  phone: "+91 95797 44727",
  secondaryPhone: "+91 98819 56427",
  emergency: "+91 99758 93339",
  email: "sigmaclinickeshavnagar@gmail.com",
  address: "Keshav Nagar, Pune, Maharashtra",
  hours: {
    weekdays: "9:00 AM - 8:00 PM", // Kept static as real hours weren't in text
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed / Emergency Only",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const eyeServices = [
  {
    id: "e1",
    title: "Cataract Surgery",
    description: "Advanced phacoemulsification and laser-assisted surgery with premium intraocular lens (IOL) options.",
    icon: Scan,
    features: [
      "Laser-assisted surgery",
      "Premium IOL options",
      "Phacoemulsification",
      "Restored visual clarity",
    ],
  },
  {
    id: "e2",
    title: "Retina & Diabetic Eye Care",
    description: "Expert treatment for retinal detachment and diabetic retinopathy using sutureless techniques.",
    icon: Activity,
    features: [
      "Retinal detachment repair",
      "Diabetic retinopathy care",
      "Sutureless techniques",
      "B-Scan evaluation",
    ],
  },
  {
    id: "e3",
    title: "LASIK & Laser Surgery",
    description: "Cutting-edge technology for vision correction to improve visual acuity and reduce glass dependency.",
    icon: Microscope,
    features: [
      "Custom laser correction",
      "Advanced diagnostics",
      "Quick recovery",
      "Improved visual acuity",
    ],
  },
  {
    id: "e4",
    title: "Pediatric Ophthalmology",
    description: "Specialized care for children's eye health, addressing squint and visual development issues.",
    icon: Baby,
    features: [
      "Squint treatment",
      "Amblyopia therapy",
      "Eye development tracking",
      "Child-friendly screening",
    ],
  },
  {
    id: "e5",
    title: "Cornea & Uveitis",
    description: "Comprehensive management of corneal diseases and uvea inflammation to preserve vision.",
    icon: ShieldCheck,
    features: [
      "Corneal transplants",
      "Uveitis management",
      "Inflammation control",
      "Advanced cornea care",
    ],
  },
  {
    id: "e6",
    title: "DCR & DCT Surgery",
    description: "Specialized surgical procedures for addressing blocked tear ducts and watering eyes.",
    icon: Stethoscope,
    features: [
      "DCR surgical options",
      "DCT surgical options",
      "Tear duct clearance",
      "Chronic watering relief",
    ],
  },
];

export const maternityServices = [
  {
    id: "m1",
    title: "Maternity Care",
    description: "Personalized care from early pregnancy through delivery and postpartum for mother and baby.",
    icon: Heart,
    features: [
      "Prenatal counseling",
      "Lactation consultation",
      "Postpartum support",
      "High-risk pregnancy care",
    ],
  },
  {
    id: "m2",
    title: "Gynecology Services",
    description: "Expert management for women's health issues including PCOD, Menorrhagia, and infertility.",
    icon: Stethoscope,
    features: [
      "Menorrhagia treatment",
      "PCOD/PCOS management",
      "IVF & Infertility support",
      "Routine screenings",
    ],
  },
  {
    id: "m3",
    title: "Fetal Medicine",
    description: "Advanced diagnostic options to monitor baby health and development during pregnancy.",
    icon: Microscope,
    features: [
      "Fetal growth scans",
      "Developmental monitoring",
      "Specialized diagnostics",
      "Expert consultation",
    ],
  },
  {
    id: "m4",
    title: "Skin Care",
    description: "Dermatological evaluations and treatments tailored for general wellness and health.",
    icon: CheckCircle,
    features: [
      "General skin health",
      "Dermatology consults",
      "Treatment plans",
      "Wellness checkups",
    ],
  },
];

export const allServices = [...eyeServices, ...maternityServices];

export const doctors = [
  {
    id: "d1",
    name: "Dr. Sagar Aghadate",
    specialty: "Ophthalmology",
    qualification: "MBBS, MS OPHTHALMOLOGY",
    experience: "Fellowship in Vitreoretinal Surgery & ROP",
    bio: "Consultant at PBMS's H.V. Desai Hospital. Specialized in advanced retinal evaluation and microsurgeries.",
    image: dr1,
  },
  {
    id: "d2",
    name: "Dr. Rachana Kharate (Aghadate)",
    specialty: "Obstetrics and Gynaecology",
    qualification: "MBBS, MS OBSTETRICS AND GYNAECOLOGY",
    experience: "Fellowship in Fetal Medicine",
    bio: "Working in Nobel Multispecialty Hospital. Expert in comprehensive maternity care and fetal medicine.",
    image: dr2,
  },
];

// The following sections remain static/dummy as real data was not found for these specific values
export const testimonials = [
  {
    id: "t1",
    name: "Sunita Devi",
    text: "The care I received during my pregnancy was exceptional. The team made me feel safe and supported throughout the entire journey.",
    rating: 5,
    service: "Maternity Care",
  },
  {
    id: "t2",
    name: "Rajesh Mehta",
    text: "After years of wearing glasses, I got my treatment done here. The procedure was quick and the results are amazing.",
    rating: 5,
    service: "Eye Care",
  },
];

export const stats = [
  { label: "Expert Doctors", value: "2", icon: Award },
  { label: "Specialties", value: "Multi", icon: Users },
  { label: "Care Quality", value: "Premium", icon: Stethoscope },
  { label: "Availability", value: "By Appt.", icon: Clock },
];

export const whyChooseUs = [
  {
    title: "Expert Specialists",
    description: "Fellowship trained doctors with years of experience in their respective medical fields.",
    icon: Award,
  },
  {
    title: "Advanced Technology",
    description: "Equipped with modern surgical and diagnostic tools like Phaco and B-Scan.",
    icon: Microscope,
  },
  {
    title: "Patient-Centered",
    description: "Every treatment plan is personalized to meet the individual needs of our patients.",
    icon: Heart,
  },
];

export const heroImages = [
  "https://images.pexels.com/photos/5752311/pexels-photo-5752311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/7055919/pexels-photo-7055919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/413302/pexels-photo-413302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];
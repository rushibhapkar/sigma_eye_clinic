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

export const clinicInfo = {
  name: "Sigma Eye and Mother Care Clinic",
  tagline: "Leading Eye & Maternity Hospital - Bringing Brightness in Your Life",
  phone: "+91 95797 44727",
  secondaryPhone: "+91 98819 56427",
  emergency: "+91 99758 93339",
  email: "sigmaeyeandmothercareclinic@gmail.com",
  address: "shop no. 45, ground floor, Prestige Chambers, majari road, next to K city,  near Manik Mobiles and Tukai Mata mandir, Keshav Nagar, Mundhwa, Pune, Maharashtra 411036",
  hours: {
    weekdays: "10:00 AM - 10:00 PM", // Kept static as real hours weren't in text
    saturday: "10:00 AM - 10:00 PM",
    sunday: "Appointment Basis",
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
      "OCT evaluation",
      "PRP (Panretinal photocoagulation)",
      "Barrage laser",
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
  {
    id: "e7",
    title: "ROP (Retinopathy of Prematurity)",
    description: "Specialized screening and advanced treatment for premature infants to prevent vision loss.",
    icon: Eye,
    features: [
      "Premature baby eye screening",
      "Laser photo-coagulation",
      "Early intervention care",
      "Retinal monitoring",
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
  // {
  //   id: "m4",
  //   title: "Skin Care",
  //   description: "Dermatological evaluations and treatments tailored for general wellness and health.",
  //   icon: CheckCircle,
  //   features: [
  //     "General skin health",
  //     "Dermatology consults",
  //     "Treatment plans",
  //     "Wellness checkups",
  //   ],
  // },
];

export const allServices = [...eyeServices, ...maternityServices];



export type Lang = "en" | "hi" | "mr";
 
export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
  // ── new profile fields ──
  role: string; // one-line title under the name
  yearsLabel?: string; // optional, only shown when provided
  instagram: string;
  instagramHandle: string;
  instagramFollowers: string;
  instagramPosts: string;
  accent: string;
  accentLight: string;
  about: Record<Lang, string[]>; // paragraphs in each language
  expertise: string[];
  education: { title: string; place: string }[];
  associations: { role: string; place: string }[];
};

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Sagar Aghadate",
    specialty: "Ophthalmology",
    qualification: "MBBS, MS (Ophthalmology), FVRS",
    experience: "12+ Yrs Exp | Vitreoretinal Surgeon",
    bio: "Founder & Medical Director at Sigma Superspeciality Clinic and Vitreoretinal Consultant at PBMA'S H.V. Desai Eye Hospital. Trained at KEM Hospital Mumbai under renowned mentors.",
    image: "/sigma_eye_clinic/assets/dr1.jpeg",
    role: "Vitreoretinal Surgeon & Cataract Specialist",
    yearsLabel: "12+ years of experience",
    instagram: "https://www.instagram.com/drsagaraghadate/",
    instagramHandle: "drsagaraghadate",
    instagramFollowers: "1,221",
    instagramPosts: "57",
        accent: "hsl(210,74%,40%)",
    accentLight: "hsl(210,75%,93%)",
    about: {
      en: [
        "Dr. Sagar Aghadate is a highly experienced ophthalmologist and vitreoretinal surgeon with over 12 years of expertise in advanced eye care and ophthalmic surgeries. He is associated with PBMA'S H.V. Desai Eye Hospital as a Vitreoretinal Consultant and is the Founder & Medical Director of Sigma Superspeciality Clinic.",
        "He completed his MBBS from I.G.G.M.C., Nagpur, MS in Ophthalmology from Sir J.J. Group of Hospitals, Mumbai, and Fellowship in Vitreoretinal Surgery (FVRS). He trained under renowned ophthalmologists including Dr. Tatyarao Lahane and gained extensive experience at KEM Hospital, Mumbai.",
        "Dr. Aghadate is committed to delivering advanced, ethical, and compassionate eye care with modern technology and personalized treatment.",
      ],
      hi: [
        "डॉ. सागर आघाडते एक अत्यंत अनुभवी नेत्र रोग विशेषज्ञ और विट्रियोरेटिनल सर्जन हैं, जिन्हें उन्नत नेत्र चिकित्सा और आँखों की सर्जरी में 12 वर्षों से अधिक का अनुभव है। वे पीबीएमए'स एच.वी. देसाई आई हॉस्पिटल में विट्रियोरेटिनल कंसल्टेंट के रूप में जुड़े हैं और सिग्मा सुपरस्पेशियलिटी क्लिनिक के संस्थापक एवं मेडिकल डायरेक्टर हैं।",
        "उन्होंने एम.बी.बी.एस. आई.जी.जी.एम.सी., नागपुर से, एम.एस. (ऑप्थल्मोलॉजी) सर जे.जे. ग्रुप ऑफ हॉस्पिटल्स, मुंबई से और विट्रियोरेटिनल सर्जरी में फेलोशिप (FVRS) पूरी की है। उन्होंने डॉ. तात्याराव लहाने सहित प्रख्यात नेत्र रोग विशेषज्ञों के मार्गदर्शन में प्रशिक्षण लिया और केईएम हॉस्पिटल, मुंबई में व्यापक अनुभव प्राप्त किया।",
        "डॉ. आघाडते आधुनिक तकनीक और व्यक्तिगत उपचार के साथ उन्नत, नैतिक और संवेदनशील नेत्र देखभाल प्रदान करने के लिए प्रतिबद्ध हैं।",
      ],
      mr: [
        "डॉ. सागर आघाडते हे अत्यंत अनुभवी नेत्ररोगतज्ज्ञ आणि व्हिट्रिओरेटिनल सर्जन असून प्रगत नेत्रसेवा आणि डोळ्यांच्या शस्त्रक्रियांमध्ये त्यांना १२ वर्षांहून अधिक अनुभव आहे. ते पी.बी.एम.ए.'स एच.व्ही. देसाई आय हॉस्पिटलमध्ये व्हिट्रिओरेटिनल कन्सल्टंट म्हणून कार्यरत आहेत आणि सिग्मा सुपरस्पेशालिटी क्लिनिकचे संस्थापक व वैद्यकीय संचालक आहेत.",
        "त्यांनी एम.बी.बी.एस. आय.जी.जी.एम.सी., नागपूर येथून, एम.एस. (नेत्ररोगशास्त्र) सर जे.जे. ग्रुप ऑफ हॉस्पिटल्स, मुंबई येथून आणि व्हिट्रिओरेटिनल सर्जरीमधील फेलोशिप (FVRS) पूर्ण केली आहे. डॉ. तात्याराव लहाने यांच्यासह नामवंत नेत्ररोगतज्ज्ञांच्या मार्गदर्शनाखाली त्यांनी प्रशिक्षण घेतले आणि केईएम हॉस्पिटल, मुंबई येथे विस्तृत अनुभव मिळवला.",
        "आधुनिक तंत्रज्ञान आणि वैयक्तिक उपचारांसह प्रगत, नैतिक आणि सहानुभूतीपूर्ण नेत्रसेवा देण्यासाठी डॉ. आघाडते कटिबद्ध आहेत.",
      ],
    },
    expertise: [
      "Phacoemulsification cataract surgery with premium IOLs",
      "Retina surgeries",
      "Retinal detachment management",
      "Diabetic retinopathy treatment",
      "Retina lasers",
      "Intravitreal injections",
      "Secondary IOL implantation (SFIOL)",
      "ROP screening and treatment",
      "LASIK",
      "Pediatric ophthalmology",
      "Squint surgery",
      "Uveitis management",
    ],
    education: [
      { title: "MBBS", place: "I.G.G.M.C., Nagpur" },
      { title: "MS (Ophthalmology)", place: "Sir J.J. Group of Hospitals, Mumbai" },
      { title: "Fellowship in Vitreoretinal Surgery (FVRS)", place: "Vitreoretinal surgery training" },
      { title: "Clinical training", place: "KEM Hospital, Mumbai, under Dr. Tatyarao Lahane and other mentors" },
    ],
    associations: [
      { role: "Founder & Medical Director", place: "Sigma Superspeciality Clinic" },
      { role: "Vitreoretinal Consultant", place: "PBMA'S H.V. Desai Eye Hospital" },
    ],
  },
  {
    id: "d2",
    name: "Dr. Rachana Aghadate (Kharate)",
    specialty: "Obstetrics, Gynaecology & Fetal Medicine",
    qualification: "MBBS, MS (OB-GYN), Fellowship in Fetal Medicine",
    experience: "Fetal Medicine Specialist",
    bio: "Consultant Obstetrician, Gynaecologist & Fetal Medicine Specialist at Sigma Superspeciality Clinic and Motherhood Hospital Kharadi. Advanced training from KEM Hospital, Pune.",
    image: "/sigma_eye_clinic/assets/dr2.jpeg",
    role: "Consultant Obstetrician, Gynaecologist & Fetal Medicine Specialist",
    // yearsLabel left out: add e.g. "8+ years of experience" once the exact number is confirmed
    instagram: "https://www.instagram.com/dr.rachana_gynaecologist/",
    instagramHandle: "dr.rachana_gynaecologist",
    instagramFollowers: "632",
    instagramPosts: "41",    accent: "hsl(151,56%,42%)",
    accentLight: "hsl(151,65%,92%)",
    about: {
      en: [
        "Dr. Rachana Aghadate (Kharate) is an experienced Obstetrician, Gynaecologist and Fetal Medicine Specialist with expertise in comprehensive women's healthcare, pregnancy care and fetal assessment.",
        "She completed her MBBS and MS in Obstetrics & Gynaecology from KEM Hospital, Mumbai, and pursued advanced training in Fetal Medicine at KEM Hospital, Pune, a reputed centre for specialised maternal and fetal care. She is also associated with Motherhood Hospital, Kharadi.",
        "She believes in personalised, evidence-based care and makes sure patients and their families clearly understand every aspect of their treatment. At Sigma Superspeciality Clinic, she focuses on safe pregnancy, detailed fetal assessment and early detection of pregnancy-related complications.",
      ],
      hi: [
        "डॉ. रचना आघाडते (खराटे) एक अनुभवी प्रसूति एवं स्त्री रोग विशेषज्ञ तथा फीटल मेडिसिन विशेषज्ञ हैं, जिन्हें महिलाओं के संपूर्ण स्वास्थ्य, गर्भावस्था देखभाल और भ्रूण मूल्यांकन में विशेषज्ञता प्राप्त है।",
        "उन्होंने एम.बी.बी.एस. और एम.एस. (प्रसूति एवं स्त्री रोग) केईएम हॉस्पिटल, मुंबई से पूरा किया और इसके बाद मातृ एवं भ्रूण स्वास्थ्य की विशेष देखभाल के प्रतिष्ठित केंद्र केईएम हॉस्पिटल, पुणे से फीटल मेडिसिन में उन्नत प्रशिक्षण प्राप्त किया। वे मदरहुड हॉस्पिटल, खराडी से भी जुड़ी हुई हैं।",
        "वे व्यक्तिगत और प्रमाण-आधारित उपचार में विश्वास रखती हैं और यह सुनिश्चित करती हैं कि मरीज़ और उनके परिवार उपचार के हर पहलू को स्पष्ट रूप से समझें। सिग्मा सुपरस्पेशियलिटी क्लिनिक में उनका ध्यान सुरक्षित गर्भावस्था, विस्तृत भ्रूण मूल्यांकन और गर्भावस्था से जुड़ी जटिलताओं की शीघ्र पहचान पर है।",
      ],
      mr: [
        "डॉ. रचना आघाडते (खराटे) या अनुभवी प्रसूतीतज्ज्ञ, स्त्रीरोगतज्ज्ञ आणि फीटल मेडिसिन तज्ज्ञ असून महिलांचे संपूर्ण आरोग्य, गर्भारपणाची काळजी आणि गर्भाचे मूल्यांकन यामध्ये त्यांचे प्रावीण्य आहे.",
        "त्यांनी एम.बी.बी.एस. आणि एम.एस. (प्रसूती व स्त्रीरोगशास्त्र) केईएम हॉस्पिटल, मुंबई येथून पूर्ण केले आणि माता व गर्भाच्या विशेष काळजीसाठी प्रसिद्ध असलेल्या केईएम हॉस्पिटल, पुणे येथे फीटल मेडिसिनचे प्रगत प्रशिक्षण घेतले. मदरहूड हॉस्पिटल, खराडी यांच्याशीही त्या संलग्न आहेत.",
        "त्या वैयक्तिक आणि पुराव्यावर आधारित उपचारांवर विश्वास ठेवतात आणि रुग्ण व त्यांच्या कुटुंबाला उपचारांचा प्रत्येक पैलू स्पष्टपणे समजेल याची काळजी घेतात. सिग्मा सुपरस्पेशालिटी क्लिनिकमध्ये सुरक्षित गर्भारपण, सविस्तर गर्भ मूल्यांकन आणि गर्भारपणातील गुंतागुंतींचे लवकर निदान यावर त्यांचा भर आहे.",
      ],
    },
    expertise: [
      "Antenatal & routine pregnancy care",
      "High-risk pregnancy management",
      "Fetal medicine & fetal assessment",
      "Pregnancy ultrasound and fetal surveillance",
      "Gynaecological consultations",
      "Preconception counselling",
      "Management of pregnancy-related complications",
      "Maternal and fetal well-being assessment",
    ],
    education: [
      { title: "MBBS", place: "KEM Hospital, Mumbai" },
      { title: "MS (Obstetrics & Gynaecology)", place: "KEM Hospital, Mumbai" },
      { title: "Fellowship in Fetal Medicine", place: "KEM Hospital, Pune" },
    ],
    associations: [
      { role: "Consultant Obstetrician, Gynaecologist & Fetal Medicine Specialist", place: "Sigma Superspeciality Clinic, Pune" },
      { role: "Consultant", place: "Motherhood Hospital, Kharadi" },
    ],
  },
];
// The following sections remain static/dummy as real data was not found for these specific values
export const testimonials = [
  {
    id: "t1",
    name: "Shubhangi Shinde",
    text: "I went to the hospital for my father cataract surgery & we had a great experience. Dr Sagar sir treatment is very nice with politeness. Staff also very co-operative .Highly recommended.",
    rating: 5,
    service: "Eye Care",
  },
  {
    id: "t2",
    name: "Lavanya Thool",
    text: "Very good ophthalmologist. We first visited during an emergency, and since then he has become our family trusted eye doctor. He gives adequate time to every patient, makes a prompt and accurate diagnosis, and recommends only the necessary tests and treatment. His experience, especially in retinal conditions, is truly commendable. Highly recommended.",
    rating: 5,
    service: "Eye Care",
  },
    {
    id: "t3",
    name: "Manpreet Juneja",
    text: "Had a great experience with Dr Sagar for my mother's Cataract surgery. He is very polite and gives sufficient time and attention to each patient. He made sure my mother understands and is comfortable with the procedure. He also ensured smooth process at the hospital. Highly recommended.",
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
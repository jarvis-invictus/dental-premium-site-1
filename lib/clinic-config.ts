export const clinicConfig = {
  name: "Smile Dental Clinic",
  tagline: "Advanced Dental Care Center",
  established: 2009,

  contact: {
    phone_primary: "+91 98765 43210",
    phone_whatsapp: "+91 98765 43210",
    email: "appointments@smiledental.in",
    address_full: "Ground Floor, Sai Plaza, Baner Road, Near D-Mart, Pune - 411045",
    google_maps_url: "https://maps.google.com/?q=Baner+Road+Pune",
    google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.279619177699!2d73.7431201!3d18.6514216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA1LjEiTiA3M8KwNDQnMzUuMiJF!5e0!3m2!1sen!2sin!4v1638867498750!5m2!1sen!2sin"
  },

  social: {
    whatsapp_link: "https://wa.me/919876543210",
    instagram: "https://instagram.com/smiledentalpune",
    facebook: "https://facebook.com/smiledentalpune",
    youtube: ""
  },

  theme: {
    primary_color: "#09E0A7",
    accent_color: "#0DC6FF",
    feel: "modern_premium"
  },

  hours: [
    { day: "Monday", open: true, from: "09:00", to: "20:00" },
    { day: "Tuesday", open: true, from: "09:00", to: "20:00" },
    { day: "Wednesday", open: true, from: "09:00", to: "20:00" },
    { day: "Thursday", open: true, from: "09:00", to: "20:00" },
    { day: "Friday", open: true, from: "09:00", to: "20:00" },
    { day: "Saturday", open: true, from: "09:00", to: "20:00" },
    { day: "Sunday", open: true, from: "10:00", to: "14:00" }
  ],

  doctors: [
    {
      name: "Dr. Ananya Sharma",
      qualifications: "Chief Dental Surgeon (BDS, MDS — Prosthodontics)",
      experience_years: 15,
      specializations: ["Prosthodontics", "Full-mouth rehabilitation", "Cosmetic veneers", "Implant-supported dentures"],
      languages: ["English", "Hindi", "Marathi"],
      bio: "Dr. Ananya Sharma has practiced in Pune for over 15 years. She completed her MDS in Prosthodontics from SPPU and has trained at dental institutes in Mumbai and Bangalore. Her focus areas: full-mouth rehabilitation, cosmetic veneers, and implant-supported dentures. She consults at Smile Dental six days a week and handles complex cases that other clinics refer out. Her approach: explain everything, let the patient decide, then execute precisely.",
      photo: "/images/doctor-ananya.png",
      ida_number: ""
    }
  ],

  services: [
    {
      icon: "Stethoscope",
      title: "General Dentistry",
      slug: "general-dentistry",
      image: "/images/cleaning.png",
      svgSrc: "/images/services-svg/General Dentistry.svg",
      short: "Regular check-ups and professional cleanings to maintain your oral health. Digital X-rays, fillings, and preventive care.",
      description: "General dentistry covers everything needed to keep your mouth healthy — routine check-ups, professional cleanings, fillings, and early detection of issues like cavities and gum disease. Regular visits every 6 months prevent small problems from becoming costly ones.",
      why: [
        "Digital X-rays with 80% less radiation",
        "Comprehensive exam in a single visit",
        "Painless fillings with composite resin",
        "Preventive care tailored to your needs"
      ]
    },
    {
      icon: "Smile",
      title: "Orthodontics",
      slug: "orthodontics",
      image: "/images/orthodontics.png",
      svgSrc: "/images/services-svg/Orthodontics.svg",
      short: "Straighten your teeth and align your bite — your way. Metal, ceramic, or invisible aligners.",
      description: "Orthodontics corrects crooked teeth, gaps, crowding, and bite problems using braces or clear aligners. We offer traditional metal braces, ceramic braces, and Invisalign — all designed to give you a straight, confident smile.",
      why: [
        "Free initial orthodontic consultation",
        "Invisalign-certified provider",
        "Ceramic and lingual options available",
        "Retainer included in all packages"
      ]
    },
    {
      icon: "Sparkles",
      title: "Cosmetic Dentistry",
      slug: "cosmetic-dentistry",
      image: "/images/cosmetic-dentistry.png",
      svgSrc: "/images/services-svg/Cosmetic Dentistry.svg",
      short: "Enhance your smile with treatments tailored to boost your confidence. Veneers, bonding, and smile design.",
      description: "Cosmetic dentistry focuses on improving the appearance of your smile through teeth whitening, porcelain veneers, composite bonding, gum contouring, and smile designing. We use digital smile design to preview your results before treatment begins.",
      why: [
        "Digital smile preview before treatment",
        "Ultra-thin porcelain veneers",
        "Minimally invasive techniques",
        "Natural-looking, long-lasting results"
      ]
    },
    {
      icon: "Anchor",
      title: "Dental Implants",
      slug: "dental-implants",
      image: "/images/dental-implants.png",
      svgSrc: "/images/services-svg/Dental Implants.svg",
      short: "Permanent teeth. Natural feel. Lifetime confidence. Swiss-made titanium implants.",
      description: "Dental implants are titanium posts surgically placed in the jawbone to replace missing tooth roots. A crown is attached on top, resulting in a permanent, natural-looking tooth replacement with no slipping or discomfort.",
      why: [
        "Swiss-made titanium implants",
        "Lifetime warranty on implant body",
        "Same-day crown option available",
        "Bone graft if required"
      ]
    },
    {
      icon: "Baby",
      title: "Kids Dentistry",
      slug: "kids-dentistry",
      image: "/images/pediatric.png",
      svgSrc: "/images/services-svg/Pediatric Dentistry.svg",
      short: "Gentle, fun, and completely stress-free for your child. Child-friendly environment.",
      description: "Our child-friendly dental clinic is designed to make every visit fun and stress-free. We specialise in preventive care, pit and fissure sealants, fluoride treatments, and space maintainers for growing smiles.",
      why: [
        "Child-friendly environment & TV screens",
        "Behaviour management & nitrous oxide",
        "Fluoride & sealant programmes",
        "Parents welcome in treatment room"
      ]
    },
    {
      icon: "Siren",
      title: "Emergency Dental Care",
      slug: "emergency-dental-care",
      image: "/images/dental-implants.png",
      svgSrc: "/images/services-svg/Emergency Care.svg",
      short: "Same-day appointments. Pain relief in 30 minutes. 24/7 WhatsApp triage.",
      description: "Dental emergencies — toothaches, broken teeth, knocked-out teeth, lost fillings — require immediate attention. We offer same-day emergency appointments and are available on WhatsApp for triage advice 24/7.",
      why: [
        "Same-day emergency appointments",
        "WhatsApp triage available 24/7",
        "Pain relief within 30 minutes of arrival",
        "Sunday & holiday availability"
      ]
    }
  ],

  testimonials: [
    {
      name: "Rajesh M.",
      treatment: "Dental Implant Patient",
      text: "Got both lower molars replaced with implants. Dr. Sharma explained the full procedure on day one — bone grafting, healing time, everything. No surprises. Six months later, they feel like my own teeth.",
      rating: 5,
      image: "/images/patients/rajesh.jpg"
    },
    {
      name: "Priya K.",
      treatment: "Teeth Whitening",
      text: "Years of tea and coffee stains gone in one sitting. The clinic was clean, the staff was on time, and the results were visible immediately. My husband noticed before I even told him.",
      rating: 5,
      image: "/images/patients/priya.jpg"
    },
    {
      name: "Amit S.",
      treatment: "Root Canal Treatment",
      text: "I had been avoiding this for two years because I was scared. Turned out the actual procedure took 40 minutes and I felt nothing. The worst part was the drive to the clinic.",
      rating: 5,
      image: "/images/patients/suresh.jpg"
    },
    {
      name: "Sunita R.",
      treatment: "Braces Treatment",
      text: "My daughter's teeth alignment was a concern since she was 12. We started braces here and the improvement in 10 months has been remarkable. The team is patient with kids and very thorough.",
      rating: 5,
      image: "/images/patients/meena.jpg"
    },
    {
      name: "Vikram D.",
      treatment: "Full Mouth Rehabilitation",
      text: "After years of neglect I had multiple issues. The treatment plan was clear, phased, and affordable. Three months in and I can eat without pain for the first time in years. Highly recommend.",
      rating: 5,
      image: "/images/patients/vikram.jpg"
    },
    {
      name: "Meera P.",
      treatment: "Cosmetic Dentistry",
      text: "Got veneers for my front four teeth. The result looks completely natural — nobody can tell they are veneers. Dr. Sharma spent time matching the shade perfectly. Very happy with the outcome.",
      rating: 5,
      image: "/images/patients/ananya.jpg"
    }
  ],

  features: {
    accepts_walkins: true,
    accepts_insurance: true,
    offers_emi: false,
    emergency_available: true,
    emergency_phone: "+91 98765 43210"
  },

  stats: {
    patients_treated: "5000+",
    years_experience: "15+",
    google_rating: "4.9"
  },

  domain: "dental-standard-v2.vercel.app",
  whatsapp_default_message: "Hi, I would like to book an appointment.",

  about: {
    section_title: "Meet The Dentist"
  },

  whyUs: {
    section_title: "Why Patients Choose Us",
    title_part1: "Modern Equipment,",
    title_part2: "Gentle Hands",
    description: "Equipped with digital X-rays, intraoral cameras, and laser-assisted tools. Your comfort and safety are our top priority.",
    features: [
      { icon: "Users", title: "Expert Team", desc: "MDS-qualified dentists with 15+ years of combined experience across 9 specialties." },
      { icon: "HeartPulse", title: "Advanced Equipment", desc: "Digital X-rays, intraoral scanners, and laser-assisted procedures for precise treatment." },
      { icon: "Pill", title: "Pain-Free Dentistry", desc: "Modern anesthetic techniques and sedation options. Most patients say they barely felt a thing." }
    ]
  },

  faqs: [
    { question: 'How often should I visit the dentist?', answer: 'We recommend a check-up and cleaning every 6 months. Early detection of issues saves time, money, and discomfort in the long run.' },
    { question: 'Does a root canal treatment hurt?', answer: 'With modern anesthesia, root canal treatment is no more uncomfortable than a standard filling. Most of our patients are surprised by how comfortable the procedure is.' },
    { question: 'What are your clinic hours?', answer: 'We are open Monday to Saturday, 9:00 AM to 8:00 PM. Sunday emergency care is available from 10 AM to 2 PM.' },
    { question: 'Do you offer teeth whitening?', answer: 'Yes — we offer professional in-clinic whitening with visible results in a single 45-minute session, as well as custom take-home whitening kits.' },
    { question: 'How long do dental implants last?', answer: 'With proper care, dental implants can last a lifetime. They are the most durable and natural-feeling solution for missing teeth.' }
  ]
};

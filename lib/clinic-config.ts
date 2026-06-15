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
      id: "root-canal",
      name: "Root Canal Treatment",
      description: "Gentle, precision treatment that saves natural teeth.",
      price_from: 0,
      show_price: false,
      duration: "1 hour",
      icon: "root-canal"
    }
  ],

  testimonials: [
    {
      name: "Rajesh M.",
      treatment: "Dental Implant Patient",
      text: "Got both lower molars replaced with implants. Dr. Sharma explained the full procedure on day one — bone grafting, healing time, everything. No surprises. Six months later, they feel like my own teeth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya K.",
      treatment: "Teeth Whitening",
      text: "Years of tea and coffee stains gone in one sitting. The clinic was clean, the staff was on time, and the results were visible immediately. My husband noticed before I even told him.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amit S.",
      treatment: "Root Canal Treatment",
      text: "I had been avoiding this for two years because I was scared. Turned out the actual procedure took 40 minutes and I felt nothing. The worst part was the drive to the clinic.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sunita R.",
      treatment: "Braces Treatment",
      text: "My daughter's teeth alignment was a concern since she was 12. We started braces here and the improvement in 10 months has been remarkable. The team is patient with kids and very thorough.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vikram D.",
      treatment: "Full Mouth Rehabilitation",
      text: "After years of neglect I had multiple issues. The treatment plan was clear, phased, and affordable. Three months in and I can eat without pain for the first time in years. Highly recommend.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Meera P.",
      treatment: "Cosmetic Dentistry",
      text: "Got veneers for my front four teeth. The result looks completely natural — nobody can tell they are veneers. Dr. Sharma spent time matching the shade perfectly. Very happy with the outcome.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
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
  whatsapp_default_message: "Hi, I would like to book an appointment."
};

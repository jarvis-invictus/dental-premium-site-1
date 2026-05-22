export const siteConfig = {
    siteUrl: "https://dental-standard-v2.vercel.app",
    locale: "en-IN",
    foundingYear: "2009",
    name: "Smile Dental Clinic",
    subtitle: "Advanced Dental Care Center",
    phone: "+91 98765 43210",
    phoneSecondary: "+91 98765 43211",
    email: "appointments@smiledental.in",
    address: {
        line1: "Ground Floor, Sai Plaza,",
        line2: "Baner Road, Near D-Mart,",
        line3: "Pune - 411045",
        locality: "Baner",
        city: "Pune",
        state: "Maharashtra",
        postalCode: "411045",
        country: "IN",
        geo: { latitude: 18.6514, longitude: 73.7431 },
        areaServed: ["Baner", "Balewadi", "Pashan", "Aundh", "Pimple Saudagar", "Pune"],
        googleMapsLink: "https://maps.google.com/?q=Baner+Road+Pune",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.279619177699!2d73.7431201!3d18.6514216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA1LjEiTiA3M8KwNDQnMzUuMiJF!5e0!3m2!1sen!2sin!4v1638867498750!5m2!1sen!2sin"
    },
    timing: "Mon-Sat: 9:00 AM - 8:00 PM | Sun: 10 AM - 2 PM (Emergency)",
    social: {
        whatsapp: "https://wa.me/919876543210",
        instagram: "https://instagram.com/smiledentalpune",
        facebook: "https://facebook.com/smiledentalpune",
        twitter: "https://twitter.com/smiledentalpune"
    },
    images: {
        logo: "/images/logo.png",
        hero: "/images/hero.avif",
        features: "/images/why-choose-us-dentist-hd.png"
    },
    theme: {
        colors: {
            primary: "#09E0A7",
            secondary: "#0A0A0A",
            accent: "#0DC6FF"
        }
    },
    hero: {
        tagline: "Baner, Pune",
        headingLine1: "Bring Back Your",
        headingLine2: "Natural Smile with Confidence",
        description: "Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof in Baner.",
        offer: {
            text: "New Patient Offer",
            value: "20% OFF",
            visible: false
        }
    },
    features: {
        title: "Why Patients Choose Us",
        headingLine1: "Modern Equipment,",
        headingLine2: "Gentle Hands",
        description: "Equipped with digital X-rays, intraoral cameras, and laser-assisted tools. Your comfort and safety are our top priority.",
        items: [
            {
                icon: "Users",
                title: "Expert Team",
                desc: "MDS-qualified dentists with 15+ years of combined experience across 9 specialties."
            },
            {
                icon: "HeartPulse",
                title: "Advanced Equipment",
                desc: "Digital X-rays, intraoral scanners, and laser-assisted procedures for precise treatment."
            },
            {
                icon: "Pill",
                title: "Pain-Free Dentistry",
                desc: "Modern anesthetic techniques and sedation options. Most patients say they barely felt a thing."
            }
        ]
    },
    doctor: {
        label: "Meet The Dentist",
        name: "Dr. Ananya Sharma",
        qualification: "Chief Dental Surgeon (BDS, MDS — Prosthodontics)",
        description1: "Dr. Ananya Sharma has practiced in Pune for over 15 years. She completed her MDS in Prosthodontics from SPPU and has trained at dental institutes in Mumbai and Bangalore. Her focus areas: full-mouth rehabilitation, cosmetic veneers, and implant-supported dentures.",
        description2: "She consults at Smile Dental six days a week and handles complex cases that other clinics refer out. Her approach: explain everything, let the patient decide, then execute precisely.",
        image: "/images/doctor-ananya.png",
        stats: {
            label: "Experience",
            value: "15+ Years"
        }
    },
    testimonials: {
        label: "Patient Feedback",
        headingLine1: "Honest Feedback",
        headingLine2: "From Baner",
        description: "What patients told us after their visits. Names shortened for privacy.",
        items: [
            {
                name: "Rajesh M.",
                role: "Dental Implant Patient",
                content: "Got both lower molars replaced with implants. Dr. Sharma explained the full procedure on day one — bone grafting, healing time, everything. No surprises. Six months later, they feel like my own teeth.",
                stars: 5,
                image: "/images/patients/rajesh.jpg"
            },
            {
                name: "Priya K.",
                role: "Teeth Whitening",
                content: "Years of tea and coffee stains gone in one sitting. The clinic was clean, the staff was on time, and the results were visible immediately. My husband noticed before I even told him.",
                stars: 5,
                image: "/images/patients/priya.jpg"
            },
            {
                name: "Amit S.",
                role: "Root Canal Treatment",
                content: "I had been avoiding this for two years because I was scared. Turned out the actual procedure took 40 minutes and I felt nothing. The worst part was the drive to the clinic.",
                stars: 5,
                image: "/images/patients/suresh.jpg"
            },
            {
                name: "Sunita R.",
                role: "Braces Treatment",
                content: "My daughter's teeth alignment was a concern since she was 12. We started braces here and the improvement in 10 months has been remarkable. The team is patient with kids and very thorough.",
                stars: 5,
                image: "/images/patients/ananya.jpg"
            },
            {
                name: "Vikram D.",
                role: "Full Mouth Rehabilitation",
                content: "After years of neglect I had multiple issues. The treatment plan was clear, phased, and affordable. Three months in and I can eat without pain for the first time in years. Highly recommend.",
                stars: 5,
                image: "/images/patients/vikram.jpg"
            },
            {
                name: "Meera P.",
                role: "Cosmetic Dentistry",
                content: "Got veneers for my front four teeth. The result looks completely natural — nobody can tell they are veneers. Dr. Sharma spent time matching the shade perfectly. Very happy with the outcome.",
                stars: 5,
                image: "/images/patients/meena.jpg"
            }
        ]
    },
    faqs: [
        {
            question: "How often should I visit the dentist?",
            answer: "We recommend a check-up and cleaning every 6 months. Early detection of issues saves time, money, and discomfort in the long run."
        },
        {
            question: "Does a root canal treatment hurt?",
            answer: "With modern anesthesia, root canal treatment is no more uncomfortable than a standard filling. Most of our patients are surprised by how comfortable the procedure is."
        },
        {
            question: "What are your clinic hours?",
            answer: "We are open Monday to Saturday, 9:00 AM to 8:00 PM. Sunday emergency care is available from 10 AM to 2 PM."
        },
        {
            question: "Do you offer teeth whitening?",
            answer: "Yes — we offer professional in-clinic whitening with visible results in a single 45-minute session, as well as custom take-home whitening kits."
        },
        {
            question: "How long do dental implants last?",
            answer: "With proper care, dental implants can last a lifetime. They are the most durable and natural-feeling solution for missing teeth."
        }
    ]
};

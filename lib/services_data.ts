import { Stethoscope, Smile, Sparkles, Anchor, Baby, Siren } from "lucide-react";

export const services = [
    {
        icon: Stethoscope,
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
        icon: Smile,
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
        icon: Sparkles,
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
        icon: Anchor,
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
        icon: Baby,
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
        icon: Siren,
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
];

"use client";

import { motion } from "framer-motion";
import { Users, HeartPulse, Pill, type LucideIcon } from "lucide-react";
import SplitText from "./SplitText";
import { clinicConfig } from "@/lib/clinic-config";

const iconMap: Record<string, LucideIcon> = {
    "Users": Users,
    "HeartPulse": HeartPulse,
    "Pill": Pill
};

export default function Features() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image/Design */}
                    <div className="hidden lg:block relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white h-[500px] border border-gray-100 group">
                            <img
                                src={"/images/why-choose-us-dentist-hd.png"}
                                alt="Smile Dental Clinic team"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{'Why Patients Choose Us'}</span>
                        <h2 className="text-4xl font-bold text-secondary mb-8">
                            <SplitText delay={0.2}>{'Modern Equipment,'}</SplitText> <span style={{ color: "#09E0A7" }}><SplitText delay={0.5}>{'Gentle Hands'}</SplitText></span>
                        </h2>
                        <p className="text-gray-600 mb-10">
                            {'Equipped with digital X-rays, intraoral cameras, and laser-assisted tools. Your comfort and safety are our top priority.'}
                        </p>

                        <div className="space-y-8">
                            {[{icon: 'Users', title: 'Expert Team', desc: 'MDS-qualified dentists with 15+ years of combined experience across 9 specialties.'}, {icon: 'HeartPulse', title: 'Advanced Equipment', desc: 'Digital X-rays, intraoral scanners, and laser-assisted procedures for precise treatment.'}, {icon: 'Pill', title: 'Pain-Free Dentistry', desc: 'Modern anesthetic techniques and sedation options. Most patients say they barely felt a thing.'}].map((feature, idx) => {
                                const IconComponent = iconMap[feature.icon] || Users;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-16 h-16 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-secondary bg-white shadow-sm">
                                            <IconComponent className="w-8 h-8 stroke-1" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary mb-2 font-serif">{feature.title}</h3>
                                            <p className="text-gray-500 text-sm max-w-xs">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { clinicConfig } from "@/lib/clinic-config";

export default function About() {
    return (
        <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with Animated Frame */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-[280px] h-[320px] lg:w-[340px] lg:h-[400px] mx-auto"
                        >
                            {/* Decorative Background Frame (Rotated) */}
                            <motion.div
                                animate={{ rotate: [6, 12, 6] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-primary/10 rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px] z-0"
                            />

                            {/* Solid Background Frame (Offset) */}
                            <div className="absolute inset-4 bg-primary rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px] z-10 translate-x-4 translate-y-4"></div>

                            {/* Main Image */}
                            <img
                                src={clinicConfig.doctors[0].photo}
                                alt={clinicConfig.doctors[0].name}
                                className="relative z-20 w-full h-full object-cover object-top shadow-2xl rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px]"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-6 -left-6 z-30 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 5.5c-1.7-2-4.5-2-6 0s-1.5 5.5 0 10c.5 1.5 1 3 2 4 1.5 1.5 3 1 3.5-1 .3-1.5.5-2.5.5-2.5s.2 1 .5 2.5c.5 2 2 2.5 3.5 1 1-1 1.5-2.5 2-4 1.5-4.5 1.5-8 0-10s-4.3-2-6 0z"/></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{'Experience'}</p>
                                    <p className="text-primary font-bold text-lg">{clinicConfig.stats.years_experience}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{'Meet The Dentist'}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">
                            <SplitText delay={0.2}>{clinicConfig.doctors[0].name}</SplitText> <br />
                            <span className="text-accent text-2xl md:text-3xl font-sans font-normal block mt-2" style={{ color: clinicConfig.theme.accent_color }}>{clinicConfig.doctors[0].qualifications}</span>
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            {clinicConfig.doctors[0].bio}
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {''}
                        </p>

                        <div className="flex items-center gap-8">
                            <a href="#appointment" className="px-8 py-3 text-white rounded-full font-bold shadow-lg hover:opacity-90 transition-all transform hover:scale-105" style={{ background: "linear-gradient(90deg, #09E0A7 0%, #0DC6FF 100%)" }}>
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

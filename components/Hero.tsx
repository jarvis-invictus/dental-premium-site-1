"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export default function Hero() {

    return (
        <section id="home" className="relative w-full min-h-[800px] bg-[#F8F8F8] overflow-hidden flex items-center">
            {/* Subtle top-right mint corner wash — very light, matches reference */}
            <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-teal-100/50 via-cyan-50/20 to-transparent pointer-events-none z-[-1]" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20 lg:py-0">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <span
                        className="uppercase tracking-[0.2em] text-sm font-bold mb-4 block"
                        style={{ color: clinicConfig.theme.primary_color }}
                    >
                        {'Baner, Pune'}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 font-serif text-gray-900">
                        {'Bring Back Your'}
                        <br />
                        <span style={{ color: clinicConfig.theme.primary_color }}>
                            {'Natural Smile with Confidence'}
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-md">
                        {'Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a
                            href="#appointment"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all hover:scale-105"
                            style={{ background: "linear-gradient(90deg, #09E0A7 0%, #0DC6FF 100%)" }}
                        >
                            Book Appointment
                        </a>
                    </div>

                    {/* Trusted by patients — avatar pill widget */}
                    <div className="mt-10 inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-md">
                        <div className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1621887348744-6b0444f8a058?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" alt="patient" />
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full ring-2 ring-white object-cover -ml-2" alt="patient" />
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full ring-2 ring-white object-cover -ml-2" alt="patient" />
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face" className="w-8 h-8 rounded-full ring-2 ring-white object-cover -ml-2" alt="patient" />
                        </div>
                        <p className="text-sm text-gray-500">
                            Trusted by <strong className="text-gray-800 font-semibold">500+</strong> patients
                        </p>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full flex justify-center items-center py-10"
                >
                    {/* Outer positioning container — wider to accommodate infinity loop */}
                    <div className="relative w-[380px] lg:w-[460px] aspect-square">

                        {/* Orbital rings: two ellipses at different angles, dotted + animated, behind image */}
                        <style dangerouslySetInnerHTML={{ __html: `
                            @keyframes orbitA {
                                from { stroke-dashoffset: 0; }
                                to   { stroke-dashoffset: -100; }
                            }
                            @keyframes orbitB {
                                from { stroke-dashoffset: 0; }
                                to   { stroke-dashoffset: 100; }
                            }
                            .ring-a { animation: orbitA 4s linear infinite; }
                            .ring-b { animation: orbitB 6s linear infinite; }
                        `}} />
                        <svg
                            className="absolute"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "145%",
                                height: "145%",
                                zIndex: 0,
                                pointerEvents: "none"
                            }}
                            viewBox="0 0 400 400"
                            fill="none"
                        >
                            <defs>
                            </defs>

                            {/* Ring A — green, steep diagonal top-left to bottom-right (-45°) */}
                            <ellipse
                                cx="200" cy="200" rx="190" ry="55"
                                stroke="#09E0A7"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="8 10"
                                strokeLinecap="round"
                                opacity="0.2"
                                transform="rotate(-45, 200, 200)"
                            />
                            <ellipse
                                className="ring-b"
                                cx="200" cy="200" rx="190" ry="55"
                                stroke="#09E0A7"
                                strokeWidth="2.5"
                                fill="none"
                                strokeDasharray="6 37"
                                strokeLinecap="round"
                                opacity="0.65"
                                transform="rotate(-45, 200, 200)"
                            />

                            {/* Ring B — cyan, steep diagonal top-right to bottom-left (+45°) */}
                            <ellipse
                                cx="200" cy="200" rx="190" ry="55"
                                stroke="#0DC6FF"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="8 10"
                                strokeLinecap="round"
                                opacity="0.2"
                                transform="rotate(45, 200, 200)"
                            />
                            <ellipse
                                className="ring-a"
                                cx="200" cy="200" rx="190" ry="55"
                                stroke="#0DC6FF"
                                strokeWidth="2.5"
                                fill="none"
                                strokeDasharray="6 37"
                                strokeLinecap="round"
                                opacity="0.6"
                                transform="rotate(45, 200, 200)"
                            />
                        </svg>

                        {/* Gradient ring: conic-gradient border */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                inset: "-3px",
                                background: "conic-gradient(from 180deg, #09E0A7 0deg, #0DC6FF 180deg, #09E0A7 360deg)",
                                zIndex: 1,
                                padding: "6px",
                                boxShadow: "0 0 24px 2px rgba(9,224,167,0.15), 0 0 24px 2px rgba(13,198,255,0.15)"
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-white" />
                        </div>

                        {/* Main portrait */}
                        <div className="absolute rounded-full overflow-hidden" style={{ inset: "9px", zIndex: 2 }}>
                            <img
                                src={"/images/hero.avif"}
                                alt="Patient with beautiful smile at Smile Dental Clinic"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Icon 1: teeth.webp (simple tooth) — top-left, further out */}
                        <motion.img
                            src="/images/teeth.webp"
                            alt="Happy teeth"
                            className="absolute w-24 h-24 object-contain drop-shadow-xl"
                            style={{ top: "-18%", left: "-14%", zIndex: 10 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                            transition={{
                                opacity: { delay: 0.9, duration: 0.5 },
                                scale: { delay: 0.9, duration: 0.5 },
                                y: { delay: 1.4, duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />

                        {/* Icon 2: teethmoving.webp (character tooth) — bottom-right, further out */}
                        <motion.img
                            src="/images/teethmoving.webp"
                            alt="Healthy teeth"
                            className="absolute w-24 h-24 object-contain drop-shadow-xl"
                            style={{ bottom: "-18%", right: "-14%", zIndex: 10 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
                            transition={{
                                opacity: { delay: 1.1, duration: 0.5 },
                                scale: { delay: 1.1, duration: 0.5 },
                                y: { delay: 1.6, duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

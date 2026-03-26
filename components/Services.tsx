"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services_data";
import React, { useRef } from "react";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    return (
        <motion.div
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className={`h-full ${className}`}
        >
            <motion.div
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

import SplitText from "./SplitText";

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h3 className="text-primary font-semibold uppercase tracking-wider mb-2">Treatments</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">
                        <SplitText>Complete</SplitText> <span className="text-accent"><SplitText delay={0.3}>Dental Solutions</SplitText></span>
                    </h2>
                    <p className="text-gray-600">
                        Click on any service to learn more about our procedures and treatments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <TiltCard>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="bg-white p-8 border border-gray-100 group text-left flex flex-col items-start hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer h-full relative rounded-2xl"
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    <div className="mb-6 text-secondary group-hover:text-primary transition-colors relative z-10 bg-white p-2 rounded-lg" style={{ transform: "translateZ(30px)" }}>
                                        <div className="w-16 h-16 relative">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-secondary mb-3 font-serif min-h-[56px] flex items-center group-hover:text-primary transition-colors"
                                        style={{ transform: "translateZ(25px)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="text-gray-500 mb-6 leading-relaxed line-clamp-3 text-sm flex-grow"
                                        style={{ transform: "translateZ(20px)" }}
                                    >
                                        {service.short}
                                    </p>

                                    <span
                                        className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors group-inner mt-auto"
                                        style={{ transform: "translateZ(30px)" }}
                                    >
                                        Learn more
                                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

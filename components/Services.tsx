"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { clinicConfig } from "@/lib/clinic-config";
import React from "react";

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

function ArrowRightIcon() {
    return (
        <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                        Treatments
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                        Complete Dental Solutions
                    </h2>
                    <p className="text-gray-600">
                        Click on any service to learn more about our procedures and treatments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clinicConfig.services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <TiltCard>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full"
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    {/* Icon box */}
                                    <div
                                        className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center mb-6 flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300"
                                        style={{ transform: "translateZ(30px)" }}
                                    >
                                        {service.svgSrc ? (
                                            <img
                                                src={service.svgSrc}
                                                alt={`${service.title} icon`}
                                                className="w-16 h-16 object-contain rounded-2xl"
                                            />
                                        ) : (
                                            <div className="w-16 h-16 rounded-2xl bg-primary/20" />
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-base font-bold text-secondary mb-2 leading-snug group-hover:text-primary transition-colors"
                                        style={{ transform: "translateZ(25px)" }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5"
                                        style={{ transform: "translateZ(20px)" }}
                                    >
                                        {service.short}
                                    </p>

                                    {/* Learn More link */}
                                    <div className="mt-auto" style={{ transform: "translateZ(30px)" }}>
                                        <span className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200">
                                            Learn More
                                            <ArrowRightIcon />
                                        </span>
                                    </div>
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

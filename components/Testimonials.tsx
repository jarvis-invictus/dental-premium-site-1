"use client";

import { Star } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const testimonials = clinicConfig.testimonials;
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1 },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                        Patient Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                        What Our Patients Say
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Real experiences from real patients who trust us with their smiles.
                    </p>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden max-w-6xl mx-auto" ref={emblaRef}>
                    <div className="flex gap-6">
                        {testimonials.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                            >
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow h-full">
                                    <StarRating rating={item.rating} />
                                    <p className="text-gray-600 leading-relaxed text-sm flex-1">
                                        &ldquo;{item.text}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                            {/* item.image was removed from standard config, fall back to avatar */}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-secondary">{item.name}</p>
                                            <p className="text-xs text-gray-400">{item.treatment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollTo(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                idx === selectedIndex
                                    ? "bg-primary w-8"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

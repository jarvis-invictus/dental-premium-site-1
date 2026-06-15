"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { clinicConfig } from "@/lib/clinic-config";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = clinicConfig.faqs;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-4xl font-bold text-secondary mb-4">
                        Common Questions <span className="text-primary">Answered</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none group"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-primary' : 'text-secondary'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10'}`}>
                                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

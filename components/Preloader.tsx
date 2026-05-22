"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Disable scroll when loading
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 1200);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] bg-[#F3F5F9] flex items-center justify-center"
                >
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "backOut" }}
                            className="mb-8 relative"
                        >
                            <img src={siteConfig.images.logo} alt="Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center relative z-10 px-4"
                        >
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                                className="text-3xl md:text-5xl font-bold mb-2 overflow-hidden block tracking-wide"
                                style={{ color: siteConfig.theme.colors.primary }}
                            >
                                {siteConfig.name}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-xs md:text-lg font-bold tracking-widest uppercase"
                                style={{ color: siteConfig.theme.colors.primary }}
                            >
                                {siteConfig.subtitle}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                            className="h-1 rounded-full mt-6"
                            style={{ background: "linear-gradient(90deg, #09E0A7 0%, #0DC6FF 100%)" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

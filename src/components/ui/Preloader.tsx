"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide preloader after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center p-4"
                >
                    <div className="flex flex-col items-center gap-6">
                        {/* Logos Container */}
                        <div className="flex items-center gap-4 md:gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                            >
                                <Image
                                    src="/logo-vekaizen.png"
                                    alt="Vekaizen Icon"
                                    width={64}
                                    height={64}
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain grayscale opacity-60 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] md:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            >
                                <Image
                                    src="/logo-text.png"
                                    alt="Vekaizen Text"
                                    width={180}
                                    height={40}
                                    className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] md:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                />
                            </motion.div>
                        </div>

                        {/* Text Reveal with subtle breathing animation */}
                        <motion.p
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                scale: [1, 1.05] // Subtle zoom drift
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5, // Faster reveal
                                scale: { duration: 3, ease: "linear" } // Shortened drift to match 3s
                            }}
                            className="text-zinc-500 font-medium tracking-widest text-sm md:text-base font-sans drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] md:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                        >
                            be more kaizen.
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

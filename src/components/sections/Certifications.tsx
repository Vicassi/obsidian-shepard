"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const certifications = [
    { name: "Meta Business Partner", src: "/certifications/meta.png" },
    { name: "Google Partner", src: "/certifications/google.png" },
    { name: "Kommo Partner", src: "/certifications/kommo.png" },
    { name: "Ascend Partner", src: "/certifications/ascend.png" },
];

export const Certifications = () => {
    return (
        <section className="py-20 bg-zinc-950 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <div className="text-accent font-mono text-xs mb-4">/// CERTIFICAÇÕES & PARCERIAS</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Padrão de excelência <span className="text-zinc-500">reconhecido.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center justify-items-center">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Floating animation */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5,
                                }}
                                className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-2 md:p-4 backdrop-blur-sm transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.1)]"
                            >
                                <Image
                                    src={cert.src}
                                    alt={cert.name}
                                    width={240}
                                    height={120}
                                    className="w-full h-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                            </motion.div>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-accent/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

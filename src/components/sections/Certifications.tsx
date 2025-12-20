"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

// 3D Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // High stiffness for instant response
    const mouseX = useSpring(x, { stiffness: 2000, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 2000, damping: 100 });

    // Increased rotation range for more dramatic 3D effect
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const Certifications = () => {
    const certifications = [
        {
            name: "Meta Business Partner",
            image: "/cert-meta.png",
            href: "https://www.facebook.com/business/marketing-partners",
        },
        {
            name: "Google Partner",
            image: "/cert-google.png",
            href: "https://www.google.com/partners",
        },
        {
            name: "Kommo Partner",
            image: "/cert-kommo.png",
            href: "https://www.kommo.com/partners",
        },
        {
            name: "Ascend Partner",
            image: "/cert-ascend.png",
            href: "#",
        },
    ];

    return (
        <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">

            {/* Background glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                    >
                        NOSSOS CERTIFICADOS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg"
                    >
                        Empresas que reconheceram nosso trabalho.
                    </motion.p>
                </div>

                {/* Certificates Grid */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-20 perspective-1000">
                    {certifications.map((cert, index) => (
                        <Link key={index} href={cert.href} target="_blank">
                            {/* 
                   - Removed bg-white padding to let image fill full card 
                   - Image is treated as the card itself 
                   - Tilt effect applied to the container 
                */}
                            <TiltCard className="relative w-[280px] h-[100px] rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden">
                                <div className="relative w-full h-full drop-shadow-lg">
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 280px"
                                        priority
                                        quality={100}
                                    />
                                </div>
                            </TiltCard>
                        </Link>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Agora, estamos prontos para aplicar nosso método próprio e replicável para transformar empresas B2B em operações de crescimento escalável e previsível.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

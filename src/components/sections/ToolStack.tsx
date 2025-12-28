"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export const ToolStack = () => {
    // List of tool images provided by the user
    const tools = [
        { name: "WhatsApp", src: "/tools/whatsapp.png" },
        { name: "Kommo", src: "/tools/kommo.png" },
        { name: "n8n", src: "/tools/n8n.png" },
        { name: "Make", src: "/tools/make.png" },
        { name: "Google Ads", src: "/tools/google-ads.png" },
        { name: "OpenAI", src: "/tools/openai.png" },
        { name: "Hotmart", src: "/tools/hotmart.png" },
        { name: "Meta", src: "/tools/meta.png" },
        { name: "ManyChat", src: "/tools/manychat.png" },
        { name: "WordPress", src: "/tools/wordpress.png" },
        { name: "Calendly", src: "/tools/calendly.png" },
        { name: "Trello", src: "/tools/trello.png" },
        { name: "Adobe", src: "/tools/adobe.png" },
        { name: "Elementor", src: "/tools/elementor.png" },
    ];

    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const controls = { x: 0 };
        const loop = () => {
            if (!isDragging) {
                controls.x -= 0.5; // Auto-scroll speed
                if (controls.x <= -2500) controls.x = 0;
                x.set(controls.x);
            } else {
                controls.x = x.get();
            }
            requestAnimationFrame(loop);
        };
        const animation = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animation);
    }, [isDragging, x]);

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        As melhores ferramentas do mercado <br />
                        <span className="text-accent italic">na sua operação.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Fade Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                    {/* Infinite Marquee Container */}
                    <div className="flex overflow-hidden select-none">
                        <motion.div
                            animate={{
                                x: ["0%", "-25%"], // Move exactly one set (1/4 of total)
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 70, // Slower speed to match other carousels
                                    ease: "linear",
                                },
                            }}
                            className="flex flex-none gap-10 py-8 items-center min-w-max" // Added min-w-max to ensure full width calculation
                        >
                            {[...tools, ...tools, ...tools, ...tools].map((tool, idx) => (
                                <div key={idx} className="flex-none group pointer-events-none px-2">
                                    <div className="h-16 w-36 flex items-center justify-center transition-all duration-500">
                                        <img
                                            src={tool.src}
                                            alt={tool.name}
                                            className="h-10 w-auto max-w-[140px] object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

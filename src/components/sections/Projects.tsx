"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import React, { useRef, useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "Escala Logística",
        category: "Engenharia de Vendas & CRM",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        results: "+45% Conversão",
    },
    {
        title: "Agência Digital X",
        category: "Automação de IA",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        results: "-60% Tempo Resposta",
    },
    {
        title: "SaaS Tech Solutions",
        category: "Growth B2B",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        results: "3.2x Pipeline",
    },
    {
        title: "Ecommerce Premium",
        category: "WhatsApp Automation",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
        results: "+R$ 500k/mês",
    },
];

export const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section id="projetos" className="py-24 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <div className="text-accent font-mono mb-4">/// CASES DE SUCESSO</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Projetos que <br />
                            <span className="text-zinc-500">geram valor real.</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Fade Edge for better look */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none hidden md:block" />

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-none w-[320px] md:w-[450px] snap-start"
                            >
                                <div className="group relative rounded-[32px] overflow-hidden bg-zinc-900 border border-white/5 h-[500px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="text-accent font-mono text-sm mb-2">{project.category}</div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>

                                        <div className="flex justify-between items-center">
                                            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 text-white font-medium text-sm">
                                                {project.results}
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

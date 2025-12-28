"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import React from "react";

const testimonials = [
    {
        name: "Carlos Eduardo",
        role: "CEO na LogiTech",
        content: "A Vekaizen transformou nossa operação. O que antes levava dias agora é feito em minutos com as automações de CRM.",
        rating: 5,
    },
    {
        name: "Mariana Silva",
        role: "Diretora de Sales Operations",
        content: "Implementamos os agentes de IA e nossa taxa de conversão no primeiro contato subiu 40%. Impressionante.",
        rating: 5,
    },
    {
        name: "Roberto Almeida",
        role: "Fundador da GrowUp",
        content: "A consultoria em engenharia de vendas foi o divisor de águas para conseguirmos bater as metas trimestrais.",
        rating: 5,
    },
    {
        name: "Ana Oliveira",
        role: "COO da EcommerceX",
        content: "As ferramentas sugeridas e a integração feita pelo time nos deu uma visibilidade de dados que nunca tivemos.",
        rating: 5,
    },
];

export const Testimonials = () => {
    return (
        <section id="sobre-nos" className="py-24 bg-zinc-950 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        O que nossos parceiros <br />
                        <span className="text-zinc-500">dizem sobre nós.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Fade Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none hidden md:block" />
                    <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none hidden md:block" />

                    {/* Infinite Carousel */}
                    <div className="flex overflow-hidden select-none">
                        <motion.div
                            animate={{
                                x: [0, -1500],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                            className="flex flex-none gap-8 py-8 items-center"
                        >
                            {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex-none w-[350px] md:w-[450px] p-8 rounded-[32px] bg-zinc-900 border border-white/5 relative group hover:border-accent/30 transition-all duration-500"
                                >
                                    <Quote className="absolute top-6 right-8 w-12 h-12 text-zinc-800 group-hover:text-accent/10 transition-colors" />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                        ))}
                                    </div>

                                    <p className="text-xl text-zinc-300 mb-8 leading-relaxed italic">
                                        "{item.content}"
                                    </p>

                                    <div className="mt-auto">
                                        <div className="font-bold text-white text-lg">{item.name}</div>
                                        <div className="text-sm text-zinc-500 font-mono">{item.role}</div>
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

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export const Methodology = () => {
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const controls = { x: 0 };
        const loop = () => {
            if (!isDragging) {
                // Direction: Left to Right (positive x movement)
                // Speed: Lower speed (0.3 instead of 0.5)
                controls.x += 0.3;
                if (controls.x >= 0) controls.x = -2000;
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
        <section id="metodologia" className="py-8 bg-zinc-950 border-t border-white/5 overflow-hidden">
            {/* Marquee - Optimized (No Drag, Fade Effect) */}
            <div className="relative flex overflow-hidden select-none">
                {/* Fade Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                <motion.div
                    animate={{
                        x: ["-50%", "0%"], // seamless loop from half-way point back to start
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 120, // Much slower speed to match other carousels
                            ease: "linear",
                        },
                    }}
                    className="flex flex-none items-center gap-12 md:gap-24 py-2 min-w-max"
                >
                    {/* Render two sets of items for seamless looping */}
                    {[...Array(8), ...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 md:gap-24 text-4xl md:text-6xl font-black tracking-tighter text-transparent stroke-text opacity-10 uppercase pointer-events-none">
                            <span>Execução</span>
                            <span className="text-accent text-3xl md:text-5xl">✦</span>
                            <span>Estratégia</span>
                            <div className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14">
                                <Image
                                    src="/logo-vekaizen.png"
                                    alt="Vekaizen Logo"
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-contain opacity-50 grayscale"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-accent font-mono mb-4">/// NOSSO MÉTODO</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Não somos apenas uma consultoria.<br />
                            Somos seu <span className="text-accent">laboratório de vendas.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Unimos a profundidade estratégica de uma consultoria com a velocidade e tecnologia de uma startup.
                            Nossa metodologia "Growth Engineering" aplica princípios de engenharia para construir máquinas de vendas previsíveis.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        {[
                            { step: "01", title: "Diagnóstico & Blueprint", desc: "Mapeamento completo do processo atual e desenho da arquitetura ideal." },
                            { step: "02", title: "Setup Tecnológico", desc: "Implementação de CRM, ferramentas de IA e automação de fluxos." },
                            { step: "03", title: "Playbook & Treinamento", desc: "Documentação de processos e capacitação do time comercial." },
                            { step: "04", title: "Growth & Otimização", desc: "Acompanhamento contínuo baseada em dados para escalar resultados." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-zinc-900/50 border border-white/5 p-6 rounded-lg flex gap-4 hover:border-accent/50 transition-colors"
                            >
                                <div className="text-2xl font-bold text-zinc-700 font-mono">{item.step}</div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm mt-1">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
            .stroke-text {
                -webkit-text-stroke: 1px #fff;
            }
        `}</style>
        </section>
    );
};

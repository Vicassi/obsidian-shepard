"use client";

import { motion } from "framer-motion";
import { Download, MessageSquare } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Materials = () => {
    const marqueeItems = Array(15).fill("Materiais & Consultoria • ");

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Material 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-14 rounded-[40px] bg-zinc-900 border border-white/5 flex flex-col justify-between group hover:border-accent/40 transition-all duration-500 min-h-[400px]"
                    >
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 mb-8 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                                <Download className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Materiais Gratuitos</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                                Acesse nossos playbooks, planilhas de gestão e guias de automação para começar a estruturar sua operação hoje mesmo.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg font-bold group-hover:bg-accent transition-colors">
                                Baixar Agora
                            </Button>
                        </div>
                    </motion.div>

                    {/* Material 2 - Consultancy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-14 rounded-[40px] bg-zinc-900 border border-white/5 flex flex-col justify-between group hover:border-accent/40 transition-all duration-500 min-h-[400px]"
                    >
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 mb-8 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Consultoria Especializada</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                                Precisa de um diagnóstico profundo? Nossos especialistas analisam seu funil e desenham uma estratégia personalizada de escala.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Link href="http://wa.me/5511915581529" target="_blank">
                                <Button className="bg-accent text-black hover:bg-accent/90 rounded-full px-8 py-6 text-lg font-bold w-full md:w-auto">
                                    Solicitar Agora
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Draggable/Animated Marquee with Fade and Two Layers */}
                <div className="mt-24 relative">
                    {/* Fade Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                    <div className="flex flex-col gap-4 overflow-hidden select-none py-4">
                        {/* Row 1 */}
                        <motion.div
                            animate={{
                                x: [0, -2000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                            className="flex flex-none whitespace-nowrap"
                        >
                            <h2 className="text-2xl md:text-5xl font-black text-white/5 uppercase tracking-tighter">
                                {marqueeItems.join("")}
                                {marqueeItems.join("")}
                            </h2>
                        </motion.div>

                        {/* Row 2 - Opposite Direction */}
                        <motion.div
                            animate={{
                                x: [-2000, 0],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 50,
                                    ease: "linear",
                                },
                            }}
                            className="flex flex-none whitespace-nowrap"
                        >
                            <h2 className="text-2xl md:text-5xl font-black text-white/5 uppercase tracking-tighter">
                                {marqueeItems.join("")}
                                {marqueeItems.join("")}
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

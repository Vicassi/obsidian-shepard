"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="sticky top-24">
                        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent mb-6">
                            COMECE AGORA
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-none">
                            Pronto para <br />
                            <span className="text-zinc-600">escalar?</span>
                        </h2>
                        <BlurReveal className="text-lg text-zinc-400 mb-8 max-w-md" delay={0.2}>
                            Agende uma sessão estratégica gratuita. Vamos analisar sua operação atual e mostrar onde estão os gargalos&nbsp;de&nbsp;crescimento.
                        </BlurReveal>

                        <div className="flex flex-col gap-4 text-zinc-500">
                            <p>contato@vekaizen.com</p>
                            <p>São Paulo, Brasil</p>
                            <div className="flex items-center gap-2 pt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /><path d="M8 8.5A2.5 2.5 0 0 0 10.5 11h.5a2.5 2.5 0 0 0 0-5H10.5A2.5 2.5 0 0 0 8 8.5" opacity="0" /><path d="M14.05 15.25a2.75 2.75 0 0 0 2.2-2.75V12.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 0-1 0v.5a1.5 1.5 0 0 0 1.5 1.5h.5a1.5 1.5 0 0 0 1.5-1.5z" opacity="0" /><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                <span>+55 (11) 91558-1529</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl backdrop-blur-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Nome</label>
                                    <Input id="name" placeholder="Seu nome" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus:border-accent" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Telefone</label>
                                    <Input id="phone" type="tel" placeholder="(11) 99999-9999" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus:border-accent" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                                <Input id="email" type="email" placeholder="nome@empresa.com" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus:border-accent" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="industry" className="text-sm font-medium text-zinc-400">Ramo de Atuação</label>
                                    <Input id="industry" placeholder="Ex: Saúde, Educação..." className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus:border-accent" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="revenue" className="text-sm font-medium text-zinc-400">Faturamento Mensal</label>
                                    <div className="relative">
                                        <select
                                            id="revenue"
                                            className="w-full h-9 px-3 py-1 rounded-md bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none cursor-pointer text-sm"
                                        >
                                            <option value="" disabled selected>Selecione uma opção</option>
                                            <option value="under_50k">Abaixo de R$ 50 mil mensais</option>
                                            <option value="over_50k">Acima de R$ 50 mil mensais</option>
                                            <option value="over_100k">Acima de R$ 100 mil mensais</option>
                                            <option value="over_350k">Acima de R$ 350 mil mensais</option>
                                        </select>
                                        {/* Chevron Icon for Select */}
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Como podemos te ajudar?</label>
                                <Textarea id="message" placeholder="Conte o contexto atual da sua empresa, como que nós podemos te ajudar." className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus:border-accent min-h-[120px]" />
                            </div>

                            <Button className="w-full bg-accent text-black hover:bg-accent/90 h-12 text-base font-medium rounded-full shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-all duration-300" type="submit">
                                Solicitar Diagnóstico <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

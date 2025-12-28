"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-zinc-950">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-400 mb-8 backdrop-blur-md shadow-lg shadow-black/10">
                        <Sparkles className="w-4 h-4 mr-2 text-accent" />
                        Engenharia de Vendas B2B
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight">
                        Escale sua empresa com <br className="hidden md:block" />
                        <Typewriter
                            words={["Processos", "Dados", "Método", "Inteligência", "Previsibilidade", "Vekaizen"]}
                            defaultColor="text-white/50"
                            accentColor="text-accent"
                            accentWord="Vekaizen"
                        /><motion.span layout className="inline-flex items-center"><span className="text-accent mx-3 text-2xl sm:text-4xl md:text-6xl align-middle">✦</span> IA</motion.span>
                    </h1>

                    <BlurReveal className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed" delay={0.2} duration={0.8}>
                        Transformamos times comerciais comuns em máquinas de vendas previsíveis. Sem aumentar o time. Apenas estratégia e tecnologia.
                    </BlurReveal>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="#contact">
                            <Button size="lg" className="bg-accent text-zinc-950 hover:bg-accent/90 min-w-[200px] text-base font-medium h-12 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-all duration-300">
                                Começar Agora <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                        <Link href="#clientes">
                            <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 min-w-[200px] h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300">
                                Ver Cases de Sucesso
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Dashboard Preview / Floating UI */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000"
                >
                    <div className="relative rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-2 shadow-2xl ring-1 ring-white/10">
                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                        {/* Mockup Content */}
                        <div className="rounded-lg bg-zinc-950 aspect-[16/9] overflow-hidden relative flex flex-col">
                            {/* Header Mockup */}
                            <div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-zinc-900/30">
                                <div className="flex items-center gap-3">
                                    <img src="/logo-vekaizen.png" alt="Vekaizen" className="w-6 h-6 object-contain" />
                                    <span className="text-white font-bold text-sm tracking-tight">VEKAIZEN</span>
                                    <div className="ml-4 flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-32 h-7 bg-white/5 rounded-full border border-white/5" />
                                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/20" />
                                </div>
                            </div>

                            {/* Body Mockup */}
                            <div className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-hidden">
                                {/* Side Nav Sidebar */}
                                <div className="col-span-3 space-y-6">
                                    <div className="space-y-2">
                                        <div className="h-4 w-12 bg-white/5 rounded mb-4" />
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className={`h-10 w-full rounded-lg flex items-center px-3 border border-transparent ${i === 1 ? 'bg-accent/5 border-accent/10' : 'hover:bg-white/5'}`}>
                                                <div className={`w-4 h-4 rounded ${i === 1 ? 'bg-accent' : 'bg-white/10'} mr-3`} />
                                                <div className={`h-2.5 rounded ${i === 1 ? 'bg-white w-16' : 'bg-white/10 w-20'}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-32 w-full bg-gradient-to-br from-accent/10 to-transparent rounded-2xl border border-accent/10 p-4 flex flex-col justify-between">
                                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                                            <Sparkles className="w-4 h-4 text-black" />
                                        </div>
                                        <div className="h-2 w-full bg-accent/20 rounded" />
                                        <div className="h-2 w-3/4 bg-accent/10 rounded" />
                                    </div>
                                </div>

                                {/* Main Panel */}
                                <div className="col-span-9 space-y-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="bg-white/5 rounded-2xl border border-white/5 p-5 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 blur-2xl rounded-full" />
                                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-2">Total Pipeline</div>
                                            <div className="text-2xl text-white font-bold tracking-tight">R$ 1.84M</div>
                                            <div className="mt-3 flex items-center text-[10px] text-green-500 font-bold">
                                                <span>+24.8%</span>
                                                <span className="ml-1 opacity-50 font-medium">vs last month</span>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 p-5 relative overflow-hidden">
                                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-2">Novos Contratos</div>
                                            <div className="text-2xl text-white font-bold tracking-tight">42</div>
                                            <div className="mt-3 flex items-center text-[10px] text-accent font-bold">
                                                <span>+6 new</span>
                                                <span className="ml-1 opacity-50 font-medium">this week</span>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 p-5 relative overflow-hidden">
                                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-2">Eficiência Comercial</div>
                                            <div className="text-2xl text-white font-bold tracking-tight">82%</div>
                                            <div className="mt-3 w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                                <div className="h-full bg-accent" style={{ width: '82%' }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Charts Section */}
                                    <div className="grid grid-cols-2 gap-6 h-48">
                                        <div className="bg-white/5 rounded-2xl border border-white/5 p-5 relative flex flex-col">
                                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-4">Volume de Leads / Dia</div>
                                            <div className="flex-1 flex items-end justify-between gap-1.5 px-2">
                                                {[35, 55, 45, 80, 55, 90, 75, 60, 85, 95, 70, 80].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-white/5 rounded-t-sm group relative overflow-hidden">
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            whileInView={{ height: `${h}%` }}
                                                            transition={{ delay: i * 0.05, duration: 0.5 }}
                                                            className={`absolute bottom-0 w-full ${i === 9 ? 'bg-accent' : 'bg-white/10 group-hover:bg-white/20'}`}
                                                            style={{ height: `${h}%` }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 p-5 flex flex-col">
                                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-4">Atividade do Time</div>
                                            <div className="space-y-4">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10" />
                                                            <div className="space-y-1">
                                                                <div className="h-2 w-20 bg-white/20 rounded" />
                                                                <div className="h-1.5 w-12 bg-white/5 rounded" />
                                                            </div>
                                                        </div>
                                                        <div className="h-3 w-16 bg-white/5 rounded-full" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Area */}
                                    <div className="h-full bg-white/5 rounded-2xl border border-white/5 p-5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">Status das Automações</div>
                                            <div className="flex gap-2">
                                                <div className="h-1.5 w-6 bg-accent rounded-full" />
                                                <div className="h-1.5 w-6 bg-white/5 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-4">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="h-12 bg-white/5 rounded-xl border border-white/5 flex items-center px-3 gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    <div className="h-1.5 w-12 bg-white/20 rounded" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Typewriter = ({ words, defaultColor, accentColor, accentWord }: { words: string[], defaultColor: string, accentColor: string, accentWord: string }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const currentWord = words[index];

        if (isDeleting) {
            // Deleting mode: faster removal
            if (subIndex > 0) {
                const timeout = setTimeout(() => {
                    setSubIndex((prev) => prev - 1);
                }, 30);
                return () => clearTimeout(timeout);
            } else {
                // Finished deleting, switch to next word
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % words.length);
                return;
            }
        } else {
            // Typing mode
            if (subIndex < currentWord.length) {
                const timeout = setTimeout(() => {
                    setSubIndex((prev) => prev + 1);
                }, 100); // Typing speed
                return () => clearTimeout(timeout);
            } else {
                // Finished typing, wait before deleting
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000); // Pause at end of word
                return () => clearTimeout(timeout);
            }
        }
    }, [subIndex, isDeleting, index, words]);

    const currentWord = words[index];
    const isAccent = currentWord === accentWord;
    const activeClass = isAccent ? accentColor : "text-white";

    return (
        <motion.span
            layout
            className="inline-flex items-center align-bottom"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <span className="relative inline-flex items-center">
                {/* Active (Typed) Text */}
                <span className={`${activeClass} transition-colors duration-300 ${isAccent ? "drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]" : ""}`}>
                    {currentWord.substring(0, subIndex)}
                </span>

                {/* Cursor & Ghost Text Container */}
                <span className="relative">
                    {/* Cursor */}
                    <span className="absolute left-0 top-[10%] bottom-[10%] w-[2px] md:w-[3px] bg-[#2997FF] rounded-full animate-pulse shadow-[0_0_12px_#2997FF] z-10" />

                    {/* Ghost Text with Blur Effect on Change */}
                    <motion.span
                        key={currentWord}
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="text-white/20 ml-[2px]"
                    >
                        {currentWord.substring(subIndex)}
                    </motion.span>
                </span>
            </span>
        </motion.span>
    );
};

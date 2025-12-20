"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", href: "/" },
        { name: "Serviços", href: "#solucoes" },
        { name: "Projetos", href: "#projetos" },
        { name: "Sobre nós", href: "#sobre-nos" },
    ];

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500 ${isScrolled
                ? "py-0"
                : "py-2"
                }`}
        >
            <div className={`w-full px-4 md:px-6 py-2.5 flex items-center justify-between rounded-full border transition-all duration-500 shadow-2xl ${isScrolled
                ? "bg-zinc-950/80 backdrop-blur-xl shadow-black/60 border-white/20"
                : "bg-zinc-900/40 backdrop-blur-lg border-white/10"
                }`}>

                {/* Left: Logo */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="flex items-center gap-3 md:gap-4 group">
                        <div className="relative">
                            <Image
                                src="/logo-vekaizen.png"
                                alt="Vekaizen Logo"
                                width={32}
                                height={32}
                                className="h-5 md:h-6 w-auto object-contain transition-all duration-500 group-hover:rotate-[360deg] group-hover:drop-shadow-[0_0_8px_rgba(204,255,0,0.6)] group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[1000%] group-hover:hue-rotate-[40deg]"
                            />
                        </div>
                        <Image
                            src="/logo-text.png"
                            alt="Vekaizen"
                            width={120}
                            height={24}
                            className="h-4 md:h-5 w-auto brightness-110 transition-all duration-500 group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-[1000%] group-hover:hue-rotate-[40deg]"
                        />
                    </Link>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex flex-none">
                    <nav className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: Action Button */}
                <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
                    <Link href="#contact" className="relative group scale-90 md:scale-100">
                        {/* Permanent Rotating Glow Effect */}
                        <div className="absolute -inset-[2px] rounded-full overflow-hidden opacity-100 pointer-events-none">
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#2997FF_360deg)]"
                            />
                        </div>

                        <div className="relative flex items-center bg-black rounded-full px-1 pl-1 pr-1 border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                            <div className="bg-accent w-2 h-2 rounded-full mx-2 animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.8)]"></div>
                            <span className="text-white text-xs md:text-sm font-medium pr-3 py-2">Fale conosco</span>
                            <div className="bg-white rounded-full p-1 group-hover:bg-zinc-200 transition-all duration-500">
                                <ArrowUpRight className="w-3 h-3 text-black" />
                            </div>
                        </div>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        className="lg:hidden absolute top-16 left-0 right-0 mx-2 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl z-40"
                    >
                        <div className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-semibold text-zinc-300 hover:text-accent py-2 flex items-center justify-between border-b border-white/5 group"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <ArrowUpRight className="opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all" />
                                </Link>
                            ))}
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-2">
                                <Button className="w-full bg-accent text-black hover:bg-accent/90 font-bold rounded-2xl h-12 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                                    Solicitar Orçamento
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

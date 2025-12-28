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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const navLinks = [
        { name: "Início", href: "/" },
        { name: "Serviços", href: "#solucoes" },
        { name: "Projetos", href: "#projetos" },
        { name: "Sobre nós", href: "#sobre-nos" },
    ];

    return (
        <header
            onMouseMove={handleMouseMove}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl transition-all duration-500 group group/header ${isScrolled
                ? "py-0"
                : "py-2"
                }`}
        >
            <div className={`relative w-full px-4 md:px-6 py-2.5 flex items-center justify-between rounded-full border transition-all duration-500 shadow-2xl overflow-hidden ${isScrolled
                ? "bg-zinc-950/80 backdrop-blur-xl shadow-black/60 border-white/20"
                : "bg-zinc-900/40 backdrop-blur-lg border-white/10"
                }`}>

                {/* Spotlight Effect */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover/header:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
                    }}
                />

                {/* Left: Logo */}
                <div className="flex-1 flex justify-start z-10">
                    <Link href="/" className="flex items-center gap-3 md:gap-4 group relative">
                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/logo-vekaizen.png"
                                    alt="Vekaizen Logo"
                                    width={32}
                                    height={32}
                                    className="h-5 md:h-6 w-auto object-contain transition-all duration-500"
                                />
                            </motion.div>


                        </div>

                        <motion.div
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Image
                                src="/logo-text.png"
                                alt="Vekaizen"
                                width={120}
                                height={24}
                                className="h-4 md:h-5 w-auto brightness-110 transition-all duration-500 group-hover:brightness-125"
                            />
                        </motion.div>
                    </Link>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden lg:flex flex-none z-10">
                    <nav className="flex items-center gap-1 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-2xl shadow-lg shadow-black/20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 active:scale-95"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: Action Button */}
                <div className="flex-1 flex justify-end items-center gap-2 md:gap-4 z-10">
                    <Link href="#contact" className="relative group scale-90 md:scale-100">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            {/* Blue Glow Border - Thicker and Rounded */}
                            <div className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2997FF] to-[#2997FF] opacity-60" />
                            </div>

                            {/* High-End Laser Sweep Border - Thicker & Softer */}
                            <div className="absolute -inset-[2px] rounded-full overflow-hidden">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#2997FF_280deg,transparent_360deg)] opacity-100 group-hover:opacity-100 blur-[2px]"
                                />
                            </div>

                            <div className="relative flex items-center bg-black rounded-full px-1 pl-1 pr-1 border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden">
                                <div className="bg-accent w-2 h-2 rounded-full mx-2 animate-pulse shadow-[0_0_10px_rgba(204,255,0,0.8)]"></div>

                                <span className="relative text-white text-xs md:text-sm font-medium pr-3 py-2 overflow-hidden">
                                    Fale conosco
                                    {/* Subtle Text Shimmer */}
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine-text"
                                    />
                                </span>

                                <motion.div
                                    className="bg-white rounded-full p-1 transition-all duration-500 group-hover:bg-accent group-hover:rotate-45"
                                >
                                    <ArrowUpRight className="w-3 h-3 text-black" />
                                </motion.div>
                            </div>
                        </motion.div>
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

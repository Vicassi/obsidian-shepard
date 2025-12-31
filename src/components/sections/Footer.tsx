"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-slate-300 py-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo-vekaizen.png" alt="Vekaizen Logo" width={32} height={32} className="h-8 w-auto object-contain" />
                        <Image src="/logo-text.png" alt="Vekaizen" width={120} height={24} className="h-6 w-auto" />
                    </Link>
                    <nav className="flex gap-8">
                        {[
                            { name: "Início", href: "/" },
                            { name: "Serviços", href: "#solucoes" },
                            { name: "Projetos", href: "#projetos" },
                            { name: "Sobre nós", href: "#sobre-nos" },
                        ].map((link) => (
                            <Link key={link.name} href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-600">
                        © 2026 Vekaizen. Todos os direitos reservados.
                    </p>

                    {/* Developer Credits */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">Desenvolvido por</span>
                        <div className="flex items-center gap-3 opacity-30 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                            <Image src="/logo-vekaizen.png" alt="Vekaizen Logo" width={20} height={20} className="w-5 h-5 object-contain grayscale" />
                            <Image src="/logo-text.png" alt="Vekaizen" width={80} height={16} className="h-4 w-auto grayscale" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://www.linkedin.com/company/vekaizen/" target="_blank" className="text-zinc-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="https://www.instagram.com/vekaizen/" target="_blank" className="text-zinc-600 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="https://www.tiktok.com/@vekaizen" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
                            {/* TikTok Logo */}
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </Link>
                        <Link href="https://x.com/vekaizen" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
                            {/* X Logo */}
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                        </Link>
                        <Link href="mailto:contato@vekaizen.com" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </Link>
                        <Link href="http://wa.me/5511915581529" target="_blank" className="text-green-500 hover:text-green-400 transition-colors">
                            {/* WhatsApp Logo */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

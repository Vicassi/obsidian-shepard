"use client";

import { CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, LineChart, Database, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/BlurReveal";
import Link from "next/link";

export const Solutions = () => {
    const services = [
        {
            title: "Engenharia de Vendas",
            desc: "Estruturação de processos, playbooks e KPIs. Transformamos arte em ciência para bater metas previsíveis.",
            icon: LineChart,
            colSpan: "md:col-span-2",
            tags: ["Estruturação de Processos", "Playbook de Vendas", "Treinamento para times comerciais", "Funil de Vendas", "Gestão de Pipeline"],
            ctaText: "quero vender mais",
        },
        {
            title: "CRM Setup",
            desc: "Centralize dados, organize seu funil e nunca mais perca uma oportunidade de venda por falta de acompanhamento.",
            icon: Database,
            colSpan: "md:col-span-1",
            tags: ["Implementação Kommo", "Dashboards Customizados", "Automação de Etapas", "Integração Total", "Gestão de Leads"],
            ctaText: "quero as métricas da minha empresa",
        },
        {
            title: "IA & Automação",
            desc: "Automatize tarefas repetitivas e deixe seu time focar no que realmente importa: fechar negócios.",
            icon: Bot,
            colSpan: "md:col-span-1",
            tags: ["WhatsApp & Instagram", "Atendimento 24h", "Fluxos de Qualificação", "Chatbot Inteligente", "Respostas Rápidas", "Broadcast"],
            ctaText: "quero automatizar",
        },
        {
            title: "Growth B2B",
            desc: "Estratégias de aquisição outbound e inbound integradas para escalar seu volume de oportunidades.",
            icon: TrendingUp,
            colSpan: "md:col-span-2",
            tags: ["Meta Ads & Google Ads", "Tráfego Pago Especializado", "Criação de Roteiros", "Linhas Editoriais", "Sites & SEO", "Design & Branding", "Apresentações Comerciais", "Inbound Marketing", "Construção de Produto"],
            ctaText: "quero crescer minha empresa",
        },
    ];

    return (
        <section id="solucoes" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <div className="text-accent font-mono mb-4">/// SERVIÇOS</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Soluções para cada etapa<br />
                            do seu <span className="text-accent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">crescimento.</span>
                        </h2>
                    </div>
                    <div className="text-zinc-400 max-w-sm text-sm hidden md:block">
                        <BlurReveal delay={0.2} duration={0.6}>
                            Nossas soluções são modulares e adaptáveis ao estágio do seu negócio. Do Seed ao Series B.
                        </BlurReveal>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className={item.colSpan}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="group relative h-full bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all p-8 flex flex-col justify-between min-h-[450px] shadow-2xl">

                                    {/* Subtle Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-50" />

                                    {/* Icon Background Blur */}
                                    <div className="absolute -top-10 -right-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
                                        <Icon className="w-56 h-56 text-accent" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                                            <Icon className="w-7 h-7 text-white group-hover:text-black" />
                                        </div>
                                        <CardTitle className="text-3xl text-white mb-4 group-hover:text-accent transition-colors duration-300 font-bold">{item.title}</CardTitle>
                                        <p className="text-zinc-400 leading-relaxed max-w-md mb-8 group-hover:text-white transition-colors duration-300 font-medium">
                                            {item.desc}
                                        </p>

                                        {/* Tags Section */}
                                        <div className="flex flex-wrap gap-x-5 gap-y-4 mb-10">
                                            {item.tags.map((tag, tIdx) => (
                                                <div key={tIdx} className="flex items-center gap-2.5 text-sm md:text-base font-semibold text-zinc-500 group-hover:text-accent transition-colors duration-300">
                                                    <CheckCircle2 className="w-4 h-4 text-zinc-700 group-hover:text-accent transition-colors" />
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer with Fixed Expandable CTA Button */}
                                    <div className="mt-auto relative z-20">
                                        <Link
                                            href="http://wa.me/5511915581529"
                                            target="_blank"
                                            className="inline-flex items-center"
                                        >
                                            <motion.div
                                                className="bg-zinc-950 border border-white/10 rounded-full h-14 flex items-center overflow-hidden hover:border-accent hover:shadow-[0_8px_30px_rgb(204,255,0,0.3)] transition-all group/cta shadow-md"
                                                initial="initial"
                                                whileHover="hover"
                                            >
                                                <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-accent text-zinc-950 rounded-full shadow-lg">
                                                    <ArrowRight className="w-6 h-6 group-hover/cta:translate-x-1 transition-transform" />
                                                </div>
                                                <motion.span
                                                    variants={{
                                                        initial: { opacity: 0, width: 0, marginLeft: 0 },
                                                        hover: { opacity: 1, width: "auto", marginLeft: 16, marginRight: 24 }
                                                    }}
                                                    className="whitespace-nowrap overflow-hidden text-[13px] font-bold text-white uppercase tracking-tight"
                                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                >
                                                    {item.ctaText}
                                                </motion.span>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

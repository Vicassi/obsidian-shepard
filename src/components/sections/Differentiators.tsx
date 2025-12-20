"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, delay }: { value: string; delay: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);

    const target = parseFloat(value.replace(/[^0-9.]/g, ""));
    const hasDecimals = value.includes(".");

    const rounded = useTransform(count, (latest) => {
        return latest.toLocaleString('pt-BR', {
            maximumFractionDigits: hasDecimals ? 1 : 0,
            minimumFractionDigits: hasDecimals ? 1 : 0
        });
    });

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                animate(count, target, { duration: 2, ease: "easeOut" });
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, count, target, delay]);

    const prefix = value.match(/^[^0-9.]+/)?.[0] || "";
    const suffix = value.match(/[^0-9.]+$/)?.[0] || "";

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

export const Differentiators = () => {
    const stats = [
        { value: "+R$ 1.7M", label: "Gerados em Pipeline" },
        { value: "3.5x", label: "ROI Médio" },
        { value: "-40%", label: "Ciclo de Vendas" },
        { value: "100%", label: "Processos Automatizados" },
    ];

    return (
        <section id="clientes" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Resultados que falam{" "}
                        <motion.span
                            animate={{ color: ["#71717a", "#ccff00", "#71717a"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            mais alto.
                        </motion.span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Não vendemos horas, vendemos performance. Nossos clientes escalam porque construímos infraestrutura, não apenas "dicas".
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                <Counter value={stat.value} delay={i * 0.3} />
                            </div>
                            <div className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

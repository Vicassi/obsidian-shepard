"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
    return (
        <section id="sobre-nos" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Mais que uma assessoria, seus parceiros de crescimento
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            A Vekaizen nasceu da necessidade de alinhar estratégia e execução.
                            Muitas empresas falham não por falta de produto, mas por processos ineficientes.
                            Nossa missão é descomplicar o comercial e acelerar resultados.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Foco em Resultados",
                            description: "Não entregamos apenas relatórios, entregamos crescimento mensurável e aumento de receita."
                        },
                        {
                            title: "Metodologia Prática",
                            description: "Fugimos da teoria excessiva. Implementamos processos que funcionam no dia a dia da sua equipe."
                        },
                        {
                            title: "Visão 360º",
                            description: "Integramos vendas, marketing e tecnologia para uma operação sem silos e altamente eficiente."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl"
                        >
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

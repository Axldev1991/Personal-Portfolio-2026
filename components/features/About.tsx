"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Terminal, History } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
    const { t } = useLanguage();

    const stats = [
        { label: t("nav.works"), value: "48+", icon: Briefcase },
        { label: t("about.subtitle"), value: "4 Years", icon: History },
        { label: "Lines of Code", value: "2M+", icon: Terminal },
    ];

    const experience = [
        {
            role: "Senior Front-end Developer",
            company: "TechNova Solutions",
            period: "2024 - Present",
            description_en: "Leading the UI transformation and modular architecture implementation.",
            description_es: "Liderando la transformación de la interfaz de usuario y la implementación de arquitectura modular.",
        },
        {
            role: "UI/UX Developer",
            company: "Digital Craft Studio",
            period: "2022 - 2024",
            description_en: "Specialized in high-performance animations and design systems.",
            description_es: "Especializado en animaciones de alto rendimiento y sistemas de diseño.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-6xl px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-accent font-mono text-sm tracking-widest uppercase">{t("about.subtitle")}</span>
                            <h2 className="text-5xl font-black">{t("about.title")}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-6 rounded-xl flex flex-col gap-2 group hover:border-accent transition-colors"
                                >
                                    <stat.icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                                    <p className="text-muted text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
                                    <p className="text-3xl font-black">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-6">
                            {experience.map((exp, i) => (
                                <div key={exp.company} className="relative pl-10 border-l border-border group">
                                    <div className="absolute left-[-5px] top-0 size-2.5 bg-primary rounded-full group-hover:bg-accent transition-colors" />
                                    <div className="glass-card p-6 rounded-xl space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-xl font-bold">{exp.role}</h4>
                                                <p className="text-primary font-mono text-xs">{exp.company}</p>
                                            </div>
                                            <span className="text-muted text-[10px] uppercase font-black">{exp.period}</span>
                                        </div>
                                        <p className="text-sm text-muted leading-relaxed">
                                            {t("language") === "es" ? exp.description_es : exp.description_en}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold italic text-primary">{t("about.bio")}</h3>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xs font-black uppercase tracking-[0.4em] text-muted">{t("about.stack")}</p>
                            <div className="flex flex-wrap gap-3">
                                {["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js", "Node.js", "PostgreSQL"].map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-secondary/50 border border-border text-xs rounded-full hover:border-accent transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 border-2 border-dashed border-primary/20 rounded-2xl bg-primary/5 flex items-center gap-6">
                            <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <Code className="text-primary" />
                            </div>
                            <p className="text-sm italic text-muted">
                                "Code is like humor. When you have to explain it, it’s bad."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

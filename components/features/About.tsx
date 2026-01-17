"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Terminal, History, GraduationCap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
    const { t, language } = useLanguage();

    const stats = [
        { label: t("nav.works"), value: "30+", icon: Briefcase },
        { label: t("about.subtitle"), value: "5+ Years", icon: History },
        { label: "WordPress Kits", value: "100+", icon: Terminal },
    ];

    const experience = [
        {
            role: "Full-stack Developer (Freelance)",
            company: "Custom Digital Solutions",
            period: "2019 - Present",
            description_en: "Developed 30+ custom websites using WordPress, Elementor, and modern React/Next.js architectures.",
            description_es: "Desarrollé más de 30 sitios web personalizados utilizando WordPress, Elementor y arquitecturas modernas de React/Next.js.",
        },
    ];

    const education = [
        {
            degree: "Tecnicatura Universitaria en Programación",
            institution: "UTN FRA",
            period: "2025 - Present",
            description_en: "Currently studying advanced programming logic, data structures, and software engineering.",
            description_es: "Cursando lógica de programación avanzada, estructuras de datos e ingeniería de software.",
        }
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

                        {/* Experience */}
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
                                            {language === "es" ? exp.description_es : exp.description_en}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold uppercase tracking-widest flex items-center gap-3">
                                <GraduationCap size={24} className="text-accent" />
                                Education_
                            </h3>
                            {education.map((edu, i) => (
                                <div key={edu.institution} className="glass-card p-6 rounded-xl border-l-4 border-accent">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold">{edu.degree}</h4>
                                        <span className="text-muted text-[10px] font-black uppercase">{edu.period}</span>
                                    </div>
                                    <p className="text-primary font-mono text-xs mb-2">{edu.institution}</p>
                                    <p className="text-xs text-muted">
                                        {language === "es" ? edu.description_es : edu.description_en}
                                    </p>
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
                                {["HTML5", "CSS3", "JavaScript", "WordPress", "Elementor", "PHP", "Figma", "Next.js", "React", "TailwindCSS"].map(skill => (
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

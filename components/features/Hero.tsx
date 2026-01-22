"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 py-20 md:py-0 overflow-hidden">
            {/* Background Gradient Blurs */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-20 items-center">
                <div className="space-y-6 md:space-y-12">
                    <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-white/40 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em]"
                            >
                                Axel Castellano // Portfolio
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-accent text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full"
                            >
                                {t("hero.role")}
                            </motion.div>
                        </div>

                        {/* Mobile Avatar (Compact and integrated) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="lg:hidden relative size-20"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                            <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden shadow-xl">
                                <img
                                    src="/avatar_pixel_v9.png"
                                    alt="Axel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black leading-[0.85] uppercase flex flex-col gap-1 md:gap-2 overflow-hidden"
                    >
                        <span>{t("hero.title1")}</span>
                        <span className="text-primary italic">{t("hero.title2")}</span>
                        <span className="text-outline">{t("hero.title3")}</span>
                    </motion.h1>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-end md:mt-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-md text-base md:text-xl text-muted leading-relaxed font-light border-l-2 border-accent pl-5 md:pl-8 text-balance"
                        >
                            {t("hero.bio")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
                        >
                            <a
                                href="#contact"
                                className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 h-14 md:h-20 px-8 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 group cursor-pointer"
                            >
                                <span className="font-black uppercase tracking-widest text-xs md:text-base">{t("hero.cta")}</span>
                                <ArrowRight className="group-hover:translate-x-2 transition-transform size-4 md:size-6" />
                            </a>

                            <a
                                href="/CV_Axel_Castellano.html"
                                target="_blank"
                                className="border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 h-14 md:h-20 px-8 rounded-xl md:rounded-2xl flex items-center justify-center gap-4 group"
                            >
                                <span className="font-black uppercase tracking-widest text-xs md:text-base">{t("hero.cv")}</span>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop Avatar (Clean, no frame) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    className="hidden lg:block relative"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                    <div className="relative aspect-square rounded-full overflow-hidden border border-white/5 group shadow-[0_0_50px_rgba(51,13,242,0.1)]">
                        <img
                            src="/avatar_pixel_v9.png"
                            alt="Axel Castellano"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-4 border border-white/5 rounded-full pointer-events-none" />
                </motion.div>
            </div>

            {/* Marquee Stack */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden py-10 border-y border-white/5 opacity-20">
                <div className="flex whitespace-nowrap animate-marquee gap-10 text-4xl md:text-6xl font-black uppercase">
                    <span>Next.js_</span>
                    <span className="text-primary">WordPress_</span>
                    <span>TypeScript_</span>
                    <span className="text-accent">Elementor_</span>
                    <span>Tailwind_</span>
                    <span className="text-primary">React_</span>
                    <span>Custom Kits_</span>
                </div>
            </div>
        </section>
    );
}

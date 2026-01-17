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

            <div className="relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-accent text-black text-[10px] font-black uppercase tracking-[0.3em] rounded mb-6 md:mb-8"
                >
                    {t("hero.role")}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[14vw] md:text-[8vw] lg:text-[10vw] font-black leading-[0.8] uppercase flex flex-col gap-1"
                >
                    <span>{t("hero.title1")}</span>
                    <span className="text-primary italic">{t("hero.title2")}</span>
                    <span className="text-outline">{t("hero.title3")}</span>
                </motion.h1>

                <div className="flex flex-col md:flex-row gap-12 items-start md:items-end mt-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-md text-lg md:text-xl text-muted leading-relaxed font-light border-l border-accent pl-8"
                    >
                        {t("hero.bio")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col md:flex-row gap-4"
                    >
                        <button className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 h-16 md:h-20 px-8 md:px-12 rounded-xl flex items-center gap-4 group">
                            <span className="font-black uppercase tracking-widest text-sm md:text-base">{t("hero.cta")}</span>
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        <a
                            href="/cv.pdf"
                            download
                            className="border border-white/10 hover:border-accent hover:text-accent transition-all duration-300 h-16 md:h-20 px-8 md:px-12 rounded-xl flex items-center gap-4 group"
                        >
                            <span className="font-black uppercase tracking-widest text-sm md:text-base">Download CV_</span>
                        </a>
                    </motion.div>
                </div>
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
